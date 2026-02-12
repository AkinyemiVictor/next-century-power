import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

function ArrowMark({
  icon,
  invert = false,
  iconInvert,
  iconCenterX = 12,
  iconCenterY = 15,
  iconWidth = 16,
  iconHeight = 16,
}: {
  icon: string;
  invert?: boolean;
  iconInvert?: boolean;
  iconCenterX?: number;
  iconCenterY?: number;
  iconWidth?: number;
  iconHeight?: number;
}) {
  const shouldInvertIcon = iconInvert ?? invert;

  return (
    <span className="relative h-[31px] w-[53px] shrink-0">
      <Image
        src="/assets/circle%20%26%20arrow.png"
        alt=""
        width={53}
        height={31}
        className={`h-full w-full ${invert ? "invert" : ""}`}
      />
      <Image
        src={icon}
        alt=""
        width={iconWidth}
        height={iconHeight}
        className={`absolute -translate-x-1/2 -translate-y-1/2 ${
          shouldInvertIcon ? "invert" : ""
        }`}
        style={{
          left: `${iconCenterX}px`,
          top: `${iconCenterY}px`,
          width: `${iconWidth}px`,
          height: `${iconHeight}px`,
        }}
      />
    </span>
  );
}

const processSteps = [
  "As gases accelerate through a supersonic nozzle, static temperature drops, causing CO2 and H2O to transition into solid particles.",
  "When this swirling flow passes a splitter plate, centrifugal force separates those particles from the clean exhaust stream.",
  "The result: a high-efficiency capture system that achieves over 90% capture in lab testing, and more than 50% in real-world operation, using only power, flow and physics.",
];

const projectSizes = [
  {
    scale: "20k / y",
    space: "1/2 acre",
    power: "~ 2.5 MW",
    capex: "$10M",
    cost: "$30-$80",
    timeline: "~ 12 mo",
  },
  {
    scale: "100k / y",
    space: "1 acre",
    power: "~ 9.7 MW",
    capex: "$30M",
    cost: "$30-$70",
    timeline: "12-16 mo",
  },
  {
    scale: "1M / y",
    space: "3-5 acres",
    power: "~ 97 MW",
    capex: "$150M",
    cost: "$30-$50",
    timeline: "16-24 mo",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="relative -mt-[32px] overflow-hidden text-white">
        <div className="relative h-[560px] w-full md:h-[760px]">
          <Image
            src="/assets/city%20emission.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07142c]/85 via-[#07142c]/55 to-[#07142c]/25" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full max-w-[1512px] items-center px-6 md:px-8">
              <div className="max-w-[560px]">
                <h1 className="font-brother text-[42px] font-[200] uppercase leading-[40px] tracking-[-0.03em] md:text-[60px] md:leading-[56px]">
                  Turning Emissions
                  <br />
                  Into Opportunity
                </h1>
                <p className="mt-4 font-inter text-[15px] font-[200] leading-[25px] text-white/88 md:text-[16px] md:leading-[27px]">
                  At Next Century Power, sustainability is built into our power
                  strategy.
                </p>
                <p className="mt-5 font-inter text-[15px] font-[200] leading-[25px] text-white/88 md:text-[16px] md:leading-[27px]">
                  Working alongside Inertial, our carbon-capture partner led by
                  Dr. Aksu Koct, we&apos;re advancing a new class of technology
                  designed to remove CO2 directly from post-combustion exhaust
                  and transform it into high-value carbon materials for
                  commercial use through our sister company, Carbon Edge.
                </p>
                <p className="mt-5 font-inter text-[15px] font-[200] leading-[25px] text-white/88 md:text-[16px] md:leading-[27px]">
                  This system closes the loop between power generation and
                  carbon utilization, cutting emissions while creating
                  marketable materials that strengthen the economics of clean
                  energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <div className="flex items-start gap-5 text-[#202020]">
              <ArrowMark
                icon="/assets/repeat.png"
                iconCenterX={15}
                iconCenterY={16}
                iconWidth={18}
                iconHeight={16}
              />
              <h2 className="font-brother text-[35px] font-[200] uppercase leading-[34px] tracking-[-0.03em] md:text-[40px]">
                The Inertial Process
              </h2>
            </div>

            <p className="mt-4 max-w-[640px] font-inter text-[16px] font-[200] leading-[27px] text-[#2a2a2a]">
              Inertial&apos;s approach of supersonic inertial separation uses
              aerospace-inspired nozzle design to freeze and separate CO2 and
              H2O from hot, moisture-laden exhaust streams.
            </p>

            <div className="mt-10">
              <Image
                src="/assets/Inertial%201@2x.png"
                alt="Inertial process diagram"
                width={2244}
                height={634}
                className="h-auto w-full"
                sizes="(max-width: 1200px) 95vw, 1120px"
              />
            </div>

            <div className="mt-10 grid gap-7 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[22px_1fr] gap-4 border-l border-black/25 pl-4"
                >
                  <span className="font-brother text-[34px] leading-[1] text-black/85">
                    {index + 1}
                  </span>
                  <p className="font-inter text-[15px] font-[200] leading-[25px] text-[#2a2a2a]">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid items-center gap-10 md:grid-cols-[300px_1fr] md:gap-14">
              <div className="mx-auto w-full max-w-[308px]">
                <Image
                  src="/assets/close%20loop%20system.png"
                  alt="Closed loop capture system"
                  width={308}
                  height={305}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 65vw, 308px"
                />
              </div>
              <div>
                <h3 className="font-brother text-[35px] font-[200] uppercase leading-[34px] tracking-[-0.03em] md:text-[40px]">
                  System Configuration
                </h3>
                <p className="mt-5 font-inter text-[16px] font-[200] leading-[27px] text-[#2a2a2a]">
                  A closed-loop configuration draws flue gas from the
                  power-plant exhaust to Inertial&apos;s capture units, where
                  water vapor and CO2 are removed.
                </p>
                <p className="mt-5 font-inter text-[16px] font-[200] leading-[27px] text-[#2a2a2a]">
                  The cleaned gas, minus those components, is then routed back
                  to the exhaust stack. This design reduces both the flow rate
                  and carbon concentration of emissions without requiring new
                  stack construction or major retrofits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="h-[323px] text-white"
        style={{
          background: "linear-gradient(120.95deg, #706363 0%, #2D2927 91.56%)",
        }}
      >
        <div className="mx-auto h-full w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto grid h-full max-w-[1140px] content-center gap-9 md:grid-cols-[1fr_1.2fr] md:gap-12">
            <div>
              <div className="flex items-start gap-4">
                <ArrowMark
                  icon="/assets/footprint.png"
                  invert
                  iconInvert={false}
                  iconCenterX={16}
                  iconCenterY={16}
                  iconWidth={7}
                  iconHeight={16}
                />
                <h3 className="font-brother text-[35px] font-[200] uppercase leading-[34px] tracking-[-0.03em] md:text-[40px]">
                  Why It Matters
                </h3>
              </div>
              <p className="mt-4 max-w-[460px] font-inter text-[16px] font-[200] leading-[27px] text-white/85">
                Each modular system is packaged in standard 40-ft high-top
                containers, enabling flexible deployment, simplified logistics
                and rapid on-site integration.
              </p>
            </div>
            <ul className="list-disc space-y-2.5 pl-5 font-inter text-[15px] font-[200] leading-[24px] text-white/88">
              <li>
                Operates in high-temperature, high-humidity exhaust
                environments
              </li>
              <li>
                Modular and easily scalable, from 1,000 to 1,000,000 metric
                tons of CO2 per year
              </li>
              <li>Compact footprint (1/2 to 5 acres depending on system size)</li>
              <li>Competitive cost structure at ~$30-$80 per ton captured</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden text-white">
        <div className="relative h-[500px] w-full md:h-[615px]">
          <Image
            src="/assets/electron%20links.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/50 to-black/75" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full max-w-[1512px] items-center justify-end px-6 md:px-8">
              <div className="max-w-[580px]">
                <div className="flex items-start gap-4">
                  <ArrowMark
                    icon="/assets/link.png"
                    invert
                    iconInvert={false}
                    iconCenterX={16}
                    iconCenterY={15}
                    iconWidth={18}
                    iconHeight={14}
                  />
                  <h3 className="font-brother text-[35px] font-[200] uppercase leading-[34px] tracking-[-0.03em] md:text-[40px]">
                    The Carbon Edge Connection
                  </h3>
                </div>
                <p className="mt-5 font-inter text-[16px] font-[200] leading-[27px] text-white/86">
                  Through Carbon Edge, NCP&apos;s affiliated company, the
                  recovered carbon is converted into advanced 2D and
                  nano-carbon products, including graphene, nanotubes and
                  nanofibers, for industrial and commercial applications.
                </p>
                <p className="mt-5 font-inter text-[16px] font-[200] leading-[27px] text-white/86">
                  These materials enhance manufacturing strength, conductivity
                  and sustainability, turning a regulatory challenge into an
                  economic advantage.
                </p>
                <p className="mt-5 font-inter text-[16px] font-[200] leading-[27px] text-white/86">
                  Together, NCP, Inertial and Carbon Edge form a complete
                  carbon-cycle ecosystem, powering progress while reducing the
                  footprint of industrial and data-center operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <div className="flex items-start justify-center gap-4 text-[#1f1f1f]">
              <ArrowMark
                icon="/assets/updown.png"
                iconCenterX={16}
                iconCenterY={16}
                iconWidth={12}
                iconHeight={23}
              />
              <h3 className="text-center font-brother text-[35px] font-[200] uppercase leading-[34px] tracking-[-0.03em] md:text-[40px]">
                Overview Of Project Sizes
              </h3>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[920px] border-collapse border-b border-black/45 font-inter">
                <thead>
                  <tr className="border-b border-black/45 text-left text-[12px] uppercase tracking-[0.09em] text-[#222]">
                    <th className="pb-3 pr-5 font-[500]">
                      <span className="block">Scale</span>
                      <span className="mt-1 block text-[10px] font-[400] normal-case tracking-[0.02em] text-[#4d4d4d]">
                        (Metric Tons CO2 / Yr)
                      </span>
                    </th>
                    <th className="pb-3 pr-5 font-[500]">Space Needed</th>
                    <th className="pb-3 pr-5 font-[500]">Power Required</th>
                    <th className="pb-3 pr-5 font-[500]">Cap Ex</th>
                    <th className="pb-3 pr-5 font-[500]">Cost Per Ton</th>
                    <th className="pb-3 font-[500]">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {projectSizes.map((project) => (
                    <tr
                      key={project.scale}
                      className="border-b border-black/35 text-[14px] text-[#2a2a2a]"
                    >
                      <td className="py-3 pr-5">{project.scale}</td>
                      <td className="py-3 pr-5">{project.space}</td>
                      <td className="py-3 pr-5">{project.power}</td>
                      <td className="py-3 pr-5">{project.capex}</td>
                      <td className="py-3 pr-5">{project.cost}</td>
                      <td className="py-3">{project.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-16 grid items-start gap-10 md:grid-cols-[1fr_541px] md:gap-12">
              <div className="max-w-[590px]">
                <h4 className="font-brother text-[32px] font-[200] uppercase leading-[32px] tracking-[-0.03em] md:text-[35px]">
                  Carbon Capture Pathway
                </h4>
                <p className="mt-5 font-inter text-[16px] font-[200] leading-[27px] text-[#2a2a2a]">
                  A loop will be made from the power plant exhaust stack, to
                  Inertial&apos;s carbon capture units where the water vapor and
                  CO2 are removed from the flue gas, then a return header will
                  be used to return all but the water vapor and CO2 to the
                  exhaust stack. A similar configuration schematic is shown
                  which represents how the National Carbon Capture Center in
                  Wilsonville, Alabama, functions. This style of operation
                  avoids the need for building a new exhaust stack, reduces the
                  flow rate of the exhaust stack and reduces the concentration
                  of water vapor and CO2 in the flue gas being exhausted.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[541px]">
                <Image
                  src="/assets/coal%20fg%20config.png"
                  alt="Carbon capture pathway schematic"
                  width={541}
                  height={290}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 92vw, 541px"
                />
                <p className="mt-2 text-right font-inter text-[13px] font-[200] leading-[20px] text-[#4a4a4a]">
                  Mockup of a unit which captures 200,000 metric tons per year
                  of CO2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[linear-gradient(180deg,_#FF8000_0%,_#E57300_79.53%)] text-white md:h-[210px]">
        <div className="mx-auto grid h-full w-full max-w-[1512px] gap-7 px-6 py-9 md:grid-cols-[1.2fr_1fr_auto] md:items-center md:gap-10 md:px-8 md:py-0">
          <div className="flex items-start gap-4">
            <ArrowMark
              icon="/assets/repeat.png"
              invert
              iconCenterX={15}
              iconCenterY={16}
              iconWidth={18}
              iconHeight={16}
            />
            <h4 className="font-brother text-[35px] font-[200] uppercase leading-[34px] tracking-[-0.03em] md:text-[40px]">
              See How Capture
              <br />
              Becomes Value
            </h4>
          </div>
          <p className="max-w-[460px] font-inter text-[16px] font-[200] leading-[27px] text-white/90">
            Learn how our partnership with Inertial and Carbon Edge is
            redefining what clean power can achieve.
          </p>
          <Link
            href="/lets-chat"
            className="inline-flex h-[43px] w-[246px] items-center justify-center border border-white/70 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-white/90 transition hover:border-white hover:text-white"
          >
            Let&apos;s Chat
          </Link>
        </div>
      </section>

      <div className="relative z-20 -mt-5">
        <SiteFooter showTopCta={false} />
      </div>
    </div>
  );
}
