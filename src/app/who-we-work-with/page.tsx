import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

type Partner = {
  name: string;
  logo: string;
  description: string;
  logoWidth: number;
  logoHeight: number;
  logoClassName?: string;
};

const partners: Partner[] = [
  {
    name: "Siemens Energy",
    logo: "/assets/Siemens_Energy_logo.svg%201.png",
    description: "Advanced Turbine & Energy System Integration",
    logoWidth: 255,
    logoHeight: 110,
    logoClassName: "h-[92px] w-auto",
  },
  {
    name: "Boldt",
    logo: "/assets/Boldt_bw%201.png",
    description: "Power & Infrastructure Construction & Consulting",
    logoWidth: 220,
    logoHeight: 75,
    logoClassName: "h-[64px] w-auto",
  },
  {
    name: "Solential",
    logo: "/assets/Solential_Logo_v4_854x313%201.png",
    description: "Microgrid & Redundant Energy Solutions",
    logoWidth: 250,
    logoHeight: 105,
    logoClassName: "h-[88px] w-auto",
  },
  {
    name: "United States Department of Energy",
    logo: "/assets/department%20of%20energy%20america.png",
    description: "Submitted RFI",
    logoWidth: 118,
    logoHeight: 118,
    logoClassName: "h-[118px] w-[118px]",
  },
  {
    name: "Inertial",
    logo: "/assets/inertial%201.png",
    description: "Carbon Capture Expertise",
    logoWidth: 248,
    logoHeight: 56,
    logoClassName: "h-[48px] w-auto",
  },
];

function PartnerFrame({
  logo,
  alt,
  width,
  height,
  logoClassName,
}: {
  logo: string;
  alt: string;
  width: number;
  height: number;
  logoClassName?: string;
}) {
  return (
    <div className="relative mx-auto h-[164px] w-full max-w-[320px]">
      <span className="absolute left-0 top-0 h-10 w-10 border-l border-t border-black/60" />
      <span className="absolute right-0 top-0 h-10 w-10 border-r border-t border-black/60" />
      <span className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-black/60" />
      <span className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-black/60" />
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <Image
          src={logo}
          alt={alt}
          width={width}
          height={height}
          className={logoClassName ?? "h-auto w-auto"}
        />
      </div>
    </div>
  );
}

export default function WhoWeWorkWithPage() {
  return (
    <div className="min-h-screen bg-[#e7e7e7] text-[#1f1f1f]">
      <Header />

      <section className="relative -mt-[32px] overflow-hidden">
        <div className="relative h-[560px] w-full md:h-[620px]">
          <Image
            src="/assets/lightbulb%20on%20grass.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full max-w-[1512px] items-center px-6 md:px-8">
              <div className="max-w-[480px] text-white">
                <h1 className="font-brother text-[54px] font-[200] uppercase leading-[52px] tracking-[-0.03em]">
                  Partners In
                  <br />
                  Power
                </h1>
                <p className="mt-5 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/88">
                  <span className="block">
                    From global technology companies to federal energy
                    stakeholders,
                  </span>
                  <span className="block">
                    NCP collaborates with organizations that share our
                    commitment
                  </span>
                  <span className="block">
                    to speed, reliability and innovation in power generation.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e7e7e7] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto max-w-[1180px]">
            <div className="flex items-center justify-center gap-4 text-[#1f1f1f]">
              <div className="relative h-[31px] w-[53px] shrink-0">
                <Image
                  src="/assets/circle%20%26%20arrow.png"
                  alt=""
                  width={53}
                  height={31}
                  className="h-full w-full"
                />
                <Image
                  src="/assets/black%20handshake.png"
                  alt=""
                  width={14}
                  height={14}
                  className="absolute left-[9px] top-1/2 h-[14px] w-[14px] -translate-y-1/2"
                />
              </div>
              <h2 className="font-brother text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em]">
                Our Partners
              </h2>
            </div>

            <div className="mt-14 grid gap-y-14 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-10">
              {partners.map((partner, index) => (
                <article
                  key={partner.name}
                  className={`mx-auto w-full max-w-[320px] text-center text-[#323232] ${
                    index === 3 ? "lg:col-start-1" : ""
                  } ${index === 4 ? "lg:col-start-2" : ""}`}
                >
                  <PartnerFrame
                    logo={partner.logo}
                    alt={partner.name}
                    width={partner.logoWidth}
                    height={partner.logoHeight}
                    logoClassName={partner.logoClassName}
                  />
                  <p className="mx-auto mt-5 max-w-[260px] font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-[#343434]">
                    {partner.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,_#FF8000_0%,_#E57300_79.53%)] py-11 text-white">
        <div className="mx-auto flex w-full max-w-[1512px] flex-col items-start gap-8 px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="relative h-[31px] w-[53px] shrink-0">
              <Image
                src="/assets/circle%20%26%20arrow.png"
                alt=""
                width={53}
                height={31}
                className="h-full w-full invert"
              />
              <Image
                src="/assets/white%20handshake.png"
                alt=""
                width={14}
                height={14}
                className="absolute left-[9px] top-1/2 h-[14px] w-[14px] -translate-y-1/2"
              />
            </div>
            <h3 className="font-brother text-[45px] font-[200] uppercase leading-[42px] tracking-[-0.03em]">
              Future
              <br />
              Collaborations
            </h3>
          </div>

          <p className="max-w-[640px] font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/90">
            We continue to expand our network of partners who understand the
            urgency of modern data center development, those organizations
            capable of advancing projects from planning to power in record time.
          </p>

          <Link
            href="/lets-chat"
            className="inline-flex h-[43px] w-[246px] shrink-0 items-center justify-center border border-white/45 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-white/65 transition hover:border-white/70 hover:text-white"
          >
            Submit
          </Link>
        </div>
      </section>

      <SiteFooter showTopCta={false} />
    </div>
  );
}
