"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import img5 from "../../Asset/Image/Contact/gizeCEO.jpg";

const ImageSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Our Working Environment
          </h2>
          <p className="text-gray-600 mt-2">
            A glimpse into our collaborative and innovative space.
          </p>
        </motion.div>
        <motion.div
          className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={img5} alt="Our Team at Work" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSection;