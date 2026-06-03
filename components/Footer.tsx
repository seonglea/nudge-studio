export default function Footer() {
  return (
    <footer className="border-t border-[#222222] py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <span
          className="text-sm text-[#888888]"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          © {new Date().getFullYear()} Nudge Studio
        </span>

        <nav className="flex items-center gap-6">
          <a
            href="https://x.com/nudgestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            X / Twitter
          </a>
          <a
            href="https://www.producthunt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Product Hunt
          </a>
          <a
            href="mailto:hello@nudgestudio.app"
            className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
