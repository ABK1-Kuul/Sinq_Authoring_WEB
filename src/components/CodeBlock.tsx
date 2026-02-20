"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language, className = "" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`group relative ${className}`}>
      {language && (
        <span className="absolute right-12 top-3 text-xs text-zinc-500">
          {language}
        </span>
      )}
      <pre className="overflow-x-auto rounded-xl border border-white/10 bg-charcoal-900/80 px-6 py-4 text-sm text-zinc-300">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 rounded-lg bg-white/5 px-2 py-1.5 text-zinc-400 opacity-0 transition-opacity hover:bg-white/10 hover:text-white group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
