"use client";

import { useState, type ReactNode } from "react";

interface ExperienceMediaProps {
  children: ReactNode;
  link?: string;
  name: string;
  video?: string;
}

export function ExperienceMedia({
  children,
  link,
  name,
  video,
}: ExperienceMediaProps) {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  function startPreview() {
    if (
      video &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setPlaying(true);
    }
  }

  function stopPreview() {
    setPlaying(false);
    setReady(false);
  }

  const media = (
    <>
      {children}
      {video && playing && (
        <video
          aria-hidden="true"
          className={`absolute inset-0 size-full object-cover ${ready ? "" : "opacity-0"}`}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          onPlaying={() => setReady(true)}
        />
      )}
    </>
  );

  const className =
    "group relative block aspect-[5/4] overflow-hidden bg-neutral-800";

  if (!link) {
    return (
      <div
        className={className}
        onPointerEnter={(event) => {
          if (event.pointerType !== "touch") startPreview();
        }}
        onPointerLeave={stopPreview}
      >
        {media}
      </div>
    );
  }

  return (
    <a
      href={link}
      aria-label={`Visit ${name}`}
      className={className}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") startPreview();
      }}
      onPointerLeave={(event) => {
        if (!event.currentTarget.matches(":focus-visible")) stopPreview();
      }}
      onFocus={(event) => {
        if (event.currentTarget.matches(":focus-visible")) startPreview();
      }}
      onBlur={stopPreview}
    >
      {media}
    </a>
  );
}
