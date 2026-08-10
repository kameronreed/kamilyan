export default function CTABanner() {
  return (
    <section className="bg-[linear-gradient(90deg,#151515_0%,#1F4D3A_35%,#219f98,#94a930_100%)] px-6 py-24 text-center text-white lg:px-16">
      <div className="mx-auto max-w-3xl">
      <h2 className="text-4xl font-bold leading-tight">
        Ready to Move Your Commerce Transformation Forward?
      </h2>

      <p className="mt-4 text-lg text-white/70">
        Let&apos;s start the conversation.
      </p>

      <a
        href="#contact"
        className="mt-10 inline-block rounded-lg bg-white px-8 py-4 text-sm font-semibold text-[#1F4D3A] transition-colors hover:bg-zinc-100"
      >
        Schedule a Consultation
      </a>
      </div>
    </section>
  );
}
