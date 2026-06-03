import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[#222222] bg-[#0F0F0F]/80">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center">
        <Link
          href="/"
          className="font-mono text-sm tracking-widest text-[#F5F5F5] hover:text-[#818CF8] transition-colors"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          nudge studio
        </Link>
      </div>
    </nav>
  );
}
