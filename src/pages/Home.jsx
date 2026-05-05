import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import {
  FaChartLine,
  FaBrain,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaTrophy,
  FaLightbulb,
  FaArrowRight,
  FaPlay,
  FaQuoteLeft,
  FaCheckCircle,
  FaClock,
  FaStar,
  FaAward,
  FaDatabase,
  FaChartBar,
  FaPoll,
  FaSearchDollar,
  FaFileAlt,
  FaChartPie,
  FaMicroscope,
  FaUsersCog,
  FaClipboardList,
  FaRobot,
  FaNetworkWired,
  FaCogs,
  FaLayerGroup,
  FaSync,
  FaServer,
} from "react-icons/fa";
import { HiTrendingUp, HiLightningBolt, HiSparkles, HiChip } from "react-icons/hi";
import { SiTensorflow, SiPytorch, SiOpenai } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";

const Home = () => {
  const [activeHeadline, setActiveHeadline] = useState(0);
  const [activeMetric, setActiveMetric] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  // Hero headlines rotation
  const headlines = [
    {
      title: "Unlock Consumer Insights with AI-Powered Research",
      subtitle: "Transform raw data into actionable intelligence that drives growth",
    },
    {
      title: "Make Smarter Decisions with Real-Time Data",
      subtitle: "Access live market trends and consumer behavior analytics instantly",
    },
    {
      title: "Stay Ahead with Predictive Market Intelligence",
      subtitle: "Anticipate market shifts before your competition does",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Services data
  const services = [
    {
      icon: <FaPoll className="text-4xl" />,
      title: "Surveys & Polling",
      description: "Create and deploy intelligent surveys that capture deep consumer insights",
      features: ["AI-powered questions", "Real-time responses", "Multi-channel distribution"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaChartPie className="text-4xl" />,
      title: "Consumer Analytics",
      description: "Understand your audience with advanced behavioral analytics",
      features: ["Demographic profiling", "Purchase patterns", "Sentiment analysis"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaSearchDollar className="text-4xl" />,
      title: "Competitor Analysis",
      description: "Track and analyze competitor strategies in real-time",
      features: ["Market positioning", "Pricing intelligence", "Campaign tracking"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaFileAlt className="text-4xl" />,
      title: "Industry Reports",
      description: "Access comprehensive reports on market trends and forecasts",
      features: ["Custom reports", "Quarterly updates", "Expert insights"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  // AI Features
  const aiFeatures = [
    {
      icon: <SiTensorflow className="text-4xl" />,
      title: "Deep Learning Models",
      description: "Neural networks process complex market patterns with 99.9% accuracy",
      metric: "100K+ parameters",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <BiNetworkChart className="text-4xl" />,
      title: "Predictive Analytics",
      description: "Forecast market trends up to 12 months in advance with AI precision",
      metric: "95% accuracy rate",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <HiChip className="text-4xl" />,
      title: "Natural Language Processing",
      description: "Analyze sentiment from millions of consumer reviews and social posts",
      metric: "40+ languages",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "Automated Insights",
      description: "AI automatically identifies patterns and generates actionable recommendations",
      metric: "24/7 analysis",
      color: "from-purple-500 to-pink-500",
    },
  ];

  // Real-time metrics
  const realtimeMetrics = [
    { label: "Active Surveys", value: "2,847", change: "+12%", icon: <FaClipboardList /> },
    { label: "Response Rate", value: "87.3%", change: "+5.2%", icon: <FaChartBar /> },
    { label: "Data Points/Sec", value: "125K", change: "+18%", icon: <FaDatabase /> },
    { label: "AI Insights", value: "3,542", change: "+23%", icon: <FaBrain /> },
  ];

  // Management features
  const managementFeatures = [
    {
      icon: <FaUsersCog className="text-3xl" />,
      title: "Complete Management",
      description: "End-to-end research project management with AI automation",
      features: [
        "Project timeline optimization",
        "Resource allocation AI",
        "Automated reporting",
        "Smart notifications",
      ],
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Active Team Collaboration",
      description: "Real-time collaboration tools powered by AI assistants",
      features: [
        "Live co-editing",
        "AI meeting summaries",
        "Smart task assignment",
        "Progress tracking",
      ],
    },
    {
      icon: <FaMicroscope className="text-3xl" />,
      title: "Quality Data Analysis",
      description: "Enterprise-grade data quality with AI validation",
      features: [
        "Automated data cleaning",
        "Outlier detection",
        "Cross-validation AI",
        "Quality scoring",
      ],
    },
  ];

  return (
    <div className="overflow-hidden bg-surface">
      {/* Hero Section with Sliding Headlines */}
      <section className="relative min-h-screen flex items-center py-20 bg-surface">
        <ParticleBackground />

        {/* Animated background elements */}
        <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-72 h-72 bg-surface-container rounded-full blur-3xl opacity-30" />
        <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-96 h-96 bg-surface-container rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left column - Content */}
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-surface-container-low border border-outline-variant/30 px-4 py-2 mb-6"
                >
                  <HiSparkles className="text-primary-dim" />
                  <span className="text-sm font-medium text-gray-700">Powered by Advanced AI Technology</span>
                </motion.div>

                {/* Sliding Headlines */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeHeadline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold mb-6 text-primary leading-tight tracking-tighter">
                      {headlines[activeHeadline].title.split(" ").map((word, index) => (
                        <span key={index}>
                          {word.includes("AI") || word.includes("Real-Time") || word.includes("Predictive") ? (
                            <span className="text-primary underline decoration-2 underline-offset-4">{word}</span>
                          ) : (
                            word
                          )}{" "}
                        </span>
                      ))}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">{headlines[activeHeadline].subtitle}</p>
                  </motion.div>
                </AnimatePresence>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/demo"
                      className="inline-flex items-center justify-center space-x-2 bg-primary px-8 py-4 text-white font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:bg-primary-dim transition-all duration-300"
                    >
                      <span>Start Free Trial</span>
                      <FaArrowRight />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {/* <Link
                      to="/contact"
                      className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-primary/30 px-8 py-4 text-primary font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:border-primary hover:shadow-lg transition-all duration-300"
                    >
                      <span>Schedule Demo</span>
                    </Link> */}
                  </motion.div>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center space-x-8">
                  <div className="flex -space-x-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold border-2 border-white">
                        {i + 1}K+
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500 text-sm" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Trusted by 10,000+ researchers</p>
                  </div>
                </div>
              </motion.div>

              {/* Right column - Real-Time Metrics Dashboard */}
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Real-Time Conversion Metrics</span>
                    </div>
                    <FaSync className="text-primary animate-spin" />
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {realtimeMetrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                        className={`${
                          activeMetric === index ? "bg-surface-container-high ring-2 ring-primary" : "bg-surface-container-low"
                        } p-4 transition-all duration-300`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-2xl text-primary">{metric.icon}</div>
                          <span className={`text-xs font-mono font-semibold ${
                            metric.change.startsWith("+") ? "text-green-600" : "text-red-600"
                          }`}>
                            {metric.change}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-on-surface-variant font-mono uppercase tracking-wider">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Real-Time Survey Stats */}
                  <div className="bg-surface-container-low p-4 rounded-xl mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Real-Time Survey Stats</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Completion Rate</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "87%" }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-primary"
                            />
                          </div>
                          <span className="text-xs font-semibold text-gray-700">87%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Response Quality</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "94%" }}
                              transition={{ duration: 1, delay: 0.7 }}
                              className="h-full bg-primary"
                            />
                          </div>
                          <span className="text-xs font-semibold text-gray-700">94%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">AI Confidence</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "98%" }}
                              transition={{ duration: 1, delay: 0.9 }}
                              className="h-full bg-primary-dim"
                            />
                          </div>
                          <span className="text-xs font-semibold text-gray-700">98%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Processing Indicator */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="bg-primary text-white p-3 rounded-lg flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <FaBrain className="text-xl" />
                      <div>
                        <div className="text-sm font-semibold">AI Engine Active</div>
                        <div className="text-xs opacity-90">Processing 125K data points/sec</div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  LIVE
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
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
                <span className="text-sm font-medium text-gray-700">Powered by Advanced AI</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                AI Technology That <span className="text-primary-dim">Drives Results</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proprietary AI models analyze billions of data points to deliver insights that matter
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className={`w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{feature.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-primary">{feature.metric}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Interactive Cards */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-surface-container border border-outline-variant/30 px-4 py-2 mb-4"
              >
                <FaChartLine className="text-primary" />
                <span className="text-sm font-medium text-gray-700">Comprehensive Research Solutions</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Everything You Need for <span className="text-primary-dim">Market Research</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From surveys to advanced analytics, we provide the complete toolkit for understanding your market
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-white mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dim transition-colors"
                  >
                    Learn more <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Management Features Section */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-surface-container border border-outline-variant/30 px-4 py-2 mb-4"
              >
                <FaCogs className="text-green-600" />
                <span className="text-sm font-medium text-gray-700">Complete Research Platform</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Streamlined <span className="text-primary-dim">Research Management</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage research projects from start to finish
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementFeatures.map((feature, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-surface-container rounded-xl flex items-center justify-center text-primary mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Data Analysis Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center space-x-2 bg-surface-container border border-outline-variant/30 px-4 py-2 mb-4"
                  >
                    <FaMicroscope className="text-primary-dim" />
                    <span className="text-sm font-medium text-gray-700">Quality Data Analysis</span>
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                    Transform Data into <span className="text-primary-dim">Actionable Insights</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Our AI-powered analysis engine ensures you get the highest quality insights from your research data
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FaDatabase />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Automated Data Cleaning</h3>
                        <p className="text-gray-600">AI algorithms automatically detect and fix data quality issues, ensuring 99.9% accuracy</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-dim rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <HiLightningBolt />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Real-Time Processing</h3>
                        <p className="text-gray-600">Process millions of responses instantly with our distributed computing infrastructure</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FaChartBar />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Advanced Visualization</h3>
                        <p className="text-gray-600">Interactive dashboards that make complex data easy to understand and act upon</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-surface-container-low rounded-2xl p-8"
                  >
                    {/* Data Quality Metrics */}
                    <h3 className="text-lg font-semibold text-primary mb-6">Data Quality Metrics</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-600">Data Completeness</span>
                          <span className="text-sm font-semibold text-primary">99.7%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "99.7%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-600">Response Validity</span>
                          <span className="text-sm font-semibold text-primary">98.5%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "98.5%" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="h-full bg-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-600">Statistical Significance</span>
                          <span className="text-sm font-semibold text-primary">95.2%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "95.2%" }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="h-full bg-primary-dim"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-600">AI Confidence Score</span>
                          <span className="text-sm font-semibold text-primary">97.8%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "97.8%" }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="h-full bg-primary-dim"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Processing Status */}
                    <div className="mt-8 bg-white rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                          <FaServer />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-primary">Processing Status</div>
                          <div className="text-xs text-gray-600">125,432 records analyzed</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">Active</span>
                      </div>
                                    </div>
                  </motion.div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  >
                    AI-Powered
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* Integration Partners Section */}
      {/* <section className="py-20 bg-white"> */}
        {/* <div className="container mx-auto px-4"> */}
          {/* <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-surface-container px-4 py-2 rounded-full mb-4"
              >
                <FaNetworkWired className="text-green-600" />
                <span className="text-sm font-medium text-gray-700">Seamless Integrations</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Works With Your <span className="text-primary">Favorite Tools</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with 100+ platforms to streamline your research workflow
              </p>
            </div>
          </AnimatedSection> */}

          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Salesforce", icon: "SF" },
              { name: "HubSpot", icon: "HS" },
              { name: "Slack", icon: "SL" },
              { name: "Microsoft", icon: "MS" },
              { name: "Google", icon: "G" },
              { name: "Tableau", icon: "TB" },
              { name: "PowerBI", icon: "PB" },
              { name: "Zapier", icon: "ZP" },
              { name: "Mailchimp", icon: "MC" },
              { name: "Segment", icon: "SG" },
              { name: "Mixpanel", icon: "MP" },
              { name: "Amplitude", icon: "AM" },
            ].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mx-auto mb-2 font-bold text-gray-700">
                    {partner.icon}
                  </div>
                  <p className="text-xs text-gray-600">{partner.name}</p>
                </div>
              </motion.div>
            ))}
          </div> */}
        {/* </div> */}
      {/* </section> */}

      {/* Pricing Preview Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Simple, Transparent <span className="text-primary">Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your research needs. Scale up or down anytime.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="bg-surface-container-low p-8 md:p-12 rounded-3xl border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <FaClipboardList className="text-4xl text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-primary">Starter</h3>
                  <p className="text-3xl font-bold text-primary mb-1">$299<span className="text-lg text-gray-600">/mo</span></p>
                  <p className="text-sm text-gray-600">Perfect for small teams</p>
                </div>
                
                <div className="text-center border-l border-r border-gray-300 px-4">
                  <FaChartLine className="text-4xl text-primary-dim mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-primary">Professional</h3>
                  <p className="text-3xl font-bold text-primary mb-1">$999<span className="text-lg text-gray-600">/mo</span></p>
                  <p className="text-sm text-gray-600">Most popular choice</p>
                </div>
                
                <div className="text-center">
                  <FaRocket className="text-4xl text-pink-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-primary">Enterprise</h3>
                  <p className="text-3xl font-bold text-primary mb-1">Custom</p>
                  <p className="text-sm text-gray-600">Tailored solutions</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link
                  to="/pricing"
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dim transition-colors"
                >
                  View detailed pricing <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
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

              <h2 className="text-5xl md:text-6xl font-headline font-extrabold mb-6 text-white tracking-tighter uppercase">
                Start Making <span className="text-slate-400">Data-Driven Decisions</span> Today
              </h2>

              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Join 10,000+ companies using our AI-powered platform to understand their markets better
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center space-x-2 bg-white text-[#0B132B] px-8 py-4 font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:bg-slate-200 transition-all duration-300"
                  >
                    <span>Start Free Trial</span>
                    <FaArrowRight />
                  </Link>
                </motion.div>

                {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 border-2 border-white/30 text-white px-8 py-4 font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Talk to Sales</span>
                  </Link>
                </motion.div> */}
              </div>

              {/* <div className="flex items-center justify-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle />
                  <span className="text-sm">No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle />
                  <span className="text-sm">14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle />
                  <span className="text-sm">Cancel anytime</span>
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

      {/* Quick Stats Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 z-30 hidden lg:block"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">System Status: <span className="font-semibold text-green-600">All Systems Operational</span></span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-gray-500 text-sm" />
                <span className="text-sm text-gray-600">Last Update: <span className="font-semibold">2 seconds ago</span></span>
              </div>
              <div className="flex items-center space-x-2">
                <FaDatabase className="text-gray-500 text-sm" />
                <span className="text-sm text-gray-600">Data Points: <span className="font-semibold">125K/sec</span></span>
              </div>
            </div>
            <button
              onClick={() => document.querySelector('.fixed.bottom-0').style.display = 'none'}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;