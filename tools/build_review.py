"""Build docs/review-data.js from rules/*.json for the review page (docs/review.html).

Run:  python tools/build_review.py
Every rule quote, source link and flag shown on the review page comes from rules/*.json.
The "numbers" list below is hand-maintained: key dollar amounts a reviewer should tick off against the live page.
"""
import glob
import json
import os

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ODSP = "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/"
OW = "https://www.ontario.ca/document/ontario-works-policy-directives/"

ORDER = [
    ("rules.json", "ODSP: eligibility, status and assets (2.5, 4.1)"),
    ("assets_rules_2.json", "ODSP: transfers, vehicles, trusts, life insurance (4.4, 4.5, 4.7, 4.8)"),
    ("income_rules.json", "ODSP: income (5.1)"),
    ("earnings_rules.json", "ODSP: earnings exemptions (5.3)"),
    ("shelter.json", "ODSP: shelter (6.2)"),
    ("odsp_addons_rules.json", "ODSP: pregnancy, special diet, heating, utilities, self-employment"),
    ("ow_rules.json", "Ontario Works: assets, vehicles, earnings, basic needs, shelter"),
    ("ow_rules_2.json", "Ontario Works: residency, sponsored immigrants, exempt assets, income"),
]

# (label, value, where to check)
NUMBERS = [
    ("ODSP asset limits: single / couple / each dependant", "$40,000 / $50,000 / +$500", ODSP + "41-definition-and"),
    ("ODSP basic needs: single recipient", "$825 a month", ODSP + "61-basic-needs"),
    ("ODSP basic needs: couple / couple both with disabilities", "$1,189 / $1,644", ODSP + "61-basic-needs"),
    ("ODSP basic needs: 1 adult dependant (alone / with spouse / both disabled)", "$1,280 / $1,422 / $1,877", ODSP + "61-basic-needs"),
    ("ODSP basic needs: 2 adult dependants (alone / with spouse / both disabled)", "$1,514 / $1,681 / $2,136", ODSP + "61-basic-needs"),
    ("ODSP extra per adult dependant beyond the table; per child", "$260; $0", ODSP + "61-basic-needs"),
    ("ODSP sole-support parent supplement", "$143 a month", ODSP + "61-basic-needs"),
    ("ODSP couple (both disabled) cap", "$2,416 a month", ODSP + "61-basic-needs"),
    ("ODSP shelter maximums by household size 1 / 2 / 3 / 4 / 5 / 6+", "$611 / $959 / $1,038 / $1,126 / $1,215 / $1,259", ODSP + "62-shelter-calculation"),
    ("ODSP pregnancy / breast-feeding allowance", "$40 ($50 lactose-intolerant)", ODSP + "65-pregnancybreast"),
    ("ODSP special diet maximum", "$250 a month per person", ODSP + "64-special-diet"),
    ("ODSP business assets limit; cash within it", "$20,000; $5,000", ODSP + "54-self-employment"),
    ("OW asset limits: single / couple", "$10,000 / $15,000", OW + "42-asset-limits"),
    ("OW asset limits: one dependant (no spouse) / couple + one dependant / each additional", "$10,500 / $15,500 / +$500", OW + "42-asset-limits"),
    ("OW basic needs: single / couple", "$343 / $494", OW + "62-basic-needs"),
    ("OW basic needs: single parent with children", "$360", OW + "62-basic-needs"),
    ("OW basic needs: recipient with 1 / 2 / 3 adult dependants (alone)", "$623 / $781 / $956", OW + "62-basic-needs"),
    ("OW basic needs: recipient with spouse and 1 / 2 / 3 adult dependants", "$652 / $826 / $1,001", OW + "62-basic-needs"),
    ("OW extra per adult dependant beyond 3; age 65+ allowance", "$175; $44", OW + "62-basic-needs"),
    ("OW shelter maximums by household size 1 / 2 / 3 / 4 / 5 / 6+", "$390 / $642 / $697 / $756 / $815 / $844", OW + "63-shelter"),
    ("OW earnings exemption", "first $200 + 50% of the rest, after 3 months on assistance", OW + "53-earnings-exemptions"),
]


def source_for(rule, d):
    srcs = d.get("sources")
    if srcs and rule.get("source") in srcs:
        s = srcs[rule["source"]]
        return rule["source"], s.get("title", ""), s.get("url", "")
    s = d.get("source")
    if isinstance(s, dict):
        return s.get("id", ""), s.get("title", ""), s.get("url", "")
    return rule.get("source", ""), "", ""


out = {"sections": [], "numbers": [{"label": a, "value": b, "url": c} for a, b, c in NUMBERS]}
for fname, title in ORDER:
    d = json.load(open(os.path.join(root, "rules", fname), encoding="utf-8"))
    rules = []
    for r in d.get("rules", []):
        did, dtitle, url = source_for(r, d)
        rules.append({
            "id": r["id"], "directive": did, "directive_title": dtitle, "url": url,
            "kind": r.get("kind", ""), "quote": r.get("quote", ""), "note": r.get("note", ""),
        })
    flags = d.get("flags_for_human_review", [])
    out["sections"].append({"file": fname, "title": title, "rules": rules, "flags": flags})

dst = os.path.join(root, "docs", "review-data.js")
with open(dst, "w", encoding="utf-8") as f:
    f.write("window.REVIEW_DATA = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")
print("wrote", dst, sum(len(s["rules"]) for s in out["sections"]), "rules,",
      sum(len(s["flags"]) for s in out["sections"]), "flags,", len(NUMBERS), "numbers")
