# Open questions and directive disagreements

For you and Claude to resolve together, then confirm with a navigator, legal clinic or caseworker. Mark each one when settled. Full wording lives in the `flags_for_human_review` list of each rules file.

## Directives that contradict each other
| # | Issue | Where | Current handling |
|---|---|---|---|
| 1 | Temporary residents: listed as acceptable status documents (IMM1442 / IMM1263), yet visitors are ineligible unless they claimed refugee protection or applied for PR | 2.5 | Screener answers "unclear" for other temporary residents |
| 2 | Second vehicle: exempt only if net value is $15,000 or less (all or nothing) vs exempt up to $15,000 with only the excess counted | 4.1 vs 4.5 | Follows 4.5 (loan and $500 depreciation deducted, excess counts) |
| 3 | Transplant patient expense payment cap: $650 a month vs $1,500 a month | 5.1 vs 6.2 | Not used in calculations |
| 4 | Rental income: 60% charged, but the exemptions list says 40% of rental income and 60% of board and lodging income are exempt; roomer is 60% and boarder is 40% elsewhere | 5.1 | Charged 60% for self-contained rent, roomer 60%, boarder 40% (minimum $100) |

| 5 | Ontario Works earnings exemptions wait 3 months after assistance starts; ODSP's do not. Check that this difference is real | OW 5.3 vs ODSP 5.3 | OW calculator has a flag; ODSP has none |
| 6 | OW motor vehicle example uses a $5,000 asset limit that matches nothing in 4.2 ($10,000 to $15,500) | OW 4.5 vs 4.2 | Uses 4.2 |

## Stale or doubtful figures
- Locked-in funds thresholds ($31,466.67 and $18,880) are from 2010 (4.1, 5.1). Never used.
- Directive 4.4 is dated October 2017 and 4.7 and 4.8 September 2017, though pages were refreshed in 2026.

## Assumptions Claude made that need confirming
- The 25% partial earnings exemption is rounded to the nearest dollar (5.3, from the directive's Example 2).
- Basic needs table column mapping and rows with 3 or more dependants (6.1).
- Sole-support parent supplement applies only to a single recipient with at least one dependant, all under 18 (6.1).
- Whether a news report that people without legal authorization can no longer get OW or ODSP matches the regulations (2.5 says it is more nuanced).

- OW basic needs table lost its labels in conversion; I reconstructed the amounts from the number pattern ($343 single, $494 couple, adults add $623/$781/$956, children add $0).

## Not yet done
- Benefit add-ons: special diet (6.4), pregnancy nutrition (6.5), heating (9.3), utilities (9.5), board and lodge (6.3).
- Self-employment income (5.4), child care deductions (5.5), gifts (5.8), spousal and child support (5.15).
- Disability adjudication (1.2) is intentionally out of scope.
