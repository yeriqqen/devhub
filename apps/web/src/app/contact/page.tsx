import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

const email = "yestay.yessenbay@gm.gist.ac.kr";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 sm:px-8 sm:pt-36">
      <h1 className="mb-8 text-5xl font-light italic tracking-tight sm:text-7xl">
        Contact
      </h1>
      <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
        <li className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
          <span className="font-medium">Email</span>
          <a
            href={`mailto:${email}`}
            className="break-words underline underline-offset-4"
          >
            {email}
          </a>
        </li>
        <li className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
          <span className="font-medium">GitHub</span>
          <a
            href="https://github.com/yeriqqen"
            className="underline underline-offset-4"
          >
            yeriqqen
          </a>
        </li>
      </ul>
    </main>
  );
}
