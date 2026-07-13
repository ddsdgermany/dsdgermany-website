import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dsdgermany-website.vercel.app"),
  title: {
   


    default: "DSD Germany | Almanya İş ve Kariyer Danışmanlığı",
    template: "%s | DSD Germany",
  },

  description:
    "DSD Germany; hemşire, OTA, fizyoterapist, sağlık personeli, tır şoförü ve teknik meslekler için Almanya'da iş, denklik, vize ve işe yerleştirme süreçlerinde profesyonel destek sunar.",

  keywords: [
    "DSD Germany",
    "Almanya iş ilanları",
    "Almanya hemşire iş ilanları",
    "Almanya OTA iş ilanları",
    "Almanya fizyoterapist iş ilanları",
    "Almanya sağlık personeli",
    "Almanya tır şoförü iş ilanları",
    "Almanya denklik işlemleri",
    "Almanya vize danışmanlığı",
    "Almanya kariyer danışmanlığı",
  ],

  authors: [{ name: "DSD Germany" }],
  creator: "DSD Germany",
  publisher: "DSD Germany",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "DSD Germany",
    title: "DSD Germany | Almanya İş ve Kariyer Danışmanlığı",
    description:
      "Almanya'da iş, vize, denklik ve işe yerleştirme süreçlerinde profesyonel destek.",
  },

  twitter: {
    card: "summary_large_image",
    title: "DSD Germany | Almanya İş ve Kariyer Danışmanlığı",
    description:
      "Almanya'da iş, vize, denklik ve işe yerleştirme süreçlerinde profesyonel destek.",
  },

  category: "career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}