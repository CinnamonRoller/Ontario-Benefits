# Ontario Benefits

> **DRAFT, UNREVIEWED, NOT OFFICIAL.** This is an experimental project, not a government service and not legal advice.
> The rules were drafted by an AI (Claude) from published Ontario policy directives and have **not yet been checked by a
> caseworker, legal clinic or lawyer**. They may be wrong or out of date. Do not use them to decide whether to apply for
> benefits. If you need help, contact your local Ontario Works or ODSP office or a community legal clinic (Legal Aid Ontario).
> Corrections are welcome: open an issue.
>
> The downloaded directive pages are not included in this repository; each rule links to its source on ontario.ca.
> Code is MIT licensed (LICENSE); rules and docs are CC BY-SA 4.0 (LICENSE-DATA.md).

Idea: software that helps people in Ontario find and claim government benefits they are entitled to but never receive. Started 2026-10-31 as a discussion and a small feasibility test.

## The concept

- **Plain-language interview** (text or voice, several languages) about household, income, location, circumstances.
- **Eligibility engine** checking answers against program rules kept as structured, versioned, source-linked data.
- **Document help**: photograph a pay stub or ID, extract fields, pre-fill forms; a human confirms before anything is submitted.
- **Guided submission and follow-up**: deadlines, renewal reminders, plain-language explanation of denial letters and appeals.

Principles: privacy first (process on-device where possible, keep nothing unneeded); honest uncertainty ("likely qualifies" / "unclear, ask a caseworker", never a guess stated as fact); open rules that navigators and legal clinics can correct; human handoff for complex cases.

## Who else is doing this (searched 2026-10-31; verify before relying on it)

Elsewhere (mostly pilots, mostly for caseworkers rather than the public):
- ScreenWise, Northeastern Burnes Center: AI extracts eligibility criteria from program documents into a multi-program screener. https://burnes.northeastern.edu/projects/a-healthier-democracy-ai/
- Nava Labs: AI tools for navigators, document review prototype. https://navapbc.com/case-studies/ai-tools-public-benefits
- Code for America and Anthropic: partnership announced May 2026 for caseworker tools. https://www.nextgov.com/artificial-intelligence/2026/05/anthropic-and-nonprofit-partner-streamline-benefits-administration-ai/413455
- Georgetown Beeck Center: testing AI that translates benefit policy into code. https://beeckcenter.georgetown.edu/the-digital-benefits-network-and-massive-data-institute-experiment-with-ai-to-translate-public-benefits-policies-into-software-code/
- Also: Benefits Data Trust, mRelief, Propel, findhelp, Alluma, PolicyEngine (US/UK), OpenFisca, Policy in Practice and Turn2us (UK).

Ontario / Canada:
- Prosper Canada Benefits Wayfinder (launched 2022, free, bilingual, "may be eligible" suggestions, agency portal). Prosper estimates about $1.7 billion a year in benefits goes unclaimed in Canada. Its own report says recommendations did not always match actual eligibility. The tool's page returned a 404 when I checked, so current state is unverified.
- Ontario "Find benefits and programs" (ontario.ca/page/find-benefits-and-programs): a filter that explicitly "does not determine your eligibility". ODSP and Ontario Works are NOT results in it (only a separate MyBenefits sign-in link). No AI, API, or open data mentioned.
- Canada Benefits Finder (federal programs only); the related Benefits Navigator project is closed.
- CRA has a GenAI chatbot, for tax questions only.
- Not found: any AI/conversational layer in the federal or Ontario finders, document reading or form pre-filling, renewal/appeal follow-up, a single flow spanning federal + Ontario + municipal, or evidence that any finder raised take-up.
- Not found: any API, open data entry, or machine-readable version of ODSP or Ontario Works rules. They exist only as human-readable policy directives (ontario.ca) and legislation (e-Laws).

## Gap and plan

