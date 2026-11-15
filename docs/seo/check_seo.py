#!/usr/bin/env python3
"""Read-only metadata check for four priority pages."""
from pathlib import Path
from html.parser import HTMLParser
import sys

PAGES = ("index.html", "papers/le-deuxieme-sceau.html", "papers/le-troisieme-sceau.html", "papers/le-quatrieme-sceau.html")
BASE = "https://ecole-celtique.fr/"

class Head(HTMLParser):
    def __init__(self):
        super().__init__()
        self.inside = False
        self.title = False
        self.titles = []
        self.descriptions = []
        self.canonicals = []
    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if tag == "head": self.inside = True
        if not self.inside: return
        if tag == "title": self.title = True
        if tag == "link" and d.get("rel", "").lower() == "canonical":
            self.canonicals.append(d.get("href", ""))
        if tag == "meta" and d.get("name", "").lower() == "description":
            self.descriptions.append(d.get("content", ""))
    def handle_endtag(self, tag):
        if tag == "title": self.title = False
        if tag == "head": self.inside = False
    def handle_data(self, data):
        if self.title: self.titles.append(data)

def main():
    root = Path(__file__).resolve().parents[2]
    failures = 0
    for rel in PAGES:
        path = root / rel
        if not path.is_file():
            print("FAIL", rel, "missing file")
            failures += 1
            continue
        h = Head()
        h.feed(path.read_text(encoding="utf-8"))
        expected = BASE if rel == "index.html" else BASE + rel
        valid = (h.canonicals == [expected] and
                 len(h.descriptions) == 1 and bool(h.descriptions[0].strip()) and
                 bool("".join(h.titles).strip()))
        print("PASS" if valid else "FAIL", rel)
        failures += not valid
    return int(bool(failures))

if __name__ == "__main__":
    sys.exit(main())
