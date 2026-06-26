"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface AppCardProps {
  iconSrc: string;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  href: string;
  isFirst?: boolean;
  isLaunched?: boolean;
}

export default function AppCard({
  iconSrc,
  name,
  tagline,
  description,
  accentColor,
  href,
  isFirst,
  isLaunched,
}: AppCardProps) {
  const [hovered, setHovered] = useState(false);

  const badgeLabel = isLaunched ? "Available" : isFirst ? "Launching first" : "Coming soon";
  const badgeAccent = isLaunched || isFirst;

  return (
    <Link
      href={href}
      className="block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className="h-full flex flex-col gap-4 rounded-2xl p-6 border transition-all duration-300"
        style={{
          backgroundColor: "#171717",
          borderColor: hovered ? accentColor : "#222222",
          boxShadow: hovered
            ? `0 0 0 1px ${accentColor}22, 0 8px 32px ${accentColor}11`
            : "none",
        }}
      >
        <div className="flex items-start justify-between">
          <div className="rounded-2xl overflow-hidden w-14 h-14 flex-shrink-0">
            <Image
              src={iconSrc}
              alt={`${name} icon`}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="text-[10px] px-2 py-1 rounded-full border"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              color: badgeAccent ? accentColor : "#888888",
              borderColor: badgeAccent ? `${accentColor}44` : "#333333",
              backgroundColor: badgeAccent ? `${accentColor}11` : "transparent",
            }}
          >
            {badgeLabel}
          </span>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <h3
            className="text-xl font-bold text-[#F5F5F5]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {name}
          </h3>
          <p
            className="text-sm font-medium"
            style={{ color: accentColor, fontFamily: "var(--font-dm-sans)" }}
          >
            {tagline}
          </p>
          <p
            className="text-sm text-[#888888] leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {description}
          </p>
        </div>

        <div className="flex items-center gap-1 mt-auto">
          <span
            className="text-xs text-[#888888] transition-colors"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Learn more →
          </span>
        </div>
      </article>
    </Link>
  );
}
