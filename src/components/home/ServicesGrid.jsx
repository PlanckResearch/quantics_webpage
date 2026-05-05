import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import { FaChartLine, FaSearchLocation, FaChartBar, FaLightbulb, FaShareAlt, FaChartPie, FaDoorOpen, FaTrophy, FaRocket } from "react-icons/fa";

const services = [
  {
    title: "Market Sizing & Forecasting",
    icon: <FaChartLine />,
    description: "Accurate market size analysis and future growth predictions",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "New Market Identification",
    icon: <FaSearchLocation />,
    description: "Discover untapped markets and emerging opportunities",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Competitive Analysis & Benchmarking",
    icon: <FaChartBar />,
    description: "Comprehensive competitor insights and performance metrics",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Fit & Attractiveness Assessment",
    icon: <FaLightbulb />,
    description: "Evaluate market compatibility and potential returns",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Market Positioning Analysis",
    icon: <FaShareAlt />,
    description: "Strategic positioning for maximum market impact",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Market Share & Growth Evaluation",
    icon: <FaChartPie />,
    description: "Track market share and identify growth opportunities",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Market Entry & Barrier Assessment",
    icon: <FaDoorOpen />,
    description: "Navigate entry strategies and overcome barriers",
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Trend Analysis",
    icon: <FaTrophy />,
    description: "Identify and leverage emerging market trends",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Product & Innovation Research",
    icon: <FaRocket />,
    description: "Drive innovation with data-driven product insights",
    color: "from-violet-500 to-purple-500",
  },
];

const ServicesGrid = () => {
  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our <span className="text-primary">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className={`text-4xl mb-4 text-primary`}>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesGrid;
