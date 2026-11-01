window.REVIEW_DATA = {
 "sections": [
  {
   "file": "rules.json",
   "title": "ODSP: eligibility, status and assets (2.5, 4.1)",
   "rules": [
    {
     "id": "asset_limit_single",
     "directive": "4.1",
     "directive_title": "Definition and treatment of assets",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/41-definition-and",
     "kind": "deterministic",
     "quote": "The prescribed asset limits for a benefit unit are $40,000 for a single recipient, $50,000 for a couple and $500 for each dependant other than a spouse.",
     "note": ""
    },
    {
     "id": "exempt_principal_residence",
     "directive": "4.1",
     "directive_title": "Definition and treatment of assets",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/41-definition-and",
     "kind": "deterministic",
     "quote": "The principal residence of an applicant/recipient ... [is] exempt as an asset.",
     "note": ""
    },
    {
     "id": "exempt_one_vehicle",
     "directive": "4.1",
     "directive_title": "Definition and treatment of assets",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/41-definition-and",
     "kind": "deterministic",
     "quote": "One motor vehicle owned by a member of the benefit unit is exempt regardless of the value. A second vehicle is exempt, provided that its net value is no more than $15,000 and it is required to permit a dependant of the applicant/recipient to maintain employment outside of the home.",
     "note": ""
    },
    {
     "id": "exempt_rdsp",
     "directive": "4.1",
     "directive_title": "Definition and treatment of assets",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/41-definition-and",
     "kind": "deterministic",
     "quote": "All funds held in an RDSP are fully exempt as assets.",
     "note": ""
    },
    {
     "id": "exempt_prepaid_funeral",
     "directive": "4.1",
     "directive_title": "Definition and treatment of assets",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/41-definition-and",
     "kind": "deterministic",
     "quote": "Pre-paid funerals for any member of the benefit unit are exempt as an asset.",
     "note": ""
    },
    {
     "id": "exempt_life_insurance_trust_cap",
     "directive": "4.1",
     "directive_title": "Definition and treatment of assets",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/41-definition-and",
     "kind": "deterministic",
     "quote": "The combined capital of the trust and the total cash surrender value of a life insurance policy, if held, cannot exceed $100,000.",
     "note": ""
    },
    {
     "id": "exempt_business_assets",
     "directive": "4.1",
     "directive_title": "Definition and treatment of assets",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/41-definition-and",
     "kind": "deterministic",
     "quote": "... allowed $20,000 in business assets that are necessary to the operation of the business.",
     "note": "Director may approve more under exceptional circumstances (discretionary)."
    },
    {
     "id": "rrsp_accessible_counts",
     "directive": "4.1",
     "directive_title": "Definition and treatment of assets",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/41-definition-and",
     "kind": "deterministic",
     "quote": "If the applicant/recipient is able to access RRSP funds, regardless of the penalty involved, then he/she will be expected to do so ... treated as an asset. If the RRSP is locked-in, it is not considered an asset.",
     "note": ""
    },
    {
     "id": "asset_limit_health_increase",
     "directive": "4.1",
     "directive_title": "Definition and treatment of assets",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/41-definition-and",
     "kind": "discretionary",
     "quote": "With the Director's approval, the allowable asset level for a benefit unit may be increased to permit the purchase of an item that is necessary for the health of a member of the benefit unit ...",
     "note": ""
    },
    {
     "id": "second_property",
     "directive": "4.1",
     "directive_title": "Definition and treatment of assets",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/41-definition-and",
     "kind": "discretionary",
     "quote": "An interest in a second property other than the principal residence is exempt as an asset if the Director is satisfied that the property is necessary for the health or well-being of a member of the benefit unit. If the Director does not approve ... the property will be exempt as an asset for a period of six months provided that reasonable efforts are made to sell the property ...",
     "note": ""
    },
    {
     "id": "status_ineligible_tourist",
     "directive": "2.5",
     "directive_title": "Tourists, immigrants, refugees and deportees",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/25-tourists-immigrants",
     "kind": "deterministic",
     "quote": "Tourists are people who are in Canada for a short period of time. They are not eligible for ODSP.",
     "note": ""
    },
    {
     "id": "status_visitor",
     "directive": "2.5",
     "directive_title": "Tourists, immigrants, refugees and deportees",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/25-tourists-immigrants",
     "kind": "deterministic",
     "quote": "Visitors are not eligible for ODSP unless they have made a claim for refugee protection or applied for status as a permanent resident under IRPA.",
     "note": ""
    },
    {
     "id": "status_eligible_classes",
     "directive": "2.5",
     "directive_title": "Tourists, immigrants, refugees and deportees",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/25-tourists-immigrants",
     "kind": "deterministic",
     "quote": "Acceptable documentation includes one of the following: Certificate of Canadian Citizenship; valid Canadian passport; Indian status card ...; Confirmation of Permanent Residence; Permanent Resident Card; ... proof of application for permanent residence status; Refugee Protection Claimant Document (IMM-1442) ...",
     "note": ""
    },
    {
     "id": "status_deportee",
     "directive": "2.5",
     "directive_title": "Tourists, immigrants, refugees and deportees",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/25-tourists-immigrants",
     "kind": "discretionary",
     "quote": "Deportees may be eligible for ODSP only in situations where: a pre-removal risk assessment is pending; the removal order has been stayed; the individual has been granted permission to stay ... for humanitarian, compassionate or other reasons; the removal order cannot be carried out for reasons entirely beyond the control of the individual ...",
     "note": ""
    },
    {
     "id": "sponsor_pursue_support",
     "directive": "2.5",
     "directive_title": "Tourists, immigrants, refugees and deportees",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/25-tourists-immigrants",
     "kind": "discretionary",
     "quote": "As a condition of eligibility, a sponsored person must pursue all available financial resources, including support from their sponsor (unless the requirement is waived).",
     "note": ""
    }
   ],
   "flags": [
    "2.5 lists 'Temporary Resident (IMM1442 or IMM1263)' as acceptable status documentation, yet also says visitors (temporary residents with a TRV, ETA, study or work permit) are NOT eligible unless they have claimed refugee protection or applied for PR. The two statements pull in different directions; the ministry or a legal clinic must say which governs.",
    "4.1 cites a locked-in-funds low-income threshold of $31,466.67 'in 2010', which is stale. A tool must not reuse that figure.",
    "Many outcomes turn on 'the Director is satisfied' or 'reasonable efforts'. These cannot be computed; the tool should answer 'unclear, ask a caseworker', not yes or no.",
    "Cross-references to Directives 4.4, 4.5, 4.7, 4.8, 5.1 and 5.8 hold further detail (transfer of assets, gift treatment, income) that has not been extracted yet."
   ]
  },
  {
   "file": "assets_rules_2.json",
   "title": "ODSP: transfers, vehicles, trusts, life insurance (4.4, 4.5, 4.7, 4.8)",
   "rules": [
    {
     "id": "transfer_lookback",
     "directive": "4.4",
     "directive_title": "Transfer of assets for inadequate consideration",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/44-transfer-assets",
     "kind": "discretionary",
     "quote": "One year prior to the date of application, members of an applicant's benefit unit cannot assign, transfer or dissipate assets in order to qualify for ODSP. This may be increased to three years if there is reason to believe that a three-year period of review is appropriate.",
     "note": ""
    },
    {
     "id": "transfer_inadequate_25pct",
     "directive": "4.4",
     "directive_title": "Transfer of assets for inadequate consideration",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/44-transfer-assets",
     "kind": "discretionary",
     "quote": "Inadequate consideration will be assumed if the property was knowingly transferred for an amount that is at least 25% less than market value unless there is an acceptable explanation or an exceptional circumstance.",
     "note": ""
    },
    {
     "id": "transfer_to_qualify_ineligible_months",
     "directive": "4.4",
     "directive_title": "Transfer of assets for inadequate consideration",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/44-transfer-assets",
     "kind": "discretionary",
     "quote": "Where the transfer was clearly made for the purpose of qualifying for income support, the person will be deemed ineligible. The period of ineligibility will be determined by dividing the additional amount the person should have received for a fair market value ... by [monthly income support]. The 'net amount of inadequacy' is the fair market value ... minus the money received ... and minus the maximum allowable asset limit after taking into account current assets.",
     "note": ""
    },
    {
     "id": "transfer_not_to_qualify_reduction",
     "directive": "4.4",
     "directive_title": "Transfer of assets for inadequate consideration",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/44-transfer-assets",
     "kind": "discretionary",
     "quote": "The reduction shall be no less than 5% nor more than 20% of the income support and shall continue until such time as the inadequacy has been compensated.",
     "note": ""
    },
    {
     "id": "transfer_pay_debt_ok",
     "directive": "4.4",
     "directive_title": "Transfer of assets for inadequate consideration",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/44-transfer-assets",
     "kind": "discretionary",
     "quote": "An applicant/recipient may use assets to pay off pre-existing, previously recorded debts which, if not paid, could result in legal action being taken against them. ... Disposition of assets under these types of situations should not be considered an inadequate disposition of assets under ODSP.",
     "note": ""
    },
    {
     "id": "vehicle_first_exempt",
     "directive": "4.5",
     "directive_title": "Motor vehicles",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/45-motor-vehicles",
     "kind": "deterministic",
     "quote": "Under ODSP, there is no limit on the value of one motor vehicle per benefit unit. Any member of the benefit unit may own the vehicle.",
     "note": ""
    },
    {
     "id": "vehicle_second_needed_exempt_to_15k",
     "directive": "4.5",
     "directive_title": "Motor vehicles",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/45-motor-vehicles",
     "kind": "discretionary",
     "quote": "The value of a second vehicle that is required by a dependant to work outside the home is exempt up to $15,000.",
     "note": ""
    },
    {
     "id": "vehicle_second_calc",
     "directive": "4.5",
     "directive_title": "Motor vehicles",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/45-motor-vehicles",
     "kind": "deterministic",
     "quote": "If the value of a second vehicle required by a dependant for work is more than $15,000, any loans or encumbrances against the vehicle should be deducted from its value. ... an additional deduction of $500 should be applied to reflect the depreciation. After deducting any loans and encumbrances, and taking into account the depreciation, any portion of the value of a vehicle required by a working dependant which is over the threshold level of $15,000 should be considered an asset.",
     "note": ""
    },
    {
     "id": "vehicle_extra_counts",
     "directive": "4.5",
     "directive_title": "Motor vehicles",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/45-motor-vehicles",
     "kind": "deterministic",
     "quote": "The total value of any additional vehicle owned by a member of the benefit unit, whether or not that vehicle is required for work, is treated as an asset.",
     "note": ""
    },
    {
     "id": "vehicle_value_redbook",
     "directive": "4.5",
     "directive_title": "Motor vehicles",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/45-motor-vehicles",
     "kind": "deterministic",
     "quote": "The wholesale value listed in the Redbook is the amount which should be used to determine value.",
     "note": ""
    },
    {
     "id": "vehicle_six_months_to_sell",
     "directive": "4.5",
     "directive_title": "Motor vehicles",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/45-motor-vehicles",
     "kind": "deterministic",
     "quote": "Where the asset amount attributed for the vehicle is above the asset limit (combined with the value of other assets the recipient may have), the recipient will have six months to sell the vehicle.",
     "note": ""
    },
    {
     "id": "trust_inheritance_cap",
     "directive": "4.7",
     "directive_title": "Funds held in trust",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/47-funds-held-trust",
     "kind": "deterministic",
     "quote": "The total combined amount of a trust plus the cash surrender value of any life insurance policies owned by a member of the benefit unit must not exceed $100,000.",
     "note": ""
    },
    {
     "id": "trust_only_inheritance_or_insurance",
     "directive": "4.7",
     "directive_title": "Funds held in trust",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/47-funds-held-trust",
     "kind": "deterministic",
     "quote": "Only funds that are derived from an inheritance or the proceeds of a life insurance policy can benefit from the asset exemption if placed in trust. Funds from different sources would not qualify for this asset exemption.",
     "note": ""
    },
    {
     "id": "trust_six_months_to_establish",
     "directive": "4.7",
     "directive_title": "Funds held in trust",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/47-funds-held-trust",
     "kind": "discretionary",
     "quote": "To allow a reasonable period of time to put the money in trust, recipients may be given up to six months to establish the trust.",
     "note": ""
    },
    {
     "id": "trust_henson_no_limit",
     "directive": "4.7",
     "directive_title": "Funds held in trust",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/47-funds-held-trust",
     "kind": "discretionary",
     "quote": "A true absolute discretionary trust is not considered an asset for ODSP purposes, therefore the capital value of such a trust can be in excess of $100,000.",
     "note": ""
    },
    {
     "id": "trust_henson_own_funds_not_allowed",
     "directive": "4.7",
     "directive_title": "Funds held in trust",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/47-funds-held-trust",
     "kind": "deterministic",
     "quote": "Members of the benefit unit who receive an inheritance or are entitled to an inheritance cannot create or put that inheritance in an absolute discretionary trust in an attempt to have the trust not considered an asset.",
     "note": ""
    },
    {
     "id": "trust_private_asset_if_encroachable",
     "directive": "4.7",
     "directive_title": "Funds held in trust",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/47-funds-held-trust",
     "kind": "discretionary",
     "quote": "These trusts are normally considered an asset if the trustee is able to encroach on the capital for the person's maintenance, otherwise they are not an asset.",
     "note": ""
    },
    {
     "id": "trust_annual_report",
     "directive": "4.7",
     "directive_title": "Funds held in trust",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/47-funds-held-trust",
     "kind": "deterministic",
     "quote": "The income exemptions apply provided that an annual report documenting all income and expense transactions relating to the trust is filed.",
     "note": ""
    },
    {
     "id": "trust_payments_exempt_income",
     "directive": "4.7",
     "directive_title": "Funds held in trust",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/47-funds-held-trust",
     "kind": "discretionary",
     "quote": "Payments from a trust used for any purpose up to a maximum of $10,000 for any twelve month period are exempt as income. ... Payments used for approved disability related items or services or education or training expenses incurred because of a disability; payments used to purchase a principal residence or an exempt vehicle; or that will be applied to the first and last month's rent necessary to secure accommodation.",
     "note": ""
    },
    {
     "id": "insurance_csv_cap",
     "directive": "4.8",
     "directive_title": "Life insurance policies",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/48-life-insurance",
     "kind": "deterministic",
     "quote": "The cash surrender value of life insurance policies up to $100,000 for members of the benefit unit are exempt from inclusion as assets. If the person also has a trust fund, the combined value of the cash surrender value of the life insurance policy and trust fund must not exceed the $100,000 limit. This does not apply to a 'Henson' type trust, which is without limit.",
     "note": ""
    },
    {
     "id": "insurance_no_csv_exempt",
     "directive": "4.8",
     "directive_title": "Life insurance policies",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/48-life-insurance",
     "kind": "deterministic",
     "quote": "Life insurance policies which have no cash surrender value are exempt as assets.",
     "note": ""
    },
    {
     "id": "insurance_over_cap_counts",
     "directive": "4.8",
     "directive_title": "Life insurance policies",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/48-life-insurance",
     "kind": "deterministic",
     "quote": "If the cash surrender value of the insurance policy is greater than $100,000 and the amount over $100,000, combined with all other non-exempt assets, exceeds the asset limit for the benefit unit, there is no financial eligibility for ODSP.",
     "note": ""
    },
    {
     "id": "insurance_annuities_same",
     "directive": "4.8",
     "directive_title": "Life insurance policies",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/48-life-insurance",
     "kind": "deterministic",
     "quote": "Annuities, deferred annuities and segregated funds purchased from a life insurance company are treated in the same way as life insurance under ODSP.",
     "note": ""
    },
    {
     "id": "insurance_csv_net_of_loans",
     "directive": "4.8",
     "directive_title": "Life insurance policies",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/48-life-insurance",
     "kind": "deterministic",
     "quote": "a policy may have a $2,000 cash surrender value according to the policy schedule. Information from the insurance company, however, indicates that $500 was borrowed. As a result, the cash surrender value (and value of the asset) now is only $1,500.",
     "note": ""
    },
    {
     "id": "insurance_redeem_10k",
     "directive": "4.8",
     "directive_title": "Life insurance policies",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/48-life-insurance",
     "kind": "deterministic",
     "quote": "a partial redemption of the cash surrender value of a life insurance policy to a maximum of $10,000 in a 12 month period per member of the benefit unit who has a policy, can be used for any purpose.",
     "note": ""
    }
   ],
   "flags": [
    "DISAGREEMENT: Second vehicle. Directive 4.1 says a second vehicle is exempt 'provided that its net value is no more than $15,000' (all or nothing). Directive 4.5 says it is exempt 'up to $15,000' and only the excess over $15,000 (after loans and a $500 depreciation deduction) counts. The screener now follows 4.5, which is more detailed. Needs confirmation.",
    "4.4 and 4.8 refer to 'ODP' / 'Definition and Treatment of Assets' in places where they appear to mean ODSP / Income. Typos in the source, harmless.",
    "4.4's examples use a $40,000 limit and a made-up $1,000 monthly benefit; the real period depends on the benefit calculation (estimate.py).",
    "Trusts are very fact-specific ('Legal Services Branch should be consulted'). The screener should treat any trust other than a simple inheritance trust under $100,000 as 'unclear, ask a caseworker'.",
    "4.5 refers to the Canadian Redbook wholesale value, which is a paid reference. A user-facing tool can only ask the user for their best estimate.",
    "4.4 reduction is 5% to 20% 'depending on factors', which is discretionary; the tool should only say a reduction may apply."
   ]
  },
  {
   "file": "income_rules.json",
   "title": "ODSP: income (5.1)",
   "rules": [
    {
     "id": "inc_default_deduct",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Income is deducted from ODSP income support unless partially or fully exempt by regulation.",
     "note": ""
    },
    {
     "id": "inc_pursue_resources",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "discretionary",
     "quote": "Applicants/recipients must demonstrate reasonable efforts to obtain any financial resources to which they or their dependants may be entitled, within a reasonable timeframe.",
     "note": ""
    },
    {
     "id": "inc_cpp_early_not_required",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Applicants and recipients are not required to apply for early retirement pension from CPP. However, ODSP applicants who choose to apply for and receive early retirement pensions will have these funds deducted from their income support.",
     "note": ""
    },
    {
     "id": "inc_oas_required_at_65",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "ODSP applicants/recipients are required to pursue OAS when they turn 65. Income from OAS is deducted dollar for dollar from income support.",
     "note": ""
    },
    {
     "id": "inc_child_benefits_pursue",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "discretionary",
     "quote": "Applicants with dependent children who are eligible to receive the Ontario Child Benefit (OCB) and Canada Child Benefit (CCB) must demonstrate reasonable efforts to obtain these financial resources.",
     "note": ""
    },
    {
     "id": "inc_charged_types",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Income includes ... wages, salaries, casual earnings ...; business income; pension/superannuation/insurance benefit payments; annuity payments; mortgage payments received; foreign pensions; spousal support; Employment Insurance; Old Age Security and Guaranteed Income Supplement; Ontario Guaranteed Annual Income Act; WSIB/Workers' Compensation loss-of-income benefits; Pension Act (Canada); War Veterans Allowance.",
     "note": ""
    },
    {
     "id": "inc_rent_self_contained",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "60% of gross income for renting self-contained quarters, land or a garage;",
     "note": "The same directive also says '40% of gross rental income, and 60% of gross board and lodging income' in the exemptions list, which is the same split read from the other side (40% exempt)."
    },
    {
     "id": "inc_roomer",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Roomer income is charged at 60% of the amount paid or $100, whichever is greater.",
     "note": ""
    },
    {
     "id": "inc_boarder",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Boarder income is charged at 40% of the amount paid or $100, whichever is greater.",
     "note": "Roomer = lodging without meals; boarder = lodging with meals."
    },
    {
     "id": "inc_roomer_to_child_exempt",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "There is no income charge if an ODSP applicant, recipient, or spouse provides board and lodging or rents to a child or grandchild who is receiving ODSP or Ontario Works in their own right.",
     "note": ""
    },
    {
     "id": "exempt_gifts_10k",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "An amount up to $10,000 in a 12 month period per member of the benefit unit, in the form of gifts or voluntary payments for any purpose from any source; (this includes monies from trusts, life insurance policies, honorariums and windfalls).",
     "note": ""
    },
    {
     "id": "exempt_gifts_disability_related",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Payments from any source in the form of gifts or voluntary payments used for disability-related items and services or for education and training incurred because of the disability of a member of the benefit unit. There is no limit on the value of these contributions, provided they will not be reimbursed from other sources.",
     "note": ""
    },
    {
     "id": "exempt_gifts_housing",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Gifts or voluntary payments that will be applied to the purchase of a principal residence, an exempt vehicle, or that will be applied to the first and last month's rent necessary to secure accommodation.",
     "note": ""
    },
    {
     "id": "exempt_employer_bonus_not_gift",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "a cash bonus from an employer given in consideration for services rendered or work performed, does not qualify for this exemption.",
     "note": ""
    },
    {
     "id": "exempt_child_tax_credits",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Refundable tax credits including the: Canada Child Tax Benefit; Canada Child Benefit; Ontario Children's Activity Tax Credit; Ontario Trillium Benefit payment; Ontario Child Benefit (OCB) payments ...",
     "note": ""
    },
    {
     "id": "exempt_child_support",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Child support (Effective January 1, 2017).",
     "note": ""
    },
    {
     "id": "exempt_cwb",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "the Canada Workers Benefit (CWB), formerly the Working Income Tax Benefit (WITB) ...",
     "note": ""
    },
    {
     "id": "exempt_canada_disability_benefit",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "A Canada Disability Benefit payment under the Canada Disability Benefit Act.",
     "note": ""
    },
    {
     "id": "exempt_coho",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "All payments made under the Canada-Ontario Housing Benefit (COHB) program (e.g., housing allowances, payments for first/last month's rent).",
     "note": ""
    },
    {
     "id": "exempt_rdsp",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "RDSP related exemptions: gifts or voluntary contributions made to RDSPs by family members and other third parties; interest earned on and re-invested in an RDSP; the federal Canada Disability Savings Grants and Canada Disability Savings Bonds; and all withdrawals from an RDSP for any purpose.",
     "note": ""
    },
    {
     "id": "exempt_charity_donations",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "All donations received from a religious, charitable or benevolent organization for any purpose;",
     "note": ""
    },
    {
     "id": "exempt_jury",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "All payments received for activities related to participating in a jury.",
     "note": ""
    },
    {
     "id": "exempt_dependent_child_earnings",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Earnings of dependent children;",
     "note": ""
    },
    {
     "id": "exempt_interest_liquid_assets",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Interest earned on liquid assets up to the prescribed asset limits, e.g. $40,000 for a single recipient;",
     "note": ""
    },
    {
     "id": "exempt_ow_employment_assistance",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Payments from Ontario Works employment assistance;",
     "note": ""
    },
    {
     "id": "exempt_ontario_autism_program",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Payments received under the Ontario Autism Program for autism services and supports;",
     "note": ""
    },
    {
     "id": "exempt_student_aid",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Funds received from the Ministry of College and Universities or Canada Student Financial Assistance for education costs such as books, tuition, instructional supplies, transportation costs, child care and compulsory fees;",
     "note": ""
    },
    {
     "id": "exempt_compensation_pain_suffering",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Proceeds from a court judgement or legal settlement or an award from a statutory tribunal ... received as damages or compensation for pain and suffering, due to injury to or the death of a member of the benefit unit.",
     "note": ""
    },
    {
     "id": "exempt_wsib_nel",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "This does not apply to a WSIB NEL award that provides compensation for the physical, functional or psychological loss suffered from permanent impairment caused by a work-related injury or illness.",
     "note": ""
    },
    {
     "id": "exempt_foster_care",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "CAS payments made to a recipient for providing care to a foster child are exempt as income.",
     "note": ""
    },
    {
     "id": "exempt_energy_grants",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "The value of all grants, payments, credits, services or items provided by Ontario utilities and regulators, municipalities, and the Governments of Ontario or Canada, for the purposes of energy efficiency, conservation or affordability, are exempt as income for social assistance purposes.",
     "note": ""
    },
    {
     "id": "exempt_arts_grants",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Arts grants awarded to any member of the benefit unit are to be exempt as income and assets ... The portion of the grant that provides living costs (for example funds intended to help with shelter costs) is to be considered income.",
     "note": ""
    },
    {
     "id": "severance_charged_no_exemption",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "Severance pay is treated as income in the month it is received and earnings exemptions do not apply.",
     "note": ""
    },
    {
     "id": "sale_of_asset_income",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "discretionary",
     "quote": "Money received from the sale of an asset is income in the month received if not otherwise exempt. There is no income charge ... for that portion of a payment ... that is applied or with approval, will be used to purchase: a principal residence; any other approved asset that is necessary for health or welfare; or an exempt asset.",
     "note": ""
    },
    {
     "id": "sale_of_asset_six_months",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "In general, a conversion of non-exempt or exempt assets should be within a six month time frame.",
     "note": ""
    },
    {
     "id": "inc_loans_approved_purposes",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "discretionary",
     "quote": "Loans including a reverse mortgage used for an approved purpose. Approved purposes include: the purchase of approved disability-related items or services; expenses for health-related reasons as supported by a medical doctor, and approved by the Director; business loans; ... loans for the payment of first and last month's rent; loans for the purchase of normal household items.",
     "note": ""
    },
    {
     "id": "inc_locked_in_not_pursued",
     "directive": "5.1",
     "directive_title": "Definition and treatment of income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/51-definition-and",
     "kind": "deterministic",
     "quote": "the ODSP requirement that applicants and recipients pursue all available resources as a condition of eligibility is NOT applicable to locked-in retirement accounts. However, if an ODSP recipient does access these funds, ODSP rules regarding income and assets must be applied.",
     "note": ""
    }
   ],
   "flags": [
    "Earnings exemptions (the single biggest factor for working recipients) are in Directive 5.3, not 5.1. Not yet extracted, so the screener cannot compute net benefit for anyone with employment income.",
    "Directive 5.1 contains stale locked-in funds figures ($31,466.67 and $18,880, both 2010). Do not use.",
    "The amount of the monthly ODSP benefit (Directive 6.x) is not extracted, so we cannot say what remains after deductions.",
    "Rent: 5.1 lists '60% of gross income for renting self-contained quarters' as charged and also '40% of gross rental income, and 60% of gross board and lodging income' under exemptions. Read together they say 60% of rent is charged; the board and lodging wording under exemptions conflicts with the roomer (60%) and boarder (40%) rules above. Needs a caseworker to confirm.",
    "The list of charged income includes 'Employment Insurance Act (Canada)' but the text also says EI amounts are deducted gross less earnings deduction. Interaction with 5.3 needs checking.",
    "Many exemptions depend on the Director's approval or on how funds are used (disability-related, housing, trust reporting). These must answer 'unclear, ask a caseworker'.",
    "Other directives referenced and not yet read: 5.2, 5.3, 5.4 (self-employment), 5.5 (child care), 5.8 (gifts), 5.9, 5.10, 5.11, 5.15 (support), 5.18."
   ]
  },
  {
   "file": "earnings_rules.json",
   "title": "ODSP: earnings exemptions (5.3)",
   "rules": [
    {
     "id": "earn_order",
     "directive": "5.3",
     "directive_title": "Deductions from employment and training income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/53-deductions",
     "kind": "deterministic",
     "quote": "The following income exemptions and deductions apply ... in the following order: all payroll deductions except (does not apply to business income): deductions for child or spousal support owed, and deductions for garnishments to pay a debt; full exemption of the first $1,000 of net earnings after payroll deductions for people with a disability in the benefit unit; partial exemption of 25% of net earnings greater than $1,000 for people with a disability in the benefit unit; for non-disabled adult members of the benefit unit, there is a full exemption of the first $200 per person per month and 50% partial exemption for earnings above $200; monthly child care expenses; and monthly disability-related employment expenses necessary to enable a person to be employed.",
     "note": ""
    },
    {
     "id": "earn_negative_floor",
     "directive": "5.3",
     "directive_title": "Deductions from employment and training income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/53-deductions",
     "kind": "deterministic",
     "quote": "If earnings are a negative amount due to work-related expenses, there is no reduction in income support.",
     "note": ""
    },
    {
     "id": "earn_child_care",
     "directive": "5.3",
     "directive_title": "Deductions from employment and training income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/53-deductions",
     "kind": "deterministic",
     "quote": "If child care is provided by a person licensed under the Child Care and Early Years Act, 2014, or by a board under the Education Act for an extended day program, the actual cost of child care is deducted from earnings. If child care is provided by an unlicensed person, the actual cost of child care up to $600 per child is deducted from earnings.",
     "note": ""
    },
    {
     "id": "earn_disability_expenses",
     "directive": "5.3",
     "directive_title": "Deductions from employment and training income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/53-deductions",
     "kind": "discretionary",
     "quote": "A maximum of $1,000 per month can be deducted from earnings if the expense is work-related and attributable to the person's disability. ... To qualify, the items or services purchased must be necessary for employment and not otherwise reimbursable. Verification of cost is required.",
     "note": ""
    },
    {
     "id": "earn_secondary_student_exempt",
     "directive": "5.3",
     "directive_title": "Deductions from employment and training income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/53-deductions",
     "kind": "deterministic",
     "quote": "Earnings of members of a benefit unit over the age of 18 who attend secondary school full-time are exempt as income.",
     "note": ""
    },
    {
     "id": "earn_postsecondary_exempt",
     "directive": "5.3",
     "directive_title": "Deductions from employment and training income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/53-deductions",
     "kind": "deterministic",
     "quote": "Earnings of, and amounts paid under a training program to, people in full-time attendance in an approved program of post-secondary study are exempt as income. ... be taking at least 60% of a full course load, or 40% of a full course load for people with disabilities on ODSP who meet the definition of people with a disability or who are members of a prescribed class.",
     "note": ""
    },
    {
     "id": "work_related_benefit",
     "directive": "5.3",
     "directive_title": "Deductions from employment and training income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/53-deductions",
     "kind": "deterministic",
     "quote": "A $100 work-related benefit is provided to all eligible members of the benefit unit, each month that they have earnings from employment or training, or net positive income from a business.",
     "note": ""
    },
    {
     "id": "employment_transition_benefit",
     "directive": "5.3",
     "directive_title": "Deductions from employment and training income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/53-deductions",
     "kind": "discretionary",
     "quote": "Recipients who exit ODSP due to earnings from employment or training, or income from the operation of a business, are entitled to a one-time payment of $500. A benefit unit must, in the opinion of the Director, be ineligible for income support for at least two months ...",
     "note": ""
    },
    {
     "id": "health_benefits_continue",
     "directive": "5.3",
     "directive_title": "Deductions from employment and training income",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/53-deductions",
     "kind": "discretionary",
     "quote": "If a benefit unit is ineligible for income support due to income in excess of budgetary requirements and the income includes income from employment, a training program, or a business, members of the benefit unit may be eligible to continue to receive drug, dental, and vision care benefits.",
     "note": ""
    }
   ],
   "flags": [
    "Business income is out of scope here (Directive 5.4). Only employment and training earnings are computed.",
    "The directive says to deduct payroll deductions first, then add back support/garnishment deductions. The calculator takes net earnings already adjusted that way as input.",
    "The directive's Example 2 rounds the 25% exemption ($325.75) up to $326. I assume the partial exemption is rounded to the nearest dollar; unconfirmed.",
    "Child care deduction is applied after exemptions (as in the directive's Example 2); I have not checked Directive 5.5 for caps beyond the unlicensed $600."
   ]
  },
  {
   "file": "shelter.json",
   "title": "ODSP: shelter (6.2)",
   "rules": [
    {
     "id": "shelter_ontario_only",
     "directive": "6.2",
     "directive_title": "Shelter calculation",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation",
     "kind": "deterministic",
     "quote": "The shelter allowance can only be paid for dwelling places in Ontario.",
     "note": ""
    },
    {
     "id": "shelter_no_cost_none",
     "directive": "6.2",
     "directive_title": "Shelter calculation",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation",
     "kind": "deterministic",
     "quote": "No Shelter Costs. People with no shelter costs do not receive a shelter allowance.",
     "note": ""
    },
    {
     "id": "shelter_roommates",
     "directive": "6.2",
     "directive_title": "Shelter calculation",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation",
     "kind": "deterministic",
     "quote": "When a recipient lives with roommates, the shelter allowance will reflect his/her actual share of the total shelter costs, up to the maximum allowable amount for his/her benefit unit.",
     "note": ""
    },
    {
     "id": "shelter_joint_ownership_both",
     "directive": "6.2",
     "directive_title": "Shelter calculation",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation",
     "kind": "deterministic",
     "quote": "Where a principal residence is jointly owned and both owners are living in the home, both owners are equally responsible for the shelter costs (50/50).",
     "note": ""
    },
    {
     "id": "shelter_parking_excluded",
     "directive": "6.2",
     "directive_title": "Shelter calculation",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation",
     "kind": "deterministic",
     "quote": "Costs related to parking, even if the costs are mandatory, cannot be included in the shelter calculation.",
     "note": ""
    },
    {
     "id": "shelter_heating_exceeds",
     "directive": "6.2",
     "directive_title": "Shelter calculation",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation",
     "kind": "deterministic",
     "quote": "If heating costs on their own exceed the maximum amount payable for shelter, the amount payable will be the actual cost of heating.",
     "note": ""
    },
    {
     "id": "shelter_second_residence",
     "directive": "6.2",
     "directive_title": "Shelter calculation",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation",
     "kind": "discretionary",
     "quote": "Where a second residence is required temporarily to enable the applicant/recipient or spouse to participate in a training program to enhance employment prospects, an amount can be provided that is the lesser of: the cost to maintain the principal residence, and $455.",
     "note": ""
    },
    {
     "id": "shelter_not_for_arrears",
     "directive": "6.2",
     "directive_title": "Shelter calculation",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation",
     "kind": "deterministic",
     "quote": "the shelter allowance is not to be used for the payment of arrears that are related to rent, utilities or heating.",
     "note": ""
    },
    {
     "id": "shelter_cohb_not_deducted",
     "directive": "6.2",
     "directive_title": "Shelter calculation",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation",
     "kind": "deterministic",
     "quote": "For ODSP applicants/recipients, COHB should not be deducted when assessing actual shelter costs",
     "note": ""
    },
    {
     "id": "shelter_debt_consolidation_excluded",
     "directive": "6.2",
     "directive_title": "Shelter calculation",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation",
     "kind": "deterministic",
     "quote": "Allowable shelter costs cannot be increased where a recipient has obtained a home equity loan or line of credit for the purposes of consolidating debt.",
     "note": ""
    },
    {
     "id": "shelter_sponsored_with_sponsor",
     "directive": "6.2",
     "directive_title": "Shelter calculation",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation",
     "kind": "discretionary",
     "quote": "If an applicant/recipient is living with a defaulting sponsor ... shelter costs can only be paid if: the sponsor is in receipt of Ontario Works, ODSP, the Guaranteed Income Supplement ... or GAINS; there is a breakdown in the sponsorship relationship due to family violence and/or abuse; the sponsored immigrant has a legal obligation to pay shelter costs ... or satisfies the Director that he/she will not be allowed to remain in the current residence unless he or she pays shelter costs.",
     "note": ""
    }
   ],
   "flags": [
    "TPER (transplant expense reimbursement) cap is $650 per month in Directive 5.1 but $1,500 per month in Directive 6.2. The two directives disagree.",
    "Directive 6.2 says 'The shelter allowance is intended for actual monthly shelter costs', so the estimate takes the lesser of actual verified costs and the maximum. Utilities and heating (9.3, 9.5) are not yet extracted.",
    "Joint ownership with a non-ODSP non-resident: full shelter is paid. Boarding/lodging situations are in Directive 6.3 (not yet extracted)."
   ]
  },
  {
   "file": "odsp_addons_rules.json",
   "title": "ODSP: pregnancy, special diet, heating, utilities, self-employment",
   "rules": [
    {
     "id": "odsp_preg_amount",
     "directive": "6.5",
     "directive_title": "Pregnancy/breast-feeding nutritional allowance",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/65-pregnancybreast",
     "kind": "deterministic",
     "quote": "Women who are pregnant or who are breast-feeding receive $40 per month for a lactose tolerant diet and $50 per month for a lactose intolerant diet in addition to any Special Diet Allowance for which they are eligible.",
     "note": ""
    },
    {
     "id": "odsp_preg_confirm",
     "directive": "6.5",
     "directive_title": "Pregnancy/breast-feeding nutritional allowance",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/65-pregnancybreast",
     "kind": "deterministic",
     "quote": "The Application for Pregnancy/Breast-feeding Nutritional Allowance (form 3109) is used to confirm that the member of the benefit unit is pregnant or, if the mother is breast-feeding, to confirm the need for a lactose intolerant diet.",
     "note": ""
    },
    {
     "id": "odsp_preg_duration",
     "directive": "6.5",
     "directive_title": "Pregnancy/breast-feeding nutritional allowance",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/65-pregnancybreast",
     "kind": "deterministic",
     "quote": "Where the mother is breast-feeding an infant under the age of 12 months, she is entitled to receive the Pregnancy/Breast-feeding Nutritional Allowance up to and including the 12th month after the birth of the child.",
     "note": ""
    },
    {
     "id": "odsp_preg_not_with_infant_diet",
     "directive": "6.5",
     "directive_title": "Pregnancy/breast-feeding nutritional allowance",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/65-pregnancybreast",
     "kind": "deterministic",
     "quote": "If a Special Diet Allowance is provided to the infant because it is not possible for the mother to breast-feed, a Pregnancy/Breast-feeding Nutritional Allowance cannot be provided to the mother.",
     "note": ""
    },
    {
     "id": "odsp_diet_max",
     "directive": "6.4",
     "directive_title": "Special diet",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/64-special-diet",
     "kind": "deterministic",
     "quote": "The maximum Special Diet Allowance is $250 per month, per member of the benefit unit.",
     "note": ""
    },
    {
     "id": "odsp_heat_in_shelter",
     "directive": "9.3",
     "directive_title": "Heating costs",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/93-heating-costs",
     "kind": "deterministic",
     "quote": "When heating costs are not included in the rental amount, they are added to the shelter calculation, up to the maximum shelter allowance, based on family size.",
     "note": ""
    },
    {
     "id": "odsp_heat_exceeds_max",
     "directive": "9.3",
     "directive_title": "Heating costs",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/93-heating-costs",
     "kind": "deterministic",
     "quote": "If the cost of heat alone exceeds the maximum shelter allowance, the actual heating cost is paid.",
     "note": ""
    },
    {
     "id": "odsp_heat_shared",
     "directive": "9.3",
     "directive_title": "Heating costs",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/93-heating-costs",
     "kind": "deterministic",
     "quote": "When a recipient is residing with another adult person(s), who is not a member of the benefit unit, the amount payable for heating is the total cost divided by the number of adults to derive an equal share for heating costs.",
     "note": ""
    },
    {
     "id": "odsp_util_in_shelter",
     "directive": "9.5",
     "directive_title": "Utilities",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/95-utilities",
     "kind": "deterministic",
     "quote": "Verified utility costs can be included in the shelter calculation if they are not included in the rent or accommodation cost.",
     "note": ""
    },
    {
     "id": "odsp_util_excluded",
     "directive": "9.5",
     "directive_title": "Utilities",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/95-utilities",
     "kind": "deterministic",
     "quote": "Utility costs do not include: refundable utility deposits; purchase associated with a hot water or propane tank; hook-up or monthly service charges for telephone or cable television unless these items are mandatory for a building's security system.",
     "note": ""
    },
    {
     "id": "odsp_util_credits_exempt",
     "directive": "9.5",
     "directive_title": "Utilities",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/95-utilities",
     "kind": "deterministic",
     "quote": "All such credits/benefits are exempt as income for social assistance purposes and should not reduce the amount of shelter allowance otherwise payable to the benefit unit.",
     "note": ""
    },
    {
     "id": "odsp_util_shared",
     "directive": "9.5",
     "directive_title": "Utilities",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/95-utilities",
     "kind": "deterministic",
     "quote": "The amount payable for utilities shall be divided by the number of adult persons and the costs equally shared when a recipient is residing with another adult person(s) who is not a member of the benefit unit.",
     "note": ""
    },
    {
     "id": "odsp_se_net",
     "directive": "5.4",
     "directive_title": "Self-employment",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/54-self-employment",
     "kind": "deterministic",
     "quote": "allowable business expenses are deducted from the gross business income to calculate net income. The earnings exemptions, child care deductions and a deduction for disability-related expenses as appropriate, are then applied to the net income to determine chargeable income.",
     "note": ""
    },
    {
     "id": "odsp_se_standard_expense",
     "directive": "5.4",
     "directive_title": "Self-employment",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/54-self-employment",
     "kind": "deterministic",
     "quote": "Standard expense deduction ($100): ODSP recipients reporting income from self-employment are allowed a basic deduction of $100 per month to cover miscellaneous expenses related to operating the business. ... Recipients must claim either the standard $100 per month expense deduction or actual business expenses, whichever is the greater amount.",
     "note": ""
    },
    {
     "id": "odsp_se_assets_20000",
     "directive": "5.4",
     "directive_title": "Self-employment",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/54-self-employment",
     "kind": "deterministic",
     "quote": "Business assets of up to $20,000 can be allowed if necessary for the operation of a business. The business asset limit of $20,000 is per benefit unit member, not per business.",
     "note": ""
    },
    {
     "id": "odsp_se_cash_5000",
     "directive": "5.4",
     "directive_title": "Self-employment",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/54-self-employment",
     "kind": "deterministic",
     "quote": "Cash is considered a business asset and cannot exceed $5,000 of the total business asset limit of $20,000.",
     "note": ""
    },
    {
     "id": "odsp_se_loss_zero",
     "directive": "5.4",
     "directive_title": "Self-employment",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/54-self-employment",
     "kind": "deterministic",
     "quote": "a business loss is equivalent to a net income of $0.00. Losses reported after the first year may not be carried forward",
     "note": ""
    },
    {
     "id": "odsp_se_work_related_benefit",
     "directive": "5.4",
     "directive_title": "Self-employment",
     "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/54-self-employment",
     "kind": "deterministic",
     "quote": "For each month that an ODSP recipient or eligible member of the benefit unit has a net positive income from the operation of a business, they are eligible for the $100 Work-Related Benefit.",
     "note": ""
    }
   ],
   "flags": [
    "The special diet allowance depends on a schedule of medical conditions with dollar amounts (Directive 6.4). Only the $250 monthly maximum is encoded; the screener tells users it exists and does not add it to the estimate.",
    "The pregnancy/breast-feeding allowance is encoded at $40 (the $50 lactose-intolerant rate is mentioned in the text only). The screener adds it once to the budget even if more than one person qualifies.",
    "For the double-disabled couple, the screener applies the $2,416 cap before adding the pregnancy allowance. Unclear whether the allowance sits inside or outside that cap.",
    "Directive 9.5 is dated November 2019 on the page; the Ontario Electricity Rebate and related credits may have changed. Not material to eligibility.",
    "The $100 Work-Related Benefit (Directive 9.18) was mentioned in 5.4 but 9.18 itself has not been read.",
    "Self-employment: the screener only uses the monthly revenue minus max($100, actual expenses). ODSP assesses business income annually and has many specific allowed/disallowed expenses; real figures can differ a lot.",
    "The same self-employment treatment is applied to Ontario Works in the screener as an approximation; OW's own business-income directive (Directive 5.4/4.4) has not been read and the screener flags this as unclear."
   ]
  },
  {
   "file": "ow_rules.json",
   "title": "Ontario Works: assets, vehicles, earnings, basic needs, shelter",
   "rules": [
    {
     "id": "ow_asset_limit",
     "directive": "4.2",
     "directive_title": "Asset limits",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/42-asset-limits",
     "kind": "deterministic",
     "quote": "No person is eligible for income assistance if his/her non-exempt assets, and the non-exempt assets of his/her spouse and any other dependents, exceed the allowable asset limits.",
     "note": ""
    },
    {
     "id": "ow_vehicle_one_exempt",
     "directive": "4.5",
     "directive_title": "Motor vehicles",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/45-motor-vehicles",
     "kind": "deterministic",
     "quote": "One motor vehicle of any value is exempt as an asset.",
     "note": ""
    },
    {
     "id": "ow_vehicle_additional",
     "directive": "4.5",
     "directive_title": "Motor vehicles",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/45-motor-vehicles",
     "kind": "discretionary",
     "quote": "Additional motor vehicles are exempt as assets up to a maximum value of $15,000 each if the applicant or recipient can show that each additional vehicle is required to enable other members of the benefit unit to participate in employment assistance activities or to maintain employment.",
     "note": ""
    },
    {
     "id": "ow_vehicle_calc",
     "directive": "4.5",
     "directive_title": "Motor vehicles",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/45-motor-vehicles",
     "kind": "deterministic",
     "quote": "If the value of the vehicle is more than $15,000, any loans or encumbrances against the vehicle should be deducted from its value. ... an additional deduction of $500 should be applied to reflect the vehicle's depreciation. After deducting any loans, encumbrances and depreciation, any portion of the value of a vehicle over the maximum of $15,000 should be considered an asset.",
     "note": ""
    },
    {
     "id": "ow_vehicle_six_months",
     "directive": "4.5",
     "directive_title": "Motor vehicles",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/45-motor-vehicles",
     "kind": "deterministic",
     "quote": "the recipient will have six months to sell the vehicle. After six months, if the vehicle has not been sold, the vehicle will be considered as an asset.",
     "note": ""
    },
    {
     "id": "ow_vehicle_leased_inoperative",
     "directive": "4.5",
     "directive_title": "Motor vehicles",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/45-motor-vehicles",
     "kind": "deterministic",
     "quote": "A leased vehicle does not have equity, cannot be converted to cash, and is not considered an asset. ... A motor vehicle that is inoperative (e.g., a vehicle without a motor) is not considered an asset.",
     "note": ""
    },
    {
     "id": "ow_earn_exemption",
     "directive": "5.3",
     "directive_title": "Earnings exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/53-earnings-exemptions",
     "kind": "deterministic",
     "quote": "the first $200 in net earnings that each adult member of the benefit unit earns from employment, operating a business, or from a training program, is exempt as income ... If a member's earnings are in excess of $200, then an additional 50% partial exemption is applied to their reduced earnings amount.",
     "note": ""
    },
    {
     "id": "ow_earn_waiting_period",
     "directive": "5.3",
     "directive_title": "Earnings exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/53-earnings-exemptions",
     "kind": "deterministic",
     "quote": "Earnings exemptions cannot be applied on income declared when determining initial eligibility for financial assistance at the time of application or during the first three months of receipt of financial assistance. The earnings exemptions can only be applied after three continuous months of being in receipt of Ontario Works or ODSP financial assistance.",
     "note": ""
    },
    {
     "id": "ow_earn_grace_reapply",
     "directive": "5.3",
     "directive_title": "Earnings exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/53-earnings-exemptions",
     "kind": "deterministic",
     "quote": "For re-applicants who exited Ontario Works (or ODSP) with income from employment, a business, or from a training program, the earnings exemptions can be applied immediately, if the reapplication is made within six months of exiting assistance.",
     "note": ""
    },
    {
     "id": "ow_earn_under_18_exempt",
     "directive": "5.3",
     "directive_title": "Earnings exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/53-earnings-exemptions",
     "kind": "deterministic",
     "quote": "The earnings of, or amounts paid under a training program to, all members of the benefit under the age of 18 are fully exempt income and therefore not subject to the three month waiting period.",
     "note": ""
    },
    {
     "id": "ow_earn_secondary_student_exempt",
     "directive": "5.3",
     "directive_title": "Earnings exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/53-earnings-exemptions",
     "kind": "deterministic",
     "quote": "Earnings of, and amounts paid under a training program to, members of a benefit unit over the age of 18 attending secondary school full-time are exempt as income and therefore not subject to the three month waiting period.",
     "note": ""
    },
    {
     "id": "ow_earn_postsecondary_exempt",
     "directive": "5.3",
     "directive_title": "Earnings exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/53-earnings-exemptions",
     "kind": "deterministic",
     "quote": "Earnings of, and amounts paid under a training program to, persons in full-time attendance in an approved program of post-secondary study are exempt as income. ... full-time attendance means the student is enrolled in at least 60% of a full course load",
     "note": ""
    },
    {
     "id": "ow_single_postsecondary_ineligible",
     "directive": "5.3",
     "directive_title": "Earnings exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/53-earnings-exemptions",
     "kind": "deterministic",
     "quote": "Single applicants or participants in full-time attendance at a certified post-secondary educational institution remain ineligible for Ontario Works assistance.",
     "note": ""
    },
    {
     "id": "ow_child_care_deduction",
     "directive": "5.3",
     "directive_title": "Earnings exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/53-earnings-exemptions",
     "kind": "deterministic",
     "quote": "The child care deduction is the sum of eligible monthly child care expenses incurred by participants that enable them to participate in employment or training programs. Participants do not need to be in receipt of assistance for three continuous months in order to qualify for child care deductions",
     "note": ""
    },
    {
     "id": "ow_dependent_adult_high_income",
     "directive": "5.3",
     "directive_title": "Earnings exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/53-earnings-exemptions",
     "kind": "deterministic",
     "quote": "The earnings exemptions do not apply to dependent adults whose net monthly income is greater than the maximum amount of assistance for a single person. In these situations, the dependent adult is removed from the benefit unit for that month.",
     "note": ""
    },
    {
     "id": "ow_ei_is_income",
     "directive": "5.3",
     "directive_title": "Earnings exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/53-earnings-exemptions",
     "kind": "deterministic",
     "quote": "Payments from EI should be treated as income. However, if these payments are clearly designated as a 'training allowance' ... and specifically received to participate in a training program, then the earnings exemptions may be applied.",
     "note": ""
    },
    {
     "id": "ow_basic_needs_purpose",
     "directive": "6.2",
     "directive_title": "Basic needs",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/62-basic-needs",
     "kind": "deterministic",
     "quote": "For each additional dependent, add $175 if dependent is 18 years or older.",
     "note": ""
    },
    {
     "id": "ow_advanced_age",
     "directive": "6.2",
     "directive_title": "Basic needs",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/62-basic-needs",
     "kind": "deterministic",
     "quote": "Each member of the benefit unit who is 65 years of age or older receives an Advanced Age Allowance of $44 per month.",
     "note": ""
    },
    {
     "id": "ow_shelter_actual_up_to_max",
     "directive": "6.3",
     "directive_title": "Shelter",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/63-shelter",
     "kind": "deterministic",
     "quote": "the shelter amount issued is the sum of the actual verified costs of shelter paid by him/her, up to the maximum amount for shelter (i.e., if actual shelter costs are less than the established maximum, then the lesser actual costs are paid).",
     "note": ""
    },
    {
     "id": "ow_shelter_ontario_area_only",
     "directive": "6.3",
     "directive_title": "Shelter",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/63-shelter",
     "kind": "deterministic",
     "quote": "The shelter allowance can only be paid for the dwelling place in the geographic area where an individual is receiving assistance.",
     "note": ""
    },
    {
     "id": "ow_shelter_renter_vs_boarder",
     "directive": "6.3",
     "directive_title": "Shelter",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/63-shelter",
     "kind": "deterministic",
     "quote": "If the applicant or recipient purchases and prepares their own food, he/she is considered a renter. If the landlord purchases and prepares the food, the applicant or recipient is considered a boarder.",
     "note": ""
    },
    {
     "id": "ow_shelter_parking_cable_excluded",
     "directive": "6.3",
     "directive_title": "Shelter",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/63-shelter",
     "kind": "deterministic",
     "quote": "Rent does not include the cost of parking or cable if these items are billed as unique and separate items from the rent.",
     "note": ""
    },
    {
     "id": "ow_shelter_electricity_credits_exempt",
     "directive": "6.3",
     "directive_title": "Shelter",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/63-shelter",
     "kind": "deterministic",
     "quote": "All such credits/benefits are exempt as income for social assistance purposes and should not reduce the amount of shelter allowance otherwise payable to the benefit unit.",
     "note": ""
    }
   ],
   "flags": [
    "The OW basic needs table lost its column labels when the page was converted to text. I reconstructed it from the number sequence: children add $0, and 1/2/3 adult dependants give $623/$781/$956 (recipient) and $652/$826/$1,001 (with spouse), a single recipient with no dependants $343 and with a spouse $494. This is an inference and must be checked against the live page.",
    "Directive 4.5 (OW) example 2 uses a $5,000 asset limit, which does not match 4.2 ($10,000 to $15,500). Likely an old example; the limit table in 4.2 is used.",
    "OW motor vehicle rules: the loan and $500 depreciation deductions are only stated when the vehicle's value is over $15,000.",
    "Not yet extracted: OW exempt assets list (Directive 4.1), real property (4.3), the 6.3 shelter table, income exemptions (5.1), residency and eligibility (3.x), sponsored immigrants (3.11), employment participation requirements (2.5).",
    "OW rule worth checking: the earnings exemption does not apply for the first three months of assistance, unlike ODSP where the exemptions apply from the start. The ODSP calculator does not include a waiting period; confirm that is right.",
    "OW shelter maximums ($390 single ... $844 for 6+) are far below ODSP's ($611 ... $1,259). Directive 6.3 text is dated July 2024; confirm these are the current amounts. RGI rent scales are not yet transcribed."
   ]
  },
  {
   "file": "ow_rules_2.json",
   "title": "Ontario Works: residency, sponsored immigrants, exempt assets, income",
   "rules": [
    {
     "id": "ow_res_ontario",
     "directive": "3.1",
     "directive_title": "Residency requirements",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/31-residency-requirements",
     "kind": "deterministic",
     "quote": "To be eligible for Ontario Works, an applicant or recipient must be a resident of Ontario, and must reside in the geographic area where they apply for or are receiving assistance.",
     "note": ""
    },
    {
     "id": "ow_res_length_irrelevant",
     "directive": "3.1",
     "directive_title": "Residency requirements",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/31-residency-requirements",
     "kind": "deterministic",
     "quote": "The length of time that an applicant has resided or plans to reside in a specific geographic area is not relevant for the purposes of eligibility.",
     "note": ""
    },
    {
     "id": "ow_res_homeless",
     "directive": "3.1",
     "directive_title": "Residency requirements",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/31-residency-requirements",
     "kind": "deterministic",
     "quote": "Assistance to a transient or homeless person cannot be refused on the basis that there is no fixed address or conventional, structural dwelling place.",
     "note": ""
    },
    {
     "id": "ow_res_absence",
     "directive": "3.1",
     "directive_title": "Residency requirements",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/31-residency-requirements",
     "kind": "discretionary",
     "quote": "If a recipient or member of the benefit unit is absent from Ontario for a period of more than seven days, assistance will be reduced or cancelled unless the Administrator has determined the absence to be necessary for health reasons or reasonable due to exceptional circumstances",
     "note": ""
    },
    {
     "id": "ow_status_tourist",
     "directive": "3.1",
     "directive_title": "Residency requirements",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/31-residency-requirements",
     "kind": "deterministic",
     "quote": "Tourists are people who are in Canada for a short period of time. They are not eligible for Ontario Works.",
     "note": ""
    },
    {
     "id": "ow_status_visitor",
     "directive": "3.1",
     "directive_title": "Residency requirements",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/31-residency-requirements",
     "kind": "deterministic",
     "quote": "Visitors are not eligible for Ontario Works unless they have made a claim for refugee protection or applied for status as a permanent resident under the federal Immigration and Refugee Protection Act (IRPA).",
     "note": ""
    },
    {
     "id": "ow_status_refugee_claimant",
     "directive": "3.1",
     "directive_title": "Residency requirements",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/31-residency-requirements",
     "kind": "deterministic",
     "quote": "In-Country (in-land and port of entry) refugee claimants with official documentation confirming they have made a claim for refugee protection are eligible for Ontario Works effective the date they initiated their claim with an immigration officer.",
     "note": ""
    },
    {
     "id": "ow_status_convention_refugee_rap",
     "directive": "3.1",
     "directive_title": "Residency requirements",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/31-residency-requirements",
     "kind": "deterministic",
     "quote": "Convention refugees are not eligible for Ontario Works during the period in which they are eligible for the RAP or the PSR and JAS programs. When the sponsorship/eligibility period for RAP expires or the private sponsorship concludes or breaks down, a convention refugee may be eligible for Ontario Works.",
     "note": ""
    },
    {
     "id": "ow_status_deportee",
     "directive": "3.1",
     "directive_title": "Residency requirements",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/31-residency-requirements",
     "kind": "discretionary",
     "quote": "Deportees may be eligible for Ontario Works only in situations where: a pre-removal risk assessment is pending; the removal order has been stayed; the individual has made an application to stay in Canada for humanitarian, compassionate or other reasons ...; the removal order cannot be carried out for reasons entirely beyond the control of the individual",
     "note": ""
    },
    {
     "id": "ow_sponsor_pursue",
     "directive": "3.11",
     "directive_title": "Sponsored immigrants",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/311-sponsored-immigrants",
     "kind": "deterministic",
     "quote": "As a condition of eligibility, a sponsored person must pursue all available financial resources, including support from their sponsor.",
     "note": ""
    },
    {
     "id": "ow_sponsor_not_ineligible",
     "directive": "3.11",
     "directive_title": "Sponsored immigrants",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/311-sponsored-immigrants",
     "kind": "deterministic",
     "quote": "An applicant or participant cannot be declared ineligible because the sponsor refuses to honour their obligation to provide support or refuses to provide requested information.",
     "note": ""
    },
    {
     "id": "ow_sponsor_partial_support",
     "directive": "3.11",
     "directive_title": "Sponsored immigrants",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/311-sponsored-immigrants",
     "kind": "deterministic",
     "quote": "If a sponsor provides partial support to a sponsored immigrant on social assistance, the amount that is received as support is treated as income and is deducted from the sponsored immigrant's social assistance dollar-for-dollar.",
     "note": ""
    },
    {
     "id": "ow_sponsor_waiver_temporary",
     "directive": "3.11",
     "directive_title": "Sponsored immigrants",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/311-sponsored-immigrants",
     "kind": "discretionary",
     "quote": "The requirement to pursue support from a sponsor may be temporarily waived for a period of 3-12 months depending on the individual merits of the case.",
     "note": ""
    },
    {
     "id": "ow_sponsor_waiver_permanent",
     "directive": "3.11",
     "directive_title": "Sponsored immigrants",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/311-sponsored-immigrants",
     "kind": "deterministic",
     "quote": "A sponsored immigrant is permanently waived from the requirement to pursue support from their sponsor if: the sponsor is in receipt of a payment under Part II of the Old Age Security Act (Canada), known as the federal supplement, or a payment under the Ontario Guaranteed Annual Income Act; the sponsor is deceased and there is no co-signer; ...",
     "note": ""
    },
    {
     "id": "ow_sponsor_shelter_with_sponsor",
     "directive": "3.11",
     "directive_title": "Sponsored immigrants",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/311-sponsored-immigrants",
     "kind": "deterministic",
     "quote": "Sponsored immigrants living with the sponsor or in a place owned or controlled by the sponsor: A shelter allowance is provided only if one of the following criteria is met: the sponsored immigrant has a legal obligation to pay shelter costs ...; the sponsored immigrant satisfies the Administrator that they cannot remain in the sponsor's residence ... unless they pay for shelter costs; the sponsor is in receipt of Ontario Works, ODSP, the Guaranteed Income Supplement (GIS) ... or GAINS",
     "note": ""
    },
    {
     "id": "ow_sponsor_apart",
     "directive": "3.11",
     "directive_title": "Sponsored immigrants",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/311-sponsored-immigrants",
     "kind": "deterministic",
     "quote": "There is no sponsorship deduction for sponsored immigrants who are living apart from their sponsors unless the sponsor is providing actual support (money or in-kind).",
     "note": ""
    },
    {
     "id": "ow_sponsor_debt",
     "directive": "3.11",
     "directive_title": "Sponsored immigrants",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/311-sponsored-immigrants",
     "kind": "deterministic",
     "quote": "Under IRPA, all social assistance received by a family class sponsored immigrant is considered a federal and provincial debt of the sponsor.",
     "note": "Affects the sponsor, not the applicant's eligibility. Worth telling users plainly: the sponsor, not the applicant, owes this debt."
    },
    {
     "id": "ow_asset_home_exempt",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "the principal residence for the benefit unit",
     "note": ""
    },
    {
     "id": "ow_asset_vehicle_first",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "one motor vehicle of any value",
     "note": ""
    },
    {
     "id": "ow_asset_tools_business",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "tools of the trade essential to the employment of a member of the benefit unit; for self-employed applicants or participants, business assets that are necessary to the operation of their business, up to the appropriate maximum",
     "note": ""
    },
    {
     "id": "ow_asset_pain_suffering",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "compensation for pain and suffering up to a maximum of $50,000",
     "note": ""
    },
    {
     "id": "ow_asset_resp",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "a Registered Education Savings Plan (RESP) held by a member of the benefit unit (as the 'subscriber') who is related to the beneficiary by blood, marriage or adoption",
     "note": ""
    },
    {
     "id": "ow_asset_locked_in",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "a locked-in Registered Retirement Savings Plan (RRSP) and/or pension",
     "note": ""
    },
    {
     "id": "ow_asset_rdsp",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "funds held in a Registered Disability Savings Plan (RDSP) as defined in subsection 146.4 (1) of the Income Tax Act (Canada)",
     "note": ""
    },
    {
     "id": "ow_asset_prepaid_funeral",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "a pre-paid funeral plan of any value",
     "note": ""
    },
    {
     "id": "ow_asset_trust_inaccessible",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "discretionary",
     "quote": "funds held in trust if they are not accessible to members of the benefit unit, and depending on the type of trust fund",
     "note": ""
    },
    {
     "id": "ow_asset_personal_use",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "Assets that are considered necessary for personal use such as furniture, clothing or a stove.",
     "note": ""
    },
    {
     "id": "ow_asset_savings_counted",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "Assets may include cash, as well as bonds, debentures, stocks, certificates, the cash surrender value of a life insurance policy, interest in property, a beneficial interest in assets held in trust and other property which can be readily converted into cash, even if a financial penalty must be incurred to do so.",
     "note": ""
    },
    {
     "id": "ow_asset_gift_home",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "Gifts or voluntary payments applied to the purchase of a principal residence - 12 months; applied to the purchase of an exempt vehicle or applied to first and last month's rent - 6 months",
     "note": ""
    },
    {
     "id": "ow_asset_odsp_limits",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "deterministic",
     "quote": "Ontario Works applicants and recipients who intend to apply for the ODSP can have ODSP asset limits and exemptions applied for the purposes of determining eligibility for Ontario Works if their non-exempt assets exceed Ontario Works asset limits. ... ODSP asset limits can only be applied once in a person's lifetime.",
     "note": ""
    },
    {
     "id": "ow_asset_transfer_lookback",
     "directive": "4.1",
     "directive_title": "Summary of assets",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/41-summary-assets",
     "kind": "discretionary",
     "quote": "Applicants or recipients who dispose of assets inadequately (i.e., for less than fair market value) or dispose of assets solely to qualify for assistance within one year preceding the application may be ineligible ... A review period of up to three years ... may be used where the Administrator has reason to deem it appropriate",
     "note": ""
    },
    {
     "id": "ow_asset_income_before_month",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "All money received prior to the month in which a person applies for assistance is considered an asset",
     "note": ""
    },
    {
     "id": "ow_inc_definition",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "income includes all payments received by or on behalf of a recipient, spouse and any dependents in the benefit unit ... unless specifically exempted.",
     "note": ""
    },
    {
     "id": "ow_inc_ccb_exempt",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "The CCB is exempt as income for the purposes of social assistance",
     "note": ""
    },
    {
     "id": "ow_inc_ocb_exempt",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "The Ontario Child Benefit (OCB), including the one-time down payment, is exempt as income for the purposes of social assistance.",
     "note": ""
    },
    {
     "id": "ow_inc_child_support_exempt",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "Child support payments",
     "note": ""
    },
    {
     "id": "ow_inc_cdb_exempt",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "A Canada Disability Benefit payment under the Canada Disability Benefit Act.",
     "note": ""
    },
    {
     "id": "ow_inc_cwb_exempt",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "the Canada Workers Benefit (CWB), formerly the Working Income Tax Benefit (WITB)",
     "note": ""
    },
    {
     "id": "ow_inc_tax_credits_exempt",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "Ontario Trillium Benefit ... Income Tax Act, section 122.5 (HST rebates) ... (Payments under the Ontario Income Tax Act, Income Tax Act, and Taxation Act, 2007 are exempt in the month received and considered assets in any following month.)",
     "note": ""
    },
    {
     "id": "ow_inc_rdsp_exempt",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "all payments/withdrawals from an RDSP for any purpose",
     "note": ""
    },
    {
     "id": "ow_inc_interest_30",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "interest and dividends earned to a maximum of $30 per year",
     "note": ""
    },
    {
     "id": "ow_inc_gifts_10000",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "gifts or voluntary payments up to a maximum of $10,000 over a 12-month period",
     "note": ""
    },
    {
     "id": "ow_inc_housing_benefit_exempt",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "All payments made under the Canada-Ontario Housing Benefit (COHB) program (e.g., housing allowances, payments for first/last month's rent).",
     "note": ""
    },
    {
     "id": "ow_inc_osap_education",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "the portion of a loan, grant, award, or bursary that is used for training or post-secondary education costs (e.g., tuition and books)",
     "note": ""
    },
    {
     "id": "ow_inc_ei_counts",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "Payments and benefits from Employment Insurance (EI) are considered as income.",
     "note": ""
    },
    {
     "id": "ow_inc_rental_60",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "Rental: if an applicant or recipient rents out self-contained quarters ... then 60% of the monthly amount received is included as income.",
     "note": "See OPEN_QUESTIONS.md item 4 (60%/40% wording)."
    },
    {
     "id": "ow_inc_board_lodging",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "Board and lodging ... 40% of the monthly amount received, or a minimum of $100 for each adult, whichever is greater, is included as income. Lodging ... 60% of the monthly amount received, or a minimum of $100 for each adult, whichever is greater",
     "note": ""
    },
    {
     "id": "ow_inc_month_received",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "Generally, income is considered income in the month received, and actual monthly amounts should be used rather than estimates or averages wherever possible.",
     "note": ""
    },
    {
     "id": "ow_inc_pursue_resources",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "discretionary",
     "quote": "applicants and recipients are required to make reasonable efforts to realize any financial resources to which they or their dependents may be owed or eligible to receive.",
     "note": ""
    },
    {
     "id": "ow_inc_gross_govt_pension",
     "directive": "5.1",
     "directive_title": "Income and exemptions",
     "url": "https://www.ontario.ca/document/ontario-works-policy-directives/51-income-and-exemptions",
     "kind": "deterministic",
     "quote": "The gross amount of government pensions are considered as income.",
     "note": ""
    }
   ],
   "flags": [
    "OW 5.1 lists dozens of specifically exempt payments (settlements, Indigenous programs, housing programs). Only the common ones are encoded as rules; the screener tells people to ask about anything else.",
    "OW 3.1 residency: the page says December 2021 (updated April 2026). Confirm there have been no recent changes to who counts as a visitor.",
    "The screener treats 'convention refugee in the resettlement period (RAP/PSR/JAS)' as unclear, not a firm no, because the status question does not ask about it.",
    "OW 4.1 exempt assets: the screener only has input fields for the main asset types. A household with other assets (for example settlement money) is told to ask.",
    "The $30/year interest and dividend exemption is not modelled (the screener asks for monthly income only; the effect is immaterial)."
   ]
  }
 ],
 "numbers": [
  {
   "label": "ODSP asset limits: single / couple / each dependant",
   "value": "$40,000 / $50,000 / +$500",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/41-definition-and"
  },
  {
   "label": "ODSP basic needs: single recipient",
   "value": "$825 a month",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/61-basic-needs"
  },
  {
   "label": "ODSP basic needs: couple / couple both with disabilities",
   "value": "$1,189 / $1,644",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/61-basic-needs"
  },
  {
   "label": "ODSP basic needs: 1 adult dependant (alone / with spouse / both disabled)",
   "value": "$1,280 / $1,422 / $1,877",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/61-basic-needs"
  },
  {
   "label": "ODSP basic needs: 2 adult dependants (alone / with spouse / both disabled)",
   "value": "$1,514 / $1,681 / $2,136",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/61-basic-needs"
  },
  {
   "label": "ODSP extra per adult dependant beyond the table; per child",
   "value": "$260; $0",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/61-basic-needs"
  },
  {
   "label": "ODSP sole-support parent supplement",
   "value": "$143 a month",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/61-basic-needs"
  },
  {
   "label": "ODSP couple (both disabled) cap",
   "value": "$2,416 a month",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/61-basic-needs"
  },
  {
   "label": "ODSP shelter maximums by household size 1 / 2 / 3 / 4 / 5 / 6+",
   "value": "$611 / $959 / $1,038 / $1,126 / $1,215 / $1,259",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/62-shelter-calculation"
  },
  {
   "label": "ODSP pregnancy / breast-feeding allowance",
   "value": "$40 ($50 lactose-intolerant)",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/65-pregnancybreast"
  },
  {
   "label": "ODSP special diet maximum",
   "value": "$250 a month per person",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/64-special-diet"
  },
  {
   "label": "ODSP business assets limit; cash within it",
   "value": "$20,000; $5,000",
   "url": "https://www.ontario.ca/document/ontario-disability-support-program-policy-directives-income-support/54-self-employment"
  },
  {
   "label": "OW asset limits: single / couple",
   "value": "$10,000 / $15,000",
   "url": "https://www.ontario.ca/document/ontario-works-policy-directives/42-asset-limits"
  },
  {
   "label": "OW asset limits: one dependant (no spouse) / couple + one dependant / each additional",
   "value": "$10,500 / $15,500 / +$500",
   "url": "https://www.ontario.ca/document/ontario-works-policy-directives/42-asset-limits"
  },
  {
   "label": "OW basic needs: single / couple",
   "value": "$343 / $494",
   "url": "https://www.ontario.ca/document/ontario-works-policy-directives/62-basic-needs"
  },
  {
   "label": "OW basic needs: single parent with children",
   "value": "$360",
   "url": "https://www.ontario.ca/document/ontario-works-policy-directives/62-basic-needs"
  },
  {
   "label": "OW basic needs: recipient with 1 / 2 / 3 adult dependants (alone)",
   "value": "$623 / $781 / $956",
   "url": "https://www.ontario.ca/document/ontario-works-policy-directives/62-basic-needs"
  },
  {
   "label": "OW basic needs: recipient with spouse and 1 / 2 / 3 adult dependants",
   "value": "$652 / $826 / $1,001",
   "url": "https://www.ontario.ca/document/ontario-works-policy-directives/62-basic-needs"
  },
  {
   "label": "OW extra per adult dependant beyond 3; age 65+ allowance",
   "value": "$175; $44",
   "url": "https://www.ontario.ca/document/ontario-works-policy-directives/62-basic-needs"
  },
  {
   "label": "OW shelter maximums by household size 1 / 2 / 3 / 4 / 5 / 6+",
   "value": "$390 / $642 / $697 / $756 / $815 / $844",
   "url": "https://www.ontario.ca/document/ontario-works-policy-directives/63-shelter"
  },
  {
   "label": "OW earnings exemption",
   "value": "first $200 + 50% of the rest, after 3 months on assistance",
   "url": "https://www.ontario.ca/document/ontario-works-policy-directives/53-earnings-exemptions"
  }
 ]
};
