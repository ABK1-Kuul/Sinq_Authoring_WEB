"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Github, Box, Shield, Zap } from "lucide-react";

const GITHUB_REPO = "https://github.com/ABK1-Kuul/SinqAuthoringTool";

interface LandingClientProps {
  downloadUrl: string;
  version: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const FEATURES = [
  {
    icon: Box,
    title: "Packaging",
    description:
      "Zero-config installation. One portable executable with embedded MongoDB—no servers, no cloud, no setup wizard.",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Hardened for desktop. CSP, navigation locking, and secure session handling. Your courses stay local.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Instant previews, fast builds. The full Adapt Framework, optimized for a snappy authoring experience.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
];

export function LandingClient({ downloadUrl, version }: LandingClientProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0b]">
      {/* Header - Premium minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-[15px] font-medium text-white tracking-tight"
          >
            SINQ Authoring
          </Link>
          <nav className="flex items-center gap-8">
            <Link
              href="/architecture"
              className="text-[13px] text-zinc-500 hover:text-white transition-colors"
            >
              Architecture
            </Link>
            <Link
              href="/docs"
              className="text-[13px] text-zinc-500 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/contribute"
              className="text-[13px] text-zinc-500 hover:text-white transition-colors"
            >
              Contribute
            </Link>
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-3xl" />
          <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-cyan-500/[0.05] blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-1/2" />
        </div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Adapt Authoring,{" "}
            <span className="text-zinc-400">Simplified.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed sm:text-xl"
          >
            The power of the Adapt Framework, packaged into a zero-config
            Windows application.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-black font-medium text-[15px] hover:bg-zinc-200 transition-all duration-200 shadow-lg shadow-white/5"
            >
              <Download className="h-5 w-5" />
              Download for Windows
            </a>
            <span className="text-[13px] text-zinc-600">
              {version}
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-colors hover:border-white/[0.1] hover:bg-white/[0.03]"
              >
                <div
                  className={`inline-flex rounded-xl p-3 ${feature.gradient} mb-6`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-[17px] font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-zinc-600">
            SINQ Authoring Tool · Built on the{" "}
            <a
              href="https://www.adaptlearning.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Adapt Framework
            </a>
          </p>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <Github className="h-4 w-4" />
            ABK1-Kuul/SinqAuthoringTool
          </a>
        </div>
      </footer>
    </main>
  );
}
