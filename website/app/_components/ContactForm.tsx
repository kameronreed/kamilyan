"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    // Placeholder — wire up to your API route or form service later
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  return (
    <section id="contact" className="bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#1FA7A0]">
            Get in Touch
          </p>
          <h2 className="text-4xl font-bold text-zinc-900">
            Schedule a Consultation
          </h2>
          <p className="mt-3 text-zinc-500">
            Tell us about your project and we&apos;ll be in touch within one business day.
          </p>
        </div>

        {state === "success" ? (
          <div className="rounded-xl border border-[#1FA7A0]/30 bg-[#1FA7A0]/10 p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1FA7A0]">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-zinc-900">Message Received</h3>
            <p className="text-zinc-600">
              Thank you for reaching out. A member of our team will contact you within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-zinc-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Smith"
                className="rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-[#1FA7A0] focus:ring-2 focus:ring-[#1FA7A0]/20"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-zinc-700">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className="rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-[#1FA7A0] focus:ring-2 focus:ring-[#1FA7A0]/20"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="company" className="text-sm font-medium text-zinc-700">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Corp"
                className="rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-[#1FA7A0] focus:ring-2 focus:ring-[#1FA7A0]/20"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project, current platform, and what you're looking to achieve..."
                className="resize-none rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-[#1FA7A0] focus:ring-2 focus:ring-[#1FA7A0]/20"
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={state === "submitting"}
                className="w-full rounded-lg bg-[#1F4D3A] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1FA7A0] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[200px]"
              >
                {state === "submitting" ? "Sending…" : "Send Message"}
              </button>
            </div>

            {state === "error" && (
              <p className="text-sm text-red-500 sm:col-span-2">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
