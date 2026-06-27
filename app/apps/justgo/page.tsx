import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JustGO — Nudge Studio",
  description: "One step. That's all you need.",
};

const BG = "#080F04";
const ACCENT = "#A3E635";

export default function JustGOPage() {
  return (
    <>
      <Nav />

      <main style={{ backgroundColor: BG, minHeight: "100vh" }} className="pt-14">

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-14 pb-20">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-[#888888] hover:text-[#F5F5F5] transition-colors mb-16"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            ← All apps
          </Link>

          <div className="flex flex-col sm:flex-row gap-10 sm:items-start">

            {/* Icon + glow */}
            <div className="flex-shrink-0 relative">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30 scale-110"
                style={{ backgroundColor: ACCENT }}
              />
              <div className="relative w-[120px] h-[120px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/icons/justgo.png"
                  alt="JustGO icon"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-5">

              {/* Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-[11px] px-3 py-1 rounded-full border font-medium"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    color: ACCENT,
                    borderColor: `${ACCENT}50`,
                    backgroundColor: `${ACCENT}18`,
                  }}
                >
                  Available Now
                </span>
                <span
                  className="text-[11px] px-3 py-1 rounded-full border border-[#1a2a0a] text-[#888888]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  iOS · Android
                </span>
              </div>

              <h1
                className="text-5xl sm:text-6xl font-bold text-[#F5F5F5] leading-none"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                JustGO
              </h1>

              <p
                className="text-xl sm:text-2xl font-medium leading-snug"
                style={{ color: ACCENT, fontFamily: "var(--font-dm-sans)" }}
              >
                One step. That&apos;s all you need.
              </p>

              <p
                className="text-base leading-relaxed max-w-xl"
                style={{ color: "#8aaa6a", fontFamily: "var(--font-dm-sans)" }}
              >
                Dump everything flooding your mind — voice or text — and
                JustGO&apos;s AI cuts through the noise to hand you one clear
                first step. No lists. No planning paralysis. Built for ADHD
                brains that need to move, not overthink.
              </p>

              <a
                href="https://apps.apple.com/us/app/justgo-focus/id6783044600"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80 w-fit mt-2"
                style={{
                  backgroundColor: ACCENT,
                  color: "#080F04",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Download on the App Store
              </a>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div
          className="max-w-5xl mx-auto px-6"
          style={{ borderTop: `1px solid ${ACCENT}22` }}
        />

        {/* Details */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-3 gap-8">
            {[
              { label: "Platform", value: "iOS · Android" },
              { label: "Status", value: "Available" },
              { label: "Price", value: "Free" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-2">
                <span
                  className="text-[10px] uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    color: ACCENT,
                    opacity: 0.7,
                  }}
                >
                  {label}
                </span>
                <span
                  className="text-base text-[#F5F5F5]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
