"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

type Leader = {
  id: string;
  name: string;
  role: string;
  bio: string[];
};

const leaders: Leader[] = [
  {
    id: "julie-griffith",
    name: "Julie Griffith",
    role: "CEO",
    bio: [
      "Julie Griffith is an infrastructure and finance leader who has built her career around turning complex energy ambitions into executable projects. She has worked across public-private partnerships, strategic capital planning, and multi-party negotiations to align developers, utilities, and government stakeholders around practical delivery timelines.",
      "At Next Century Power, Julie leads corporate strategy, partner alignment, and commercial execution for phased deployments from large-scale on-site generation to long-term SMR transition. Her approach balances disciplined risk management with urgency, helping clients secure resilient power pathways while keeping mission-critical growth on schedule.",
    ],
  },
  {
    id: "chris-hermon",
    name: "Chris Hermon",
    role: "Co-Founder",
    bio: [
      "As a Ball State University graduate and veteran who called Grissom Air Force Base in Peru, Indiana home, Chris combines Midwest work ethic with proven leadership in both military and industrial contexts.",
      "Chris brings a unique combination of large-scale operational leadership, strategic military experience, and deep understanding of critical infrastructure to his role as co-founder of Next Century Power. As the former #2 executive at THOR Industries, Chris successfully managed operations across 1,200+ employees, developing expertise in complex manufacturing systems, supply chain management, and industrial-scale project execution capabilities directly applicable to NCP's ambitious 1.2GW SMR pod system development and large-scale gas turbine installations. His distinguished military service in the U.S. Air Force included deployments to the Middle East and Pacific theaters.",
    ],
  },
];

