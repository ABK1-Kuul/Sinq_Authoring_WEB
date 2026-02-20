import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SINQ Authoring Tool | Adapt Authoring, Simplified",
  description:
    "The power of the Adapt Framework, packaged into a zero-config Windows application. Download SINQ Authoring Tool for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${inter.className} font-sans antialiased min-h-screen bg-charcoal-950 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
