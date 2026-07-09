import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section id="industries" className="bg-[#E8EDF1] px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
      <header className="mb-12 lg:text-center">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FA7A0]">
          Industries
        </p>

        <h2 className="mb-5 text-4xl font-bold tracking-tight text-zinc-900 lg:text-5xl">
          Experience Across Industries
        </h2>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-500">
          Applying enterprise commerce expertise to solve complex business and technology challenges.
        </p>
      </header>
        <div className="mt-14 justify-center gap-4">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-[#1FA7A0]/40 bg-white px-5 py-2 text-sm font-semibold text-[#1F4D3A] shadow-sm transition-colors hover:bg-[#1FA7A0] hover:text-white"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
