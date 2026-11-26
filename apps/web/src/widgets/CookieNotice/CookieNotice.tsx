"use client";

import { useEffect, useState } from "react";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("cookieNoticeAccepted") !== "true");
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white px-4 py-3 text-neutral-950 md:px-8"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm">
          This site uses cookies and other tracking technologies.
        </p>
        <button
          type="button"
          className="shrink-0 px-2 py-2 text-sm underline underline-offset-4"
          onClick={() => {
            localStorage.setItem("cookieNoticeAccepted", "true");
            setVisible(false);
          }}
        >
          Accept
        </button>
      </div>
    </aside>
  );
}
