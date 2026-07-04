import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pb-20 pt-10 lg:flex-row lg:items-start lg:justify-between lg:px-16 lg:pb-28 lg:pt-12">
        {/* Left: copy */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[#1FA7A0]">
            Enterprise Commerce Transformation
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-[1.08] tracking-tight text-white lg:text-6xl">
            Enterprise Commerce Transformation{" "}
            <span className="text-[#6FC5A8]">Without</span> Enterprise
            Bureaucracy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Kamilyan helps organizations modernize digital commerce platforms
            through SAP Commerce expertise, global delivery teams, AI-enabled
            solutions, and end-to-end transformation leadership.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-[#1F4D3A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1FA7A0]"
            >
              Schedule Consultation
            </a>
            <a
              href="#services"
              className="rounded-lg border border-[#1FA7A0] px-6 py-3.5 text-sm font-semibold text-[#1FA7A0] transition-colors hover:bg-[#1FA7A0]/10"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="w-full max-w-sm shrink-0 lg:max-w-sm">
          <Image
            src="/images/hero_tail.jpg"
            alt="Kamilyan team"
            width={520}
            height={420}
            className="w-full rounded-xl object-cover shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
