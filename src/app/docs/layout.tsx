import Link from "next/link";
import { DocsNav } from "./DocsNav";
import { DocsSearch } from "./DocsSearch";
import { OnThisPage } from "@/components/OnThisPage";

const DOCS_NAV = [
  { href: "/docs/introduction", label: "Introduction" },
  { href: "/docs/installation", label: "Installation" },
  { href: "/docs/troubleshooting", label: "Troubleshooting" },
  { href: "/docs/plugin-guide", label: "Plugin Guide" },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-charcoal-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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
              className="text-sm font-medium text-accent-electric"
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

      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Side navigation */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <DocsNav items={DOCS_NAV} />
        </aside>

        {/* Main content + Search */}
        <div className="min-w-0 flex-1">
          <div className="mb-6 lg:hidden">
            <DocsNav items={DOCS_NAV} mobile />
          </div>

          {/* Search bar - UI only */}
          <DocsSearch />

          <div className="flex gap-12 pt-6">
            <article
              data-docs-content
              className="min-w-0 flex-1 prose prose-invert max-w-none prose-headings:font-semibold prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-xl prose-h2:text-white prose-h2:scroll-mt-24 prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-lg prose-h3:text-white prose-h3:scroll-mt-24 prose-p:text-zinc-400 prose-a:text-accent-electric prose-a:no-underline hover:prose-a:underline prose-ul:text-zinc-400 prose-ol:text-zinc-400 prose-code:rounded prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none"
            >
              {children}
            </article>

            {/* On this page - right sidebar */}
            <aside className="hidden w-48 shrink-0 xl:block">
              <OnThisPage />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
