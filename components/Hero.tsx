"use client";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Faint radial glow behind the text */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-20 flex flex-col items-center gap-6">
        <p
          className="text-xs tracking-[0.3em] uppercase text-[#888888]"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          indie app studio
        </p>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#F5F5F5] leading-none tracking-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Nudge Studio
        </h1>

        <p
          className="text-lg sm:text-xl text-[#888888] font-medium"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Small apps. Big nudges.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span
          className="text-xs text-[#888888] tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#888888] to-transparent" />
      </div>
    </section>
  );
}
