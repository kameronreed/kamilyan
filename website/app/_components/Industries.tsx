import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section id="industries" className="bg-[#E8EDF1] px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-4xl font-bold text-zinc-900">
          Industries &amp; Experience
        </h2>
        <p className="mb-10 text-zinc-600">
          We bring deep expertise across a range of sectors.
        </p>
        <div className="flex flex-wrap gap-3">
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
