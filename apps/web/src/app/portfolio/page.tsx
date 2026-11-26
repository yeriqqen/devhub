import type { Metadata } from "next";
import { ExperienceGrid } from "@/widgets/ExperienceGrid";

export const metadata: Metadata = { title: "Work" };

export default function PortfolioPage() {
  return (
    <main className="min-h-svh bg-neutral-900 px-6 pb-20 pt-28 text-white sm:px-8 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <h1 className="text-5xl font-light italic tracking-tight sm:text-7xl">
            Work
          </h1>
          <a
            href="/resume.pdf"
            className="text-sm underline underline-offset-4"
          >
            Résumé (PDF)
          </a>
        </div>
        <ExperienceGrid />
      </div>
    </main>
  );
}
