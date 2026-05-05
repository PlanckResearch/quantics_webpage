import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import {
  FaIndustry,
  FaShoppingCart,
  FaHeartbeat,
  FaUniversity,
  FaMicrochip,
  FaStore,
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
  FaTrophy,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaBrain,
  FaQuoteLeft,
  FaAward,
  FaPoll,
  FaChartBar,
  FaDatabase,
  FaClock,
  FaNetworkWired,
  FaStar,
  FaSync,
  FaSearchDollar,
} from "react-icons/fa";
import { HiTrendingUp, HiLightningBolt, HiSparkles, HiChip } from "react-icons/hi";
import { SiTensorflow, SiPytorch, SiOpenai } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Core industries we serve
  const industries = [
    {
      id: "retail",
      icon: <FaShoppingCart className="text-4xl" />,
      title: "Retail & E-commerce",
      description: "AI-powered consumer insights for modern retail",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time consumer behavior analysis",
        "Predictive inventory optimization",
        "Dynamic pricing intelligence",
        "Omnichannel experience tracking"
      ],
      aiCapabilities: [
        { name: "Purchase Prediction", accuracy: "94%" },
        { name: "Trend Forecasting", speed: "Real-time" },
        { name: "Customer Segmentation", segments: "Unlimited" }
      ],
      successMetric: "45% increase in conversion rates",
    },
    {
      id: "healthcare",
      icon: <FaHeartbeat className="text-4xl" />,
      title: "Healthcare & Life Sciences",
      description: "Transform patient care with data intelligence",
      color: "from-red-500 to-pink-500",
      features: [
        "Patient sentiment analysis",
        "Treatment effectiveness tracking",
        "Healthcare trend prediction",
        "Compliance monitoring"
      ],
      aiCapabilities: [
        { name: "Patient Analytics", accuracy: "97%" },
        { name: "Risk Assessment", speed: "Instant" },
        { name: "Outcome Prediction", confidence: "95%" }
      ],
      successMetric: "60% faster clinical insights",
    },
    {
      id: "finance",
      icon: <FaUniversity className="text-4xl" />,
      title: "Financial Services",
      description: "Navigate markets with AI-driven insights",
      color: "from-green-500 to-emerald-500",
      features: [
        "Market sentiment analysis",
        "Risk assessment modeling",
        "Customer behavior analytics",
        "Regulatory compliance tracking"
      ],
      aiCapabilities: [
        { name: "Fraud Detection", accuracy: "99.9%" },
        { name: "Market Prediction", horizon: "6 months" },
        { name: "Risk Scoring", processing: "Real-time" }
      ],
      successMetric: "90% fraud prevention rate",
    },
    {
      id: "technology",
      icon: <FaMicrochip className="text-4xl" />,
      title: "Technology & Software",
      description: "Stay ahead with competitive intelligence",
      color: "from-purple-500 to-pink-500",
      features: [
        "Innovation trend tracking",
        "Competitive benchmarking",
        "User behavior analytics",
        "Market opportunity sizing"
      ],
      aiCapabilities: [
        { name: "Tech Stack Analysis", coverage: "100%" },
        { name: "Innovation Tracking", sources: "50K+" },
        { name: "Market Sizing", accuracy: "92%" }
      ],
      successMetric: "3x faster product launches",
    },
    {
      id: "manufacturing",
      icon: <FaIndustry className="text-4xl" />,
      title: "Manufacturing & Industrial",
      description: "Optimize operations with smart insights",
      color: "from-orange-500 to-red-500",
      features: [
        "Supply chain analytics",
        "Demand forecasting",
        "Quality control optimization",
        "Predictive maintenance"
      ],
      aiCapabilities: [
        { name: "Demand Forecasting", accuracy: "93%" },
        { name: "Supply Chain AI", optimization: "40%" },
        { name: "Quality Prediction", detection: "98%" }
      ],
      successMetric: "40% efficiency improvement",
    },
    {
      id: "education",
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Education & EdTech",
      description: "Transform learning with data insights",
      color: "from-indigo-500 to-blue-500",
      features: [
        "Student engagement analytics",
        "Learning outcome prediction",
        "Course optimization insights",
        "Market demand analysis"
      ],
      aiCapabilities: [
        { name: "Engagement Tracking", accuracy: "91%" },
        { name: "Success Prediction", confidence: "88%" },
        { name: "Content Optimization", improvement: "35%" }
      ],
      successMetric: "78% improvement in outcomes",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-surface overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 bg-surface">
        {/* Animated background elements */}
        <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-72 h-72 bg-surface-container rounded-full blur-3xl opacity-30" />
        <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-96 h-96 bg-surface-container rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-surface-container-low border border-outline-variant/30 px-4 py-2 mb-6"
            >
              <HiSparkles className="text-primary-dim" />
                            <span className="text-sm font-medium text-gray-700">AI-Powered Industry Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
              Industry Expertise Meets <span className="text-primary-dim">AI Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
              Deep industry knowledge combined with cutting-edge AI to deliver insights that transform businesses
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{statsInView && <CountUp end={6} duration={2} suffix="+" />}</div>
                <p className="text-gray-600">Industries</p>
              </motion.div>
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.2 }} className="text-center">
                <div className="text-4xl font-bold text-primary-dim mb-2">{statsInView && <CountUp end={98} duration={2} suffix="%" />}</div>
                <p className="text-gray-600">AI Accuracy</p>
              </motion.div>
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.3 }} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{statsInView && <CountUp end={10} duration={2} suffix="x" />}</div>
                <p className="text-gray-600">Faster Insights</p>
              </motion.div>
              <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.4 }} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{statsInView && <CountUp end={45} duration={2} suffix="%" />}</div>
                <p className="text-gray-600">Avg. ROI Increase</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-surface-container border border-outline-variant/30 px-4 py-2 mb-4"
              >
                <FaIndustry className="text-green-600" />
                <span className="text-sm font-medium text-gray-700">Industry-Specific Solutions</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Solutions Tailored for <span className="text-primary-dim">Your Industry</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI adapts to your industry's unique challenges and opportunities
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredCard(industry.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  onClick={() => setSelectedIndustry(industry)}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 h-full flex flex-col"
                >
                  <div className={`w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-white mb-4`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  
                  {/* Key Features */}
                  <ul className="space-y-2 mb-4 flex-grow">
                    {industry.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Success Metric */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Success Rate</span>
                      <span className="text-sm font-semibold text-green-600">{industry.successMetric}</span>
                    </div>
                  </div>

                  <Link to="/demo" className="flex items-center justify-between mt-4 group cursor-pointer">
                    <span className="text-primary font-medium text-sm group-hover:text-primary-dim transition-colors">Learn more</span>
                    <FaArrowRight className="text-primary group-hover:text-primary-dim transition-colors" />
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities by Industry */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-surface-container border border-outline-variant/30 px-4 py-2 mb-4"
              >
                <FaBrain className="text-primary-dim" />
                <span className="text-sm font-medium text-gray-700">Industry-Specific AI Models</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                AI That <span className="text-primary-dim">Understands Your Business</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pre-trained models for each industry ensure accurate, relevant insights from day one
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <SiTensorflow className="text-3xl" />,
                title: "Custom ML Models",
                description: "Industry-specific algorithms",
                metric: "50+ models"
              },
              {
                icon: <BiNetworkChart className="text-3xl" />,
                title: "Pattern Recognition",
                description: "Identify industry trends",
                metric: "Real-time"
              },
              {
                icon: <HiChip className="text-3xl" />,
                title: "NLP Analysis",
                description: "Industry terminology",
                metric: "40+ languages"
              },
              {
                icon: <FaRocket className="text-3xl" />,
                title: "Predictive Analytics",
                description: "Forecast industry shifts",
                metric: "95% accuracy"
              }
            ].map((capability, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center text-primary mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{capability.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{capability.description}</p>
                  <div className="text-2xl font-bold text-primary-dim">
                    {capability.metric}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Detail Modal */}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white shadow-2xl p-8 rounded-2xl max-w-4xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-white`}>
                    {selectedIndustry.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-primary">{selectedIndustry.title}</h2>
                    <p className="text-gray-600 mt-1">{selectedIndustry.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedIndustry(null)} 
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* AI Capabilities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-primary">AI Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedIndustry.aiCapabilities.map((capability, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">{capability.name}</h4>
                      <div className="text-2xl font-bold text-primary">
                        {Object.values(capability)[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedIndustry.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metric */}
              <div className="bg-surface-container-low p-6 rounded-xl mb-8">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Average Client Result</p>
                  <p className="text-3xl font-bold text-primary">{selectedIndustry.successMetric}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                  <Link 
                    to="/demo" 
                    className="w-full inline-flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:bg-primary-dim transition-all"
                  >
                    <span>Get {selectedIndustry.title} Demo</span>
                    <FaArrowRight />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-white border-2 border-primary/30 text-primary px-6 py-3 font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:border-primary hover:shadow-md transition-all"
                  >
                    <span>Talk to Industry Expert</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industry Resources */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Industry <span className="text-primary-dim">Resources & Insights</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <FaChartLine />,
                title: "Industry Reports",
                description: "Deep market analysis",
                count: "50+ reports",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <FaPoll />,
                title: "Benchmarks",
                description: "Industry standards",
                count: "Updated daily",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <FaLightbulb />,
                                title: "Best Practices",
                description: "Proven strategies",
                count: "200+ guides",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <FaDatabase />,
                title: "Data Sets",
                description: "Industry datasets",
                count: "10TB+ data",
                color: "from-orange-500 to-red-500",
              },
            ].map((resource, index) => (
              <AnimatedSection key={index}>
                <motion.div 
                  whileHover={{ y: -10 }} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <div className="text-xl font-bold text-primary">{resource.count}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Industry Metrics */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-surface-container-low border border-outline-variant/30 px-4 py-2 mb-4"
              >
                <FaSync className="text-primary animate-spin" />
                <span className="text-sm font-medium text-gray-700">Real-Time Industry Intelligence</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Live Industry <span className="text-primary-dim">Performance Metrics</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Trending Industries */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary flex items-center">
                    <HiTrendingUp className="text-green-600 mr-2" />
                    Trending Industries
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Healthcare Tech", growth: "+42%", trend: "up" },
                      { name: "E-commerce", growth: "+38%", trend: "up" },
                      { name: "EdTech", growth: "+35%", trend: "up" },
                      { name: "FinTech", growth: "+28%", trend: "up" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{item.name}</span>
                        <span className={`text-sm font-semibold ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {item.growth}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Adoption Rate */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary flex items-center">
                    <FaBrain className="text-primary-dim mr-2" />
                    AI Adoption by Industry
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Technology", rate: 95 },
                      { name: "Finance", rate: 87 },
                      { name: "Healthcare", rate: 78 },
                      { name: "Retail", rate: 72 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{item.name}</span>
                          <span className="font-semibold text-primary">{item.rate}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.rate}%` }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="h-full bg-primary-dim"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Metrics */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary flex items-center">
                    <FaStar className="text-yellow-500 mr-2" />
                    Success Metrics
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <p className="text-xs text-gray-600">Client Satisfaction</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">3.5x</div>
                      <p className="text-xs text-gray-600">Average ROI</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-dim">45%</div>
                      <p className="text-xs text-gray-600">Time Saved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Industry <span className="text-primary-dim">FAQs</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How does the AI adapt to my specific industry?",
                answer: "Our AI models are pre-trained on industry-specific data and continuously learn from your usage. The system automatically adjusts algorithms, terminology, and metrics based on your industry's unique requirements."
              },
              {
                question: "Can I get insights across multiple industries?",
                answer: "Yes! Our platform supports multi-industry analysis, allowing you to track cross-industry trends, identify opportunities, and benchmark performance across different sectors."
              },
              {
                question: "How current is the industry data?",
                answer: "We process real-time data from thousands of sources. Market data is updated every second, while deeper analytics refresh hourly or daily depending on the metric."
              },
              {
                question: "Do you support niche industries?",
                answer: "Absolutely. While we have pre-built solutions for major industries, our AI can be customized for any niche market or specialized sector."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <details className="bg-white p-6 rounded-2xl group cursor-pointer shadow-md">
                    <summary className="font-semibold text-primary flex items-center justify-between">
                      {faq.question}
                      <span className="text-primary group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </details>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden bg-[#0B132B]">
        <div className="absolute inset-0 bg-black opacity-10" />
        
        {/* Animated background shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
                                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8"
              >
                <HiSparkles className="text-4xl text-white" />
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Transform Your Industry with <span className="text-yellow-300">AI-Powered Insights</span>
              </h2>

              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Join leading companies across every industry who are using our AI platform to drive growth and innovation
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center space-x-2 bg-white text-[#0B132B] px-8 py-4 font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:bg-slate-200 transition-all duration-300"
                  >
                    <span>Get Industry Demo</span>
                    <FaArrowRight />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 border-2 border-white/30 text-white px-8 py-4 font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Talk to Industry Expert</span>
                  </Link>
                </motion.div>
              </div>

              {/* <div className="flex items-center justify-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle />
                  <span className="text-sm">Industry-specific AI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle />
                  <span className="text-sm">14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle />
                  <span className="text-sm">Expert support</span>
                </div>
              </div> */}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Floating Chat Widget */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary p-4 rounded-full shadow-2xl text-white group relative"
        >
          <div className="relative">
            <FaBrain className="text-xl" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
          >
            AI Assistant Online
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Industries;