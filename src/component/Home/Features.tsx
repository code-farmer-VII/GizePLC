"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, Package, Truck } from "lucide-react";

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-orange-400" />,
      title: "Global Freight Solutions",
      description:
        "Comprehensive sea, air, and land freight forwarding to connect your business to the world, handling everything from shipping to customs clearance.",
    },
    {
      icon: <Package className="h-8 w-8 text-orange-400" />,
      title: "Integrated Logistics",
      description:
        "Secure warehousing, professional port handling, and efficient packing & moving to ensure your cargo is managed safely and effectively from start to finish.",
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-400" />,
      title: "Reliable Transportation",
      description:
        "With a modern fleet and an extensive network, we provide reliable transportation for timely and secure delivery of your goods, both domestically and internationally.",
    },
  ];

  return (
    <section className="bg-[#0b1623] text-white py-20 px-6 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <button className="px-5 py-2 mb-6 rounded-full bg-orange-400/10 text-orange-400 border border-orange-400/30 text-sm font-medium">
            Why Choose Us
          </button>
          <h2 className="text-4xl font-bold mb-3">What Sets Us Apart</h2>
          <p className="text-gray-400 mb-12">
            Our commitment to providing seamless, end-to-end logistics solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(255, 165, 0, 0.2)",
                transition: { duration: 0.3 },
              }}
              className="bg-gradient-to-b from-[#16222e] to-[#0b1623] border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 rounded-2xl shadow-lg p-8 text-left flex flex-col items-start space-y-4"
            >
              <div className="p-3 bg-orange-400/10 rounded-xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
