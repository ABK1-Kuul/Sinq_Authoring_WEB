import { Callout } from "@/components/Callout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plugin Guide | SINQ Authoring Docs",
  description: "Extend SINQ Authoring Tool with plugins from the Adapt ecosystem.",
};

export default function PluginGuidePage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white">Plugin Guide</h1>

      <p className="lead mt-4 text-lg text-zinc-400">
        SINQ Authoring Tool supports the Adapt Framework plugin ecosystem.
        Plugins add blocks, components, extensions, and themes to your courses.
      </p>

      <h2 id="plugin-types">Plugin Types</h2>
      <p>
        Adapt plugins fall into four categories:
      </p>
      <ul>
        <li>
          <strong>Blocks:</strong> Content units (e.g., text, media, accordion)
          that appear in the course.
        </li>
        <li>
          <strong>Components:</strong> Reusable UI elements (e.g., navigation,
          resources).
        </li>
        <li>
          <strong>Extensions:</strong> Modify core behavior (e.g., tracking,
          accessibility).
        </li>
        <li>
          <strong>Themes:</strong> Control visual styling and layout.
        </li>
      </ul>

      <h2 id="installing-plugins">Installing Plugins</h2>
      <p>
        Plugins can be installed via the authoring interface or by adding them
        to the course&apos;s <code>adapt.json</code>. The authoring UI provides
        a plugin manager where you can browse, install, and enable plugins for
        your course.
      </p>

      <Callout type="note" title="Plugin Compatibility">
        Ensure plugins are compatible with your Adapt Framework version. Check
        the plugin&apos;s documentation or repository for version requirements.
      </Callout>

      <h2 id="core-plugins">Core Plugins</h2>
      <p>
        The following plugins are typically included with Adapt courses:
      </p>
      <ul>
        <li><code>adapt-contrib-text</code> — Basic text block</li>
        <li><code>adapt-contrib-media</code> — Image, video, and audio</li>
        <li><code>adapt-contrib-navigation</code> — Course navigation</li>
        <li><code>adapt-contrib-matching</code> — Matching question block</li>
      </ul>

      <h2 id="plugin-development">Plugin Development</h2>
      <p>
        To develop custom plugins, follow the{" "}
        <a
          href="https://github.com/adaptlearning/adapt_framework/wiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adapt Framework plugin development guide
        </a>
        . Plugins use Handlebars templates, Less/CSS for styling, and
        JavaScript for behavior. Once built, they can be installed into SINQ
        like any other plugin.
      </p>

      <Callout type="tip" title="Plugin Registry">
        Browse the{" "}
        <a
          href="https://www.adaptlearning.org/index.php/plugin-registry/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adapt Plugin Registry
        </a>{" "}
        for a curated list of community plugins.
      </Callout>
    </>
  );
}
