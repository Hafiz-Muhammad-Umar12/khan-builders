// About.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 py-20 px-10 bg-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-8">About Us</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-300">
        We are a leading construction company with over 20 years of experience
        delivering high-quality and sustainable building solutions. Our team is
        dedicated to excellence, safety, and client satisfaction.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="p-6 bg-gray-800 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">20+ Years Experience</h3>
          <p>We have successfully completed hundreds of projects.</p>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-800 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
          <p>Our professionals are certified and highly trained.</p>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-800 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
          <p>We focus on exceeding expectations every time.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
