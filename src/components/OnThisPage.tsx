"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Heading {
  id: string;
  text: string;
  level: number; // 2 for h2, 3 for h3
}

export function OnThisPage({ contentRef }: { contentRef?: React.RefObject<HTMLElement> }) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const container = contentRef?.current ?? document.querySelector("main article, main [data-docs-content]") ?? document.querySelector("main");
    if (!container) return;

    const elements = container.querySelectorAll("h2, h3");
    const items: Heading[] = [];
    elements.forEach((el) => {
      const id = el.id || (el.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") ?? "");
      if (!el.id) el.id = id;
      items.push({
        id,
        text: el.textContent ?? "",
        level: parseInt(el.tagName.charAt(1), 10),
      });
    });
    setHeadings(items);
  }, [contentRef]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24" aria-label="On this page">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        On this page
      </p>
      <ul className="space-y-2 border-l border-white/10 pl-4">
        {headings.map((h) => (
          <li
            key={h.id}
            style={{ paddingLeft: (h.level - 2) * 12 }}
            className="text-sm"
          >
            <Link
              href={`#${h.id}`}
              className="text-zinc-400 hover:text-accent-electric transition-colors"
            >
              {h.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
