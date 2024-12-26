import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "@/globals.css";

import { Nunito_Sans } from 'next/font/google';
import { Libre_Bodoni } from 'next/font/google';


const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans'
})

const libreBodoni = Libre_Bodoni({
  subsets: ['latin'],
  variable: '--font-libre-bodoni'
})

export const metadata: Metadata = {
  title: "Holosomatic Bodywork",
  description: "Holosomatic Bodywork by Yuliia Pinchuk",
  keywords: [
    "holosomatic",
    "bodywork",
    "breathing",
    "polyvagal",
    "energy work",
    "body mapping",
    "cracow",
    "krakow",
    "breathwork",
    "theraphy",
    "movement",
    "tension",
    "trauma",
    "expression",
    "emotion",
    "healing",
    "neuroscience",
    "natural healing",
    "workshops",
    "chinese medicine",
    "energy flow",
    "chakras",
    "taoism",
    "wilhelm reich",
    "yuliia pinchuk"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className={`${nunitoSans.variable} ${libreBodoni.variable} antialiased`}>
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="G-NKD2B79WMG" />
    </html>
  );
}
