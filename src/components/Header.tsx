"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="relative z-20 w-full overflow-hidden bg-white text-black"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 28px) 100%, 0 100%)",
          WebkitClipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 28px) 100%, 0 100%)",
        }}
      >
        <div className="mx-auto flex h-[107px] w-full max-w-[1512px] items-center justify-between px-6 md:px-8">
          <div className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Next Century Power"
              width={260}
              height={22}
              priority
              className="h-[24px] w-auto"
            />
          </div>
          <div className="flex items-center gap-5">
            <button
              className="inline-flex h-[43px] w-[246px] items-center justify-center border border-[#ff8000] font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-center text-[#ff8000] transition hover:bg-[#ff8000]/10"
              type="button"
            >
              Let&apos;s Chat
            </button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="site-menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Image
                src="/assets/pager.png"
                alt=""
                width={50}
                height={43}
                className="h-10 w-auto"
              />
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen ? (
        <div
          id="site-menu"
          className="fixed inset-0 z-[60] flex"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="flex-1 bg-black/45 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="relative w-[540px] max-w-[92vw] bg-[#f47920] pl-28 pr-10 py-12 text-white opacity-100">
            <button
              type="button"
              className="absolute right-10 top-8 flex h-10 w-10 items-center justify-center"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/assets/close.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </button>

            <nav className="mt-24 flex flex-col gap-7 font-brother text-[24px] font-[400] uppercase leading-[27px] tracking-[-0.02em]">
              {[
                "Home",
                "Our Story",
                "Who We Work With",
                "What We Do",
                "How We Do It",
              ].map((item) => (
                <div className="flex items-center gap-4" key={item}>
                  <span className="shrink-0 whitespace-nowrap">{item}</span>
                  <Image
                    src="/assets/lines.svg"
                    alt=""
                    width={353}
                    height={6}
                    className="h-[6px] w-full flex-1"
                  />
                </div>
              ))}
              <div className="pl-1 text-[14px] font-[200] tracking-[0.1em] text-white/90 whitespace-nowrap">
                Carbon Capture
              </div>
              {["Sites", "Environment", "Insights", "Contact"].map((item) => (
                <div className="flex items-center gap-4" key={item}>
                  <span className="shrink-0 whitespace-nowrap">{item}</span>
                  <Image
                    src="/assets/lines.svg"
                    alt=""
                    width={353}
                    height={6}
                    className="h-[6px] w-full flex-1"
                  />
                </div>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}
