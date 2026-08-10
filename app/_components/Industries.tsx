import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section id="industries" className="bg-[#E8EDF1] px-6 py-20 lg:px-16">
      <div className="mx-auto mt-14 max-w-6xl">
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
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((industry) => (
          <div key={industry} className="flex justify-center">
            <span
              className="inline-flex min-w-[190px] justify-center rounded-full border border-[#1FA7A0]/30 bg-[#F8FAFB] px-5 py-3 text-sm font-semibold text-[#1F4D3A] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#1FA7A0]"
            >
              {industry}
            </span>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
