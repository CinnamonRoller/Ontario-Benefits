"""Run the test households through our screener and two third-party tools.

Usage (needs playwright and Microsoft Edge):  python comparison/run_comparison.py
Writes comparison/results.json. Third-party sites can change; re-run to refresh.
No personal data is entered: households are made up.
"""
import json
import os
import re
import subprocess
import sys

from playwright.sync_api import sync_playwright

here = os.path.dirname(os.path.abspath(__file__))
root = os.path.dirname(here)
H = json.load(open(os.path.join(here, "households.json"), encoding="utf-8"))


def ours(h):
    js = """
const S = require(process.argv[1]);
const h = JSON.parse(process.argv[2]);
const p = { status: "citizen", sponsored: false, hasDisability: h.disability, spouse: h.spouse, spouseDisabled: false, children: h.kids, adultDependants: h.adults };
const a = { cash: h.cash };
const i = { yourGross: h.gross, yourPayroll: h.payroll, shelterCost: h.rent, onAssistance3Months: h.onAssist3 };
const r = S.screen(p, a, i);
const pick = (x) => x && ({ verdict: x.verdict, estimate: x.estimate, unclear: x.unclear.length });
console.log(JSON.stringify({ ow: pick(r.ow), odsp: pick(r.odsp) }));
"""
    out = subprocess.run(["node", "-e", js, os.path.join(root, "docs", "screener.js"), json.dumps(h)],
                         capture_output=True, text=True, check=True).stdout
    return json.loads(out)


def calcplus(pg, h, kind):
    pre = "ow" if kind == "ow" else "od"
    url = ("https://calculatorplus.ca/tools/ontario-works-eligibility-calculator/" if kind == "ow"
           else "https://calculatorplus.ca/tools/odsp-calculator/")
    pg.goto(url, wait_until="networkidle")
    pg.select_option("#%s-house" % pre, "couple" if h["spouse"] else "single")
    pg.fill("#%s-kids" % pre, str(h["kids"]))
    pg.fill("#%s-adults" % pre, str(h["adults"]))
    pg.fill("#%s-rent" % pre, str(h["rent"]))
    pg.fill("#%s-income" % pre, str(h["net"]))
    pg.wait_for_timeout(600)
    t = pg.inner_text("body")
    m = re.search(r"ESTIMATED MONTHLY[^\n]*\n\s*\$([\d,\.]+)", t, re.I)
    return float(m.group(1).replace(",", "")) if m else None


def navigator(pg, h):
    pg.goto("https://www.ontariossn.ca/eligibility", wait_until="networkidle")
    pg.fill("#fullName", "Test Person")
    pg.fill("#age", "40")
    pg.fill("#city", "Toronto")
    pg.fill("#postalCode", "M5V 2T6")
    pg.fill("#dependents", str(h["kids"] + h["adults"]))

    def pick(trigger, option):
        pg.get_by_role("combobox").filter(has_text=trigger).click()
        pg.get_by_role("option", name=option, exact=True).click()

    pick("Select your province", "Ontario")
    pick("Select your marital status", "Married" if h["spouse"] else "Single")
    pg.fill("#monthlyIncomeGross", str(h["gross"]))
    pg.fill("#monthlyIncomeNet", str(h["net"]))
    pick("Select your housing situation", "Renting")
    if h["disability"]:
        emp = "Unable to work due to disability"
    elif h["net"]:
        emp = "Part-time"
    else:
        emp = "Unemployed"
    pick("Select your employment status", emp)
    pick("Select your immigration status", "Canadian Citizen")
    if h["disability"]:
        pg.get_by_text("Physical disability", exact=True).click()
    pg.get_by_role("button", name="Find My Support Programs").click()
    pg.wait_for_timeout(2500)
    t = pg.inner_text("body")
    i = t.find("Your Results")
    if i < 0:
        i = max(t.find("Eligib"), 0)
    return t[:0] + t[i:i + 1800]


results = []
with sync_playwright() as p:
    b = p.chromium.launch(channel="msedge", headless=True)
    pg = b.new_page()
    for h in H:
        row = {"id": h["id"], "desc": h["desc"], "ours": ours(h)}
        for key, fn in (("calcplus_ow", lambda: calcplus(pg, h, "ow")),
                        ("calcplus_odsp", lambda: calcplus(pg, h, "odsp") if h["disability"] else None),
                        ("navigator", lambda: navigator(pg, h))):
            try:
                row[key] = fn()
            except Exception as e:  # keep going; record the failure
                row[key] = "ERROR: " + str(e)[:200]
        results.append(row)
        print(h["id"], json.dumps(row["ours"]), row["calcplus_ow"], row["calcplus_odsp"], "|", str(row["navigator"])[:90].replace("\n", " "))
    b.close()
json.dump(results, open(os.path.join(here, "results.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
