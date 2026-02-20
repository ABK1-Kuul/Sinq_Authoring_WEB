"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Puzzle, Database } from "lucide-react";
import { Step } from "@/components/Step";
import { CodeBlock } from "@/components/CodeBlock";
import { GitHubStats } from "@/components/GitHubStats";
import type { GitHubStatsData } from "@/lib/github";

const ROADMAP = {
  planned: [
    { title: "macOS/Linux native builds", desc: "Cross-platform Electron targets" },
    { title: "Cloud-sync beta", desc: "Optional course backup & sync" },
  ],
  inProgress: [
    { title: "Plugin marketplace UI", desc: "Discover and install plugins" },
    { title: "Performance profiling", desc: "Build and render optimization" },
  ],
  shipped: [
    { title: "Production Readiness Audit", desc: "Full security & reliability review" },
    { title: "Security Hardening", desc: "CSP, navigation locking, URL allowlisting" },
    { title: "GitHub Actions CI/CD", desc: "Automated builds and releases" },
  ],
};

const FAQ = [
  {
    q: "How do I add a new plugin?",
    a: "Plugins are managed by the Adapt Framework. Add the plugin to your course's adapt.json or use the authoring UI's plugin manager. For development, place plugin source in the plugins directory and register it in the course configuration. See the Plugin Guide in our docs for details.",
    icon: Puzzle,
  },
  {
    q: "How is the local database managed?",
    a: "SINQ bundles a MongoDB instance that runs locally. The database stores course content, user accounts, and configuration. It's initialized on first run and persists in the app's data directory. No external MongoDB setup is required—everything runs in-process.",
    icon: Database,
  },
  {
    q: "How do I run the backend and frontend separately?",
    a: "The dev setup uses cross-env for platform-agnostic scripts. Run npm run dev to build the frontend and launch Electron. For backend-only development, you can start the Express server directly from the backend directory. Check package.json scripts for available commands.",
    icon: Play,
  },
];

interface ContributeClientProps {
  githubStats: GitHubStatsData;
}

export function ContributeClient({ githubStats }: ContributeClientProps) {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-lg font-semibold text-white hover:text-accent-electric transition-colors"
          >
            SINQ Authoring
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/architecture"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Architecture
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/contribute"
              className="text-sm font-medium text-accent-electric"
            >
              Contribute
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Join the <span className="bg-gradient-to-r from-accent-electric to-accent-violet bg-clip-text text-transparent">Community</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            SINQ is built by contributors like you. Whether you&apos;re fixing a typo,
            adding a feature, or shaping the roadmap—there&apos;s a place for you here.
            Elite contributions, zero gatekeeping.
          </p>
        </motion.div>

        {/* Contributor Journey */}
        <section className="mb-24">
          <h2 className="mb-2 text-2xl font-semibold text-white">
            Contributor Journey
          </h2>
          <p className="mb-12 text-zinc-400">
            Four steps from clone to merged PR. You&apos;ve got this.
          </p>

          <div className="space-y-0">
            <Step number={1} title="Fork & Clone">
              <p>
                Fork the repository on GitHub, then clone your fork locally. Use
                the upstream remote to stay in sync with the main project.
              </p>
              <CodeBlock
                code={`git clone https://github.com/YOUR_USERNAME/SinqAuthoringTool.git
cd SinqAuthoringTool
git remote add upstream https://github.com/ABK1-Kuul/SinqAuthoringTool.git`}
                language="bash"
                className="mt-4"
              />
            </Step>

            <Step number={2} title="Install Dependencies">
              <p>
                We use Node.js 18 or later. Install dependencies with npm.
                MongoDB is bundled for the portable build—no separate install
                needed for development.
              </p>
              <CodeBlock code="npm install" language="bash" className="mt-4" />
            </Step>

            <Step number={3} title="Run Dev Mode">
              <p>
                Start the app in development mode. We use cross-env for
                platform-agnostic scripts, so the same commands work on
                Windows, macOS, and Linux.
              </p>
              <CodeBlock code="npm run dev" language="bash" className="mt-4" />
            </Step>

            <Step number={4} isLast title="Branch & Pull Request">
              <p>
                Create a descriptive branch (e.g., <code>fix/plugin-loading</code> or{" "}
                <code>feat/dark-mode-toggle</code>), make your changes, and open a
                pull request. Clear titles and descriptions help maintainers
                review faster. We welcome first-time contributors.
              </p>
            </Step>
          </div>
        </section>

        {/* GitHub Stats */}
        <section className="mb-24">
          <GitHubStats data={githubStats} />
        </section>

        {/* Roadmap */}
        <section className="mb-24">
          <h2 className="mb-2 text-2xl font-semibold text-white">Roadmap</h2>
          <p className="mb-12 text-zinc-400">
            Where we&apos;re headed. Your input shapes the priorities.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                column: "Planned",
                items: ROADMAP.planned,
                className: "border-zinc-600/50",
                headerClass: "text-zinc-400",
              },
              {
                column: "In Progress",
                items: ROADMAP.inProgress,
                className: "border-accent-electric/30",
                headerClass: "text-accent-electric",
              },
              {
                column: "Shipped",
                items: ROADMAP.shipped,
                className: "border-emerald-500/30",
                headerClass: "text-emerald-400",
              },
            ].map((col) => (
              <motion.div
                key={col.column}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`glass rounded-2xl border p-6 ${col.className}`}
              >
                <h3 className={`mb-4 text-sm font-semibold uppercase tracking-wider ${col.headerClass}`}>
                  {col.column}
                </h3>
                <ul className="space-y-4">
                  {col.items.map((item) => (
                    <li key={item.title} className="border-l-2 border-white/5 pl-4">
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Developer FAQ */}
        <section className="mb-16">
          <h2 className="mb-2 text-2xl font-semibold text-white">
            Developer FAQ
          </h2>
          <p className="mb-12 text-zinc-400">
            Common questions from folks digging into the codebase.
          </p>

          <div className="space-y-6">
            {FAQ.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover rounded-xl border border-white/5 p-6 transition-all"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-electric/10">
                    <faq.icon className="h-5 w-5 text-accent-electric" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-white">{faq.q}</h3>
                    <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-zinc-400">
            Ready to make your first contribution?
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/ABK1-Kuul/SinqAuthoringTool/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3 font-medium text-zinc-300 transition-all"
            >
              Browse Issues
            </Link>
            <Link
              href="https://github.com/ABK1-Kuul/SinqAuthoringTool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-electric to-accent-violet px-6 py-3 font-medium text-white transition-all hover:opacity-90"
            >
              Open on GitHub
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
