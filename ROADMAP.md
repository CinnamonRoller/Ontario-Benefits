# Roadmap: Ontario Benefits

**Mission:** help people in Ontario find and claim government benefits they are entitled to but never receive. Claude writes the software; the human partner handles real-world tasks (calls, emails, outreach, anything needing a human touch).

**Constraints**
- Money: under CAD $100 total. Spend nothing unless necessary. If spent, the next goal becomes an income stream.
- Compute: Claude Pro limits. When credits run out, wait for the reset. Keep work small, front-load high-value steps, and save state in files.
- Pace: startup-fast. Ship small, learn, adjust. Plans below are goalposts, not detailed schedules.

**Free-first stack:** static site on GitHub Pages or Cloudflare Pages, rules as JSON, screening logic running in the user's browser (no server, no stored personal data, no cost). Claude API calls only if they can be funded.

## Goalposts

### G1. Trustworthy rules (Claude)
- Income rules (Directive 5.1), remaining asset directives (4.4, 4.5, 4.7, 4.8), then Ontario Works.
- Every rule has a source quote and a deterministic/discretionary flag. Discretionary rules answer "unclear, ask a caseworker".
- Done when: ODSP and OW financial and status eligibility are covered and the tests pass.

### G2. Human verification (Human, Claude supports)
- Claude builds a simple review page (rule beside source quote, approve/correct).
- Human finds 1-2 reviewers: a community legal clinic, a Prosper Canada navigator, or a caseworker. Claude drafts the email.
- Resolve the open questions in `flags_for_human_review` (e.g. the directive 2.5 contradiction).
- Done when: at least one qualified person has reviewed the core rules.

### G3. Working screener (Claude) - FIRST VERSION BUILT 2026-10-31 in docs/
- Plain-language questionnaire in the browser, English first (French and other languages later).
- Output: "likely qualifies / unclear / likely not", with reasons and links to the source directive. Always a disclaimer: not legal advice, not a decision.
- Done when: usable end to end on a phone, no data leaves the device.

### G4. Real-world test (Human leads)
- Five to ten real people or navigators try it. Collect what confuses them or gives wrong answers.
- Human gathers feedback; Claude fixes.
- Done when: the screener matches expert judgement on the test cases.

### G5. Launch and reach (Human leads, Claude drafts)
- Publish free on a static host. Claude writes the plain-language copy, a one-page explainer, outreach emails and posts.
- Human contacts food banks, libraries, legal clinics, settlement agencies, community groups.
- Done when: public URL live and at least a few organizations are sharing it.

### G6. Beyond ODSP/OW (Claude, then Human)
- Federal and other Ontario benefits (e.g. GST/HST credit, Canada Child Benefit, Ontario Trillium Benefit, Ontario Drug Benefit), then document reading and renewal/appeal help.
- Partner rather than compete: Prosper Canada, PolicyEngine, OpenFisca.

### G7. Sustainability (Both, when needed)
- Keep running costs at about zero. If costs appear, explore grants (e.g. Ontario Trillium Foundation), donations, or organization sponsorship.

## Division of labour
| Claude | Human |
|---|---|
| Rule extraction, code, tests, site, copy, email drafts | Contacting clinics/navigators, calls, sending emails |
| Tracking open questions and state in files | Verifying facts with real people, gathering feedback |
| Flagging when a question needs a professional | Public outreach, community trust |

## Immediate next actions
1. Claude: finish Ontario Works (shelter, income, residency, sponsored immigrants, exempt assets). Human: review OPEN_QUESTIONS.md with Claude when ready. (5.1, 5.3, 6.1 and 6.2 done 2026-10-31.)
2. Human: nothing yet. When G2 starts, Claude will provide a draft outreach email.

## Principles
Honest uncertainty over false confidence. Privacy by default. Open, source-linked rules that others can correct. Never submit anything for a person without their confirmation.
