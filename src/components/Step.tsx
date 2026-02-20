"use client";

import { motion } from "framer-motion";

interface StepProps {
  number: number;
  title?: string;
  children: React.ReactNode;
  isLast?: boolean;
}

export function Step({ number, title, children, isLast = false }: StepProps) {
  return (
    <div className="relative flex gap-6">
      {/* Vertical line */}
      {!isLast && (
        <div
          className="absolute left-[15px] top-10 bottom-0 w-px bg-gradient-to-b from-accent-electric/60 to-transparent"
          aria-hidden
        />
      )}

      {/* Numbered circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent-electric/60 bg-charcoal-800 text-sm font-semibold text-accent-electric"
      >
        {number}
      </motion.div>

      {/* Content */}
      <div className="flex-1 pb-10">
        {title && (
          <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        )}
        <div className="text-zinc-400 [&>p]:mb-3 [&>p:last-child]:mb-0 [&>p_code]:rounded [&>p_code]:bg-white/10 [&>p_code]:px-1.5 [&>p_code]:py-0.5 [&>p_code]:font-mono [&>p_code]:text-sm [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
}
