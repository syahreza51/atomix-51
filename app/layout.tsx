import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atomix Dev IT Solution — Pengembangan Sistem Digital",
  description:
    "Atomix Dev IT Solution — perusahaan pengembangan solusi teknologi informasi. Web portal, sistem enterprise, command center, dan infrastruktur digital untuk organisasi, pemerintahan, dan korporasi.",
  keywords: [
    "Atomix Dev",
    "IT Solution",
    "Pengembangan Web",
    "Sistem Enterprise",
    "Laravel",
    "React",
    "Next.js",
    "Software House Indonesia",
    "Company Profile",
  ],
  authors: [{ name: "Atomix Dev IT Solution" }],
  creator: "Atomix Dev IT Solution",
  publisher: "Atomix Dev IT Solution",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://atomix51.com",
    title: "Atomix Dev IT Solution — Pengembangan Sistem Digital",
    description:
      "Mitra teknologi untuk organisasi, pemerintahan, dan korporasi. Portofolio klien: KPAM, Partai Golkar, Bareskrim Polri, Moladin, PT Riksa Jaya Swastika.",
    siteName: "Atomix Dev IT Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atomix Dev IT Solution",
    description:
      "Pengembangan web portal, sistem enterprise, dan infrastruktur digital berperforma tinggi.",
  },
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://atomix51.com" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
