import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import services from "../../constant/service";
import Image from "next/image";

interface ServiceDetailProps {
  id: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ id }) => {
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0A0A1E] text-white">
        <h2 className="text-2xl font-semibold">Service not found.</h2>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={service.image.src}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          quality={80}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/80 bg-opacity-70" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full text-white px-6 py-12 flex flex-col gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-extrabold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {service.title}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-200 leading-relaxed text-start max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {service.description}
        </motion.p>

        {service.lists && (
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2 text-center">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200 text-base">
              {service.lists.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <motion.div
          className="flex justify-center mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/service">
            <button className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-500 transition-all duration-300">
              Back to Services
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;
