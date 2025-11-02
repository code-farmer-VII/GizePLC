"use client";
import React from "react";
import Image from "next/image";
import bgImage from "../../Asset/Image/services/plane logestics.jpg";


function HeroService() {
  return (
    <div className="relative h-[550px] w-full overflow-hidden mt-20">
      <Image
        src={bgImage}
        alt="Our Services"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
          Gize PLC Logistics Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
          Your trusted partner for comprehensive logistics solutions. We combine
          international expertise with local experience to make global trade
          seamless for our clients.
        </p>
      </div>
    </div>
  );
}

export default HeroService;