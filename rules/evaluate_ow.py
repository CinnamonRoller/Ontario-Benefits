"""Ontario Works draft calculator: asset limit, vehicle asset amount, chargeable earnings, basic needs."""
import json, os, sys

here = os.path.dirname(os.path.abspath(__file__))
D = json.load(open(os.path.join(here, "ow_rules.json"), encoding="utf-8"))
A, BN, E = D["asset_limits"], D["basic_needs"], D["earnings"]


def asset_limit(spouse, dependants):
    """dependants = number of dependants other than a spouse."""
    if spouse:
        if dependants == 0:
            return A["couple"]
        return A["couple_one_dependant"] + A["per_additional_dependant"] * (dependants - 1)
    if dependants == 0:
        return A["single"]
    return A["one_dependant_no_spouse"] + A["per_additional_dependant"] * (dependants - 1)


def vehicle_asset(value, loan=0, is_first_vehicle=True, needed_for_work=False):
    """Countable amount for one vehicle (Directive 4.5)."""
    if is_first_vehicle:
        return 0
    if needed_for_work and value <= 15000:
        return 0
    net = value - loan - 500 if value > 15000 else value
    return max(net - 15000, 0) if needed_for_work else max(net, 0)


def chargeable_earnings(gross, payroll_deductions, child_care=0, support_or_garnish=0, exemption_applies=True):
    net = gross - payroll_deductions + support_or_garnish
    if exemption_applies:
        rest = max(net - E["flat_exemption"], 0)
        exemption = E["flat_exemption"] + rest * E["partial_exemption_rate"]
        exemption = min(exemption, net)
    else:
        exemption = 0
    return max(net - (exemption + child_care), 0)


def basic_needs(adults18=0, children=0, spouse=False, age65_members=0):
    col = 1 if spouse else 0
    if adults18 == 0 and children == 0:
        amt = BN["table"]["0"][col]
    elif adults18 == 0:
        amt = BN["children_only_one_dependant"][col]
    elif str(adults18) in BN["table"]:
        amt = BN["table"][str(adults18)][col]
    else:
        amt = BN["table"]["3"][col] + (adults18 - 3) * BN["per_additional_adult_dependant"]
    return amt + age65_members * BN["advanced_age_allowance_per_member_65_plus"]


CASES = [
    ("asset limit single", asset_limit(False, 0), 10000),
    ("asset limit couple", asset_limit(True, 0), 15000),
    ("asset limit couple + 1 dependant", asset_limit(True, 1), 15500),
    ("asset limit single parent, 3 children", asset_limit(False, 3), 11500),
    ("first vehicle exempt at any value", vehicle_asset(40000, is_first_vehicle=True), 0),
    ("directive example 1: $18k, $1.5k loan -> $1,000", vehicle_asset(18000, 1500, False, True), 1000),
    ("second vehicle $9k needed for work exempt", vehicle_asset(9000, 0, False, True), 0),
    ("second vehicle $9k not needed counts in full", vehicle_asset(9000, 0, False, False), 9000),
    ("Mary's example: chargeable earnings $0", chargeable_earnings(1275, 125, child_care=600), 0),
    ("$1,150 net, no child care: 1150 - 675", chargeable_earnings(1275, 125), 475),
    ("within first 3 months: no exemption", chargeable_earnings(1275, 125, exemption_applies=False), 1150),
    ("net under $200 fully exempt", chargeable_earnings(150, 0), 0),
    ("basic needs single", basic_needs(), 343),
    ("basic needs couple", basic_needs(spouse=True), 494),
    ("basic needs single parent, 2 children", basic_needs(0, 2), 360),
    ("basic needs single, 1 adult dependant", basic_needs(1, 0), 623),
    ("basic needs single, 4 adult dependants", basic_needs(4, 0), 1131),
    ("basic needs single aged 65+", basic_needs(age65_members=1), 387),
]
if __name__ == "__main__":
    bad = 0
    for name, got, exp in CASES:
        ok = abs(got - exp) < 0.01
        bad += not ok
        print(("PASS  " if ok else "FAIL  ") + f"{name} -> {got} (expected {exp})")
    sys.exit(bad)
