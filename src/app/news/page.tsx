import Image from "next/image";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

const newsCards = [
  { image: "/assets/news 1.jpg", date: "NOVEMBER 1, 2025" },
  { image: "/assets/news 2.jpg", date: "NOVEMBER 1, 2025" },
  { image: "/assets/news 3.jpg", date: "NOVEMBER 1, 2025" },
  { image: "/assets/news 1.jpg", date: "NOVEMBER 1, 2025" },
  { image: "/assets/news 2.jpg", date: "NOVEMBER 1, 2025" },
  { image: "/assets/news 3.jpg", date: "NOVEMBER 1, 2025" },
  { image: "/assets/news 1.jpg", date: "NOVEMBER 1, 2025" },
  { image: "/assets/news 2.jpg", date: "NOVEMBER 1, 2025" },
];

export default function NewsPage() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(120.95deg, #706363 0%, #2D2927 91.56%)",
      }}
    >
      <Header />
      <section className="relative -mt-[32px] overflow-hidden">
        <div className="relative h-[340px] w-full bg-[#ff8000]">
          <Image
            src="/assets/news hero image.png"
            alt=""
            fill
            className="object-contain opacity-100"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 z-10 text-white">
            <div className="mx-auto h-full w-full max-w-[1512px] px-6 md:px-8">
              <div className="flex h-full flex-col justify-center">
                <h1 className="font-brother text-[54px] font-[250] uppercase leading-[52px] tracking-[-0.03em]">
                  Insights On Power
                  <br />&amp; Possibility
                </h1>
                <p className="mt-3 max-w-[420px] font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-white/90">
                  Tracking the technologies, partnerships &amp; policies
                  <span className="block">
                    shaping the next century of energy infrastructure
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {newsCards.map((card, index) => (
              <article
                key={`${card.image}-${index}`}
                className="w-full overflow-hidden bg-white shadow-[0_16px_40px_rgba(0,0,0,0.25)] md:max-w-[530px] md:justify-self-center"
                style={{
                  clipPath:
                    "polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px)",
                }}
              >
                <div className="relative h-[220px] w-full">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 520px"
                  />
                </div>
                <div className="px-6 py-5 text-[#2b2b2b]">
                  <div className="flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.2em] text-[#7c7c7c]">
                    <Image
                      src="/assets/calender.png"
                      alt=""
                      width={10}
                      height={10}
                      className="h-[10px] w-[10px]"
                    />
                    <span>{card.date}</span>
                  </div>
                  <h3 className="mt-3 font-brother text-[16px] uppercase leading-[22px] tracking-[-0.01em] text-[#2b2b2b]">
                    Energy Related Blog Headline That Is Really Interesting To
                    Read
                  </h3>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 font-brother text-[11px] uppercase tracking-[0.2em] text-[#ff8000]"
                  >
                    <span>Read More</span>
                    <Image
                      src="/assets/line arrow.png"
                      alt=""
                      width={14}
                      height={8}
                      className="h-[8px] w-[14px]"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-white/70">
          <button
            type="button"
            className="text-[18px] text-white/70 transition hover:text-white"
            aria-label="Previous page"
          >
            ←
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              type="button"
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-inter ${
                page === 1
                  ? "bg-[#ff8000] text-white"
                  : "border border-white/40 text-white/70"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            className="text-[18px] text-white/70 transition hover:text-white"
            aria-label="Next page"
          >
            →
          </button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
