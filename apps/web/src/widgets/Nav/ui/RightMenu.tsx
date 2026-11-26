"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";

const connectLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/portfolio", label: "Work" },
];

export function RightMenu({ dark }: { dark: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const isOpen = hovered || expanded;

  function close() {
    setHovered(false);
    setExpanded(false);
  }

  return (
    <div
      className="relative col-start-3 row-start-1 justify-self-end"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => {
        if (!button.current?.parentElement?.contains(document.activeElement))
          setHovered(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          event.stopPropagation();
          close();
          button.current?.focus();
        }
      }}
    >
      <button
        ref={button}
        type="button"
        className="home-nav-control cursor-pointer text-lg font-light italic underline-offset-4 hover:underline aria-expanded:underline sm:text-xl"
        data-hover-cursor
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => {
          if (expanded) close();
          else setExpanded(true);
        }}
      >
        connect
      </button>
      <div
        id={menuId}
        hidden={!isOpen}
        className="absolute right-0 top-full pt-2"
      >
        <ul
          className={`w-40 border py-1 text-sm shadow-sm ${dark ? "border-neutral-700 bg-neutral-900 text-white" : "border-neutral-200 bg-white text-neutral-950"}`}
        >
          {connectLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block px-4 py-2 hover:underline"
                prefetch={false}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
