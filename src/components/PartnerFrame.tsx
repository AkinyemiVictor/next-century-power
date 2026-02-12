import Image from "next/image";

type PartnerFrameProps = {
  logo: string;
  alt: string;
  width: number;
  height: number;
  logoClassName?: string;
};

export default function PartnerFrame({
  logo,
  alt,
  width,
  height,
  logoClassName,
}: PartnerFrameProps) {
  return (
    <div className="relative mx-auto h-[191px] w-[340px] max-w-full">
      <span className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-black/60" />
      <span className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-black/60" />
      <span className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-black/60" />
      <span className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-black/60" />
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
