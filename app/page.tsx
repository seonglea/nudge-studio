import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AppCard from "@/components/AppCard";
import Footer from "@/components/Footer";

const apps = [
  {
    iconSrc: "/icons/momweather.png",
    name: "MomWeather",
    tagline: "Weather, the way your mom would tell you.",
    description:
      "A weather app that speaks in warm, human language — not charts and percentages.",
    accentColor: "#38BDF8",
    href: "/apps/momweather",
    fullyLaunched: true,
  },
  {
    iconSrc: "/icons/chromawalk.png",
    name: "Chroma Walk",
    tagline: "Walk more. See color everywhere.",
    description:
      "A walking app that turns your daily walk into a color collection journey.",
    accentColor: "#EC4899",
    href: "/apps/chromawalk",
    fullyLaunched: true,
  },
  {
    iconSrc: "/icons/leftbehind.png",
    name: "LeftBehind",
    tagline: "Never leave without what matters.",
    description:
      "Detects when you leave home via Wi-Fi signal and reminds you what to bring.",
    accentColor: "#06B6D4",
    href: "/apps/leftbehind",
    androidLaunched: true,
  },
  {
    iconSrc: "/icons/justgo.png",
    name: "JustGO",
    tagline: "One step. That's all you need.",
    description:
      "Dump everything in your head, get one clear next step. AI-powered focus for ADHD brains.",
    accentColor: "#A3E635",
    href: "/apps/justgo",
    isLaunched: true,
  },
  {
    iconSrc: "/icons/meltedmoney.png",
    name: "Melted Money",
    tagline: "See the damage before you spend.",
    description:
      "Turn purchases, subscriptions, and installments into HP and Shield damage — before you commit.",
    accentColor: "#FBBF24",
    href: "/apps/meltedmoney",
    isLaunched: true,
  },
  {
    iconSrc: "/icons/statuskeep.png",
    name: "StatusKeep",
    tagline: "Never miss an immigration deadline.",
    description:
      "Auto-calculates your PGWP, PR card, and OHIP deadlines based on your profile. Built for Ontario newcomers.",
    accentColor: "#A78BFA",
    href: "/apps/statuskeep",
    isLaunched: true,
  },
  {
    iconSrc: "/icons/mycafe.png",
    name: "My Cafe",
    tagline: "Your home café, beautifully managed.",
    description:
      "Track ingredients, save recipes, and see how much you save vs. café prices. Your home café diary.",
    accentColor: "#D4A574",
    href: "/apps/mycafe",
  },
  {
    iconSrc: "/icons/before.png",
    name: "Before",
    tagline: "Record it before it matters.",
    description:
      "Capture photos, notes, and documents before something goes wrong. Private email alerts included.",
    accentColor: "#52B788",
    href: "/apps/before",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        {/* Apps grid */}
        <section id="apps" className="px-6 py-24 max-w-5xl mx-auto">
          <div className="mb-12">
            <p
              className="text-xs tracking-[0.3em] uppercase text-[#888888] mb-3"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              apps
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#F5F5F5]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Small apps. Big nudges.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.map((app) => (
              <AppCard key={app.name} {...app} />
            ))}
          </div>
        </section>

        {/* About */}
        <section className="px-6 py-24 border-t border-[#222222]">
          <div className="max-w-5xl mx-auto">
            <p
              className="text-xs tracking-[0.3em] uppercase text-[#888888] mb-6"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              about
            </p>
            <p
              className="text-xl sm:text-2xl text-[#F5F5F5] leading-relaxed max-w-2xl"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Nudge Studio is a one-person indie studio building small Android
              apps that improve your day in quiet, thoughtful ways.
            </p>
            <p
              className="mt-4 text-base text-[#888888] max-w-2xl"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              No bloat. No dark patterns. Just apps that do one thing well and
              get out of your way.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
