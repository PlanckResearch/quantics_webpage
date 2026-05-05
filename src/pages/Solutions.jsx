import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import {
  FaChartLine,
  FaBrain,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaLightbulb,
  FaCogs,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaDesktop,
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
  FaDownload,
  FaTrophy,
  FaInfinity,
  FaClock,
  FaLock,
  FaPuzzlePiece,
  FaChartBar,
  FaNetworkWired,
  FaQuoteLeft,
  FaStar,
  FaAward,
  FaHandshake,
  FaIndustry,
  FaShoppingCart,
  FaHeartbeat,
  FaGraduationCap,
  FaMicrochip,
  FaUserTie,
  FaStore,
  FaPoll,
  FaRobot,
  FaLayerGroup,
  FaBullseye,
  FaChartPie,
} from "react-icons/fa";
import { HiTrendingUp, HiLightningBolt, HiSparkles, HiChip } from "react-icons/hi";
import { SiTensorflow, SiPytorch, SiOpenai } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState("industry");
  const [hoveredCard, setHoveredCard] = useState(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Solution categories
  const solutionCategories = [
    { id: "industry", name: "By Industry", icon: <FaIndustry /> },
    { id: "usecase", name: "By Use Case", icon: <FaBullseye /> },
    { id: "technology", name: "By Technology", icon: <FaMicrochip /> },
    { id: "role", name: "By Role", icon: <FaUserTie /> },
  ];

  // Industry Solutions
  const industrySolutions = [
    {
      icon: <FaShoppingCart className="text-4xl" />,
      title: "Retail & E-commerce",
      description: "AI-powered consumer behavior analysis and predictive shopping trends",
      features: [
        "Customer journey mapping",
        "Purchase pattern prediction",
        "Inventory optimization AI",
        "Dynamic pricing intelligence"
      ],
      stats: { accuracy: "94%", insights: "Real-time", data: "100K+" },
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaHeartbeat className="text-4xl" />,
      title: "Healthcare & Pharma",
      description: "Patient insights and treatment effectiveness analysis",
      features: [
        "Patient sentiment analysis",
        "Drug efficacy research",
        "Healthcare trend prediction",
        "Compliance monitoring"
      ],
      stats: { compliance: "100%", accuracy: "97%", speed: "10x" },
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Education & EdTech",
      description: "Student engagement and learning outcome optimization",
      features: [
        "Learning pattern analysis",
        "Course effectiveness metrics",
        "Student success prediction",
        "Curriculum optimization"
      ],
      stats: { engagement: "+45%", retention: "89%", insights: "Daily" },
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <FaStore className="text-4xl" />,
      title: "FMCG & Consumer Goods",
      description: "Brand perception and market share intelligence",
      features: [
        "Brand health monitoring",
        "Competitor benchmarking",
        "Product launch insights",
        "Distribution optimization"
      ],
      stats: { markets: "50+", brands: "50+", accuracy: "95%" },
      color: "from-green-500 to-emerald-500",
    },
  ];

  // Use Case Solutions
  const useCaseSolutions = [
    {
      icon: <FaPoll className="text-4xl" />,
      title: "Customer Experience Research",
      description: "Deep dive into customer satisfaction and loyalty drivers",
      features: [
        "NPS & CSAT analysis",
        "Voice of customer AI",
        "Churn prediction models",
        "Experience optimization"
      ],
      aiFeatures: ["Sentiment analysis", "Predictive modeling", "Real-time alerts"],
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: <FaChartPie className="text-4xl" />,
      title: "Market Segmentation",
      description: "AI-driven customer segmentation and persona development",
      features: [
        "Behavioral clustering",
        "Demographic analysis",
        "Psychographic profiling",
        "Dynamic segmentation"
      ],
      aiFeatures: ["Machine learning clusters", "Automated personas", "Segment evolution"],
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Product Development",
      description: "Innovation insights and concept testing powered by AI",
      features: [
        "Concept validation",
        "Feature prioritization",
        "Market fit analysis",
        "Launch readiness"
      ],
      aiFeatures: ["Predictive success scoring", "Feature impact analysis", "Risk assessment"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FaBullseye className="text-4xl" />,
      title: "Brand Tracking",
      description: "Continuous brand health monitoring across channels",
      features: [
        "Brand perception tracking",
        "Social sentiment analysis",
        "Competitive positioning",
        "Campaign effectiveness"
      ],
      aiFeatures: ["Real-time monitoring", "Trend prediction", "Alert systems"],
      color: "from-pink-500 to-rose-500",
    },
  ];

  // Technology Solutions
  const technologySolutions = [
    {
      icon: <SiTensorflow className="text-4xl" />,
      title: "Deep Learning Models",
      description: "Neural networks for complex market pattern recognition",
      capabilities: [
        "Computer vision for retail analytics",
        "NLP for review analysis",
        "Time series forecasting",
        "Anomaly detection"
      ],
      specs: { models: "50+", accuracy: "99.9%", processing: "Real-time" },
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "Automated Research Bots",
      description: "AI agents that conduct research 24/7",
      capabilities: [
        "Auto survey deployment",
        "Data collection bots",
        "Report generation AI",
        "Insight extraction"
      ],
      specs: { automation: "95%", speed: "100x", availability: "24/7" },
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <BiNetworkChart className="text-4xl" />,
      title: "Predictive Analytics Engine",
      description: "Forecast market trends with machine learning",
      capabilities: [
        "Demand forecasting",
        "Trend prediction",
        "Risk modeling",
        "Scenario planning"
      ],
      specs: { horizon: "12mo", confidence: "95%", models: "200+" },
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <FaLayerGroup className="text-4xl" />,
      title: "Integration Hub",
      description: "Connect all your data sources with AI orchestration",
      capabilities: [
        "100+ native integrations",
        "API management",
        "Data pipeline automation",
        "Real-time sync"
      ],
      specs: { integrations: "100+", uptime: "99.99%", latency: "<100ms" },
      color: "from-purple-500 to-pink-500",
    },
  ];

  // Role-based Solutions
  const roleSolutions = [
    {
      icon: <FaUserTie className="text-4xl" />,
      title: "For CMOs & Marketing Leaders",
      description: "Strategic insights for marketing excellence",
      benefits: [
        "Campaign ROI optimization",
        "Customer acquisition insights",
        "Brand performance tracking",
        "Competitive intelligence"
      ],
            tools: ["Executive dashboards", "Strategy recommendations", "Market forecasts"],
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <FaChartBar className="text-4xl" />,
      title: "For Research Analysts",
      description: "Advanced tools for deep market analysis",
      benefits: [
        "Automated data collection",
        "Statistical analysis tools",
        "Report automation",
        "Collaboration features"
      ],
      tools: ["Python/R integration", "Custom models", "Data visualization"],
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: "For Product Managers",
      description: "User insights for better product decisions",
      benefits: [
        "Feature prioritization",
        "User feedback analysis",
        "Market opportunity sizing",
        "Launch planning insights"
      ],
      tools: ["User research tools", "A/B testing", "Roadmap analytics"],
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: "For Operations Teams",
      description: "Optimize processes with data-driven insights",
      benefits: [
        "Process optimization",
        "Customer journey mapping",
        "Efficiency analytics",
        "Resource planning"
      ],
      tools: ["Workflow automation", "Performance metrics", "Predictive maintenance"],
      color: "from-orange-600 to-red-600",
    },
  ];

  // AI Capabilities
  const aiCapabilities = [
    {
      icon: <HiChip className="text-3xl" />,
      title: "Neural Processing",
      description: "1M+ parameters processing complex patterns",
      metric: "99.9%"
    },
    {
      icon: <HiLightningBolt className="text-3xl" />,
      title: "Real-time Analysis",
      description: "Instant insights from streaming data",
      metric: "<100ms"
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Self-Learning AI",
      description: "Continuously improving accuracy",
      metric: "24/7"
    },
    {
      icon: <FaInfinity className="text-3xl" />,
      title: "Scalable Architecture",
      description: "From startup to enterprise scale",
      metric: "∞"
    }
  ];

  const getCurrentSolutions = () => {
    switch (selectedSolution) {
      case "industry":
        return industrySolutions;
      case "usecase":
        return useCaseSolutions;
      case "technology":
        return technologySolutions;
      case "role":
        return roleSolutions;
      default:
        return industrySolutions;
    }
  };

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
              <span className="text-sm font-medium text-gray-700">AI-Powered Solutions for Every Need</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
              Tailored <span className="text-primary-dim">AI Solutions</span> for Your Industry
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
              Leverage cutting-edge AI technology designed specifically for your industry, use case, and role
            </p>

            {/* Solution Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {solutionCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSolution(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 font-mono text-[11px] tracking-[0.15em] uppercase font-bold transition-all ${
                    selectedSolution === category.id 
                      ? "bg-primary text-white" 
                      : "bg-surface-container-low border border-outline-variant/30 text-on-surface hover:border-primary/40 hover:shadow-md"
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Solutions Grid */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedSolution} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {getCurrentSolutions().map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-white mb-4`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{solution.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{solution.description}</p>
                    
                    {/* Features/Benefits List */}
                    <ul className="space-y-2 mb-4">
                      {(solution.features || solution.capabilities || solution.benefits || []).slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Stats or Metrics */}
                    {(solution.stats || solution.specs) && (
                      <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-gray-100">
                        {Object.entries(solution.stats || solution.specs).slice(0, 3).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                                                        <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Additional info for specific solution types */}
                    {solution.tools && (
                      <div className="text-xs text-gray-500 mb-4">
                        <span className="font-semibold">Tools: </span>
                        {solution.tools.join(", ")}
                      </div>
                    )}

                    {solution.aiFeatures && (
                      <div className="text-xs text-gray-500 mb-4">
                        <span className="font-semibold">AI Features: </span>
                        {solution.aiFeatures.join(", ")}
                      </div>
                    )}

                    <Link
                      to="/demo"
                      className="inline-flex items-center text-primary font-medium hover:text-primary-dim transition-colors"
                    >
                      Learn more <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* AI Capabilities Section */}
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
                AI Technology That <span className="text-primary-dim">Powers Every Solution</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI infrastructure adapts to your specific needs, delivering insights that matter
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => (
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

      {/* Implementation Process */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Simple <span className="text-primary-dim">Implementation Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with your AI-powered solution in minutes, not months
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-outline-variant"></div>
              
              {[
                {
                  number: "01",
                  title: "Discover Your Needs",
                  description: "AI analyzes your requirements and recommends the perfect solution",
                  icon: <FaLightbulb />,
                  duration: "5 minutes"
                },
                {
                  number: "02",
                  title: "Custom Configuration",
                  description: "Our AI configures the platform for your specific use case",
                  icon: <FaCogs />,
                  duration: "Automated"
                },
                {
                  number: "03",
                  title: "Seamless Integration",
                  description: "Connect your data sources with intelligent mapping",
                  icon: <FaNetworkWired />,
                  duration: "1 hour"
                },
                {
                  number: "04",
                  title: "Start Getting Insights",
                  description: "AI begins generating actionable insights immediately",
                  icon: <FaChartLine />,
                  duration: "Instant"
                }
              ].map((step, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                      >
                        <div className="flex items-center space-x-4 mb-3">
                          {index % 2 !== 0 && (
                            <div className="text-3xl text-primary">{step.icon}</div>
                          )}
                          <div className={`flex-1 ${index % 2 === 0 ? "text-right" : ""}`}>
                            <span className="text-4xl font-bold text-primary-dim">
                              {step.number}
                            </span>
                            <h3 className="text-xl font-semibold text-primary mt-2">{step.title}</h3>
                          </div>
                          {index % 2 === 0 && (
                            <div className="text-3xl text-primary-dim">{step.icon}</div>
                          )}
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                        <div className="mt-3 text-sm text-primary font-medium">{step.duration}</div>
                      </motion.div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-full border-4 border-white shadow-lg z-10"></div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section ref={statsRef} className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Solutions That <span className="text-primary-dim">Deliver Results</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered solutions consistently outperform traditional methods
              </p>
            </div>
          </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.1 }} className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{statsInView && <CountUp end={98} duration={2} suffix="%" />}</div>
              <p className="text-gray-600">Accuracy Rate</p>
            </motion.div>

            <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.2 }} className="text-center">
              <div className="text-5xl font-bold text-primary-dim mb-2">{statsInView && <CountUp end={10} duration={2} suffix="x" />}</div>
              <p className="text-gray-600">Faster Insights</p>
            </motion.div>

            <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.3 }} className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{statsInView && <CountUp end={45} duration={2} suffix="%" />}</div>
              <p className="text-gray-600">Cost Reduction</p>
            </motion.div>

            <motion.div initial={{ scale: 0 }} animate={statsInView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.4 }} className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{statsInView && <CountUp end={24} duration={2} suffix="/7" />}</div>
              <p className="text-gray-600">AI Availability</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      {/* <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-surface-container border border-outline-variant/30 px-4 py-2 mb-4"
              >
                <FaNetworkWired className="text-green-600" />
                <span className="text-sm font-medium text-gray-700">Seamless Integration</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Connects with Your <span className="text-primary-dim">Entire Tech Stack</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI seamlessly integrates with 100+ platforms to unify your data
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {[
              "Salesforce", "HubSpot", "Slack", "Microsoft", "Google", "Tableau",
              "PowerBI", "Zapier", "Mailchimp", "Segment", "Mixpanel", "Amplitude"
            ].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mx-auto mb-2 font-bold text-gray-700">
                    {partner.slice(0, 2).toUpperCase()}
                  </div>
                  <p className="text-xs text-gray-600">{partner}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

           {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Frequently Asked <span className="text-primary-dim">Questions</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How does the AI adapt to my specific industry?",
                answer: "Our AI models are pre-trained on industry-specific data and continuously learn from your usage patterns. The system automatically adjusts algorithms, metrics, and insights based on your industry's unique requirements."
              },
              {
                question: "Can I customize the AI models for my use case?",
                answer: "Yes! Our platform allows you to configure AI models to match your specific needs. You can adjust parameters, add custom data sources, and even integrate proprietary algorithms."
              },
              {
                question: "How quickly can I see results?",
                answer: "Most clients see initial insights within hours of setup. The AI begins learning immediately and provides increasingly accurate predictions within the first week of use."
              },
              {
                question: "Is my data secure with AI processing?",
                answer: "Absolutely. We use bank-level encryption, SOC 2 Type II compliance, and ensure all AI processing happens within secure environments. Your data never leaves our encrypted infrastructure."
              },
              {
                question: "Can the AI handle multiple languages and regions?",
                answer: "Yes, our NLP engine supports 40+ languages and can analyze data from any region. The AI automatically detects languages and applies region-specific analysis models."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <details className="bg-gray-50 p-6 rounded-2xl group cursor-pointer">
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

              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Ready to Transform Your <span className="text-yellow-300">Research with AI?</span>
              </h2>

              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Join thousands of companies using our AI-powered solutions to make smarter, faster decisions
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

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 border-2 border-white/30 text-white px-8 py-4 font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Talk to an Expert</span>
                  </Link>
                </motion.div>
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
                  <span className="text-sm">AI-powered setup</span>
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

export default Solutions;