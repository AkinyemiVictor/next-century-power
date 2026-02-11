"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

const footerItems = [
  "Our Story",
  "What We Do",
  "How We Do It",
  "Who We Work With",
  "Sites",
  "News",
  "Resources",
];

export default function FooterMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center gap-6 font-brother text-[15px] font-[200] uppercase leading-none tracking-[0.05em] text-white/70">
        {footerItems.map((item) => {
          if (item === "Our Story") {
            return (
              <Link
                key={item}
                href="/our-story"
                className="text-white/70 transition hover:text-white"
              >
                {item.toUpperCase()}
              </Link>
            );
          }
          if (item === "What We Do") {
            return (
              <button
                key={item}
                type="button"
                className="bg-transparent p-0 text-white/70 transition hover:text-white"
                onClick={() => setIsOpen(true)}
              >
                {item.toUpperCase()}
              </button>
            );
          }
          if (item === "News") {
            return (
              <Link
                key={item}
                href="/news"
                className="text-white/70 transition hover:text-white"
              >
                {item.toUpperCase()}
              </Link>
            );
          }
          if (item === "Who We Work With") {
            return (
              <Link
                key={item}
                href="/who-we-work-with"
                className="text-white/70 transition hover:text-white"
              >
                {item.toUpperCase()}
              </Link>
            );
          }
          return <span key={item}>{item.toUpperCase()}</span>;
        })}
        <a
          href="#"
          aria-label="LinkedIn"
          className="inline-flex h-4 w-4 items-center justify-center text-white/80 transition hover:text-white"
        >
          <Image
            src="/assets/linkedin icon.png"
            alt="LinkedIn"
            width={16}
            height={16}
            className="h-4 w-4"
          />
        </a>
      </div>

      {isOpen && typeof window !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 px-6 py-10 backdrop-blur-[2px]"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                className="absolute inset-0 h-full w-full"
                aria-label="Close popup"
                onClick={() => setIsOpen(false)}
              />
              <div className="relative z-10 h-[318px] w-[1102px] max-w-[92vw] overflow-hidden bg-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] opacity-100">
                <button
                  type="button"
                  className="absolute right-6 top-4 text-[34px] leading-none text-black/70 transition hover:text-black"
                  aria-label="Close popup"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
                <div className="flex h-full flex-col md:flex-row">
                  <div className="relative h-[318px] w-full md:h-[318px] md:w-[300px]">
                    <Image
                      src="/assets/indusrtrial generator.jpg"
                      alt="Industrial generator"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 92vw, 380px"
                    />
                  </div>
                  <div className="flex-1 px-10 pb-10 pt-14 text-[#2b2b2b] md:max-w-[760px]">
                    <h3 className="font-brother text-[24px] font-[500] uppercase leading-[27px] tracking-[-0.02em]">
                      Built-In Redundancy &amp; Reliability
                    </h3>
                    <p className="mt-4 font-inter text-[16px] font-[250] leading-[27px] tracking-[0] text-[#2b2b2b]">
                      Advanced redundancy: our designs incorporate a stranded-asset
                      redundancy model with a RAM (Reliability, Availability,
                      Maintainability) analysis targeting four nines (99.99%
                      uptime). Our architecture includes on-site diesel-based
                      generators for seamless failover, ensuring continuous power
                      delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}

