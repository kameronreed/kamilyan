import { services } from "@/lib/content";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="bg-[#E8EDF1] px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-zinc-900">What We Do</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
