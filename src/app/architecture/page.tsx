"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Server, Database, Shield, FileCode, Layers } from "lucide-react";
import Link from "next/link";

const LAYERS = [
  {
    id: "layer1",
    title: "Layer 1: Electron Frontend",
    tech: ["React", "Tailwind CSS", "Desktop Shell"],
    description:
      "The frontend provides the visual authoring interface. Built with React and Tailwind, it runs inside an Electron desktop shell for a native app experience. Handles UI state, course preview rendering, and user interactions.",
    icon: Monitor,
    gradient: "from-accent-electric to-accent-blue",
  },
  {
    id: "layer2",
    title: "Layer 2: Local Backend",
    tech: ["Node.js", "Express", "Authoring Engine"],
    description:
      "The backend handles course logic, plugin management, and asset processing. It serves the authoring API, manages file operations, and orchestrates the Adapt build pipeline. All processing runs locally—no cloud dependency.",
    icon: Server,
    gradient: "from-accent-violet to-accent-electric",
  },
  {
    id: "layer3",
    title: "Layer 3: Embedded Data",
    tech: ["Local MongoDB", "Course Data", "Assets"],
    description:
      "A bundled MongoDB instance stores course content, user data, and configuration. Courses, plugins, and media assets are persisted locally. Zero external database setup required.",
    icon: Database,
    gradient: "from-accent-blue to-accent-violet",
  },
];

const CORE_PILLARS = [
  {
    icon: Shield,
    title: "Security Hardening",
    description:
      "Strict CSP (Content Security Policy), navigation locking, and URL allowlisting prevent injection and unauthorized navigation. The app only loads trusted origins.",
  },
  {
    icon: FileCode,
    title: "Cross-Platform Pathing",
    description:
      "Path resolution uses Node.js path APIs and platform-aware separators. Ensures consistent behavior across Windows, macOS, and Linux during builds and file operations.",
  },
  {
    icon: Layers,
    title: "Production Readiness",
    description:
      "CSP headers, secure session handling, and hardened Express configuration. The architecture is designed for desktop deployment with minimal attack surface.",
  },
];

export default function ArchitecturePage() {
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
              className="text-sm font-medium text-accent-electric"
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
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Contribute
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            System <span className="bg-gradient-to-r from-accent-electric to-accent-violet bg-clip-text text-transparent">Architecture</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            SINQ Authoring Tool is built as a three-layer desktop application. Each layer has a clear responsibility and communicates through well-defined interfaces.
          </p>
        </motion.div>

        {/* Interactive Stack Diagram */}
        <section className="mb-24">
          <h2 className="mb-10 text-2xl font-semibold text-white">
            Interactive Stack Diagram
          </h2>

          <div className="relative flex flex-col gap-2">
            {LAYERS.map((layer, index) => (
              <LayerCard key={layer.id} layer={layer} index={index} />
            ))}
          </div>
        </section>

        {/* Core Pillars - Production Readiness */}
        <section className="mb-16">
          <h2 className="mb-10 text-2xl font-semibold text-white">
            Core Pillars: Production Readiness
          </h2>
          <p className="mb-10 max-w-2xl text-zinc-400">
            The architecture incorporates production-grade improvements for security, portability, and reliability.
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {CORE_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl border border-white/5 p-6 transition-all duration-300"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-accent-electric/20 to-accent-violet/20 p-3">
                  <pillar.icon className="h-6 w-6 text-accent-electric" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-electric to-accent-violet px-6 py-3 font-medium text-white transition-all hover:opacity-90"
          >
            Read the Documentation →
          </Link>
        </div>
      </div>
    </main>
  );
}

function LayerCard({
  layer,
  index,
}: {
  layer: (typeof LAYERS)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = layer.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      <div
        className={`glass rounded-2xl border p-8 transition-all duration-300 ${
          hovered ? "border-accent-electric/30 bg-charcoal-800/80" : "border-white/5"
        }`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div
              className={`inline-flex rounded-xl bg-gradient-to-br ${layer.gradient} p-3`}
            >
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {layer.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-white/5 px-2 py-1 text-xs font-medium text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <p className="mt-6 border-t border-white/10 pt-6 text-sm text-zinc-400 leading-relaxed">
                {layer.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Flow indicator arrow between layers */}
      {index < LAYERS.length - 1 && (
        <div className="flex justify-center py-2">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-4 w-px bg-gradient-to-b from-accent-electric/60 to-transparent"
          />
        </div>
      )}
    </motion.div>
  );
}
