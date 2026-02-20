"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface DocsNavProps {
  items: { href: string; label: string }[];
  mobile?: boolean;
}

export function DocsNav({ items, mobile }: DocsNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={mobile ? "glass rounded-xl p-4 lg:hidden" : "sticky top-24"}
      aria-label="Documentation"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        Documentation
      </p>
      <ul className="space-y-1">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-accent-electric/10 text-accent-electric font-medium"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
