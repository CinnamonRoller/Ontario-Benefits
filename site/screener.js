// Ontario Benefits screener logic. DRAFT: rules drafted by Claude from Ontario policy directives, not yet reviewed
// by a human. Every constant names its source directive. Ports rules/*.json and rules/evaluate*.py.
(function (root) {
  "use strict";

  // ---- ODSP (ontario.ca/document/ontario-disability-support-program-policy-directives-income-support) ----
  const ODSP = {
    assetLimit: { single: 40000, couple: 50000, perDependant: 500 },            // 4.1
    basicNeeds: {                                                               // 6.1, by number of dependants 18+
      alone: [825, 1280, 1514], spouse: [1189, 1422, 1681], bothDisabled: [1644, 1877, 2136], perExtraAdult: 260,
      soleSupportSupplement: 143, doubleDisabledCap: 2416, doubleDisabledShelterExtra: 90
    },
    shelterMax: { 1: 611, 2: 959, 3: 1038, 4: 1126, 5: 1215, 6: 1259 },        // 6.2
    earnings: { disabled: { flat: 1000, rate: 0.25 }, other: { flat: 200, rate: 0.50 }, maxDisabilityExpenses: 1000 } // 5.3
  };

  // ---- Ontario Works (ontario.ca/document/ontario-works-policy-directives) ----
  const OW = {
    assetLimit: { single: 10000, couple: 15000, oneDependant: 10500, coupleOneDependant: 15500, perAdditional: 500 }, // 4.2
    basicNeeds: { adults: [[343, 494], [623, 652], [781, 826], [956, 1001]], childrenOnly: [360, 494], perExtraAdult: 175, age65: 44 }, // 6.2
    shelterMax: { 1: 390, 2: 642, 3: 697, 4: 756, 5: 815, 6: 844 },           // 6.3
    earnings: { flat: 200, rate: 0.50 }                                         // 5.3
  };

  const round = (x) => Math.round(x * 100) / 100;

  function benefitUnit(p) {
    // p.spouse (bool), p.children (0-17), p.adultDependants (18+)
    return 1 + (p.spouse ? 1 : 0) + p.children + p.adultDependants;
  }

  function statusCheck(s) {
    if (["citizen", "permanent_resident", "protected_person", "refugee_claimant", "pr_applicant"].includes(s)) return "ok";
    if (s === "visitor") return "no";
    return "unclear";
  }

  // Directive 4.5 (ODSP). Returns the countable amount for a second vehicle.
  function secondVehicleCountable(v, loan, neededForWork) {
    if (!v) return 0;
    const net = v - (loan || 0);
    if (neededForWork) return v <= 15000 ? 0 : Math.max(net - 500 - 15000, 0);
    return Math.max(v > 15000 ? net - 500 : net, 0);
  }

  function countableAssets(a) {
    const notes = [];
    let total = (a.cash || 0) + (a.otherProperty || 0) + (a.accessibleRrsp || 0);
    total += secondVehicleCountable(a.secondVehicle, a.secondVehicleLoan, a.secondVehicleNeeded);
    if (a.secondVehicle && a.secondVehicleNeeded && a.secondVehicle <= 15000) notes.push("Your second vehicle is exempt because it is needed for a dependant's work and is worth $15,000 or less.");
    if (a.secondProperty) notes.push("UNCLEAR: a second property is decided case by case.");
    if ((a.trust || 0) + (a.insuranceCsv || 0) > 100000) total += (a.trust || 0) + (a.insuranceCsv || 0) - 100000;
    if (a.trust) notes.push("UNCLEAR: trusts depend on their exact terms. A caseworker or legal clinic needs to look at it.");
    if (a.business > 20000) { total += a.business - 20000; }
    return { total: total, notes: notes };
  }

  // ---- earnings ----
  function chargeableEarnings(e, rule, opts) {
    // e: { gross, payroll, childCare, disabilityExpenses }
    const net = (e.gross || 0) - (e.payroll || 0);
    let rest = Math.max(net - rule.flat, 0);
    rest -= Math.round(rest * rule.rate);
    rest -= e.childCare || 0;
    if (opts && opts.disabled) rest -= Math.min(e.disabilityExpenses || 0, ODSP.earnings.maxDisabilityExpenses);
    return Math.max(round(rest), 0);
  }

  // ---- ODSP ----
  function odspBasicNeeds(p) {
    const t = p.spouse ? (p.spouseDisabled ? ODSP.basicNeeds.bothDisabled : ODSP.basicNeeds.spouse) : ODSP.basicNeeds.alone;
    const a = p.adultDependants;
    let amt = a < t.length ? t[a] : t[2] + (a - 2) * ODSP.basicNeeds.perExtraAdult;
    if (!p.spouse && p.children > 0 && a === 0) amt += ODSP.basicNeeds.soleSupportSupplement;
    return amt;
  }

  function odsp(p, assets, income) {
    const out = { name: "ODSP (Ontario Disability Support Program)", reasons: [], unclear: [], verdict: null, estimate: null, details: [] };
    const size = benefitUnit(p);
    const st = statusCheck(p.status);
    if (st === "no") { out.verdict = "no"; out.reasons.push("Visitors and tourists are not eligible for ODSP unless they have claimed refugee protection or applied for permanent residence (Directive 2.5)."); return out; }
    if (st === "unclear") out.unclear.push("Your immigration status needs a caseworker or legal clinic to confirm (Directive 2.5 is unclear for some groups).");
    if (p.sponsored) out.unclear.push("Sponsored immigrants have extra rules (Directive 2.5, 6.1, 6.2). Ask a caseworker or legal clinic.");

    const limit = (p.spouse ? ODSP.assetLimit.couple : ODSP.assetLimit.single) + ODSP.assetLimit.perDependant * (p.children + p.adultDependants);
    const ca = countableAssets(assets);
    out.details.push("Your countable assets: about $" + ca.total.toLocaleString("en-CA") + ". The ODSP limit for your household: $" + limit.toLocaleString("en-CA") + ".");
    ca.notes.forEach(function (n) { if (n.indexOf("UNCLEAR") === 0) out.unclear.push(n.replace("UNCLEAR: ", "")); else out.details.push(n); });
    if (ca.total > limit) { out.verdict = "no"; out.reasons.push("Your assets look over the ODSP limit."); return out; }

    // income
    let charged = (income.otherMonthly || 0);
    if (income.unsureOther) out.unclear.push("You have income you are not sure about. Some income is exempt and some is charged, so ask a caseworker.");
    const disabledEarner = { gross: income.yourGross, payroll: income.yourPayroll, childCare: income.childCare, disabilityExpenses: income.disabilityExpenses };
    const spouseDisabled = p.spouse && p.spouseDisabled;
    charged += chargeableEarnings(disabledEarner, ODSP.earnings.disabled, { disabled: true });
    if (p.spouse) {
      charged += chargeableEarnings({ gross: income.spouseGross, payroll: income.spousePayroll }, spouseDisabled ? ODSP.earnings.disabled : ODSP.earnings.other, { disabled: spouseDisabled });
    }
    const bn = odspBasicNeeds(p);
    const shelter = Math.min(income.shelterCost || 0, ODSP.shelterMax[Math.min(size, 6)]);
    let budget = bn + shelter;
    if (p.spouse && p.spouseDisabled && p.children === 0 && p.adultDependants === 0) {
      budget = Math.min(bn + shelter + ODSP.basicNeeds.doubleDisabledShelterExtra, ODSP.basicNeeds.doubleDisabledCap);
    } else if (p.spouse && p.spouseDisabled) {
      out.unclear.push("The monthly amount for a couple who both have disabilities and also have dependants is not calculated yet.");
    }
    const pay = Math.max(budget - charged, 0);
    out.estimate = pay;
    out.details.push("Basic needs about $" + bn.toLocaleString("en-CA") + " plus shelter about $" + shelter.toLocaleString("en-CA") + ", minus income counted against you about $" + Math.round(charged).toLocaleString("en-CA") + ".");
    out.unclear.push("ODSP also requires a separate medical decision that you have a disability. This tool cannot assess that.");
    if (pay <= 0) { out.verdict = "no"; out.reasons.push("Your income looks high enough that you may not get a monthly payment, but you may still qualify for ODSP health benefits. Ask a caseworker."); }
    else out.verdict = out.unclear.length > 1 ? "unclear" : "likely";
    if (out.unclear.length > 1 && out.verdict === "likely") out.verdict = "unclear";
    return out;
  }

  // ---- Ontario Works ----
  function owAssetLimit(p) {
    const deps = p.children + p.adultDependants;
    if (p.spouse) return deps === 0 ? OW.assetLimit.couple : OW.assetLimit.coupleOneDependant + OW.assetLimit.perAdditional * (deps - 1);
    return deps === 0 ? OW.assetLimit.single : OW.assetLimit.oneDependant + OW.assetLimit.perAdditional * (deps - 1);
  }

  function owBasicNeeds(p, age65Members) {
    const col = p.spouse ? 1 : 0, a = p.adultDependants;
    let amt;
    if (a === 0 && p.children === 0) amt = OW.basicNeeds.adults[0][col];
    else if (a === 0) amt = OW.basicNeeds.childrenOnly[col];
    else if (a < OW.basicNeeds.adults.length) amt = OW.basicNeeds.adults[a][col];
    else amt = OW.basicNeeds.adults[3][col] + (a - 3) * OW.basicNeeds.perExtraAdult;
    return amt + (age65Members || 0) * OW.basicNeeds.age65;
  }

  function ontarioWorks(p, assets, income) {
    const out = { name: "Ontario Works (OW)", reasons: [], unclear: [], verdict: null, estimate: null, details: [] };
    const size = benefitUnit(p);
    const st = statusCheck(p.status);
    if (st === "no") { out.verdict = "no"; out.reasons.push("Visitors and tourists are generally not eligible unless they have claimed refugee protection or applied for permanent residence."); return out; }
    if (st === "unclear") out.unclear.push("Your immigration status needs a caseworker or legal clinic to confirm.");
    if (p.sponsored) out.unclear.push("Sponsored immigrants have extra rules for Ontario Works (Directive 3.11). Ask a caseworker or legal clinic.");

    const limit = owAssetLimit(p);
    const ca = countableAssets(assets);
    // OW vehicle rule is the same shape as ODSP's (Directive 4.5); other exemptions assumed the same (Directive 4.1 not yet checked).
    out.details.push("Your countable assets: about $" + ca.total.toLocaleString("en-CA") + ". The Ontario Works limit for your household: $" + limit.toLocaleString("en-CA") + ".");
    ca.notes.forEach(function (n) { if (n.indexOf("UNCLEAR") === 0) out.unclear.push(n.replace("UNCLEAR: ", "")); else out.details.push(n); });
    out.unclear.push("The list of assets Ontario Works does not count has not been fully checked yet. Ask a caseworker.");
    if (ca.total > limit) { out.verdict = "no"; out.reasons.push("Your assets look over the Ontario Works limit ($" + limit.toLocaleString("en-CA") + ")."); return out; }

    let charged = income.otherMonthly || 0;
    if (income.unsureOther) out.unclear.push("You have income you are not sure about. Ask a caseworker how it is treated.");
    const applyExemption = !!income.onAssistance3Months;
    function owEarn(e) {
      const net = (e.gross || 0) - (e.payroll || 0);
      if (!applyExemption) return Math.max(net - (e.childCare || 0), 0);
      const rest = Math.max(net - OW.earnings.flat, 0);
      const exemption = Math.min(OW.earnings.flat + rest * OW.earnings.rate, net);
      return Math.max(net - exemption - (e.childCare || 0), 0);
    }
    charged += owEarn({ gross: income.yourGross, payroll: income.yourPayroll, childCare: income.childCare });
    if (p.spouse) charged += owEarn({ gross: income.spouseGross, payroll: income.spousePayroll });
    if (!applyExemption && (income.yourGross || income.spouseGross)) out.details.push("The Ontario Works earnings exemption only starts after you have received assistance for 3 months, so your first months of earnings count almost fully.");
    const bn = owBasicNeeds(p, income.age65Members);
    const shelter = Math.min(income.shelterCost || 0, OW.shelterMax[Math.min(size, 6)]);
    const pay = Math.max(bn + shelter - charged, 0);
    out.estimate = pay;
    out.details.push("Basic needs about $" + bn.toLocaleString("en-CA") + " plus shelter about $" + shelter.toLocaleString("en-CA") + ", minus income counted against you about $" + Math.round(charged).toLocaleString("en-CA") + ".");
    out.unclear.push("Ontario Works also has participation requirements (like job search activities) and other eligibility rules this tool does not check.");
    if (pay <= 0) { out.verdict = "no"; out.reasons.push("Your income looks too high for a monthly payment, but you may still qualify for some benefits. Ask a caseworker."); }
    else out.verdict = "unclear"; // the unchecked asset exemptions mean we never claim a firm yes
    if (out.verdict === "unclear" && out.unclear.length <= 2 && st === "ok") out.verdict = "likely";
    return out;
  }

  function screen(p, assets, income) {
    return { odsp: p.hasDisability ? odsp(p, assets, income) : null, ow: ontarioWorks(p, assets, income) };
  }

  const api = { screen: screen, odsp: odsp, ontarioWorks: ontarioWorks, odspBasicNeeds: odspBasicNeeds, owBasicNeeds: owBasicNeeds, chargeableEarnings: chargeableEarnings, ODSP: ODSP, OW: OW, secondVehicleCountable: secondVehicleCountable };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.Screener = api;
})(typeof window !== "undefined" ? window : globalThis);
