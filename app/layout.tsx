import type { Metadata } from "next";
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
    </html>
  );
}
