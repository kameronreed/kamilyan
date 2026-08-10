import { principles } from "@/lib/content";
import PrincipleCard from "./PrincipleCard";

export default function WhyKamilyan() {
  return (
    <section id="why" className="bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <header className="mb-12 lg:text-center">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FA7A0]">
            Our Guiding Principles
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight text-zinc-900 lg:text-5xl">
            Why Kamilyan
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-500">
            Five principles that guide every recommendation, every engagement, and every transformation.
          </p>
        </header>

        {/* Principles Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {principles.slice(0, 4).map((principle) => (
            <PrincipleCard
              key={principle.title}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-xl">
          <PrincipleCard
            title={principles[4].title}
            description={principles[4].description}
          />
        </div>

      </div>
    </section>
  );
}