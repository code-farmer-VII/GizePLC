import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar/navbar";
import Footer from "@/component/Home/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "GIZE Logistics PLC",
  description: "The official service of GIZE Logistics PLC",
  manifest: "/manifest.json",                // ← important
  icons: {
    icon: ["/icons/icon-192x192.png", "/icons/icon-512x512.png"],
    apple: "/icons/icon-512x512.png",
  },
  themeColor: "#ff6600",
  appleWebApp: {
    title: "GIZE Logistics",
    statusBarStyle: "default",
  },
};

export const viewport = {
  themeColor: "#ff6600",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* These are optional but recommended */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
        <meta name="theme-color" content="#ff6600" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}