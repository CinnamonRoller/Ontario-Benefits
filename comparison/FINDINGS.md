# Comparison with existing tools (run 2026-11-01)

Seven made-up households (`households.json`) were entered into our screener, the Calculatorplus OW and ODSP calculators, and the Ontario Social Service Navigator (unofficial). Automated with Playwright: `python comparison/run_comparison.py`. Raw output: `results.json`.

| | Household | Ours (OW / ODSP) | Calculatorplus | Navigator |
|---|---|---|---|---|
| A | Single, rent $700, no income | $733 | $733 | "May be eligible", up to $733 |
| B | Single parent, 2 kids, rent $1,100 | $1,057 | $1,057 | "May be eligible", generic range |
| C | Single, $400 net earnings | $633 | $633 | "May be eligible", generic range |
| D | Couple, $12,000 savings, rent $900 | $1,136 | $1,136 | "May be eligible", generic range |
| E | Single, $15,000 savings (over $10,000 limit) | **No: over asset limit** | $733 (asset limit not tested) | **"May be eligible"** |
| F | Disability, no income, rent $800 | OW $733 / ODSP $1,436 | $733 / $1,436 | Showed OW first (page output was cut at 1,800 characters, so ODSP may appear below) |
| G | Disability, $1,400 net earnings | OW $133 / ODSP $1,136 | $133 / $1,136 | OW and ODSP both listed, generic ranges |

## What this shows
- **Calculatorplus matches our dollar amounts on all 7 households.** Both use the same published tables, so this is a useful cross-check of my table reading for these cases (including the 2-children shelter row) but is not independent proof the tables are right. It does not test the adult-dependant rows.
- **Only our tool caught household E.** Calculatorplus says so in its footnote but still shows a payment; the Navigator says "May be eligible". Assets are the most common hidden disqualifier.
- **The Navigator never asks about assets, rent or vehicles**, and gives a generic range ("up to $733 single or $1,136 couple") rather than a household figure. It does show the local Toronto office with phone and address, which we do not.
- Neither tool shows the directive sentence behind a result, or says "unclear" for discretionary cases.

## Limits of this comparison
- Only 7 households, none with vehicles, trusts, sponsored immigrants or immigration-status edge cases, where the tools may differ more.
- BenefitCheck.ca and the government Find benefits tools were not run (BenefitCheck is a multi-step wizard focused on federal programs).
- Matching a competitor is not the same as being correct. Human review is still the real test.
