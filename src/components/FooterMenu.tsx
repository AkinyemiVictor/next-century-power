"use client";

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
              <Link
                key={item}
                href="/"
                className="text-white/70 transition hover:text-white"
              >
                {item.toUpperCase()}
              </Link>
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
          if (item === "How We Do It") {
            return (
              <Link
                key={item}
                href="/how-we-do-it"
                className="text-white/70 transition hover:text-white"
              >
                {item.toUpperCase()}
              </Link>
            );
          }
          if (item === "Resources") {
            return (
              <Link
                key={item}
                href="/resources"
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
    </>
  );
}

