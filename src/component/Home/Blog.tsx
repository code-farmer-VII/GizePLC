"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// LinkedIn posts
const linkedinPosts = [
  {
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7379564094133288960?collapsed=1",
    link: "https://www.linkedin.com/posts/gizeshwork-tessema-15aa6326_gratitude-empowerment-inspiration-share-7379564094133288960-7rB2?utm_source=share&utm_medium=member_desktop",
  },
  {
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7378092885654794240?collapsed=1",
    link: "https://www.linkedin.com/posts/gizeshwork-tessema-15aa6326_diaspora-ethiopia-gerd-ugcPost-7378092885654794240-9WFe?utm_source=share&utm_medium=member_desktop",
  },
  {
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7383299498976112640?collapsed=1",
    link: "https://www.linkedin.com/posts/gizeshwork-tessema-15aa6326_grandethiopianrenaissancedam-gerd-ethiopiarising-share-7383299498976112640-JKqn?utm_source=share&utm_medium=member_desktop",
  },
];

export const BlogPosts = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full inline-block mb-4">
            Latest Insights
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            News & Perspectives
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed with our latest posts directly from LinkedIn.
          </p>
        </motion.div>

        {/* Posts Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {linkedinPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-500 transition-all shadow-sm hover:shadow-xl group"
            >
              <iframe
                src={post.url}
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                title={`LinkedIn Post ${index + 1}`}
                className="rounded-t-2xl"
              ></iframe>

              <div className="p-6 text-center">
                <Link
                  href={post.link}
                  target="_blank"
                  className="text-orange-500 font-medium flex items-center justify-center group-hover:translate-x-2 transition-transform mx-auto"
                >
                  View on LinkedIn
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        //   viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="https://www.linkedin.com/in/gizeshwork-tessema-15aa6326/"
            target="_blank"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg"
          >
            View All on LinkedIn
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
