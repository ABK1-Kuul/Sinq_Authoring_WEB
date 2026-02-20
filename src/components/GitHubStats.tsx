"use client";

import { Tag, AlertCircle, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { GitHubStatsData } from "@/lib/github";

const GITHUB_REPO = "adaptlearning/adapt_authoring";

interface GitHubStatsProps {
  data: GitHubStatsData;
}

export function GitHubStats({ data }: GitHubStatsProps) {
  return (
    <div className="glass rounded-2xl border border-white/5 p-8">
      <h3 className="mb-6 text-lg font-semibold text-white">
        Community at a Glance
      </h3>

      <div className="mb-8 flex flex-wrap gap-6">
        {data.latestRelease && (
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-accent-electric/10 p-2">
              <Tag className="h-5 w-5 text-accent-electric" />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Latest Release</p>
              <p className="font-mono text-lg font-semibold text-white">
                {data.latestRelease}
              </p>
            </div>
          </div>
        )}

        {data.openIssues !== null ? (
          <Link
            href={`https://github.com/${GITHUB_REPO}/issues`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg transition-colors hover:bg-white/5 -m-2 p-2"
          >
            <div className="rounded-lg bg-accent-violet/10 p-2">
              <AlertCircle className="h-5 w-5 text-accent-violet" />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Open Issues</p>
              <p className="text-lg font-semibold text-white">
                {data.openIssues}
              </p>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-accent-violet/10 p-2">
              <AlertCircle className="h-5 w-5 text-accent-violet" />
            </div>
            <div>
              <p className="text-xs text-zinc-500">Open Issues</p>
              <p className="text-lg font-semibold text-zinc-500">
                —
              </p>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-accent-blue/10 p-2">
            <Users className="h-5 w-5 text-accent-blue" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">Contributors</p>
            <p className="text-lg font-semibold text-white">
              {data.contributors.length > 0
                ? `${data.contributors.length}+`
                : "Community Powered"}
            </p>
          </div>
        </div>
      </div>

      {data.contributors.length > 0 ? (
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Top Contributors
          </p>
          <div className="flex flex-wrap gap-2">
            {data.contributors.map((c) => (
              <Link
                key={c.login}
                href={c.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                title={c.login}
              >
                <Image
                  src={c.avatar_url}
                  alt={c.login}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white/10"
                />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm text-zinc-500">
          <Link
            href={`https://github.com/${GITHUB_REPO}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-electric hover:underline"
          >
            View on GitHub
          </Link>{" "}
          to see our contributors.
        </p>
      )}
    </div>
  );
}
