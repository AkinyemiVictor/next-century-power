import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { getSiteBySlug, siteProfiles } from "@/data/sites";

export function generateStaticParams() {
  return siteProfiles.map((site) => ({ slug: site.slug }));
}

export default async function SiteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);

  if (!site) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#ececec] text-[#1f1f1f]">
      <Header />

      <section className="relative -mt-[32px] overflow-hidden text-white">
        <div className="relative h-[210px] w-full bg-[#ff8000] md:h-[220px]">
          <Image
            src="/assets/news%20hero%20image.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,122,0,0.92)_0%,rgba(242,122,0,0.74)_40%,rgba(242,122,0,0.20)_100%)]" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full max-w-[1512px] items-center px-6 md:px-8">
              <h1 className="font-brother text-[48px] font-[200] uppercase leading-[46px] tracking-[-0.03em] md:text-[58px] md:leading-[54px]">
                {site.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ececec] py-10 md:py-14">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="grid overflow-hidden md:grid-cols-[1.35fr_1fr]">
            <div className="relative min-h-[280px] md:min-h-[560px]">
              <Image
                src={site.image}
                alt={`${site.name} aerial view`}
                fill
                sizes="(max-width: 768px) 100vw, 65vw"
                className="object-cover"
              />
            </div>
            <div className="relative min-h-[280px] md:min-h-[560px]">
              <Image
                src="/assets/outline%20map.png"
                alt="Regional map with site marker"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover"
              />
              <Image
                src="/assets/location.png"
                alt=""
                width={40}
                height={58}
                className="absolute h-[50px] w-auto -translate-x-1/2 -translate-y-1/2"
                style={{ left: site.mapPin.left, top: site.mapPin.top }}
              />
            </div>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.35fr_1fr] md:gap-14">
            <div>
              <h2 className="font-brother text-[44px] font-[250] uppercase leading-[40px] tracking-[-0.03em] text-[#111]">
                Site Description
              </h2>
              {site.description.map((paragraph, index) => (
                <p
                  key={`${site.slug}-description-${index}`}
                  className="mt-5 max-w-[760px] font-inter text-[16px] font-[200] leading-[38px] tracking-[0] text-[#1f1f1f]"
                >
                  {paragraph}
                </p>
              ))}

              <Link
                href="/lets-chat"
                className="mt-8 inline-flex h-[43px] w-[246px] items-center justify-center border border-[#ff8000] font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-[#ff8000] transition hover:bg-[#ff8000]/10"
              >
                I&apos;m Interested
              </Link>
            </div>

            <div className="text-[#101010]">
              <h2 className="font-brother text-[44px] font-[250] uppercase leading-[40px] tracking-[-0.03em]">
                Site Stats
              </h2>
              <div className="mt-5 space-y-1 font-inter text-[16px] font-[200] leading-[36px] tracking-[0]">
                <p>
                  <span className="font-[600]">Size:</span> {site.size}
                </p>
                <p>
                  <span className="font-[600]">Potential Power:</span>{" "}
                  {site.potentialPower}
                </p>
                <p>
                  <span className="font-[600]">Timeline:</span> {site.timeline}
                </p>
                <p>
                  <span className="font-[600]">Location:</span> {site.location}
                </p>
              </div>

              <h3 className="mt-10 font-brother text-[44px] font-[250] uppercase leading-[40px] tracking-[-0.03em]">
                Partners
              </h3>
              <div className="mt-5 space-y-1 font-inter text-[16px] font-[200] leading-[36px] tracking-[0]">
                {site.partners.map((partner) => (
                  <p key={`${site.slug}-${partner.name}`}>
                    {partner.name} -{" "}
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-transparent transition hover:decoration-current"
                    >
                      {partner.website}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
