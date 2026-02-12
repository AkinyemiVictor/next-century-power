import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { siteProfiles } from "@/data/sites";

export default function SitesPage() {
  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="relative -mt-[32px] overflow-hidden text-white">
        <div className="relative h-[520px] w-full md:h-[640px]">
          <Image
            src="/assets/commercial%20building.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101726]/92 via-[#101726]/72 to-[#101726]/18" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full max-w-[1512px] items-center px-6 md:px-8">
              <div className="max-w-[730px]">
                <h1 className="font-brother text-[44px] font-[200] uppercase leading-[41px] tracking-[-0.03em] md:text-[68px] md:leading-[62px]">
                  Power-Ready Sites For
                  <br />
                  The Next Generation
                  <br />
                  Of Data Centers
                </h1>
                <p className="mt-5 max-w-[590px] font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/88">
                  Next Century Power identifies, develops and manages strategic
                  sites built specifically for large-scale data center and
                  industrial energy needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#23252c] text-white">
        <div className="grid w-full md:grid-cols-2">
          <div className="bg-[linear-gradient(120.95deg,_#706363_0%,_#2D2927_91.56%)] px-6 py-12 md:px-10 md:py-14">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/location.png"
                alt=""
                width={20}
                height={30}
                className="h-7 w-auto brightness-0 invert"
              />
              <span className="h-px w-7 bg-white/60" aria-hidden="true" />
              <h2 className="font-brother text-[40px] font-[200] uppercase leading-[36px] tracking-[-0.03em]">
                Site Strategy
              </h2>
            </div>

            <p className="mt-6 max-w-[530px] font-inter text-[16px] font-[200] leading-[40px] tracking-[0] text-white/84">
              Each location is selected for its access to gas transmission,
              water and fiber, its favorable permitting environment and its
              ability to support dedicated, high-capacity microgrid power, all
              while remaining discreet and secure.
            </p>

            <p className="mt-6 max-w-[530px] font-inter text-[16px] font-[200] leading-[40px] tracking-[0] text-white/84">
              Our approach is single-client focused: every NCP site is designed
              for one power partner, not shared utility loads. That focus
              allows us to move quickly, often delivering operational power in
              under 3 years, when traditional grid-dependent projects can take
              twice as long.
            </p>
          </div>

          <div className="relative min-h-[360px] md:min-h-[470px]">
            <Image
              src="/assets/outline%20map.png"
              alt="Map with highlighted site locations"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {siteProfiles.map((site, index) => (
              <Image
                key={`${site.slug}-${index}`}
                src="/assets/location.png"
                alt=""
                width={32}
                height={46}
                className="absolute h-[42px] w-auto -translate-x-1/2 -translate-y-1/2"
                style={{ left: site.mapPin.left, top: site.mapPin.top }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ececec] py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-2">
            {siteProfiles.map((site) => (
              <Link key={site.slug} href={`/sites/${site.slug}`} className="block group">
                <article className="overflow-hidden bg-white shadow-[0_6px_22px_rgba(0,0,0,0.08)] transition group-hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]">
                  <div className="relative h-[270px] w-full">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 620px"
                      className="object-cover"
                    />
                  </div>

                  <div className="px-6 pb-8 pt-6">
                    <h3 className="font-brother text-[40px] font-[250] uppercase leading-[36px] tracking-[-0.03em] text-[#1b1b1b]">
                      {site.name}
                    </h3>
                    <p className="mt-3 font-inter text-[16px] font-[200] leading-[33px] tracking-[0] text-[#222]">
                      <span className="block">Size: {site.size}</span>
                      <span className="block">
                        Potential Power: {site.potentialPower}
                      </span>
                      <span className="block">Timeline: {site.timeline}</span>
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-brother text-[15px] font-[400] uppercase tracking-[0.05em] text-[#ff8000] transition group-hover:text-[#db6e00]">
                      READ MORE
                      <Image
                        src="/assets/right%20arrow.png"
                        alt=""
                        width={11}
                        height={11}
                        className="h-[11px] w-[11px]"
                      />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
