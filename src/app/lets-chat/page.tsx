import Image from "next/image";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

const interestOptions = [
  "Speed to Market",
  "Traditional Power Station",
  "Small Modular Reactor (SMR)",
  "Strategic Partnership",
  "Carbon Neutrality",
  "Noise Reduction",
  "Water Treatment Facilities",
  "Government Affairs",
  "Regulatory Efficiency",
];

export default function LetsChatPage() {
  return (
    <div className="min-h-screen bg-[#ececec] text-[#1f1f1f]">
      <Header />

      <section className="relative -mt-[32px] overflow-hidden">
        <div className="relative h-[235px] w-full">
          <Image
            src="/assets/news%20hero%20image.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full max-w-[1512px] items-center justify-center px-6 md:px-8">
              <h1 className="w-full text-center font-brother text-[54px] font-[200] uppercase leading-[52px] tracking-[-0.03em] text-white">
                Let&apos;s Chat
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8">
          <div className="mx-auto max-w-[980px]">
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
                  src="/assets/speedometer.png"
                  alt=""
                  width={16}
                  height={16}
                  className="absolute left-[8px] top-1/2 h-[16px] w-[16px] -translate-y-1/2"
                />
              </div>
              <h2 className="font-brother text-center text-[36px] font-[200] uppercase leading-[35px] tracking-[-0.03em] md:whitespace-nowrap">
                The Data Center World Moves Quickly. So Do We.
              </h2>
            </div>

            <p className="mx-auto mt-5 max-w-[720px] text-center font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-[#1f1f1f]/90">
              Use the form below to start the conversation. It&apos;s short by
              design, but it tells us exactly who we need to connect you to on
              our team.
            </p>

            <form className="mx-auto mt-12 w-full max-w-[860px] border-t border-black/45 pt-8">
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-8">
                  <fieldset>
                    <legend className="font-inter text-[16px] font-[600] leading-[20px] tracking-[0]">
                      I&apos;m Interested In
                    </legend>
                    <div className="mt-3 space-y-2">
                      {interestOptions.map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-3 font-inter text-[16px] font-[200] leading-[27px] tracking-[0]"
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 appearance-none border border-black/25 bg-[#ececec] align-middle checked:border-[#1f1f1f] checked:bg-[#1f1f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8000]/40"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="font-inter text-[16px] font-[600] leading-[20px] tracking-[0]">
                      Preferred Contact Method
                    </legend>
                    <div className="mt-3 space-y-2">
                      {["Email", "Phone"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-3 font-inter text-[16px] font-[200] leading-[27px] tracking-[0]"
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 appearance-none border border-black/25 bg-[#ececec] align-middle checked:border-[#1f1f1f] checked:bg-[#1f1f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8000]/40"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label
                      htmlFor="preferred-time"
                      className="block font-inter text-[16px] font-[600] leading-[20px] tracking-[0]"
                    >
                      Preferred Time &amp; Time Zone
                    </label>
                    <input
                      id="preferred-time"
                      type="text"
                      className="mt-2 h-[46px] w-full border border-black/20 bg-transparent px-3 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="help"
                      className="block font-inter text-[16px] font-[600] leading-[20px] tracking-[0]"
                    >
                      How Can We Help
                    </label>
                    <textarea
                      id="help"
                      className="mt-2 h-[170px] w-full resize-none border border-black/20 bg-transparent px-3 py-2 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block font-inter text-[16px] font-[600] leading-[20px] tracking-[0]"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="mt-2 h-[46px] w-full border border-black/20 bg-transparent px-3 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-inter text-[16px] font-[600] leading-[20px] tracking-[0]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="mt-2 h-[46px] w-full border border-black/20 bg-transparent px-3 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-inter text-[16px] font-[600] leading-[20px] tracking-[0]"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="mt-2 h-[46px] w-full border border-black/20 bg-transparent px-3 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 border-t border-black/45 pt-6 md:grid-cols-[1fr_auto] md:items-start">
                <div className="max-w-[460px]">
                  <p className="font-inter text-[33px] font-[600] uppercase leading-[30px] tracking-[0] text-[#1f1f1f]">
                    We Take Every Inquiry Seriously.
                  </p>
                  <p className="mt-3 font-inter text-[16px] font-[200] leading-[27px] tracking-[0] text-[#1f1f1f]">
                    If your project aligns with our capabilities, we&apos;ll
                    reach out directly to discuss next steps and outline how NCP
                    can help accelerate your path to power.
                  </p>
                </div>
                <button
                  type="submit"
                  className="inline-flex h-[43px] w-[246px] items-center justify-center border border-[#ff8000] font-brother text-[15px] leading-[15px] uppercase tracking-[0.05em] text-[#ff8000] transition hover:bg-[#ff8000]/10"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter showTopCta={false} />
    </div>
  );
}
