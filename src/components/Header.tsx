import Image from "next/image";

export default function Header() {
  return (
    <header
      className="relative z-20 w-full overflow-hidden bg-white text-black"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 28px) 100%, 0 100%)",
        WebkitClipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 28px) 100%, 0 100%)",
      }}
    >
      <div className="mx-auto flex h-[107px] w-full max-w-[1512px] items-center justify-between px-10">
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Next Century Power"
            width={260}
            height={22}
            priority
            className="h-[24px] w-auto"
          />
        </div>
        <div className="flex items-center gap-5">
          <button
            className="inline-flex h-[43px] w-[246px] items-center justify-center border border-[#ff8000] font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-center text-[#ff8000] transition hover:bg-[#ff8000]/10"
            type="button"
          >
            Let&apos;s Chat
          </button>
          <button type="button" aria-label="Open menu">
            <Image
              src="/assets/pager.png"
              alt=""
              width={50}
              height={43}
              className="h-10 w-auto"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
