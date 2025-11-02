"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../../Asset/Image/Contact/office.avif";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What kind of logistics services does Gize PLC offer?",
    answer:
      "Gize PLC offers a comprehensive range of logistics solutions, including global shipping (sea, air, land), port handling, freight forwarding, customs clearance, warehousing, transportation, and specialized services like packing & moving and event logistics.",
  },
  {
    question: "Do you handle international shipments?",
    answer:
      "Yes, we specialize in connecting East Africa with global markets. Our services include international freight forwarding, customs clearance for both imports and exports, and door-to-door delivery across the globe.",
  },
  {
    question: "Can you handle specialized or oversized cargo?",
    answer:
      "Absolutely. Our port handling and transportation teams are experienced in managing all types of cargo, including bulk, containerized, project cargo, dangerous goods, and oversized shipments with the utmost safety and compliance.",
  },
  {
    question: "How do you ensure the safety and tracking of my shipment?",
    answer:
      "We use advanced tracking systems to provide end-to-end visibility for your shipment. Our experienced team supervises every stage, from packing and handling to final delivery, to ensure your cargo is safe, secure, and arrives on time.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative bg-[#0A0A1E] text-white py-20 px-4 mt-20">
      <Image
        src={bgImage}
        alt="Background"
        fill
        className="object-cover opacity-20 z-0"
      />

      <div className="relative container mx-auto px-4 pb-32 md:pb-32 z-10">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-200 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="flex md:flex-row flex-col space-x-0 md:space-x-6 mt-24">
          <div>
            <div className="text-3xl rounded-lg md:text-6xl font-bold border-l-4 border-orange-600 md:rounded-xl pl-4 text-gray-200">
              Your Partner in <span className="text-orange-500">Global</span> Logistics
            </div>
            <motion.div
              className="text-lg my-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ color: '#a0aec0' }} // Equivalent to text-gray-400
            >
              We are committed to providing seamless, reliable, and innovative logistics solutions to connect your business with the world.
            </motion.div>
          </div>

          <div className="space-y-4 w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-sm rounded-lg overflow-hidden border-2 border-orange-600"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className="bg-orange-500 w-full text-left p-4 flex justify-between items-center text-lg font-semibold text-white focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    className="text-gray-600"
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <p className="p-4 text-gray-600">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
