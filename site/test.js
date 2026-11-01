// Run: node site/test.js
const S = require("./screener.js");
let bad = 0;
function check(name, got, exp) {
  const ok = JSON.stringify(got) === JSON.stringify(exp);
  if (!ok) bad++;
  console.log((ok ? "PASS  " : "FAIL  ") + name + " -> " + JSON.stringify(got) + (ok ? "" : " (expected " + JSON.stringify(exp) + ")"));
}
const P = (o) => Object.assign({ status: "citizen", spouse: false, spouseDisabled: false, children: 0, adultDependants: 0, hasDisability: true }, o);
const I = (o) => Object.assign({ shelterCost: 0, otherMonthly: 0 }, o);

// same cases as the Python tests
check("ODSP basic needs single", S.odspBasicNeeds(P({})), 825);
check("ODSP basic needs couple", S.odspBasicNeeds(P({ spouse: true })), 1189);
check("ODSP double disabled couple", S.odspBasicNeeds(P({ spouse: true, spouseDisabled: true })), 1644);
check("ODSP single parent 1 child", S.odspBasicNeeds(P({ children: 1 })), 968);
check("ODSP 1 adult dependant + 2 children", S.odspBasicNeeds(P({ adultDependants: 1, children: 2 })), 1280);
check("ODSP 3 adult dependants", S.odspBasicNeeds(P({ adultDependants: 3 })), 1774);
check("OW basic needs single", S.owBasicNeeds(P({})), 343);
check("OW basic needs single parent 2 children", S.owBasicNeeds(P({ children: 2 })), 360);
check("OW basic needs 4 adult dependants", S.owBasicNeeds(P({ adultDependants: 4 })), 1131);
check("ODSP earnings example 1", S.chargeableEarnings({ gross: 2100, payroll: 167 - 75, disabilityExpenses: 400 }, S.ODSP.earnings.disabled, { disabled: true }), 356);
check("ODSP earnings example 2 spouse", S.chargeableEarnings({ gross: 1250, payroll: 78 - 100, childCare: 150 }, S.ODSP.earnings.other, {}), 386);
check("vehicle needed $17k $1.2k loan -> $300", S.secondVehicleCountable(17000, 1200, true), 300);
check("vehicle not needed $9k", S.secondVehicleCountable(9000, 0, false), 9000);

// end to end
let r = S.screen(P({}), { cash: 39999 }, I({ shelterCost: 900 }));
check("ODSP single rent 900 estimate 1436", r.odsp.estimate, 1436);
check("ODSP verdict unclear because medical decision pending is not counted as unclear alone", r.odsp.verdict, "likely");
r = S.screen(P({}), { cash: 40001 }, I({}));
check("ODSP assets over limit", r.odsp.verdict, "no");
check("OW assets over limit at $10,001", S.screen(P({ hasDisability: false }), { cash: 10001 }, I({})).ow.verdict, "no");
r = S.screen(P({ status: "visitor", hasDisability: false }), {}, I({}));
check("visitor not eligible", r.ow.verdict, "no");
r = S.screen(P({ status: "other_temporary", hasDisability: false }), { cash: 100 }, I({ shelterCost: 300 }));
check("other temporary resident is unclear", r.ow.verdict, "unclear");
r = S.screen(P({ hasDisability: false }), { cash: 500 }, I({ shelterCost: 600 }));
check("OW single estimate 733", r.ow.estimate, 733);
check("no disability -> no ODSP result", r.odsp, null);
r = S.screen(P({ hasDisability: false }), { cash: 500 }, I({ shelterCost: 600, yourGross: 1275, yourPayroll: 125, onAssistance3Months: true }));
check("OW earnings after 3 months: 343+390-475", r.ow.estimate, 258);
r = S.screen(P({ hasDisability: false }), { cash: 500 }, I({ shelterCost: 600, yourGross: 1275, yourPayroll: 125, onAssistance3Months: false }));
check("OW earnings in first months: 733-1150 -> 0", r.ow.estimate, 0);
r = S.screen(P({ hasDisability: false }), { secondProperty: true, cash: 0 }, I({ shelterCost: 300 }));
check("second property is flagged unclear", r.ow.unclear.some((x) => /second property/.test(x)), true);
process.exit(bad);
