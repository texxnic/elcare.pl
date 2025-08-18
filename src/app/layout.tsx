import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import ClientHeader from "@/components/ClientHeader";
import ClientFooter from "@/components/ClientFooter";
import CookieConsent from "@/components/CookieConsent";
import ZencalScript from "@/components/ZencalScript";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: {
    default: "Elcare - Konsultant Snu Dziecięcego",
    template: "Elcare | %s",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  description:
    "Profesjonalny konsultant snu dziecięcego. Wspieram rodziców w budowaniu zdrowych nawyków snu u dzieci i rozwiązywaniu problemów ze snem, stosując łagodne metody oparte na więzi. Gwarantuję indywidualne podejście i sprawdzone strategie.",
  keywords: [
    "konsultant snu dziecięcego",
    "sen dziecka",
    "problemy ze snem u dzieci",
    "zdrowy sen dziecka",
    "bezsenność u dzieci",
    "higiena snu dziecka",
    "doradca snu dziecięcego",
    "metody usypiania dzieci",
    "rytm dobowy dziecka",
    "łagodne metody nauki snu",
    "wsparcie snu dziecka",
    "zdrowe nawyki snu",
  ],
  authors: [{ name: "ElCare" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://elcare.pl",
    title: "Elcare - Konsultant Snu Dziecięcego",
    description:
      "Profesjonalny konsultant snu dziecięcego. Wspieram rodziców w budowaniu zdrowych nawyków snu u dzieci i rozwiązywaniu problemów ze snem, stosując łagodne metody oparte na więzi. Gwarantuję indywidualne podejście i sprawdzone strategie.",
    siteName: "Elcare",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elcare - Konsultant Snu Dziecięcego",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://elcare.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head></head>
      <body
        className={` ${nunito.variable} ${baloo2.variable} font-nunito antialiased bg-elcare-cream`}
      >
        <ClientHeader />
        {/* Main Content */}
        <main>{children}</main>
        <ClientFooter />
        <ZencalScript />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
