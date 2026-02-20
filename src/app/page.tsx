"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  Layout,
  Eye,
  Zap,
  Github,
  Sparkles,
} from "lucide-react";

const GITHUB_RELEASES_URL =
  "https://github.com/adaptlearning/adapt_authoring/releases";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-charcoal-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <span className="text-lg font-semibold text-white">SINQ Authoring</span>
          <nav className="flex gap-6">
            <Link href="/architecture" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Architecture
            </Link>
            <Link href="/docs" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Docs
            </Link>
            <Link href="/contribute" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Contribute
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Subtle gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-electric/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-violet/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent-electric" />
            <span className="text-sm font-medium text-zinc-300">
              Ultimate Adapt Course Builder
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">SINQ</span>
            <span className="bg-gradient-to-r from-accent-electric via-accent-violet to-accent-blue bg-clip-text text-transparent">
              {" "}
              Authoring Tool
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Create stunning, responsive eLearning courses with visual editing,
            instant previews, and the power of the Adapt Framework—all in one
            desktop app.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={GITHUB_RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-electric via-accent-violet to-accent-blue text-white font-semibold text-lg shadow-lg shadow-accent-electric/25 hover:shadow-accent-violet/30 transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download for Windows (.exe)
            </a>
            <a
              href="https://github.com/adaptlearning/adapt_authoring"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl glass glass-hover text-zinc-300 font-medium transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Why SINQ Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
          >
            Why <span className="text-accent-electric">SINQ</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-center max-w-2xl mx-auto mb-16"
          >
            Everything you need to build professional Adapt courses—without the
            complexity.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Layout,
                title: "Visual Editing",
                description:
                  "Drag-and-drop interface to design courses intuitively. No coding required—build blocks, menus, and content visually.",
                gradient: "from-accent-electric to-accent-blue",
              },
              {
                icon: Eye,
                title: "Instant Previews",
                description:
                  "See your changes live as you build. Preview courses in real-time across devices before publishing.",
                gradient: "from-accent-violet to-accent-electric",
              },
              {
                icon: Zap,
                title: "Cross-Platform Power",
                description:
                  "Export to the full Adapt Framework. Deploy anywhere—SCORM, xAPI, or standalone. One tool, endless possibilities.",
                gradient: "from-accent-blue to-accent-violet",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-8 border border-white/5 transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zinc-500 text-sm">
            SINQ Authoring Tool · Built on the{" "}
            <a
              href="https://www.adaptlearning.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-electric hover:text-accent-violet transition-colors"
            >
              Adapt Framework
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
