import type { Metadata } from "next";
import {Poppins} from 'next/font/google'
import "./globals.css";
import React from "react";

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ["100","200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "StoreIt",
  description: "Storeit - The only software solution you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
