import Image from "next/image";
import FooterMenu from "@/components/FooterMenu";

export default function SiteFooter({ showTopCta = true }: { showTopCta?: boolean }) {
  return (
    <>
      {showTopCta ? (
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
      ) : null}
      <footer
        className={`relative z-20 bg-black text-white ${showTopCta ? "-mt-5" : ""}`}
        style={{
          clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)",
          WebkitClipPath:
            "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)",
        }}
      >
        <div className="grid w-full grid-cols-1 md:grid-cols-[1.4fr_0.6fr]">
          <div className="flex flex-col items-start justify-end px-10 py-12">
            <Image
              src="/assets/logo%20for%20black%20background.png"
              alt="Next Century Power"
              width={300}
              height={40}
              className="h-14 w-auto"
            />
            <FooterMenu />
          </div>
          <div className="flex flex-col items-start justify-center bg-[linear-gradient(120.95deg,_#706363_0%,_#2D2927_91.56%)] pl-14 pr-10 py-12 text-left">
            <div className="max-w-[280px] text-white/80">
              <p className="font-inter text-[16px] font-[250] leading-[27px] tracking-[0]">
                <span className="block">Explore how our approach to</span>
                <span className="block">energy can benefit your region.</span>
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
          <div className="grid w-full grid-cols-1 text-[10px] text-white/50 md:grid-cols-[1.4fr_0.6fr]">
            <div className="flex items-center gap-4 px-10 py-4 font-inter text-[14px] font-[250] leading-[27px] tracking-[0]">
              <span>&copy; 2025 Next Century Power</span>
              <span aria-hidden="true">&middot;</span>
              <span>Website by Victor Akinyemi</span>
            </div>
            <div
              className="hidden bg-[linear-gradient(120.95deg,_#706363_0%,_#2D2927_91.56%)] md:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
