"""List the visible form controls on a page. Usage: python probe.py URL"""
import sys
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    b = p.chromium.launch(channel="msedge", headless=True)
    pg = b.new_page()
    pg.goto(sys.argv[1], wait_until="networkidle", timeout=60000)
    pg.wait_for_timeout(1500)
    print("TITLE", pg.title())
    print(pg.inner_text("body")[:6000])
    print("--- controls")
    for el in pg.query_selector_all("input, select, textarea, button"):
        if el.is_visible():
            print(el.evaluate("e=>[e.tagName,e.type,e.id,e.name,(e.innerText||e.value||'').slice(0,40),e.getAttribute('aria-label')]"))
    b.close()
