"""Rough monthly ODSP estimate: basic needs + shelter - chargeable income. NOT a decision. Draft rules only."""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
here = os.path.dirname(os.path.abspath(__file__))
S = json.load(open(os.path.join(here, "shelter.json"), encoding="utf-8"))["max_monthly_by_benefit_unit_size"]

import importlib.util
def _load(name):
    spec = importlib.util.spec_from_file_location(name, os.path.join(here, name + ".py"))
    m = importlib.util.module_from_spec(spec)
    sys.stdout, old = open(os.devnull, "w"), sys.stdout
    try:
        spec.loader.exec_module(m)
    except SystemExit:
        pass
    finally:
        sys.stdout = old
    return m
BN = _load("evaluate_basic_needs")
ER = _load("evaluate_earnings")


def shelter_max(size):
    return S["6_or_more"] if size >= 6 else S[str(size)]


def estimate(adults18=0, children=0, spouse=False, both_disabled=False, shelter_cost=0, other_income=0, earners=()):
    """earners: iterable of dicts for ER.chargeable(). Returns (monthly_amount, breakdown)."""
    size = 1 + (1 if spouse else 0) + adults18 + children
    bn = BN.basic_needs(adults18, children, spouse, both_disabled)
    sh = min(shelter_cost, shelter_max(size))
    earned = sum(ER.chargeable(**e) for e in earners)
    budget = bn + sh
    if spouse and both_disabled and children == 0 and adults18 == 0:
        budget = min(bn + sh + 90, 2416)  # double-disabled rate; +$90 shelter amount (Directive 6.1)
    pay = max(budget - other_income - earned, 0)
    return pay, dict(size=size, basic_needs=bn, shelter=sh, other_income=other_income, chargeable_earnings=earned)


if __name__ == "__main__":
    CASES = [
        ("single, rent $900, no income (directive: 825 + 611 = 1436)", estimate(shelter_cost=900)[0], 1436),
        ("single, rent $400", estimate(shelter_cost=400)[0], 1225),
        ("single, $900 OAS-type income, rent $600", estimate(shelter_cost=600, other_income=900)[0], 525),
        ("single, earns $2000 gross, $200 payroll deductions, rent $700",
         estimate(shelter_cost=700, earners=[dict(gross=2000, payroll_deductions=200, disabled=True)])[0], 1436 - 600),
        ("couple both disabled, example 1: rent 400 (1644+400+90=2134)", estimate(spouse=True, both_disabled=True, shelter_cost=400)[0], 2134),
        ("couple both disabled, example 2: rent 700 capped at 2416", estimate(spouse=True, both_disabled=True, shelter_cost=700)[0], 2416),
        ("income exceeds budget gives 0", estimate(shelter_cost=600, other_income=5000)[0], 0),
    ]
    bad = 0
    for name, got, exp in CASES:
        ok = abs(got - exp) < 0.5
        bad += not ok
        print(("PASS  " if ok else "FAIL  ") + f"{name} -> {got} (expected {exp})")
    sys.exit(bad)
