import { Step } from "@/components/Step";
import { Callout } from "@/components/Callout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation | SINQ Authoring Docs",
  description: "Install SINQ Authoring Tool on Windows.",
};

export default function InstallationPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white">Installation</h1>

      <p className="lead mt-4 text-lg text-zinc-400">
        SINQ Authoring Tool is distributed as a portable Windows executable. No
        installer wizard—just download and run.
      </p>

      <h2 id="requirements">Requirements</h2>
      <ul>
        <li>Windows 10 or later (64-bit)</li>
        <li>~500 MB disk space (includes MongoDB)</li>
        <li>4 GB RAM recommended</li>
      </ul>

      <h2 id="download">Download</h2>
      <p>
        Download the latest release from the{" "}
        <a
          href="https://github.com/adaptlearning/adapt_authoring/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Releases
        </a>{" "}
        page. Look for the <code>SINQ Authoring Tool-*-portable.exe</code> asset.
      </p>

      <Callout type="note" title="Portable Build">
        The portable build includes an embedded MongoDB instance. No separate
        database installation is required. On first run, the app will extract
        and initialize the database automatically.
      </Callout>

      <h2 id="first-run">First Run</h2>

      <Step number={1} title="Download the .exe">
        <p>
          Download the portable executable from the latest GitHub release. Save
          it to a folder where you have write permissions (e.g., your user
          directory).
        </p>
      </Step>

      <Step number={2} title="Run the application">
        <p>
          Double-click the .exe to launch. The first run may take a minute as
          MongoDB is initialized. A setup wizard will guide you through creating
          an admin account.
        </p>
      </Step>

      <Step number={3} title="Create your admin account">
        <p>
          Enter an email and password for the admin account. This account is
          used to log in to the authoring interface and manage courses.
        </p>
      </Step>

      <Step number={4} isLast title="Start authoring">
        <p>
          Once setup is complete, you&apos;ll be taken to the dashboard. Create a
          new course or open an existing one to begin.
        </p>
      </Step>

      <Callout type="warning" title="Antivirus and Firewall">
        Some antivirus software may flag the portable executable. If you
        encounter issues, add an exception for the SINQ Authoring Tool. The app
        runs entirely locally and does not require internet access for
        authoring.
      </Callout>
    </>
  );
}
