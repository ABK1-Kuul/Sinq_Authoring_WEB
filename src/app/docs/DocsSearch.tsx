"use client";

import { Search } from "lucide-react";

export function DocsSearch() {
  return (
    <div className="glass rounded-xl border border-white/5 p-3">
      <div className="flex items-center gap-3">
        <Search className="h-4 w-4 shrink-0 text-zinc-500" />
        <input
          type="search"
          placeholder="Search documentation... (UI only)"
          disabled
          className="w-full bg-transparent text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none disabled:cursor-not-allowed"
          aria-label="Search documentation"
        />
      </div>
    </div>
  );
}
