import { services } from "@/lib/content";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="bg-[#E8EDF1] px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
      <header className="mb-12 lg:text-center">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FA7A0]">
          Advisory Services
        </p>

        <h2 className="mb-5 text-4xl font-bold tracking-tight text-zinc-900 lg:text-5xl">
          Strategic Commerce Advisory
        </h2>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-500">
          Helping organizations modernize digital commerce through strategy, architecture, platform evaluation, and transformation planning.
        </p>
      </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
