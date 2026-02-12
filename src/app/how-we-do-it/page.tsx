import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

function ArrowIcon({
  icon,
  invert = false,
  iconInvert,
  iconCenterX = 12,
  iconCenterY = 15,
  iconWidth = 17,
  iconHeight = 17,
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
    <div className="relative h-[31px] w-[53px] shrink-0">
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
    </div>
  );
}

export default function HowWeDoItPage() {
  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="relative -mt-[32px] overflow-hidden">
        <div className="relative h-[520px] w-full bg-[#07101d] md:h-[645px]">
          <Image
            src="/assets/power%20plant%20layout%20hero.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full max-w-[1512px] items-center px-6 md:px-8">
              <div className="max-w-[560px] text-white">
                <h1 className="font-brother text-[54px] font-[200] uppercase leading-[52px] tracking-[-0.03em]">
                  Next-Generation
                  <br />
                  Microgrid Design
                </h1>
                <p className="mt-3 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/88">
                  Localized, Resilient Baseload
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto max-w-[880px] text-center text-[#1f1f1f]">
            <div className="flex items-start justify-center gap-4">
              <ArrowIcon
                icon="/assets/lightning.png"
                iconCenterX={15}
                iconWidth={10}
                iconHeight={17}
              />
              <h2 className="font-brother text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em]">
                The World&apos;s Energy Model Is Broken.
              </h2>
            </div>
            <p className="mx-auto mt-6 max-w-[860px] font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-[#1f1f1f]">
              The explosive growth of AI computing, hyperscale data centers and
              advanced manufacturing is driving energy demand far beyond what
              today&apos;s centralized grid can supply. Built for one-way power
              flow and distant plants to consumers, the legacy grid can&apos;t
              handle modern realities: distributed generation, renewable
              intermittency or rapid industrial scaling. The result is
              instability, lost transmission efficiency and multi-year delays
              that stall critical projects. To keep pace with the digital and
              industrial revolutions now reshoring across the U.S., baseload
              reliability must be rebuilt from the ground up.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex h-[43px] w-[246px] items-center justify-center border border-[#ff8000] font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-[#ff8000] transition hover:bg-[#ff8000]/10"
            >
              What We Do
            </Link>
          </div>
        </div>
      </section>

      <section className="relative h-[700px] overflow-hidden bg-[#0f1620] text-white">
        <Image
          src="/assets/power%20plant.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/25 to-black/55" />
        <div className="relative mx-auto flex h-full w-full max-w-[1512px] items-center justify-end px-6 md:px-8">
          <div className="max-w-[520px]">
            <div className="flex items-start gap-4">
              <ArrowIcon
                icon="/assets/nuclear%20icon.png"
                invert
                iconCenterX={16}
                iconCenterY={16}
              />
              <h2 className="font-brother text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em] text-white/92">
                Our Approach
              </h2>
            </div>
            <p className="mt-6 font-inter text-[22px] font-[200] leading-[28px] tracking-[0] text-white/86">
              Next Century Power answers this challenge by developing
              distributed, self-sufficient microgrids, localized generation
              ecosystems designed to operate independently of the larger grid.
            </p>
            <p className="mt-6 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/86">
              These systems deliver true resilience. If one segment experiences
              an outage, others remain fully operational, maintaining uptime
              through natural disasters, cyber threats or equipment failure.
              Microgrids also eliminate billions in transmission losses and
              streamline the integration of renewables, offering a faster,
              cleaner and more reliable path to power.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[760px] overflow-hidden bg-[#a2aab4] text-white">
        <Image
          src="/assets/nuclear%20plant.png"
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8f96a2]/35 via-transparent to-transparent" />
        <div className="relative mx-auto h-full w-full max-w-[1512px] px-6 md:px-8">
          <div className="pt-14 md:pt-16">
            <div className="flex items-start gap-4">
              <ArrowIcon
                icon="/assets/fan%20blade.png"
                invert
                iconInvert={false}
                iconCenterX={15}
                iconWidth={19}
                iconHeight={19}
              />
              <h2 className="font-brother text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em] text-white/95">
                Turbine Choice &amp; Noise Reduction
              </h2>
            </div>

            <div className="mt-6 grid max-w-[1180px] gap-8 md:grid-cols-2 md:gap-12">
              <p className="font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/86">
                Our near-term strategy leverages Siemens&apos;s advanced
                turbines, including the SGT5-9000HL, SGT5-4000F and SGT-A65
                (65 MW) models, highly efficient, readily maintainable turbines
                suited for scalable baseload generation.
              </p>
              <p className="font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/86">
                By employing smaller-scale, modular turbines, NCP can rapidly
                increase capacity, minimize downtime during maintenance and
                maintain continuous operation without full-system shutdowns.
                Siemens&apos;s track record and the widespread availability of
                trained trade professionals make the SGT-A65 a reliable,
                field-proven choice for accelerated deployment.
              </p>
            </div>

            <p className="mt-6 max-w-[580px] font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/86">
              Noise reduction is also integral to our plant design, using
              silencers, acoustic barriers and vibration control to reduce
              environmental impact and community compatibility.
            </p>

            <Link
              href="/who-we-work-with"
              className="mt-8 inline-flex h-[43px] w-[246px] items-center justify-center border border-white/70 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-white/90 transition hover:border-white hover:text-white"
            >
              Meet Our Partners
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 md:grid-cols-[487px_1fr] md:gap-14">
            <div className="mx-auto w-full max-w-[487px]">
              <Image
                src="/assets/nuclear%20plant%202.png"
                alt=""
                width={487}
                height={467}
                className="h-auto w-full"
              />
            </div>
            <div className="max-w-[700px]">
              <div className="flex items-start gap-4">
                <ArrowIcon
                  icon="/assets/nuclear%20icon.png"
                  iconCenterX={15}
                />
                <h2 className="font-brother text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em] text-[#1f1f1f]">
                  Built For The Next Century
                </h2>
              </div>

              <p className="mt-6 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-[#1f1f1f]">
                While today&apos;s installations use high-efficiency natural
                gas turbines, our long-term vision is to integrate Small
                Modular Reactors (SMRs) as the next evolution of distributed
                baseload power.
              </p>
              <p className="mt-6 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-[#1f1f1f]">
                This transition marks the foundation of a sustainable industrial
                ecosystem, one capable of delivering secure, carbon-reduced
                energy at scale while supporting the broader modernization of
                the U.S. grid.
              </p>
            </div>
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
            <div className="flex items-start gap-4">
              <ArrowIcon
                icon="/assets/cloud.png"
                invert
                iconInvert={false}
                iconCenterX={16}
                iconWidth={16}
                iconHeight={11}
              />
              <h2 className="font-brother text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em] text-white/92">
                Carbon Capture Tech
              </h2>
            </div>
            <p className="mt-4 max-w-[500px] font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/88">
              Explore how Next Century Power is reimagining carbon neutrality
              initiatives for data centers, defense installations and critical
              infrastructure.
            </p>
            <Link
              href="/who-we-work-with/inertial"
              className="mt-6 inline-flex h-[43px] w-[246px] items-center justify-center border border-white/70 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-white/90 transition hover:border-white hover:text-white"
            >
              How We Reduce Carbon
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 h-[210px] bg-[linear-gradient(180deg,_#FF8000_0%,_#E57300_79.53%)] text-white">
        <div className="mx-auto flex h-full max-w-[1512px] items-center justify-end gap-16 pl-12 pr-40">
          <div className="flex items-start gap-5">
            <ArrowIcon
              icon="/assets/fast%20forward.png"
              invert
              iconInvert={false}
              iconCenterX={16}
              iconWidth={16}
              iconHeight={11}
            />
            <h3 className="font-brother text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em]">
              Ready To
              <br />
              Move Faster?
            </h3>
          </div>
          <p className="max-w-[380px] font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/90">
            Tell us what you need and when you need it. Our team responds
            quickly and routes your inquiry to the right experts.
          </p>
          <Link
            href="/lets-chat"
            className="inline-flex h-[43px] w-[246px] shrink-0 items-center justify-center border border-white/70 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-white/90 transition hover:border-white hover:text-white"
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
