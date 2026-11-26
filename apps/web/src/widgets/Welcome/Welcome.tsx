"use client";

import { useEffect, useRef } from "react";

export function Welcome() {
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (!sessionStorage.getItem("hasVisited")) dialog.current?.showModal();
  }, []);

  function enterSite() {
    sessionStorage.setItem("hasVisited", "true");
    dialog.current?.close();
  }

  return (
    <dialog
      ref={dialog}
      aria-labelledby="welcome-title"
      onCancel={enterSite}
      onWheel={(event) => {
        if (event.deltaY > 0) enterSite();
      }}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0].clientY;
      }}
      onTouchEnd={(event) => {
        if (
          touchStart.current !== null &&
          touchStart.current - event.changedTouches[0].clientY > 40
        ) {
          enterSite();
        }
        touchStart.current = null;
      }}
      className="fixed inset-0 m-0 size-full max-h-none max-w-none touch-none bg-white text-center text-neutral-950 open:grid open:place-items-center"
    >
      <button
        type="button"
        onClick={enterSite}
        className="flex size-full flex-col items-center justify-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4"
      >
        <span id="welcome-title" className="text-6xl font-light">
          Welcome
        </span>
        <span className="text-lg text-neutral-600">Enter site</span>
      </button>
    </dialog>
  );
}
