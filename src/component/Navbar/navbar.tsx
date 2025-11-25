"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/constant/utils";
import logoLight from "../../Asset/Image/logoLight.png";
import logoDark from "../../Asset/Image/logoDark.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Detect scroll for navbar background + logo change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 flex items-center px-6 md:px-12 py-4 transition-all duration-300",
          isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
        )}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={isScrolled ?logoLight:logoDark}
            alt="logo"
            width={95}
            height={95}
            className="transition-all duration-300"
          />

          <div className="text-xl font-bold leading-tight">
            Time is key essence
            <div className="h-[2px] bg-orange-500 mt-1" />
            Freight Logistics
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-auto gap-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-md transition-colors duration-200 hover:bg-orange-500 hover:text-white",
                pathname === item.href ||
                  pathname.startsWith(item.href + "/")
                  ? "bg-orange-500 text-white"
                  : "text-gray-700" , isScrolled ? "text-gray-700":"text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden ml-auto p-2"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className={cn("w-7 h-7  text-gray-800", isScrolled ?"text-gray-800":"text-white" )} />
        </button>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 w-72 h-full bg-white shadow-xl z-[70] p-6 transition-transform duration-300 md:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close Button */}
        <button className="mb-6" onClick={() => setSidebarOpen(false)}>
          <X className="w-7 h-7 text-gray-700" />
        </button>

        {/* Sidebar Logo */}
        <div className="flex items-center gap-2 mb-8 text-black">
          <Image src={logoLight} alt="logo" width={80} height={80} />
          <div className="font-bold">
            Time is key essence
            <div className="h-[2px] bg-orange-500" />
            Freight Logistics
          </div>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-md transition-all duration-200 text-lg hover:bg-orange-500 hover:text-white",
                pathname === item.href ||
                  pathname.startsWith(item.href + "/")
                  ? "bg-orange-500 text-white"
                  : "text-gray-700"
              )}
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
