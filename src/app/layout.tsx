import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.columbusturkeytrot.com");

const siteTitle = "2026 Columbus Turkey Trot";
const siteDescription =
  "Celebrate the 40th Anniversary of the Columbus Turkey Trot — Thanksgiving Day in Columbus, Ohio featuring a new 4-Mile course, Walk N' Talk, Tot Trot, and a virtual option supporting Easterseals.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: siteTitle,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
        alt: "Turkey Trot race event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* <Link
          href="/"
          aria-label="40th Anniversary"
          className="fixed left-3 top-[6%] z-60 flex items-center gap-2 rounded-full border border-white/20 bg-[#1f252d]/95 px-3 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.45)] backdrop-blur transition hover:brightness-110"
        >
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-white/15 bg-white/5">
            <img src="/40.jpg" alt="" className="h-full w-full object-cover" />
          </span>
          <span className="text-xs font-black uppercase tracking-[0.12em] text-[#f0d07a]">
            40th Anniversary
          </span>
        </Link> */}
        {children}
      </body>
    </html>
  );
}
