import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 sm:px-8 sm:pt-36">
      <h1 className="mb-8 text-5xl font-light italic tracking-tight sm:text-7xl">
        About
      </h1>
      <div className="max-w-xl space-y-5 text-lg leading-relaxed text-neutral-700">
        <p>
          I’m Yestay Yessenbay. I’m from Kazakhstan and study computer science
          and mathematics at GIST in Gwangju, South Korea.
        </p>
        <p>
          I do research in GIST’s Autonomous Computing Systems Lab. Before that,
          I worked on DEP’s web platform, from its Next.js frontend to the API
          and database behind it.
        </p>
        <p>Outside of work, I run, swim, lift, and study languages.</p>
      </div>
      <div className="mt-10 flex flex-wrap gap-6 border-t border-neutral-200 pt-6 text-sm">
        <Link href="/portfolio" className="underline underline-offset-4">
          Portfolio
        </Link>
        <a href="/resume.pdf" className="underline underline-offset-4">
          Résumé (PDF)
        </a>
      </div>
    </main>
  );
}
