import { Callout } from "@/components/Callout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Troubleshooting | SINQ Authoring Docs",
  description: "Common issues and solutions for SINQ Authoring Tool.",
};

export default function TroubleshootingPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white">Troubleshooting</h1>

      <p className="lead mt-4 text-lg text-zinc-400">
        Common issues and how to resolve them when using SINQ Authoring Tool.
      </p>

      <h2 id="app-wont-start">App Won&apos;t Start</h2>
      <p>
        If the application fails to launch, check the following:
      </p>
      <ul>
        <li>
          <strong>Antivirus:</strong> Add an exception for the .exe. Portable
          apps are sometimes flagged.
        </li>
        <li>
          <strong>Port conflict:</strong> Ensure port 5000 (or the configured
          port) is not in use by another application.
        </li>
        <li>
          <strong>Permissions:</strong> Run from a directory where you have
          write access. The app needs to create data files.
        </li>
      </ul>

      <h2 id="mongodb-errors">MongoDB Errors</h2>
      <p>
        If you see MongoDB connection or startup errors:
      </p>
      <ul>
        <li>Ensure no other MongoDB instance is running on the same port.</li>
        <li>Delete the <code>data</code> folder in the app directory and restart
          (this will reset the database).
        </li>
        <li>Check that the app has write permissions in its installation
          directory.
        </li>
      </ul>

      <Callout type="warning" title="Data Loss">
        Deleting the data folder will remove all courses and user accounts. Only
        do this if you have backups or are okay with starting fresh.
      </Callout>

      <h2 id="build-failures">Build Failures</h2>
      <p>
        If course builds fail or preview doesn&apos;t load:
      </p>
      <ul>
        <li>Verify all required plugins are installed and enabled.</li>
        <li>Check the browser console (F12) for JavaScript errors.</li>
        <li>Try clearing the build cache: delete the <code>build</code> folder
          in your course directory and rebuild.
        </li>
      </ul>

      <h2 id="getting-help">Getting Help</h2>
      <p>
        If you&apos;re still stuck, open an issue on the{" "}
        <a
          href="https://github.com/ABK1-Kuul/SinqAuthoringTool/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </a>
        . Include your OS version, error messages, and steps to reproduce.
      </p>
    </>
  );
}
