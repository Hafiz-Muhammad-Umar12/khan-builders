"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from next

const Services = () => {
  return (
    <section
      id="services"
      className="relative z-10 py-20 px-10 bg-white text-center text-black overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-700">
        We offer a wide range of construction services to meet your needs.
      </p>

      {/* Service cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="p-6 bg-gray-100 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Building Design</h3>
          <p>Innovative and sustainable architectural designs.</p>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-100 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Construction</h3>
          <p>Reliable and efficient construction services.</p>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-100 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Renovation</h3>
          <p>Modernizing your spaces with expert craftsmanship.</p>
        </motion.div>
      </div>

      {/* View More Button with Link */}
      <motion.div
        className="mt-10 flex justify-center z-10 relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/services">
          <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 hover:text-black transition duration-300">
            View More
          </button>
        </Link>
      </motion.div>

      {/* SVG Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.18C224.21 74.37 111.6 92.23 0 90.29V0h1200v90.29c-110.86 1.93-221.72-15.91-329.08-35.22-70.62-12.91-143.48-27.36-218.6-30.6-91.56-4.07-180.76 20.41-330.93 31.71z"
            fill="#000000"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;
