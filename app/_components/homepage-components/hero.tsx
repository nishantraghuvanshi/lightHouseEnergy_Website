// components/Hero.js
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="relative bg-cover bg-center bg-[url('/windfarmone.jpg')]"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <div className="relative bg-slate-200 bg-opacity-60 p-8 md:p-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl font-extrabold text-gray-900 py-5">
                Powering the Future with Sustainable Wind Energy
              </h1>
              <p className="mt-4 text-lg text-white">
                Join our waitlist to be part of the clean energy revolution.
              </p>
              <div className="mt-6">
                <button className="bg-black text-white px-4 py-2 rounded-md text-lg font-medium mr-4">
                  Join
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-4 py-2 rounded-md text-lg font-medium">
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div className="mt-10 lg:mt-0" variants={fadeInUp}>
              <div className="w-full h-full bg-gray-200 flex justify-center items-center rounded-lg shadow-black shadow-sm">
                <Image
                  className="rounded-lg overflow-hidden object-cover"
                  src="/windfarmone.jpg"
                  alt="Wind Farm"
                  layout="responsive"
                  width={700}
                  height={1000}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
