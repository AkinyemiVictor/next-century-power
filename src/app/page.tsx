import Image from "next/image";
import Header from "@/components/Header";

const IconArrow = ({
  icon,
  size,
  offsetX = 0,
  offsetY = 0,
  wrapperOffsetY = 0,
}: {
  icon: string;
  size: { w: number; h: number };
  offsetX?: number;
  offsetY?: number;
  wrapperOffsetY?: number;
}) => {
  const centerX = 12;
  const centerY = 15;
  const iconOffsetX = 2 + offsetX;
  return (
    <div
      className="relative h-[31px] w-[53px] shrink-0 self-start"
      style={{
        transform: wrapperOffsetY ? `translateY(${wrapperOffsetY}px)` : undefined,
      }}
    >
      <Image
        src="/assets/circle%20%26%20arrow.png"
        alt=""
        width={53}
        height={31}
        className="block h-full w-full"
      />
      <Image
        src={icon}
        alt=""
        width={size.w}
        height={size.h}
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${centerX + iconOffsetX}px`,
          top: `${centerY + offsetY}px`,
        }}
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/background%201.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto flex h-[520px] max-w-4xl items-center justify-center px-6 text-center text-white md:h-[664px]">
          <div className="space-y-4">
            <p className="font-brother text-[54px] leading-[52px] font-normal uppercase tracking-[-0.03em]">
              Speed To Power
            </p>
            <p className="font-inter text-[16px] leading-[27px] text-white/85">
              <span className="block">
                Data center power demands will inevitably outpace grid capacity.
                Next
              </span>
              <span className="block">
                Century Power is your end-to-end partner, from first gigawatt
              </span>
              <span className="block">
                to long-term SMR transition, delivering on-site, independent
                power
              </span>
              <span className="block">
                faster while advancing sites toward net-zero emissions with
              </span>
              <span className="block">emerging carbon capture technology.</span>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-[1512px] px-10 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-12">
            <div className="grid max-w-[500px] grid-cols-[72px_1fr] items-start gap-0">
              <div className="pt-[4px]">
                <IconArrow
                  icon="/assets/power.png"
                  size={{ w: 14, h: 14 }}
                  offsetX={2}
                  wrapperOffsetY={1}
                />
              </div>
              <div className="space-y-7 text-[#1c1c1c]">
                <span className="font-brother text-[36px] font-[350] uppercase leading-[35px] tracking-[-0.03em] text-[#1c1c1c]">
                  What We Do
                </span>
                <p className="mt-2 font-inter text-[18px] leading-[26px] text-[#2b2b2b]">
                  Dedicated, independent, on-site power, built for,
                  <span className="hidden md:inline">
                    <br />
                  </span>{" "}
                  speed and stability
                </p>
                <p className="font-inter text-[14px] leading-[28px] text-[#4b4b4b]">
                  We develop and operate on-site generation for large data
                  centers, initially large-scale gas turbine installations
                  (1GW+) in an islanded microgrid configuration, designed for
                  high availability, redundancy and growth. Longer-term, we
                  transition sites to our core product: a 1.2GW pod system
                  consisting of four integrated 300MW SMRs, for durable,
                  cost-stable power.
                </p>
                <button
                  className="h-[36px] w-[172px] border border-[#ff8000] text-[10px] uppercase tracking-[0.32em] text-[#ff8000] transition hover:bg-[#ff8000]/10"
                  type="button"
                >
                  Our Process
                </button>
              </div>
            </div>
            <div className="hidden h-[351px] w-px self-center bg-black/40 md:block" />
            <div className="flex h-full w-full items-center justify-center">
              <div className="-translate-x-8 space-y-14">
                {[
                  {
                    label: "Dedicated, single-tenant power",
                    icon: "/assets/man.png",
                    size: { w: 6, h: 18 },
                    offsetX: 2,
                  },
                  {
                    label: "Built-in redundancy & reliability",
                    icon: "/assets/repeat.png",
                    size: { w: 18, h: 16 },
                    offsetX: 0,
                  },
                  {
                    label: "Long-term contract stability",
                    icon: "/assets/dollar.png",
                    size: { w: 11, h: 17 },
                    offsetX: 2,
                  },
                  {
                    label: "Secure, quiet & durable",
                    icon: "/assets/speaker.png",
                    size: { w: 17, h: 14 },
                    offsetX: 2,
                    offsetY: 1,
                  },
                ].map((item) => (
                  <div className="flex items-center gap-3" key={item.label}>
                    <IconArrow
                      icon={item.icon}
                      size={item.size}
                      offsetX={item.offsetX}
                      offsetY={item.offsetY}
                      wrapperOffsetY={2}
                    />
                    <p className="font-inter text-[14px] font-bold uppercase tracking-[0.22em] text-[#2b2b2b]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-[728px] overflow-hidden text-white">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "linear-gradient(120.95deg, #706363 0%, #2D2927 91.56%)",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: "url('/assets/chip%20background.png')",
          }}
        />
        <div className="relative mx-auto flex h-full max-w-[1512px] flex-col justify-center px-10 py-16 md:py-20">
          <div className="flex items-center justify-center gap-4 text-white/90">
            <Image
              src="/assets/circle%20%26%20arrow.png"
              alt=""
              width={53}
              height={31}
              className="h-6 w-auto opacity-90 invert"
            />
            <span className="font-brother text-[24px] uppercase tracking-[0.2em]">
              How We&apos;re Advancing
            </span>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                text: "In active dialogue with federal and state stakeholders on data-center power needs",
                tone: "from-[#f0d9c5] to-[#a07a5a]",
              },
              {
                text: "Coordinating with major utilities and municipalities on expedited power timelines",
                tone: "from-[#7fd7ff] to-[#1d4f6f]",
              },
              {
                text: "Engaged with defense and mission-critical installations",
                tone: "from-[#ffb86c] to-[#6b3a2a]",
              },
              {
                text: "Partnering with established energy and technology providers",
                tone: "from-[#ffb3c7] to-[#4d2b45]",
              },
            ].map((item) => (
              <div
                className="flex items-center gap-4 rounded-full bg-white/10 px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur"
                key={item.text}
              >
                <div
                  className={`h-14 w-14 rounded-full bg-gradient-to-br ${item.tone} ring-2 ring-white/30`}
                />
                <p className="text-sm leading-relaxed text-white/85">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button
              className="border border-white/60 px-8 py-2 text-[11px] uppercase tracking-[0.3em] text-white/85 transition hover:border-white hover:text-white"
              type="button"
            >
              Meet Our Partners
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto flex h-[639px] max-w-[1512px] flex-col justify-center px-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-[#2b2b2b]">
              <Image
                src="/assets/circle%20%26%20arrow.png"
                alt=""
                width={53}
                height={31}
                className="h-6 w-auto"
              />
              <span className="font-brother text-[20px] uppercase tracking-[0.2em]">
                Your Power Evolution, Simplified
              </span>
            </div>
            <button
              className="border border-[#ff8000] px-6 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[#ff8000] transition hover:bg-[#ff8000]/10"
              type="button"
            >
              How We Do It
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-4 md:justify-items-center">
            {[
              {
                title: "Lock in the data center requirement",
                image: "/assets/Ellipse%2033.png",
              },
              {
                title: "Build on-site generation",
                image: "/assets/Ellipse%2034.png",
              },
              {
                title: "Capture carbon emissions to create value",
                image: "/assets/Ellipse%2035.png",
              },
              {
                title: "Transition to SMRs over time",
                image: "/assets/Ellipse%2036.png",
              },
            ].map((step, index) => (
              <div
                className="flex w-[180px] flex-col items-center"
                key={step.title}
              >
                <div className="h-[132px] w-[132px] overflow-hidden rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                  <Image
                    src={step.image}
                    alt=""
                    width={132}
                    height={132}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex w-full items-start gap-3 text-left text-[#2b2b2b]">
                  <span className="font-brother text-[16px]">
                    {index + 1}
                  </span>
                  <span className="mt-1 h-10 w-px bg-black/30" />
                  <p className="text-[11px] leading-[16px]">{step.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative h-[639px] overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/carbon%20capture.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/45 to-black/70" />
        <div className="relative mx-auto flex h-full max-w-[1512px] items-center justify-end px-10">
          <div className="max-w-[420px]">
            <div className="flex items-center gap-3 text-white/90">
              <Image
                src="/assets/circle%20%26%20arrow.png"
                alt=""
                width={53}
                height={31}
                className="h-6 w-auto opacity-90 invert"
              />
              <span className="font-brother text-[20px] uppercase tracking-[0.2em]">
                Carbon Capture Tech
              </span>
            </div>
            <p className="mt-4 text-[12px] leading-[20px] text-white/80">
              Our capture pathway collects emissions for later processing of
              high-value CO2 materials, an advantage that supports corporate
              carbon neutrality goals without slowing the race to power.
            </p>
            <button
              className="mt-6 border border-white/60 px-6 py-2 text-[10px] uppercase tracking-[0.28em] text-white/85 transition hover:border-white hover:text-white"
              type="button"
            >
              How We Reduce Carbon
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#ff8000]">
        <div className="mx-auto flex max-w-[1512px] items-center justify-between px-10 py-10">
          <div className="flex items-center gap-6 text-white">
            <Image
              src="/assets/circle%20%26%20arrow.png"
              alt=""
              width={53}
              height={31}
              className="h-7 w-auto invert"
            />
            <div className="font-brother text-[22px] uppercase leading-[24px] tracking-[0.18em]">
              Ready To
              <br />
              Move Faster?
            </div>
          </div>
          <p className="max-w-[340px] text-[12px] leading-[18px] text-white/85">
            Tell us what you need and when you need it. Our team responds
            quickly and routes your inquiry to the right experts.
          </p>
          <button
            className="border border-white/80 px-8 py-2 text-[10px] uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
            type="button"
          >
            Let&apos;s Chat
          </button>
        </div>
      </section>
      <footer className="bg-black text-white">
        <div className="mx-auto grid max-w-[1512px] grid-cols-1 md:grid-cols-[1.4fr_0.6fr]">
          <div className="px-10 py-12">
            <Image
              src="/assets/logo.png"
              alt="Next Century Power"
              width={220}
              height={28}
              className="h-6 w-auto"
            />
            <div className="mt-6 flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-white/70">
              {[
                "Our Story",
                "What We Do",
                "How We Do It",
                "Who We Work With",
                "Sites",
                "News",
                "Resources",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#3c3331] px-10 py-12 text-center">
            <div className="max-w-[220px] text-white/80">
              <p className="text-[12px] leading-[18px]">
                Explore how our approach to energy can benefit your region.
              </p>
              <button
                className="mt-6 border border-white/70 px-6 py-2 text-[10px] uppercase tracking-[0.3em] text-white/90 transition hover:border-white hover:text-white"
                type="button"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1512px] items-center justify-between px-10 py-4 text-[10px] text-white/50">
            <span>© 2025 Next Century Power</span>
            <span>Website by ◦</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
