import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nudge Studio — Small apps. Big nudges.",
  description:
    "Nudge Studio makes small Android apps that nudge you toward a slightly better day.",
  metadataBase: new URL("https://nudgestudio.app"),
  openGraph: {
    title: "Nudge Studio — Small apps. Big nudges.",
    description:
      "Nudge Studio makes small Android apps that nudge you toward a slightly better day.",
    url: "https://nudgestudio.app",
    siteName: "Nudge Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
