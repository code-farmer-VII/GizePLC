"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gizeServices from "@/constant/service";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full inline-block mb-4">
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600">
              From global shipping to local moving, we provide a full spectrum of logistics services designed to meet your needs with excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {gizeServices.slice(0, 3).map((service, index) => (
              <Link href={`/service/${service.id}`} key={service.id}>
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative h-56 w-full">
                    <Image src={service.image} alt={service.title} layout="fill" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3 flex-grow">{service.description}</p>
                    <span className="text-orange-500 font-semibold mt-4 self-start flex items-center">Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          <motion.div className="text-center mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Link href="/service" className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>
  );
}