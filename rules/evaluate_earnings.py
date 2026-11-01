import json, os, sys

here = os.path.dirname(os.path.abspath(__file__))
P = json.load(open(os.path.join(here, "earnings_rules.json"), encoding="utf-8"))["params"]


def chargeable(gross, payroll_deductions, disabled, child_care=0, disability_expenses=0, support_or_garnish=0):
    """Chargeable monthly earnings for one earner, per Directive 5.3 (employment only)."""
    net = gross - payroll_deductions + support_or_garnish
    q = P["disabled"] if disabled else P["non_disabled_adult"]
    flat = q["flat_exemption"]
    rest = max(net - flat, 0)
    rest -= round(rest * q["partial_exemption_rate"])  # directive's Example 2 rounds $325.75 to $326
    rest -= child_care
    rest -= min(disability_expenses, P["disability_work_expense_max_per_month"]) if disabled else 0
    return max(round(rest, 2), 0)


CASES = [
    ("Directive Example 1 (recipient)", chargeable(2100, 167, True, disability_expenses=400, support_or_garnish=75), 356),
    ("Directive Example 2 (recipient)", chargeable(2500, 197, True, disability_expenses=650), 327),
    ("Directive Example 2 (spouse)", chargeable(1250, 78, False, child_care=150, support_or_garnish=100), 386),
    ("Earns under flat exemption", chargeable(900, 100, True), 0),
    ("Non-disabled earns $150 net", chargeable(150, 0, False), 0),
    ("Expenses cannot push charge below zero", chargeable(1100, 0, True, disability_expenses=1000), 0),
]
bad = 0
for name, got, exp in CASES:
    ok = abs(got - exp) < 0.01
    bad += not ok
    print(("PASS  " if ok else "FAIL  ") + f"{name} -> {got} (expected {exp})")
sys.exit(bad)
