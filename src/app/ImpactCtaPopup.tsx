"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function ImpactCtaPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const close = useCallback(() => {
    setShow(false);
    setDismissed(true);
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const el = document.getElementById("about");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setShow(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [dismissed]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={close}
        onKeyDown={(e) => e.key === "Escape" && close()}
        aria-hidden
      />
      <div className="relative flex flex-col items-center">
        {/* Single rounded card with logo at bottom */}
        <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="px-6 pt-6 pb-4">
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              aria-label="Close"
            >
              <span className="text-xl leading-none">×</span>
            </button>
            <p className="pr-8 text-xl font-semibold text-[#111827]">
              Want to help?
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.gofundme.com/f/CATCH-inc-holiday-toy-drive"
                onClick={close}
                className="rounded-full bg-[#3AC9C3] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#32b2ad]"
              >
                Donate
              </a>
              <a
                href="#get-involved"
                onClick={close}
                className="rounded-full bg-[#ff6b4a] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#ff6b4a]/40 transition hover:bg-[#f55c38]"
              >
                Volunteer
              </a>
            </div>
          </div>
          {/* Logo at bottom of card */}
          <div className="flex justify-center bg-[#fff7eb] px-4 pb-4 pt-2">
            <div className="relative h-16 w-20 sm:h-20 sm:w-24">
              <Image
                src="/Copy%20of%20Copy%20of%20CATCH-logo-trans-noarms.png"
                alt=""
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
