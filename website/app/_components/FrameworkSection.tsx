const stages = [
  {
    number: "01",
    title: "Current-State Audit",
    question: "Where are we today?",
    description:
      "Assess the organization's technology landscape, delivery maturity, architecture, processes, AI readiness, and operational capabilities.",
  },
  {
    number: "02",
    title: "Commerce Platform & Capability Assessment",
    question: "Do we have the right foundation?",
    description:
      "Evaluate platform fit, scalability, capability gaps, modernization opportunities, and business alignment.",
  },
  {
    number: "03",
    title: "Future-State Strategy",
    question: "Where do we want to go?",
    description:
      "Define the future vision, target capabilities, operating model considerations, customer experience goals, AI opportunities, and strategic direction.",
  },
  {
    number: "04",
    title: "Transformation Roadmap",
    question: "How do we get there?",
    description:
      "Translate strategy into a practical, prioritized roadmap that sequences initiatives and prepares the organization for execution.",
  },
];

type Stage = (typeof stages)[number];
type Align = "left" | "right";

function StageContent({ stage, align }: { stage: Stage; align: Align }) {
  const isRight = align === "right";
  return (
    <div
      className={`max-w-sm py-14 ${isRight ? "ml-auto text-right" : "text-left"}`}
    >
      <p
        className={`mb-3 font-mono text-xs font-semibold tracking-[0.2em] text-[#1FA7A0]`}
      >
        {stage.number}
      </p>
      <h3 className="mb-2 text-xl font-semibold leading-snug text-zinc-900">
        {stage.title}
      </h3>
      <p
        className={`mb-4 text-sm italic text-zinc-400`}
      >
        &ldquo;{stage.question}&rdquo;
      </p>
      <p className="text-sm leading-relaxed text-zinc-500">
        {stage.description}
      </p>
    </div>
  );
}

function TimelineMarker({ number }: { number: string }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white ring-4 ring-zinc-50">
      <span className="font-mono text-[11px] font-semibold text-[#1FA7A0]">
        {number}
      </span>
    </div>
  );
}

export default function FrameworkSection() {
  return (
    <section id="framework" className="bg-zinc-50 px-6 py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* ── Section header ── */}
        <header className="mb-20 lg:text-center">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1FA7A0]">
            Our Approach
          </p>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-zinc-900 lg:text-5xl">
            The Kamilyan Advisory Framework
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-500">
            Successful transformation begins with an honest understanding of
            today&rsquo;s reality. Only then can an organization define a clear
            strategy and sequence a roadmap built for execution—not aspiration.
          </p>
        </header>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Vertical line — mobile (left-aligned with circles at 22px center) */}
          <div
            className="absolute bottom-0 top-0 w-px bg-zinc-200 lg:hidden"
            style={{ left: "22px" }}
            aria-hidden="true"
          />
          {/* Vertical line — desktop (page center) */}
          <div
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-zinc-200 lg:block"
            aria-hidden="true"
          />

          {stages.map((stage, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={stage.number}
                className="grid grid-cols-[44px_1fr] lg:grid-cols-[1fr_44px_1fr]"
              >
                {/*
                  Left slot — desktop only.
                  `hidden lg:block` removes it from mobile flow entirely,
                  so on mobile the circle auto-places to col-1 and content to col-2.
                  On desktop all three divs flow into cols 1, 2, 3 in order.
                */}
                <div className="hidden lg:flex lg:items-start lg:justify-end">
                  {isLeft && <StageContent stage={stage} align="right" />}
                </div>

                {/* Circle marker — always centered on its column */}
                <div className="flex flex-col items-center pt-[3.75rem]">
                  <TimelineMarker number={stage.number} />
                </div>

                {/* Right slot — mobile always, desktop odd stages only */}
                <div>
                  {/* Mobile: always render content here */}
                  <div className="pl-6 lg:hidden">
                    <StageContent stage={stage} align="left" />
                  </div>
                  {/* Desktop: only render for right-side (odd) stages */}
                  {!isLeft && (
                    <div className="hidden lg:block">
                      <StageContent stage={stage} align="left" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Execution section ── */}
        <div className="mt-20 border-t border-zinc-200 pt-16 lg:flex lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <h3 className="mb-3 text-2xl font-semibold text-zinc-900">
              Ready to Execute?
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              When you&rsquo;re ready to move from strategy to implementation,{" "}
              <span className="font-medium text-zinc-700">Blue Ridge Web Tech</span>{" "}
              provides the engineering, delivery leadership, and technical expertise
              to bring your transformation roadmap to life.
            </p>
          </div>
          <div className="mt-8 shrink-0 lg:mt-0">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-[#1FA7A0] hover:text-[#1FA7A0]"
            >
              Learn About BRWT
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
