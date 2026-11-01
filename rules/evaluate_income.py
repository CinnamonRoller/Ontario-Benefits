import json, os, sys

here = os.path.dirname(os.path.abspath(__file__))
R = {r["id"]: r for r in json.load(open(os.path.join(here, "income_rules.json"), encoding="utf-8"))["rules"]}

CHARGED = set(R["inc_charged_types"]["types"])
EXEMPT = {"child_benefits", "child_support", "cwb", "canada_disability_benefit", "coho", "rdsp_withdrawal",
          "charity_donation", "jury", "ow_employment_assistance", "autism_program", "pain_suffering_award",
          "wsib_nel", "foster_care", "energy_grant", "student_aid_education"}


def monthly_charge(item):
    """item = (kind, monthly_amount, extras). Returns (charged_amount, note).
    Employment is returned as unclear because the exemptions are in Directive 5.3, not yet extracted."""
    kind, amt = item[0], item[1]
    if kind == "employment":
        return None, "UNCLEAR: earnings exemptions are in Directive 5.3 (not extracted)"
    if kind in CHARGED:
        return amt, "charged in full"
    if kind in EXEMPT:
        return 0, "exempt"
    if kind == "roomer":
        return max(amt * R["inc_roomer"]["charge_fraction"], R["inc_roomer"]["minimum_charge"]), "roomer rule"
    if kind == "boarder":
        return max(amt * R["inc_boarder"]["charge_fraction"], R["inc_boarder"]["minimum_charge"]), "boarder rule"
    if kind == "rent_self_contained":
        return amt * R["inc_rent_self_contained"]["charge_fraction"], "60% charged"
    if kind == "severance":
        return amt, "charged in full, no earnings exemption"
    if kind == "gift":
        return None, "gift: exempt up to $10,000 per 12 months, handled in gifts()"
    return None, "UNCLEAR: type not covered, ask a caseworker"


def gifts(total_12_months, disability_related=0, housing_related=0):
    """Gifts/voluntary payments over a 12 month period for one person. Returns countable income."""
    rest = max(total_12_months - disability_related - housing_related, 0)
    return max(rest - R["exempt_gifts_10k"]["cap"], 0)


def screen(items):
    total, unclear = 0, []
    for it in items:
        c, note = monthly_charge(it)
        if c is None:
            unclear.append((it[0], note))
        else:
            total += c
    return total, unclear


CASES = [
    ("OAS and GIS charged in full", [("oas_gis", 900)], 900, 0),
    ("Child benefits exempt", [("child_benefits", 700), ("cwb", 100)], 0, 0),
    ("Roomer paying $300: 60% = 180", [("roomer", 300)], 180, 0),
    ("Roomer paying $100: minimum $100 charge beats 60", [("roomer", 100)], 100, 0),
    ("Boarder paying $200: 40% = 80, minimum $100 applies", [("boarder", 200)], 100, 0),
    ("Boarder paying $500: 40% = 200", [("boarder", 500)], 200, 0),
    ("Severance charged in full", [("severance", 5000)], 5000, 0),
    ("Employment is unclear until 5.3 extracted", [("employment", 1000)], 0, 1),
    ("Unknown type is unclear", [("lottery", 50)], 0, 1),
    ("Canada Disability Benefit exempt", [("canada_disability_benefit", 200)], 0, 0),
]

bad = 0
for name, items, exp_total, exp_unclear in CASES:
    total, unclear = screen(items)
    ok = total == exp_total and len(unclear) == exp_unclear
    bad += not ok
    print(("PASS  " if ok else "FAIL  ") + f"{name}  ->  charged {total}, unclear {len(unclear)}")

for name, args, exp in [("gifts $9,000", (9000,), 0), ("gifts $12,000", (12000,), 2000),
                        ("gifts $25,000, $20,000 disability-related", (25000, 20000), 0),
                        ("gifts $25,000, $5,000 housing", (25000, 0, 5000), 10000)]:
    got = gifts(*args)
    ok = got == exp
    bad += not ok
    print(("PASS  " if ok else "FAIL  ") + f"{name}  ->  countable {got}")
sys.exit(bad)
