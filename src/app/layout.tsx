import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../shared/components/Navbar";
import { Footer } from "../shared/components/Footer";
import { SakuraOverlay } from "../shared/components/SakuraOverlay";
import { Providers } from "./providers";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Yoru Vision — Image Processing Lab",
  description:
    "Yoru Vision is a browser-native image processing lab with 12 modules including steganography, OCR, AI detection, forensics, and frequency processing.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>
          <SakuraOverlay />
          <Navbar />
          <main className="min-h-screen yoru-main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
