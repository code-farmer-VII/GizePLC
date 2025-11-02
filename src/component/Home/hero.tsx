"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import img1 from "../../Asset/Image/Rectangle4.webp";
import img2 from "../../Asset/Image/Rectangle2.jpg";
import img3 from "../../Asset/Image/Rectangle3.jpg";

const images = [img1, img2, img3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="heroHome min-h-screen relative flex items-center py-12 sm:py-16 overflow-hidden">
      {/* Background wrapper */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.05,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65 z-[5]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center gap-6 sm:gap-8 lg:gap-12 text-white">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-8">
          {/* Title */}
          <motion.div
            className="flex-1 flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left leading-tight">
              Connecting East Africa to the World
            </h1>
          </motion.div>

          {/* Description Box */}
          <motion.div
            className="flex-1 bg-white/25 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-lg mt-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white block mb-2">
                Gize Logistics
              </span>
              is your trusted partner for comprehensive logistics solutions. We combine international expertise with local experience to ensure every shipment is handled with reliability and end-to-end visibility, making global trade seamless for our clients.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
             <motion.div 
             initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 text-white pt-4 sm:pt-8 lg:pt-16">
          {/* Years of Experience */}
          <motion.div 
                    variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-orange-600 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2">26+</p>
            <p className="text-base sm:text-lg lg:text-xl">Years of Experience</p>
          </motion.div>

          {/* Completed Projects - Tall card on desktop */}
          <motion.div 
                    variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-black/50 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg text-center flex flex-col justify-center items-center sm:row-span-1 lg:row-span-2 transition-transform hover:scale-105">
            <p className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3">1000+</p>
            <p className="text-xl sm:text-2xl lg:text-3xl">Shipments Delivered</p>
          </motion.div>

          {/* Employees - Shows in second row on mobile, aligned on desktop */}
          <motion.div
                    variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }} 
           className="bg-orange-600 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg text-center sm:col-start-1 lg:col-start-3 lg:row-start-2 transition-transform hover:scale-105">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">200+</p>
            <p className="text-base sm:text-lg lg:text-xl">Employees</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
