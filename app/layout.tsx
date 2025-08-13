import type { Metadata } from "next";
import Script from "next/script";
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
  title: "Der' Cabin Bistro | Comfort Food & Cozy Moments",
  description:
    "Experience delicious comfort food and cozy dining at Der' Cabin Bistro. Your go-to spot for homestyle meals and warm vibes.",
  keywords: [
    "Der Cabin Bistro",
    "comfort food",
    "cozy dining",
    "homestyle meals",
    "local restaurant",
    "food delivery",
    "dercabinbistro.com",
  ],
  authors: [{ name: "Der' Cabin Bistro" }],
  creator: "Der' Cabin Bistro",
  openGraph: {
    title: "Der' Cabin Bistro | Comfort Food & Cozy Moments",
    description:
      "Experience delicious comfort food and cozy dining at Der' Cabin Bistro. Your go-to spot for homestyle meals and warm vibes.",
    url: "https://dercabinbistro.com",
    siteName: "Der' Cabin Bistro",
    images: [
      {
        url: "https://dercabinbistro.com/Images/banner.png",
        width: 1200,
        height: 630,
        alt: "Der' Cabin Bistro Banner",
      },
      {
        url: "https://dercabinbistro.com/Images/brand-logo.png",
        width: 800,
        height: 600,
        alt: "Der' Cabin Bistro Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Der' Cabin Bistro | Comfort Food & Cozy Moments",
    description:
      "Experience delicious comfort food and cozy dining at Der' Cabin Bistro. Your go-to spot for homestyle meals and warm vibes.",
    images: ["https://dercabinbistro.com/Images/banner.png"],
    creator: "@dercabinbistro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CBLSYZPZHP"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CBLSYZPZHP');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
