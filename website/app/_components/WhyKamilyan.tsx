import { differentiators } from "@/lib/content";

export default function WhyKamilyan() {
  return (
    <section id="why" className="bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-zinc-900">Why Kamilyan</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-5"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1FA7A0]">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm font-medium text-zinc-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
