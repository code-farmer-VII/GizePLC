"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logoLight from "../../Asset/Image/logoLight.png";
import logoDark from "../../Asset/Image/logoDark.png";
import { cn } from "@/constant/utils";

type Props = {};

const Navbar = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Image
       src={isScrolled ? logoLight : logoDark}
        alt="logo"
        width={100}
        height={100}
        className="transition-all duration-300"
      />
      <h1 className="text-xl font-bold py-2">Time is of the essence
        <br />
        <div className="h-[2px] bg-orange-500"/>
        Freight Logestics
      </h1>
      <div className="md:ml-auto px-2 flex flex-col md:flex-row gap-y-2 gap-x-2 md:items-center md:justify-center [&>a:hover]:bg-orange-500 [&>a:hover]:text-white [&>a]:rounded-md [&>a]:transition [&>a]:duration-200 [&>a]:px-4 md:[&>a]:py-2 [&>a]:py-1">
        <Link href="/" className={cn({ "bg-orange-500 text-white": pathname === "/" })}>
          Home
        </Link>
        <Link href="/about" className={cn({ "bg-orange-500 text-white": pathname === "/about" })}>
          About
        </Link>
        <Link href="/service" className={cn({ "bg-orange-500 text-white": pathname.startsWith("/service") })}>
          Service
        </Link>
        <Link href="/contact" className={cn({ "bg-orange-500 text-white": pathname === "/contact" })}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
