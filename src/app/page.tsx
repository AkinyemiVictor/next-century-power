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

const quickTiles = [
  {
    title: ["Gas Turbine", "Generation"],
    image: "/assets/relic%20rilms.png",
    description:
      "Fast-deploying, high-efficiency turbines form the initial foundation of each NCP site, providing scalable, stable baseload power independent of grid limitations.",
  },
  {
    title: ["Data Center", "Integration"],
    image: "/assets/server%20room.png",
    description:
      "Purpose-built microgrids deliver redundant, high-quality energy directly to hyperscale computing infrastructure, minimizing transmission losses and grid dependency.",
  },
  {
    title: ["Carbon", "Capture"],
    image: "/assets/carbon%20exhaust.png",
    description:
      "We capture emissions from on-site generation and transform CO2 into marketable graphene and carbon nanomaterials, turning carbon output into tangible value.",
  },
  {
    title: ["SMR", "Transition"],
    image: "/assets/plant%204.png",
    description:
      "Each site is designed with a future-ready path to integrate Small Modular Reactors, unlocking long-term stability and energy independence.",
  },
];

const deliveryItems = [
  {
    title: "Site Development & Permitting",
    description:
      "We identify and prepare sites that meet zoning and environmental requirements while advocating with municipalities to accelerate approval.",
    image: "/assets/agricutural%20plane%20field.png",
  },
  {
    title: "Engineering & Construction",
    description:
      "In collaboration with our partners, we deliver technically robust, secure microgrid systems built for continuous uptime.",
    image: "/assets/construction%20worker.png",
  },
  {
    title: "Operations & Optimization",
    description:
      "Our in-house and partner teams provide 24/7 monitoring, predictive maintenance and system optimization.",
    image: "/assets/transmitter%20room.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="relative -mt-[32px] overflow-hidden text-white">
        <div className="relative h-[520px] w-full md:h-[678px]">
          <Image
            src="/assets/hero%20server%20room.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031329]/76 via-[#031329]/48 to-[#031329]/16" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full max-w-[1512px] items-center px-6 md:px-8">
              <div className="max-w-[600px]">
                <h1 className="font-brother text-[44px] font-[200] uppercase leading-[41px] tracking-[-0.03em] md:text-[64px] md:leading-[60px]">
                  Building The Power
                  <br />
                  Behind The Data
                  <br />
                  Revolution
                </h1>
                <p className="mt-5 max-w-[540px] font-inter text-[15px] font-[200] leading-[25px] text-white/88 md:text-[16px] md:leading-[27px]">
                  Next Century Power designs, builds and operates localized
                  energy ecosystems that bring data centers and industrial users
                  online faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto max-w-[980px] text-center">
            <div className="flex items-center justify-center gap-4 text-[#1f1f1f]">
              <ArrowMark
                icon="/assets/power.png"
                iconCenterX={15}
                iconCenterY={15}
                iconWidth={14}
                iconHeight={14}
              />
              <h2 className="font-brother text-[40px] font-[200] uppercase leading-[36px] tracking-[-0.03em] md:whitespace-nowrap md:text-[50px] md:leading-[45px]">
                Speed To Power... Now
              </h2>
            </div>
            <p className="mx-auto mt-4 max-w-[980px] font-inter text-[16px] font-[200] leading-[27px] text-[#2a2a2a]">
              <span className="block">
                <span className="font-[600]">Our mission is clear:</span>{" "}
                deliver reliable baseload power in less time than
              </span>
              <span className="block">
                traditional utility models can, typically under three years,
                compared to the
              </span>
              <span className="block">
                3-6+ year timelines common in today&apos;s constrained grid
                environment.
              </span>
            </p>
            <Link
              href="/how-we-do-it"
              className="mt-8 inline-flex h-[43px] w-[246px] items-center justify-center border border-[#ff8000] font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-[#ff8000] transition hover:bg-[#ff8000]/10"
            >
              How We Do It
            </Link>
          </div>

          <div className="mx-auto mt-12 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:w-fit lg:grid-cols-[repeat(4,323px)] lg:gap-[2px]">
            {quickTiles.map((tile, index) => (
              <article
                key={tile.title.join(" ")}
                className="relative h-[421px] overflow-hidden lg:w-[323px]"
                style={
                  index === 0
                    ? {
                        clipPath:
                          "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)",
                        WebkitClipPath:
                          "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)",
                      }
                    : undefined
                }
              >
                <Image
                  src={tile.image}
                  alt={tile.title.join(" ")}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 324px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-y-0 left-0 w-[76%] bg-[#ff8000] px-5 py-6 text-white">
                  <h3 className="font-brother text-[44px] font-[500] uppercase leading-[39px] tracking-[-0.03em]">
                    {tile.title[0]}
                    <br />
                    {tile.title[1]}
                  </h3>
                  <p className="mt-4 font-inter text-[15px] font-[200] leading-[33px] text-white/95">
                    {tile.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-14 md:pb-20 md:pt-16">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto max-w-[860px] text-center">
            <div className="flex items-start justify-center gap-4 text-[#1f1f1f]">
              <ArrowMark
                icon="/assets/black%20handshake.png"
                iconCenterX={16}
                iconCenterY={16}
                iconWidth={20}
                iconHeight={16}
              />
              <h2 className="font-brother text-[40px] font-[200] uppercase leading-[36px] tracking-[-0.03em] md:text-[50px] md:leading-[45px]">
                Your End-To-End Partner
              </h2>
            </div>
            <p className="mt-4 font-inter text-[17px] font-[500] leading-[27px] text-[#1f1f1f]">
              Utilities serve millions. We serve one - You.
            </p>
            <p className="mt-5 font-inter text-[16px] font-[200] leading-[27px] text-[#2a2a2a]">
              <span className="block">By focusing each development on a single tenant or data campus, we streamline</span>
              <span className="block">design, permitting and deployment around your exact operational requirements.</span>
              <span className="block">The result is faster execution, stronger reliability and full lifecycle accountability</span>
              <span className="block">from the same team that built your power infrastructure.</span>
            </p>
            <Link
              href="/who-we-work-with"
              className="mt-8 inline-flex h-[43px] w-[246px] items-center justify-center border border-[#ff8000] font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-[#ff8000] transition hover:bg-[#ff8000]/10"
            >
              Meet Our Partners
            </Link>
          </div>
        </div>
      </section>

      <section className="relative h-[620px] overflow-hidden text-white md:h-[681px]">
        <Image
          src="/assets/moon%20%26%20clouds.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00173b]/26 via-[#00173b]/35 to-[#00173b]/56" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full w-full max-w-[1512px] items-center justify-end px-6 md:px-8">
            <div className="max-w-[630px]">
              <div className="flex items-start gap-4">
                <ArrowMark
                  icon="/assets/cloud.png"
                  invert
                  iconInvert={false}
                  iconCenterX={16}
                  iconCenterY={16}
                  iconWidth={16}
                  iconHeight={11}
                />
                <h2 className="font-brother text-[40px] font-[200] uppercase leading-[36px] tracking-[-0.03em] md:text-[50px] md:leading-[45px]">
                  Cleaner Power From Day 1
                </h2>
              </div>
              <p className="mt-5 font-inter text-[16px] font-[200] leading-[27px] text-white/88">
                Every NCP project integrates a carbon-capture pathway and an
                operational plan for renewable and nuclear transition, enabling
                clients to reduce emissions immediately while preparing for a
                carbon-neutral future without downtime or disruption.
              </p>
              <p className="mt-6 font-inter text-[16px] font-[200] leading-[27px] text-white/88">
                Additionally, NCP has identified water treatment facilities are
                needed at or near sites to support operations, regional
                industrial development and our future Small Modular Reactor
                requirements. To ensure water infrastructure adequacy and
                demonstrate our commitment to community benefit, NCP will assume
                financial responsibility for developing this facility. This
                investment guarantees water security for our operations while
                providing critical infrastructure that benefits the broader
                community and supports regional economic development.
              </p>
              <Link
                href="/resources"
                className="mt-8 inline-flex h-[43px] w-[246px] items-center justify-center border border-white/70 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-white/90 transition hover:border-white hover:text-white"
              >
                How We Reduce Carbon
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto flex items-start justify-center gap-4 text-[#1f1f1f]">
            <ArrowMark
              icon="/assets/box.svg"
              iconCenterX={16}
              iconCenterY={15}
              iconWidth={18}
              iconHeight={13}
            />
            <h2 className="font-brother text-[40px] font-[200] uppercase leading-[36px] tracking-[-0.03em] md:text-[50px] md:leading-[45px]">
              How We Deliver
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-[1294px] gap-8 md:grid-cols-3 md:gap-8">
            {deliveryItems.map((item) => (
              <article key={item.title}>
                <div className="relative h-[227px] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 409px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-brother text-[28px] font-[500] uppercase leading-[26px] tracking-[-0.02em] text-[#1f1f1f]">
                  {item.title}
                </h3>
                <p className="mt-2 font-inter text-[16px] font-[200] leading-[27px] text-[#2a2a2a]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
