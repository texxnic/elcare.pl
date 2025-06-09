import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import ClientHeader from "@/components/ClientHeader";
import ClientFooter from "@/components/ClientFooter";
import CookieConsent from "@/components/CookieConsent";
import { Metadata } from "next";

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
  description:
    "Profesjonalny konsultant snu dziecięcego. Pomagam rodzicom w nauce samodzielnego zasypiania i rozwiązywaniu problemów ze snem u dzieci. Indywidualne podejście i sprawdzone metody.",
  keywords: [
    "konsultant snu dziecięcego",
    "sen dziecka",
    "problemy ze snem u dzieci",
    "trening snu niemowląt",
    "zdrowy sen dziecka",
    "bezsenność u dzieci",
    "higiena snu dziecka",
    "doradca snu dziecięcego",
    "metody usypiania dzieci",
    "rytm dobowy dziecka",
    "samodzielne zasypianie",
    "nauka samodzielnego zasypiania",
    "jak nauczyć dziecko samodzielnego zasypiania",
    "metoda samodzielnego zasypiania",
  ],
  authors: [{ name: "ElCare" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://elcare.com",
    title: "Elcare - Konsultant Snu Dziecięcego",
    description:
      "Profesjonalny konsultant snu dziecięcego. Pomagam rodzicom w nauce samodzielnego zasypiania i rozwiązywaniu problemów ze snem u dzieci. Indywidualne podejście i sprawdzone metody.",
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
    canonical: "https://elcare.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={` ${nunito.variable} ${baloo2.variable} font-nunito antialiased bg-elcare-cream`}
      >
        <ClientHeader />
        {/* Main Content */}
        <main>{children}</main>
        <ClientFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
