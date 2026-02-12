import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PartnerFrame from "@/components/PartnerFrame";
import SiteFooter from "@/components/SiteFooter";
import { getPartnerBySlug, partnerProfiles } from "@/data/partners";

export function generateStaticParams() {
  return partnerProfiles.map((partner) => ({ slug: partner.slug }));
}

export default async function PartnerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);

  if (!partner) {
    notFound();
  }
  const isSiemens = partner.slug === "siemens-energy";

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="relative -mt-[32px] overflow-hidden">
        <div className="relative h-[240px] w-full bg-[#ff7f00] md:h-[270px]">
          <Image
            src="/assets/news hero image.png"
            alt=""
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full max-w-[1512px] items-center px-6 md:px-8">
              <h1 className="font-brother text-[54px] font-[200] uppercase leading-[52px] tracking-[-0.03em] text-white">
                {partner.heroTitle}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto grid w-full max-w-[1226px] items-start gap-10 md:grid-cols-[340px_1fr] md:gap-14">
            <PartnerFrame
              logo={partner.logo}
              alt={partner.name}
              width={partner.logoWidth}
              height={partner.logoHeight}
              logoClassName={partner.logoClassName}
            />
            <div className={isSiemens ? "max-w-[760px]" : ""}>
              <h2
                className={`font-brother text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em] text-[#1f1f1f] ${
                  isSiemens ? "max-w-[760px] whitespace-pre-line" : ""
                }`}
              >
                {partner.detailTitle}
              </h2>
              <p className="mt-6 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-[#1f1f1f]">
                {partner.lead}
              </p>
              {partner.paragraphs.map((paragraph, index) => (
                <p
                  key={`${partner.slug}-paragraph-${index}`}
                  className="mt-6 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-[#1f1f1f]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 text-white">
        <div className="w-full min-h-[275px] bg-[linear-gradient(180deg,_#FF8000_0%,_#E57300_79.53%)] lg:h-[275px]">
          <div className="mx-auto flex h-full w-full max-w-[1512px] flex-col items-start justify-center gap-8 px-6 py-8 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-0">
            <div className="flex items-start gap-5">
              <div className="relative mt-1 h-[31px] w-[53px] shrink-0">
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
              <h3 className="font-brother text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em]">
                Future
                <br />
                Collaborations
              </h3>
            </div>

            <p className="max-w-[800px] font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white">
              <span className="block">
                We continue to expand our network of partners who understand the
              </span>
              <span className="block">
                urgency of modern data center development, those organizations
              </span>
              <span className="block">
                capable of advancing projects from planning to power in record
                time.
              </span>
            </p>

            <Link
              href="/lets-chat"
              className="inline-flex h-[43px] w-[246px] shrink-0 items-center justify-center border border-white/45 font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-white/65 transition hover:border-white/70 hover:text-white"
            >
              Submit
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-5">
        <SiteFooter showTopCta={false} />
      </div>
    </div>
  );
}
