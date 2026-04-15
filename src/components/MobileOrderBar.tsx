"use client";

import { SITE_LINKS } from "@/lib/siteData";

export default function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-amber-gold/15 bg-smoky-brown/95 px-4 py-3 shadow-[0_-12px_40px_rgba(20,10,6,0.45)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={SITE_LINKS.toast}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-bbq-red px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white"
        >
          Order Toast
        </a>
        <a
          href={SITE_LINKS.doorDash}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full border border-amber-gold/30 bg-white/5 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-amber-gold"
        >
          DoorDash
        </a>
      </div>
    </div>
  );
}
