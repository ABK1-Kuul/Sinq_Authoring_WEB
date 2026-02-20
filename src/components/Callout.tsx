"use client";

import { AlertTriangle, Info, Lightbulb } from "lucide-react";

type CalloutType = "warning" | "note" | "tip";

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const config: Record<
  CalloutType,
  { icon: typeof AlertTriangle; label: string; className: string }
> = {
  warning: {
    icon: AlertTriangle,
    label: "Warning",
    className:
      "border-amber-500/30 bg-amber-500/5 [&_.callout-icon]:text-amber-400",
  },
  note: {
    icon: Info,
    label: "Note",
    className:
      "border-accent-blue/30 bg-accent-blue/5 [&_.callout-icon]:text-accent-blue",
  },
  tip: {
    icon: Lightbulb,
    label: "Tip",
    className:
      "border-emerald-500/30 bg-emerald-500/5 [&_.callout-icon]:text-emerald-400",
  },
};

export function Callout({ type, title, children }: CalloutProps) {
  const { icon: Icon, label, className } = config[type];

  return (
    <div
      className={`glass rounded-xl border p-4 ${className}`}
      role="alert"
      aria-label={title ?? label}
    >
      <div className="flex gap-3">
        <Icon className="callout-icon mt-0.5 h-5 w-5 shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="mb-1 font-semibold text-white">
            {title ?? label}
          </p>
          <div className="text-sm text-zinc-400 [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:space-y-1 [&>ol]:list-decimal [&>ol]:pl-4 [&>ol]:space-y-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
