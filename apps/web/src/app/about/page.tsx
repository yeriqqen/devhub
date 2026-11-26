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
          I’m Yestay Yessenbay. I’m from Kazakhstan and study at GIST in
          Gwangju, South Korea.
        </p>
        <p>
          This is where I keep things I’ve made and notes I want to come back
          to.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-6 border-t border-neutral-200 pt-6 text-sm">
        <Link href="/explore" className="underline underline-offset-4">
          Explore
        </Link>
        <Link href="/contact" className="underline underline-offset-4">
          Say hello
        </Link>
      </div>
    </main>
  );
}