export default function OurStoryPage() {
  const [activeLeaderId, setActiveLeaderId] = useState<string | null>(null);

  const activeLeader = useMemo(
    () => leaders.find((leader) => leader.id === activeLeaderId) ?? null,
    [activeLeaderId]
  );

  useEffect(() => {
    if (!activeLeader) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveLeaderId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeLeader]);

  return (
    <div className="min-h-screen bg-white text-[#2b2b2b]">
      <Header />

      <section className="relative -mt-[32px] overflow-hidden">
        <div className="relative h-[560px] w-full">
          <Image
            src="/assets/our%20story%20hero.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full max-w-[1512px] items-center px-6 md:px-8">
              <div className="max-w-[560px] text-white">
                <h1 className="font-brother text-[54px] font-[200] uppercase leading-[52px] tracking-[-0.03em]">
                  Born From A
                  <br />
                  Power Problem
                </h1>
                <p className="mt-5 max-w-[520px] font-inter text-[16px] font-[200] font-normal leading-[27px] tracking-[0] text-white/88">
                  <span className="block">
                    Next Century Power began with a simple but urgent
                    realization:
                  </span>
                  <span className="block">
                    the world&apos;s digital ambitions are outpacing the power
                    grid&apos;s ability
                  </span>
                  <span className="block">to keep up.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto grid w-full max-w-[1226px] items-center gap-10 md:grid-cols-[440px_730px] md:gap-14">
            <div className="relative mx-auto h-[335px] w-full max-w-[440px]">
              <Image
                src="/assets/stacked%20stones.png"
                alt=""
                fill
                className="object-contain opacity-100"
                sizes="(max-width: 768px) 90vw, 440px"
              />
            </div>
            <div className="max-w-[730px]">
              <div className="relative text-[#2b2b2b]">
                <div className="absolute left-0 top-1/2 h-[31px] w-[53px] -translate-y-1/2 md:-left-[65px]">
                  <Image
                    src="/assets/circle%20%26%20arrow.png"
                    alt=""
                    width={53}
                    height={31}
                    className="h-full w-full"
                  />
                  <Image
                    src="/assets/paved%20road.png"
                    alt=""
                    width={16}
                    height={12}
                    className="absolute left-[8px] top-1/2 h-[12px] w-[16px] -translate-y-1/2"
                  />
                </div>
                <h2 className="pl-[68px] font-brother text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em] md:pl-0">
                  Paving The Path To Stability
                </h2>
              </div>
              <p className="mt-6 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-[#2b2b2b]">
                <span className="block">
                  Artificial intelligence, automation and hyperscale computing
                  have accelerated
                </span>
                <span className="block">
                  faster than existing infrastructure can support. Where
                  traditional utilities see
                </span>
                <span className="block">
                  limitation, we saw opportunity, a chance to deliver reliable,
                  on-site power faster,
                </span>
                <span className="block">
                  capture carbon responsibly and pave the way toward small
                  modular reactors
                </span>
                <span className="block">
                  (SMRs) that redefine long-term stability.
                </span>
              </p>
              <button
                type="button"
                className="mt-8 inline-flex h-[43px] w-[246px] items-center justify-center border border-[#ff8000] font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-[#ff8000] transition hover:bg-[#ff8000]/10"
              >
                What We Do
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[734px] overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120.95deg, #706363 0%, #2D2927 91.56%)",
          }}
        />
        <div className="relative mx-auto flex h-full w-full max-w-[1512px] items-center px-6 md:px-8">
          <div className="mx-auto grid w-full max-w-[1043px] gap-12 lg:grid-cols-[390px_605px]">
            <div className="max-w-[380px]">
              <div className="relative text-white/92">
                <div className="absolute left-0 top-1/2 h-[31px] w-[53px] -translate-y-1/2 md:-left-[65px]">
                  <Image
                    src="/assets/circle%20%26%20arrow.png"
                    alt=""
                    width={53}
                    height={31}
                    className="h-full w-full invert"
                  />
                  <Image
                    src="/assets/Leadership.png"
                    alt=""
                    width={16}
                    height={14}
                    className="absolute left-[8px] top-1/2 h-[14px] w-[16px] -translate-y-1/2"
                  />
                </div>
                <h2 className="pl-[68px] font-brother text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em] md:pl-0">
                  Our Leadership
                </h2>
              </div>
              <p className="mt-6 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/88">
                Founded by a group with deep roots in finance, energy and
                government partnerships, NCP exists to bridge the gap between
                data center developers and the energy that drives them. Our
                approach is pragmatic and forward-focused: develop dedicated
                microgrids today, reduce emissions through carbon capture
                tomorrow and evolve to next-generation SMR technology when the
                time is right.
              </p>
              <p className="mt-10 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/88">
                We&apos;re building the future of power, one site, one
                partnership, one breakthrough at a time.
              </p>
            </div>

            <div className="grid justify-center gap-5 sm:grid-cols-[repeat(2,300px)] sm:justify-start">
              {leaders.map((leader) => (
                <div key={leader.id} className="flex w-[300px] flex-col">
                  <button
                    type="button"
                    className="group w-full text-left"
                    onClick={() => setActiveLeaderId(leader.id)}
                    aria-label={`Open profile for ${leader.name}`}
                  >
                    <div
                      className="h-[425px] w-full bg-[#cfd0d1] opacity-100 transition group-hover:bg-[#d9dadb]"
                      style={{
                        clipPath:
                          "polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)",
                        WebkitClipPath:
                          "polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)",
                      }}
                    />
                  </button>
                  <h3 className="mt-4 font-brother text-[24px] font-[500] uppercase leading-[27px] tracking-[-0.02em] text-white">
                    {leader.name}
                  </h3>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center gap-2 text-left"
                    onClick={() => setActiveLeaderId(leader.id)}
                    aria-label={`Read more about ${leader.name}`}
                  >
                    <span className="font-inter text-[16px] font-[500] uppercase leading-[20px] tracking-[0.03em] text-white/95">
                      {leader.role}
                    </span>
                    <Image
                      src="/assets/line%20arrow.png"
                      alt=""
                      width={14}
                      height={8}
                      className="h-[8px] w-[14px]"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      {activeLeader ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center px-6 py-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="leader-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            aria-label="Close popup"
            onClick={() => setActiveLeaderId(null)}
          />
          <div
            className="relative z-10 h-[518px] w-[1102px] max-w-[92vw] overflow-hidden bg-[#efefef] text-[#1f1f1f] opacity-100 shadow-[0_32px_80px_rgba(0,0,0,0.45)]"
            style={{
              clipPath:
                "polygon(32px 0, 100% 0, 100% 100%, 0 100%, 0 32px)",
              WebkitClipPath:
                "polygon(32px 0, 100% 0, 100% 100%, 0 100%, 0 32px)",
            }}
          >
            <button
              type="button"
              className="absolute right-6 top-4 z-10 flex items-center justify-center opacity-100 transition hover:opacity-80"
              aria-label="Close popup"
              onClick={() => setActiveLeaderId(null)}
            >
              <span className="relative block h-[26.87005759983093px] w-[26.87005759983093px] rotate-[-135deg]">
                <span className="absolute left-1/2 top-1/2 h-0 w-full -translate-x-1/2 -translate-y-1/2 border-t-[2px] border-black" />
                <span className="absolute left-1/2 top-1/2 h-0 w-full -translate-x-1/2 -translate-y-1/2 rotate-90 border-t-[2px] border-black" />
              </span>
            </button>
            <div className="grid h-full md:grid-cols-[300px_1fr]">
              <div className="h-[518px] w-[300px] bg-[#cfcfcf] opacity-100" />
              <div className="px-8 pb-10 pt-14 md:px-12">
                <h3
                  id="leader-modal-title"
                  className="font-brother text-[24px] font-[500] uppercase leading-[27px] tracking-[-0.02em]"
                >
                  {activeLeader.name}
                </h3>
                <p className="mt-3 font-inter text-[16px] font-[500] uppercase leading-[20px] tracking-[0.03em]">
                  {activeLeader.role}
                </p>
                {activeLeader.bio.map((paragraph, index) => (
                  <p
                    key={`${activeLeader.id}-${index}`}
                    className={`font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-[#1f1f1f] ${
                      index === 0 ? "mt-6" : "mt-10"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
