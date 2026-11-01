import json, sys, os

here = os.path.dirname(os.path.abspath(__file__))
R = {r["id"]: r for r in json.load(open(os.path.join(here, "rules.json"), encoding="utf-8"))["rules"]}


def asset_limit(couple, dependants):
    lim = R["asset_limit_single"]["limit"]
    return (lim["couple"] if couple else lim["single"]) + lim["per_dependant"] * dependants


def countable_assets(a):
    """Returns (countable_total, notes). Principal residence, first vehicle, RDSP,
    prepaid funeral and locked-in RRSPs are exempt, so they are simply not counted."""
    notes = []
    total = a.get("cash_and_investments", 0) + a.get("other_property", 0) + a.get("rrsp_accessible", 0)
    if a.get("second_vehicle_value", 0) > 0:
        # Directive 4.5: if needed for a dependant's work, only the part over $15,000 counts,
        # after deducting loans and a $500 depreciation allowance. Otherwise the net value counts.
        # (Directive 4.1 words this as all-or-nothing; see flags in assets_rules_2.json.)
        v = a["second_vehicle_value"] - a.get("second_vehicle_loan", 0)
        if a.get("second_vehicle_needed_for_dependant_work"):
            if a["second_vehicle_value"] <= 15000:
                notes.append("second vehicle exempt")
            else:
                total += max(v - 500 - 15000, 0)
                notes.append("second vehicle over $15,000: only the excess counts (Directive 4.5)")
        else:
            total += max(v - 500, 0) if a["second_vehicle_value"] > 15000 else v
    cap = R["exempt_business_assets"]["cap"]
    if a.get("business_assets", 0) > cap:
        total += a["business_assets"] - cap
        notes.append("business assets over $20,000 counted (Director may approve more)")
    cap = R["exempt_life_insurance_trust_cap"]["cap"]
    held = a.get("trust", 0) + a.get("life_insurance_csv", 0)
    if held > cap:
        total += held - cap
        notes.append("trust + insurance over $100,000 cap")
    if a.get("second_property_value", 0):
        notes.append("UNCLEAR: second property (Director discretion; exempt 6 months if being sold)")
    return total, notes


def status(s):
    if s in {"citizen", "permanent_resident", "pr_applicant", "refugee_claimant", "convention_refugee"}:
        return "likely_eligible"
    if s in {"tourist", "visitor"}:
        return "ineligible"
    return "unclear"  # deportee, other temporary resident, anything unrecognised


def screen(p):
    limit = asset_limit(p["couple"], p["dependants"])
    total, notes = countable_assets(p["assets"])
    st = status(p["status"])
    if st == "ineligible":
        return "ineligible (status)", limit, total, notes
    if total > limit:
        return "ineligible (assets)", limit, total, notes
    if st == "unclear" or any(n.startswith("UNCLEAR") for n in notes):
        return "unclear: ask a caseworker", limit, total, notes
    return "passes financial/status screen (disability adjudication is separate)", limit, total, notes


def person(status="citizen", couple=False, dependants=0, **assets):
    return dict(couple=couple, dependants=dependants, status=status, assets=assets)


CASES = [
    ("single, $39,999 cash", person(cash_and_investments=39999), "passes"),
    ("single, $40,001 cash", person(cash_and_investments=40001), "ineligible (assets)"),
    ("couple + 2 children, $51,000 cash (limit exactly 51,000)", person("permanent_resident", True, 2, cash_and_investments=51000), "passes"),
    ("couple + 2 children, $51,001 cash", person("permanent_resident", True, 2, cash_and_investments=51001), "ineligible (assets)"),
    ("accessible RRSP $45k counts", person(rrsp_accessible=45000), "ineligible (assets)"),
    ("second vehicle $20k, not needed for dependant's work", person(cash_and_investments=30000, second_vehicle_value=20000), "ineligible (assets)"),
    ("second vehicle $12k, needed for dependant's work", person(cash_and_investments=30000, second_vehicle_value=12000, second_vehicle_needed_for_dependant_work=True), "passes"),
    ("trust + insurance $130k (over $100k cap by $30k)", person(trust=70000, life_insurance_csv=60000), "passes"),
    ("needed 2nd vehicle $17k, $1.2k loan: $300 counts (directive 4.5 example); $39,800 + 300 is over limit", person(cash_and_investments=39800, second_vehicle_value=17000, second_vehicle_loan=1200, second_vehicle_needed_for_dependant_work=True), "ineligible (assets)"),
    ("needed 2nd vehicle $17k, $1.2k loan, $39,600 cash: $39,900 total", person(cash_and_investments=39600, second_vehicle_value=17000, second_vehicle_loan=1200, second_vehicle_needed_for_dependant_work=True), "passes"),
    ("tourist", person("tourist"), "ineligible (status)"),
    ("deportee with stayed order", person("deportee"), "unclear"),
    ("second property", person(second_property_value=80000), "unclear"),
]

bad = 0
for name, p, exp in CASES:
    out, lim, tot, notes = screen(p)
    ok = out.startswith(exp)
    bad += not ok
    print(("PASS  " if ok else "FAIL  ") + name + f"  ->  {out}  [limit {lim}, countable {tot}]")
sys.exit(bad)
