import sys, re, html
src, dst = sys.argv[1], sys.argv[2]
t = open(src, encoding="utf-8", errors="replace").read()
m = re.search(r'<main.*?</main>', t, re.S)
t = m.group(0) if m else t
t = re.sub(r'<(script|style|nav|header|footer)\b.*?</\1>', '', t, flags=re.S)
t = re.sub(r'</(p|li|h\d|tr|div|table)>', '\n', t)
t = re.sub(r'<li[^>]*>', '- ', t)
t = re.sub(r'<[^>]+>', '', t)
t = html.unescape(t)
t = re.sub(r'\n\s*\n+', '\n', t)
open(dst, 'w', encoding='utf-8').write(t)
print(dst, len(t))
