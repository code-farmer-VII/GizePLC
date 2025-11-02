"use client";

import Image from "next/image";
import Link from "next/link";
import service from "../../constant/service";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ServicesSection() {
  const [services, setServices] = useState(service);
  const [seeMore, setSeeMore] = useState(false);
  const path = usePathname();
  const isHomePage = path === "/";
  useEffect(() => {
    if (isHomePage) {
      setServices(service.slice(0, 3));
      setSeeMore(true);
    } else {
      setServices(service);
      setSeeMore(false);
    }
  }, [isHomePage]);

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-orange-200/20 shadow-md shadow-orange-200/50 rounded-md overflow-hidden flex flex-col"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700 flex-grow">{service.description}</p>
              <div className="mt-3 text-right">
                <Link href={`/service/${service.id}`} className="text-orange-600 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        {
          seeMore &&
          <button className="bg-orange-500 text-white font-medium px-8 py-3 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-orange-300 cursor-pointer transition-all ease-in-out duration-500">
          See More
        </button>
        }

      </div>
    </section>
  );
}