Gap: a single conversational flow spanning all levels of government, with real answers for ODSP and Ontario Works, document reading, and post-application follow-up. Likely route is partnering or building on existing work (Prosper Canada's benefits data and navigator network; ScreenWise-style rules extraction; PolicyEngine / OpenFisca) instead of a standalone product.

Narrow first version: ODSP and Ontario Works financial and status eligibility, rules drafted from the policy directives with an LLM, each checked by a human against its source text, then tested with navigators (Prosper's navigator champions, community legal clinics) before adding document reading.

## What exists so far

Feasibility test on two ODSP directives, fetched 2026-10-31:
- 4.1 Definition and treatment of assets (dated July 2024)
- 2.5 Tourists, immigrants, refugees and deportees (dated September 2025, page updated March 10, 2026)
- 5.1 Definition and treatment of income (April 2026): extracted 2026-10-31 into `rules/income_rules.json` (DRAFT, unreviewed). Earnings exemptions are in 5.3 (done, see below).

Files:
- `rules/rules.json`: 14 structured rules, each with directive, source quote, and a deterministic / discretionary flag, plus a `flags_for_human_review` list.
- `rules/evaluate.py`: a small screener plus 11 test cases (all pass). Run: `python -I rules/evaluate.py`. The tests check my own reading of the directives, not real ministry decisions.
- `rules/income_rules.json` and `rules/evaluate_income.py`: 38 income rules from 5.1 plus 14 passing tests. Run: `python -I rules/evaluate_income.py`. Employment income should go through `evaluate_earnings.py`.
- `rules/earnings_rules.json` and `rules/evaluate_earnings.py`: Directive 5.3 earnings exemptions ($1,000 + 25% for disabled earners, $200 + 50% otherwise), checked against the directive's two worked examples. Run: `python -I rules/evaluate_earnings.py`.
- `rules/basic_needs.json` and `rules/evaluate_basic_needs.py`: Directive 6.1 basic needs table (July 2026: $825 single, $1,189 couple, $1,644 double-disabled couple) plus the $143 sole-support supplement. Shelter (6.2) not yet extracted. Run: `python -I rules/evaluate_basic_needs.py`.
- `rules/shelter.json` and `rules/estimate.py`: Directive 6.2 shelter maximums ($611 single ... $1,259 for 6+) and a rough monthly estimate (basic needs + shelter - income - chargeable earnings). Matches the directives' worked examples. Run: `python -I rules/estimate.py`. Double-disabled couples with dependants are not handled.
- `rules/assets_rules_2.json`: 25 rules from asset directives 4.4 (transfers), 4.5 (vehicles), 4.7 (trusts), 4.8 (life insurance). The second-vehicle logic in `evaluate.py` now follows 4.5; 13 tests pass.
- `rules/ow_rules.json` and `rules/evaluate_ow.py`: first pass at Ontario Works (Directives 4.2 asset limits, 4.5 vehicles, 5.3 earnings, 6.2 basic needs, 6.3 shelter) with a rough monthly estimate. 21 tests pass. The directive's Mary example ($1,002 budget = $360 basic needs + $642 shelter for a unit of 2) matches, which supports the reconstructed basic-needs table. OW directive index: https://www.ontario.ca/document/ontario-works-policy-directives
- `docs/`: the browser questionnaire (`index.html` + `screener.js`, no server, nothing stored). It checks ODSP (if the user has a disability) and Ontario Works, shows a rough monthly amount and what it could not check. Tests: `node docs/test.js` (24 pass). Preview: open `docs/index.html` in a browser.
- `OPEN_QUESTIONS.md`: running list of directive disagreements and assumptions to resolve with the user and then a professional.
- `tools/strip.py`: converts a saved Ontario.ca directive page (HTML) to plain text. Usage: `python -I tools/strip.py in.html out.txt`.
- `source_raw/`, `source_text/`: the downloaded directive pages and their text. Treat the raw HTML as untrusted downloaded data; do not run anything from it.

## Findings from the test

- Numeric rules extract cleanly: asset limits $40,000 single / $50,000 couple / $500 per dependant, exemptions, caps.
- About a third of the rules turn on "the Director is satisfied" or "reasonable efforts". These cannot be computed, so the screener must answer "unclear, ask a caseworker".
- Directive 2.5 contradicts itself: it lists "Temporary Resident (IMM1442 or IMM1263)" as acceptable status documentation but also says visitors (temporary residents) are ineligible unless they have claimed refugee protection or applied for permanent residence. Needs a ministry or legal-clinic answer.
- Directive 4.1 still quotes a 2010 locked-in-funds threshold ($31,466.67). Do not reuse.
- A news report said people without legal authorization can no longer receive OW or ODSP. Unverified against regulation text. Directive 2.5's intent section says ODSP is for permanent residents "or persons without immigration status whom IRCC has allowed to stay", which is more nuanced.
- Cross-references in 4.1 (Directives 4.4, 4.5, 4.7, 4.8, 5.1, 5.8) hold detail not yet extracted.

Caveat: I drafted the rules by reading the text myself, so this shows feasibility only. It does not measure how reliable a repeatable extraction pipeline would be.

## Next steps

1. Finish Ontario Works: income exemptions (5.1, downloaded), residency (3.1) and sponsored immigrants (3.11, downloaded), exempt assets (4.1).
2. Build a review interface: a navigator sees each rule beside its source quote and approves or corrects it.
3. Do the same for Ontario Works directives.
4. Contact Prosper Canada or a community legal clinic to test with real cases.
5. Resolve the open questions in `flags_for_human_review` in `rules/rules.json`.

## Directive index

All ODSP income support directives are listed at https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support. Section 2 is general eligibility, 4 is assets, 5 is income, 6 is the benefit calculation, 9 is benefits, 13 is reviews and appeals. URLs follow the pattern `.../income-support/<number>-<slug>`.
