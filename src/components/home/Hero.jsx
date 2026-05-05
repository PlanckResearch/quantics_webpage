import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "../common/ParticleBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <ParticleBackground />

      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Start your <span className="text-primary">Market Research</span> Experience
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Unlock powerful insights with AI-driven market intelligence and predictive analytics
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/demo" className="bg-primary px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Get Started
          </Link>
          <Link to="/services" className="glass-effect px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
