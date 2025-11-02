"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import truckImage from "../../Asset/Image/giza.png";

export default function AboutSection() {
  return (
    <section className="md:pt-24 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 bg-white text-black overflow-hidden">
      {/* Left Side - Text */}
   
      <div className="flex-1 space-y-6 md:space-y-8 z-10">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-orange-500">Fast.</span> Reliable.
          <br />
          <span className="text-orange-500">Logistics</span> Solutions.
        </motion.h1>

        <motion.p
          className="text-gray-700 text-base sm:text-lg max-w-md leading-relaxed font-medium"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Delivering efficiency across the globe with cutting-edge logistics
          solutions, ensuring every shipment arrives on time, every time.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Learn More
        </motion.button>
      </div>

      {/* Right Side - Image */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 relative flex items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background glow */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-500 blur-3xl opacity-30"></div>

        {/* Image container */}
        <div className="relative z-10">
          <Image
            src={truckImage}
            alt="logistics truck"
            className="object-contain"
            width={300}
            height={600}
          />
        </div>
      </motion.div>
    </section>
  );
}
