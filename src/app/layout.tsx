import type { Metadata } from "next";
import { Geist ,Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarContainer from "@/component/Navbar/NavbarContainer";
import Navbar from "@/component/Navbar/navbar";
import logo from "@/app/logo-gize.jpg"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GIZE logistics plc",
  description: "The service of the GIZE logistics plc",
  icons: logo.src,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <NavbarContainer>
            <Navbar />
          </NavbarContainer>
        {children}
      </body>
    </html>
  );
}
