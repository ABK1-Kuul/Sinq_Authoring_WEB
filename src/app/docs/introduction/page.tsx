import { Callout } from "@/components/Callout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction | SINQ Authoring Docs",
  description: "Get started with SINQ Authoring Tool for building Adapt eLearning courses.",
};

export default function IntroductionPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white">Introduction</h1>

      <p className="lead mt-4 text-lg text-zinc-400">
        SINQ Authoring Tool is a desktop application for creating responsive
        eLearning courses using the Adapt Framework. It combines a visual
        authoring interface with a local backend and embedded database—no cloud
        required.
      </p>

      <h2 id="what-is-sinq">What is SINQ?</h2>
      <p>
        SINQ provides a streamlined authoring experience for the Adapt Framework.
        Build courses with blocks, menus, and plugins through an intuitive UI.
        Preview changes instantly and export to SCORM, xAPI, or standalone HTML.
      </p>

      <h2 id="key-features">Key Features</h2>
      <ul>
        <li>Visual drag-and-drop course builder</li>
        <li>Instant preview across device breakpoints</li>
        <li>Local MongoDB—no external database setup</li>
        <li>Plugin system for extending functionality</li>
        <li>Windows desktop app (.exe) for easy distribution</li>
      </ul>

      <Callout type="tip" title="Quick Start">
        Download the latest release from{" "}
        <a
          href="https://github.com/ABK1-Kuul/SinqAuthoringTool/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Releases
        </a>
        , run the installer, and follow the setup wizard. No additional
        configuration needed.
      </Callout>

      <h2 id="architecture-overview">Architecture Overview</h2>
      <p>
        SINQ is built as a three-layer application: an Electron frontend (React +
        Tailwind), a Node.js/Express backend (authoring engine), and an embedded
        MongoDB instance. All layers run locally on your machine. See the{" "}
        <a href="/architecture">Architecture</a> page for details.
      </p>
    </>
  );
}
