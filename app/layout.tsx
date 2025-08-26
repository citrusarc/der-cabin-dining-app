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
  title: "Der' Cabin Bistro | Eat Good, Feel Good",
  description:
    "Discover Der' Cabin Bistro — a cozy spot for hearty meals, fresh flavors, and a welcoming atmosphere. Eat good, feel good, and enjoy every bite!",
  keywords: [
    "Der' Cabin Bistro",
    "restaurant",
    "bistro",
    "cozy dining",
    "comfort food",
    "eat good feel good",
    "casual dining",
    "family restaurant",
  ],
  authors: [{ name: "Der' Cabin Bistro" }],
  openGraph: {
    title: "Der' Cabin Bistro | Eat Good, Feel Good",
    description:
      "Join us at Der' Cabin Bistro for a cozy dining experience filled with hearty meals and warm hospitality.",
    url: "https://www.dercabinbistro.com",
    siteName: "Der' Cabin Bistro",
    images: [
      {
        url: "https://www.dercabinbistro.com/Images/banner.png",
        width: 1200,
        height: 630,
        alt: "Der' Cabin Bistro interior and delicious meals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Der' Cabin Bistro | Eat Good, Feel Good",
    description:
      "Cozy vibes, hearty meals, and fresh flavors — that's Der' Cabin Bistro. Eat good, feel good!",
    images: ["https://www.dercabinbistro.com/Images/banner.png"],
    creator: "@dercabinbistro",
  },
  metadataBase: new URL("https://www.dercabinbistro.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
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
