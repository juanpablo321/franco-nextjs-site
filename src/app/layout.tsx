import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/constants";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Juan Pablo Franco",
    "estratega digital",
    "eCommerce Colombia",
    "VTEX",
    "marketplace B2B",
    "transformación digital",
    "consultoría eCommerce",
    "generación de leads B2B",
    "expansión digital",
    "comercio electrónico",
    "marketing digital B2B",
    "Bogotá",
    "Colombia",
  ],
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/og-default.png`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    google: "cec6b2633c2cbf32",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sourceSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="geo.region" content="CO-DC" />
        <meta name="geo.placename" content="Bogotá" />
        <meta name="geo.position" content="4.7110;-74.0721" />
        <meta name="ICBM" content="4.7110, -74.0721" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
