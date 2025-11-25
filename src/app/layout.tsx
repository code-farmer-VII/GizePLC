import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarContainer from "@/component/Navbar/NavbarContainer";
import Navbar from "@/component/Navbar/navbar";
import logo from "@/app/logo-gize.jpg"
import DesktopNavbar from "@/component/Navbar/desktopNavbar";
import Footer from "@/component/Home/Footer";

const inter = Inter({
  variable: "--font-sans",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
           <Footer />
      </body>
    </html>
  );
}
