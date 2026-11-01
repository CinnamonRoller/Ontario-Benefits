import json, os, sys

here = os.path.dirname(os.path.abspath(__file__))
B = json.load(open(os.path.join(here, "basic_needs.json"), encoding="utf-8"))


def basic_needs(adults18, children, spouse=False, both_disabled=False):
    """Monthly basic needs (+ sole-support supplement). Excludes shelter and other allowances."""
    col = 2 if (spouse and both_disabled) else 1 if spouse else 0
    # Children add $0, so only the count of adult dependants picks the row.
    key = {0: "0,0", 1: "1,0", 2: "2,0"}.get(adults18)
    if key is not None:
        amt = B["table"][key][col]
    else:
        amt = B["table"]["2,0"][col] + (adults18 - 2) * B["per_additional_adult_dependant"]
    if not spouse and children > 0 and adults18 == 0:
        amt += B["sole_support_parent_supplement"]
    return amt


CASES = [
    ("single, no dependants", basic_needs(0, 0), 825),
    ("couple, no dependants", basic_needs(0, 0, spouse=True), 1189),
    ("double-disabled couple", basic_needs(0, 0, spouse=True, both_disabled=True), 1644),
    ("single parent, 1 child under 18 (825 + 143)", basic_needs(0, 1), 968),
    ("single with 1 adult dependant", basic_needs(1, 0), 1280),
    ("couple with 2 adult dependants", basic_needs(2, 0, spouse=True), 1681),
    ("single parent, 2 children (825 + 143)", basic_needs(0, 2), 968),
    ("single with 1 adult dependant + 2 children", basic_needs(1, 2), 1280),
    ("couple, 3 children", basic_needs(0, 3, spouse=True), 1189),
    ("single with 3 adult dependants (2,0 row + 260)", basic_needs(3, 0), 1774),
]
bad = 0
for name, got, exp in CASES:
    ok = got == exp
    bad += not ok
    print(("PASS  " if ok else "FAIL  ") + f"{name} -> {got} (expected {exp})")
sys.exit(bad)
