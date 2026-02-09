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
      <section className="relative -mt-[32px] w-full overflow-hidden">
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
                <span className="font-brother text-[36px] font-[350] uppercase leading-[35px] tracking-[-0.03em] text-center text-[#1c1c1c]">
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
                  className="inline-flex items-center justify-center border border-[#ff8000] px-10 py-3.5 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-center text-[#ff8000] transition hover:bg-[#ff8000]/10"
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
      <section className="relative h-[639px] overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120.95deg, #706363 0%, #2D2927 91.56%)",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: "url('/assets/chip%20background%201.jpg')",
          }}
        />
        <div className="relative mx-auto flex h-full max-w-[1512px] flex-col justify-center px-10">
          <div className="flex items-center justify-center gap-4 text-white/90">
            <div className="relative h-[31px] w-[53px]">
              <Image
                src="/assets/circle%20%26%20arrow.png"
                alt=""
                width={53}
                height={31}
                className="h-full w-full opacity-90 invert"
              />
              <Image
                src="/assets/right%20arrow.png"
                alt=""
                width={14}
                height={14}
                className="absolute right-[30px] top-1/2 h-[14px] w-[14px] -translate-y-1/2"
              />
            </div>
            <span className="font-brother text-[36px] font-[350] uppercase leading-[35px] tracking-[-0.03em]">
              How We&apos;re Advancing
            </span>
          </div>
          <div className="mt-10 grid justify-items-center gap-x-12 gap-y-12 md:grid-cols-2">
            {[
              {
                lines: [
                  "In active dialogue with federal and state",
                  "stakeholders on data-center power needs",
                ],
                image: "/assets/Ellipse%2029.png",
              },
              {
                lines: [
                  "Coordinating with major utilities and",
                  "municipalities on expedited power timelines",
                ],
                image: "/assets/Ellipse%2031.png",
              },
              {
                lines: [
                  "Engaged with defense and",
                  "mission-critical installations",
                ],
                image: "/assets/Ellipse%2030.png",
              },
              {
                lines: [
                  "Partnering with established energy and",
                  "technology providers",
                ],
                image: "/assets/Ellipse%2032.png",
              },
            ].map((item) => (
              <div
                className="flex h-[124px] w-[560px] items-center gap-7 rounded-full bg-[#2a1f1c]/50 pl-0 pr-7"
                key={item.lines[0]}
              >
                <div className="h-[124px] w-[124px] shrink-0 overflow-hidden rounded-full ring-2 ring-white/30">
                  <Image
                    src={item.image}
                    alt=""
                    width={124}
                    height={124}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="font-inter text-[16px] leading-[27px] text-white/85">
                  <span className="block">{item.lines[0]}</span>
                  <span className="block">{item.lines[1]}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button
              className="inline-flex items-center justify-center border border-white px-10 py-3.5 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-center text-white/90 transition hover:border-white hover:text-white"
              type="button"
            >
              Meet Our Partners
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto flex h-[760px] max-w-[1512px] flex-col justify-center px-10">
          <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between">
            <div className="flex items-center gap-4 text-[#2b2b2b]">
              <div className="relative h-[31px] w-[53px]">
                <Image
                  src="/assets/circle%20%26%20arrow.png"
                  alt=""
                  width={53}
                  height={31}
                  className="h-full w-full"
                />
                <Image
                  src="/assets/lightning.png"
                  alt=""
                  width={14}
                  height={14}
                  className="absolute left-[9px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 rotate-[18deg]"
                />
              </div>
              <span className="font-brother text-[36px] uppercase leading-[30px] tracking-[-0.05em]">
                Your Power Evolution, Simplified
              </span>
            </div>
            <button
              className="inline-flex items-center justify-center border border-[#ff8000] px-10 py-3.5 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-center text-[#ff8000] transition hover:bg-[#ff8000]/10"
              type="button"
            >
              How We Do It
            </button>
          </div>
          <div className="mx-auto mt-16 flex w-full max-w-[1120px] flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-0 xl:max-w-[1320px]">
            {[
              {
                title: "Lock in the data center requirement",
                lines: ["Lock in the data", "center requirement"],
                image: "/assets/Ellipse%2033.png",
              },
              {
                title: "Build on-site generation",
                lines: ["Build on-site", "generation"],
                image: "/assets/Ellipse%2034.png",
              },
              {
                title: "Capture carbon emissions to create value",
                lines: ["Capture carbon emissions", "to create value"],
                image: "/assets/Ellipse%2035.png",
              },
              {
                title: "Transition to SMRs over time",
                lines: ["Transition to", "SMRs over time"],
                image: "/assets/Ellipse%2036.png",
              },
            ].map((step, index) => (
              <div
                className="flex w-[224px] flex-col items-center md:w-[220px] lg:w-[260px] xl:w-[300px]"
                key={step.title}
              >
                <div className="h-[224px] w-[224px] overflow-hidden rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.12)] md:h-[220px] md:w-[220px] lg:h-[260px] lg:w-[260px] xl:h-[300px] xl:w-[300px]">
                  <Image
                    src={step.image}
                    alt=""
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex w-full items-start justify-center gap-3 text-[#2b2b2b]">
                  <span className="font-brother text-[26px]">
                    {index + 1}
                  </span>
                  <span className="mt-1 h-10 w-px bg-black/30" />
                  <p className="text-left text-[17px] leading-[24px]">
                    <span className="block">{step.lines[0]}</span>
                    <span className="block">{step.lines[1]}</span>
                  </p>
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
          <div className="relative max-w-[600px]">
            <div className="relative flex items-center">
              <div className="absolute -left-[65px] top-1/2 h-[31px] w-[53px] -translate-y-1/2 translate-y-[1px]">
                <Image
                  src="/assets/circle%20%26%20arrow.png"
                  alt=""
                  width={53}
                  height={31}
                  className="h-full w-full opacity-90 invert"
                />
                <Image
                  src="/assets/cloud.png"
                  alt=""
                  width={16}
                  height={11}
                  className="absolute left-[8px] top-1/2 h-[11px] w-[16px] -translate-y-1/2"
                />
              </div>
              <span className="block font-brother text-[36px] uppercase leading-[36px] tracking-[-0.03em] text-white/90">
                Carbon Capture Tech
              </span>
            </div>
            <p className="mt-4 font-inter text-[16px] font-light leading-[27px] tracking-[0] text-white/80">
              <span className="block">
                Our capture pathway collects emissions for later processing of
              </span>
              <span className="block">
                high-value CO2 materials, an advantage that supports corporate
              </span>
              <span className="block">
                carbon neutrality goals without slowing the race to power.
              </span>
            </p>
            <button
              className="mt-6 inline-flex items-center justify-center border border-white/60 px-10 py-3.5 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-center text-white/85 transition hover:border-white hover:text-white"
              type="button"
            >
              How We Reduce Carbon
            </button>
          </div>
        </div>
      </section>
      <section className="relative z-10 h-[210px] bg-[linear-gradient(180deg,_#FF8000_0%,_#E57300_79.53%)]">
        <div className="mx-auto flex h-full max-w-[1512px] items-center justify-end gap-16 pl-12 pr-40">
          <div className="flex items-center gap-6 text-white">
            <div className="relative h-[31px] w-[53px]">
              <Image
                src="/assets/circle%20%26%20arrow.png"
                alt=""
                width={53}
                height={31}
                className="h-full w-full invert"
              />
              <Image
                src="/assets/fast%20forward.png"
                alt=""
                width={14}
                height={14}
                className="absolute left-[10px] top-1/2 h-[14px] w-[14px] -translate-y-1/2"
              />
            </div>
            <div className="font-brother text-[36px] font-[250] uppercase leading-[35px] tracking-[-0.03em]">
              Ready To
              <br />
              Move Faster?
            </div>
          </div>
          <p className="max-w-[340px] font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/85">
            Tell us what you need and when you need it. Our team responds
            quickly and routes your inquiry to the right experts.
          </p>
          <button
            className="inline-flex h-[43px] w-[246px] items-center justify-center border border-white/80 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-center text-white transition hover:bg-white/10"
            type="button"
          >
            Let&apos;s Chat
          </button>
        </div>
      </section>
      <footer
        className="relative z-0 bg-black text-white"
        style={{
          clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)",
          WebkitClipPath:
            "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)",
        }}
      >
        <div className="mx-auto grid max-w-[1512px] grid-cols-1 md:grid-cols-[1.4fr_0.6fr] md:pr-0">
          <div className="px-10 py-12">
            <Image
              src="/assets/logo%20for%20black%20background.png"
              alt="Next Century Power"
              width={300}
              height={40}
              className="h-10 w-auto"
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
            <div className="flex items-center justify-end bg-[#3c3331] pl-10 pr-0 py-12 text-right">
              <div className="max-w-[220px] text-white/80">
              <p className="text-[12px] leading-[18px]">
                Explore how our approach to energy can benefit your region.
              </p>
              <button
                className="mt-6 inline-flex items-center justify-center border border-white/70 px-10 py-3.5 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-center text-white/90 transition hover:border-white hover:text-white"
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
