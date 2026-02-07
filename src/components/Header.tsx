import Image from "next/image";

export default function Header() {
  return (
    <header
      className="w-full bg-white text-black"
      style={{
        clipPath: "polygon(0 0, 100% 0, calc(100% - 32px) 100%, 0 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1512px] items-center justify-between px-10 py-5">
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Next Century Power"
            width={220}
            height={18}
            priority
            className="h-[18px] w-auto"
          />
        </div>
        <div className="flex items-center gap-5">
          <button
            className="border border-[#ff8000] px-8 py-2 text-[11px] uppercase tracking-[0.35em] text-[#ff8000] transition hover:bg-[#ff8000]/10"
            type="button"
          >
            Let&apos;s Chat
          </button>
          <button
            className="relative h-12 w-12 text-black"
            type="button"
            aria-label="Open menu"
          >
            <span className="absolute left-[18px] top-[16px] h-0.5 w-4 bg-current" />
            <span className="absolute left-[18px] top-[23px] h-0.5 w-4 bg-current" />
            <span className="absolute left-[18px] top-[30px] h-0.5 w-4 bg-current" />
            <span className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-current" />
            <span className="absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-current" />
            <span className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-current" />
            <span className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-current" />
          </button>
        </div>
      </div>
    </header>
  );
}
