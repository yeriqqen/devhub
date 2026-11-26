"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type PointerEvent,
} from "react";
import { defaultProjects, type Project } from "./model";

const previewCloseDuration = 520;

interface Preview {
  project: Project;
  x: number;
  y: number;
  reducedMotion: boolean;
  pinned: boolean;
  closing: boolean;
}

export function HeroSection() {
  const [preview, setPreview] = useState<Preview | null>(null);
  const [loadedImage, setLoadedImage] = useState<string>();
  const projectList = useRef<HTMLUListElement>(null);
  const cursorRing = useRef<HTMLSpanElement>(null);
  const touchLink = useRef(false);

  useEffect(() => {
    if (!preview?.closing) return;
    const timer = window.setTimeout(
      () => setPreview(null),
      previewCloseDuration,
    );
    return () => window.clearTimeout(timer);
  }, [preview]);

  useEffect(() => {
    const cursor = cursorRing.current;
    if (!cursor || !window.matchMedia("(any-pointer: fine)").matches) return;

    const hideCursor = () => cursor.removeAttribute("data-active");

    const moveCursor = (event: globalThis.PointerEvent) => {
      if (
        event.pointerType !== "mouse" ||
        !(event.target instanceof Element) ||
        !event.target.closest("[data-hover-cursor]")
      ) {
        hideCursor();
        return;
      }

      cursor.style.translate = `${event.clientX}px ${event.clientY}px`;
      cursor.setAttribute("data-active", "");
    };

    document.addEventListener("pointermove", moveCursor, { passive: true });
    document.documentElement.addEventListener("pointerleave", hideCursor);
    window.addEventListener("blur", hideCursor);
    return () => {
      document.removeEventListener("pointermove", moveCursor);
      document.documentElement.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
    };
  }, []);

  function showPreview(project: Project, button: HTMLElement, pinned = false) {
    const { left, top, width, height } = button.getBoundingClientRect();
    const x = ((left + width / 2) / window.innerWidth) * 100;
    const y = ((top + height / 2) / window.innerHeight) * 100;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setPreview({
      project,
      x,
      y,
      reducedMotion,
      pinned,
      closing: false,
    });
  }

  const closePreview = useCallback(
    (projectId?: string) => {
      setPreview((current) => {
        if (
          !current ||
          current.closing ||
          (projectId && current.project.id !== projectId)
        ) {
          return current;
        }
        return current.project.image === loadedImage && !current.reducedMotion
          ? { ...current, closing: true }
          : null;
      });
    },
    [loadedImage],
  );

  const isPinned = preview?.pinned && !preview.closing;

  useEffect(() => {
    if (!isPinned) return;

    function dismissOnOutsidePress(event: globalThis.PointerEvent) {
      const control =
        event.target instanceof Element && event.target.closest("a, button");
      if (!control || !projectList.current?.contains(control)) closePreview();
    }

    document.addEventListener("pointerdown", dismissOnOutsidePress);
    return () =>
      document.removeEventListener("pointerdown", dismissOnOutsidePress);
  }, [closePreview, isPinned]);

  function previewOnHover(project: Project, event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "touch")
      showPreview(project, event.currentTarget);
  }

  const isRevealed = preview?.project.image === loadedImage;

  return (
    <section
      aria-label="Projects"
      onKeyDown={(event) => {
        if (event.key === "Escape") closePreview();
      }}
      className="px-6 md:px-8"
    >
      <span ref={cursorRing} aria-hidden="true" className="home-hover-cursor" />
      {preview && (
        <div
          key={preview.project.id}
          aria-hidden="true"
          className={`project-preview pointer-events-none fixed inset-0 z-30 ${isRevealed && !preview.closing ? "project-preview-open" : ""}`}
          style={
            {
              "--preview-x": `${preview.x}%`,
              "--preview-y": `${preview.y}%`,
              "--preview-close-duration": `${previewCloseDuration}ms`,
            } as CSSProperties
          }
        >
          <Image
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover"
            src={preview.project.image}
            onLoad={() => setLoadedImage(preview.project.image)}
            onError={() =>
              setPreview((current) =>
                current?.project.id === preview.project.id && !current.pinned
                  ? null
                  : current,
              )
            }
          />
          {isRevealed && preview.project.video && !preview.reducedMotion && (
            <video
              aria-hidden="true"
              className="absolute inset-0 size-full object-cover opacity-0"
              src={preview.project.video}
              autoPlay
              loop
              muted
              playsInline
              onPlaying={(event) =>
                event.currentTarget.classList.remove("opacity-0")
              }
            />
          )}
        </div>
      )}

      <ul
        ref={projectList}
        className={`relative z-40 mx-auto grid max-w-5xl grid-cols-1 justify-items-center gap-x-6 gap-y-2 text-center text-3xl font-light italic leading-tight sm:grid-cols-2 sm:text-4xl lg:grid-cols-3 ${preview && isRevealed ? "project-preview-labels" : "text-neutral-950"}`}
      >
        {defaultProjects.map((project) => {
          const interaction = {
            "data-hover-cursor": true,
            onPointerEnter: (event: PointerEvent<HTMLElement>) =>
              previewOnHover(project, event),
            onPointerLeave: (event: PointerEvent<HTMLElement>) => {
              if (
                event.pointerType !== "touch" &&
                !event.currentTarget.matches(":focus-visible")
              )
                closePreview(project.id);
            },
            onBlur: () => closePreview(project.id),
            onFocus: (event: FocusEvent<HTMLElement>) => {
              if (event.currentTarget.matches(":focus-visible"))
                showPreview(project, event.currentTarget);
            },
            className:
              "inline-block cursor-pointer touch-manipulation rounded-sm px-2 italic hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
          };

          const isProjectPinned =
            isPinned && preview?.project.id === project.id;

          return (
            <li key={project.id}>
              {project.link ? (
                <a
                  href={project.link}
                  {...interaction}
                  onPointerDown={(event) => {
                    touchLink.current = event.pointerType === "touch";
                  }}
                  onPointerCancel={() => {
                    touchLink.current = false;
                  }}
                  onClick={(event) => {
                    const tapped = touchLink.current && event.detail > 0;
                    touchLink.current = false;
                    if (tapped && !isProjectPinned) {
                      event.preventDefault();
                      showPreview(project, event.currentTarget, true);
                    }
                  }}
                >
                  {project.name}
                </a>
              ) : (
                <button
                  type="button"
                  {...interaction}
                  aria-pressed={
                    preview?.project.id === project.id && !preview.closing
                  }
                  onClick={(event) => {
                    if (isProjectPinned) {
                      closePreview(project.id);
                    } else {
                      showPreview(project, event.currentTarget, true);
                    }
                  }}
                >
                  {project.name}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
