import React from "react";
import { Metadata } from "next/types";
import { Nunito } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Nathan Edwards",
  description: "Personal portfolio site Nathan Edwards",
  authors: [{ name: "Nathan Edwards" }],
  keywords: ["Nathan Edwards", "Portfolio", "Developer"],
  twitter: {
    card: "summary_large_image",
    title: "Nathan Edwards",
    description: "Personal portfolio site of Nathan Edwards",
    creator: "@nathancodes_",
    creatorId: "1279835325494431745",
    images: [""],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
