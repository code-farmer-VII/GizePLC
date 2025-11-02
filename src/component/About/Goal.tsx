"use client"
import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../Asset/Image/AboutImages/Frame1.png";

const GoalSection = () => {
  const goal = [
    {
      title: "Operational Efficiency",
      description:
        "Optimize supply chains and streamline operations to deliver fast, cost-effective, and reliable logistics services.",
    },
    {
      title: "Unmatched Reliability",
      description:
        "Ensure the safe and timely delivery of every shipment through meticulous planning, advanced tracking, and a dedicated team.",
    },
    {
      title: "Customer Partnership",
      description:
        "Build strong, collaborative relationships with our clients, acting as a true partner to help them achieve their business objectives.",
    },
  ];

  return (
    <section className="bg-black pb-12 md:mt-0 pt-16 ">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Goals
        </motion.h2>
        <p className="text-gray-400 text-lg mb-8">
          At Gize PLC, we are driven by a commitment to excellence. Our goals reflect our
          dedication to providing reliable, efficient, and innovative logistics solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {goal.map((goal, index) => (
            <motion.div
              key={index}
              className="shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage.src})` }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {goal.title}
              </h3>
              <p className="text-white">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
