import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import {
  FaChartLine,
  FaUsers,
  FaBrain,
  FaGlobe,
  FaRocket,
  FaShieldAlt,
  FaDatabase,
  FaChartBar,
  FaSearchLocation,
  FaLightbulb,
  FaNetworkWired,
  FaCogs,
  FaChartPie,
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
  FaDownload,
  FaCode,
  FaCloud,
  FaMobile,
  FaDesktop,
  FaClock,
  FaInfinity,
  FaLock,
  FaStar,
  FaAward,
  FaPoll,
  FaSearchDollar,
  FaFileAlt,
  FaMicroscope,
  FaUsersCog,
  FaClipboardList,
  FaRobot,
  FaSyncAlt,
  FaServer,
} from "react-icons/fa";
import { HiTrendingUp, HiLightningBolt, HiSparkles, HiChip } from "react-icons/hi";
import { SiTensorflow, SiPytorch, SiOpenai } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  // Main service categories matching homepage style
  const mainServices = [
    {
      id: 1,
      icon: <FaPoll className="text-4xl" />,
      title: "Surveys & Polling",
      shortDesc: "AI-powered surveys that capture deep consumer insights",
      description: "Create intelligent surveys with dynamic questioning, real-time analysis, and predictive insights. Our AI adapts questions based on responses for maximum data quality.",
      features: [
        "AI-powered dynamic questions",
        "Real-time response analysis",
        "Multi-channel distribution",
        "Sentiment analysis",
        "Predictive modeling",
        "Automated reporting"
      ],
      stats: {
        accuracy: "95%",
        responses: "100K+",
        completion: "87%"
      },
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      id: 2,
      icon: <FaChartPie className="text-4xl" />,
      title: "Consumer Analytics",
      shortDesc: "Understand your audience with behavioral analytics",
      description: "Deep dive into consumer behavior patterns, preferences, and purchase journeys. Build detailed personas and predict future behaviors with machine learning.",
      features: [
        "Behavioral pattern recognition",
        "Journey mapping & analysis",
        "Persona development",
        "Cohort analysis",
        "Churn prediction",
        "Lifetime value modeling"
      ],
      stats: {
        insights: "3.5x",
        accuracy: "92%",
        segments: "50+"
      },
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      id: 3,
      icon: <FaSearchDollar className="text-4xl" />,
      title: "Competitor Analysis",
      shortDesc: "Track competitors with real-time intelligence",
      description: "Monitor competitor strategies, pricing, and market movements in real-time. Get alerts on important changes and identify opportunities before others.",
      features: [
        "Real-time monitoring",
        "Pricing intelligence",
        "Product tracking",
        "Marketing analysis",
        "Patent monitoring",
        "Strategic alerts"
      ],
      stats: {
        coverage: "24/7",
        markets: "50+",
        alerts: "<5min"
      },
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },
    {
      id: 4,
      icon: <FaFileAlt className="text-4xl" />,
      title: "Industry Reports",
      shortDesc: "Comprehensive reports powered by AI insights",
      description: "Access detailed industry analysis, market forecasts, and trend reports. Our AI analyzes millions of data points to deliver actionable intelligence.",
      features: [
        "Custom report generation",
        "Quarterly market updates",
        "Trend forecasting",
        "Risk assessment",
        "Opportunity mapping",
        "Expert commentary"
      ],
      stats: {
        reports: "100+",
        data: "500K+",
        accuracy: "94%"
      },
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
  ];

  // AI Technology Stack
  const aiCapabilities = [
    {
      icon: <SiTensorflow className="text-3xl" />,
      title: "Deep Learning",
      description: "Neural networks for complex pattern recognition",
      metric: "99.9% accuracy"
    },
    {
      icon: <BiNetworkChart className="text-3xl" />,
      title: "Predictive AI",
      description: "Forecast trends with machine learning",
      metric: "12mo horizon"
    },
    {
      icon: <HiChip className="text-3xl" />,
      title: "NLP Engine",
      description: "Process text in 40+ languages",
      metric: "Real-time"
    },
    {
      icon: <FaRobot className="text-3xl" />,
      title: "AutoML",
      description: "Self-optimizing algorithms",
      metric: "24/7 learning"
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Data Collection",
      description: "Gather data from multiple sources with AI validation",
      icon: <FaDatabase />,
      duration: "Real-time"
    },
    {
      number: "02",
      title: "AI Processing",
      description: "Machine learning algorithms analyze and enrich data",
      icon: <FaBrain />,
      duration: "< 1 second"
    },
    {
      number: "03",
      title: "Insight Generation",
      description: "Generate actionable insights and recommendations",
      icon: <FaLightbulb />,
      duration: "Instant"
    },
    {
      number: "04",
      title: "Continuous Learning",
      description: "AI models improve with every interaction",
      icon: <FaSyncAlt />,
      duration: "Always"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-surface overflow-hidden">
      <ParticleBackground />

      {/* Hero Section - Matching Homepage Style */}
      <section className="relative py-20 bg-surface">
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 bg-surface-container rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-surface-container rounded-full blur-3xl opacity-30"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-surface-container-low border border-outline-variant/30 px-4 py-2 mb-6"
            >
              <HiSparkles className="text-primary-dim" />
              <span className="text-sm font-medium text-gray-700">AI-Powered Market Research Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
              Transform Data into <span className="text-primary-dim">Competitive Advantage</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Leverage cutting-edge AI technology to unlock market insights that drive growth and innovation
            </p>

                       {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-primary/30 px-8 py-4 text-primary font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <span>Talk to Sales</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid - Enhanced with Homepage Style */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-surface-container border border-outline-variant/30 px-4 py-2 mb-4"
              >
                <FaChartLine className="text-green-600" />
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
            {mainServices.map((service, index) => (
              <AnimatedSection key={service.id}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100"
                >
                  {/* Animated background gradient on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === service.id ? 0.1 : 0 }}
                    className={`absolute inset-0 bg-surface-container-low rounded-2xl`}
                  />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-white mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{service.shortDesc}</p>
                    
                    {/* Stats Preview */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Object.entries(service.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to="/demo"
                      className="inline-flex items-center text-primary font-medium hover:text-primary-dim transition-colors"
                    >
                      Learn more <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
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

      {/* Interactive Process Timeline */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                How Our <span className="text-primary-dim">AI Works</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From data collection to actionable insights in milliseconds
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-outline-variant"></div>
              
              {processSteps.map((step, index) => (
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

      {/* Real-time Metrics Dashboard */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="p-8 bg-primary text-white">
                  <h2 className="text-3xl font-bold mb-2">Real-Time Performance Metrics</h2>
                  <p className="text-blue-100">See how our AI processes and delivers insights</p>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                      { label: "Data Points/Sec", value: "125K", change: "+18%", icon: <FaDatabase /> },
                      { label: "AI Accuracy", value: "99.9%", change: "+2.1%", icon: <FaBrain /> },
                      { label: "Response Time", value: "<100ms", change: "-15%", icon: <FaClock /> },
                      { label: "Active Models", value: "247", change: "+12", icon: <FaServer /> },
                    ].map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 * index, type: "spring" }}
                        className="bg-surface-container-low p-6 rounded-xl"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-2xl text-primary">{metric.icon}</div>
                          <span className={`text-sm font-semibold ${
                            metric.change.startsWith("+") ? "text-green-600" : "text-red-600"
                          }`}>
                            {metric.change}
                          </span>
                        </div>
                        <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Live Activity Feed */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4 text-primary">Live Processing Activity</h3>
                    <div className="space-y-3">
                      {[
                        { action: "Survey completed", detail: "Consumer Electronics Study", time: "2s ago", icon: <FaPoll /> },
                        { action: "AI insight generated", detail: "Market trend detected", time: "5s ago", icon: <FaBrain /> },
                        { action: "Report published", detail: "Q4 Industry Analysis", time: "1m ago", icon: <FaFileAlt /> },
                        { action: "Data synchronized", detail: "150K new responses", time: "2m ago", icon: <FaDatabase /> },
                      ].map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-4 p-3 bg-white rounded-lg"
                        >
                          <div className="text-primary">{activity.icon}</div>
                          <div className="flex-1">
                            <div className="font-medium text-primary">{activity.action}</div>
                            <div className="text-sm text-gray-600">{activity.detail}</div>
                          </div>
                          <div className="text-xs text-gray-500">{activity.time}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Preview */}
      {/* <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Simple, Transparent <span className="text-primary-dim">Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your research needs. Scale up or down anytime.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$299",
                  period: "/month",
                  description: "Perfect for small teams",
                  features: [
                    "Up to 1,000 survey responses",
                    "Basic analytics dashboard",
                    "Email support",
                    "5 team members",
                    "API access"
                  ],
                  cta: "Start Free Trial",
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$999",
                  period: "/month",
                  description: "Most popular for growing companies",
                  features: [
                    "Up to 10,000 survey responses",
                    "Advanced AI analytics",
                    "Priority support",
                    "Unlimited team members",
                    "Custom integrations",
                    "White-label options"
                  ],
                  cta: "Start Free Trial",
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "Tailored for large organizations",
                  features: [
                    "Unlimited survey responses",
                    "Dedicated AI models",
                    "24/7 phone support",
                    "Custom deployment",
                    "SLA guarantee",
                    "Training & onboarding"
                  ],
                  cta: "Contact Sales",
                  popular: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? "border-2 border-blue-600" : "border border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 text-sm font-mono uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                      <span className="text-lg text-gray-600">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-full font-medium transition-all ${
                      plan.popular
                        ? "bg-primary text-white hover:shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Integration Partners */}
      {/* <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-surface-container border border-outline-variant/30 px-4 py-2 mb-4"
              >
                <FaNetworkWired className="text-green-600" />
                <span className="text-sm font-medium text-gray-700">Seamless Integrations</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Works With Your <span className="text-primary-dim">Favorite Tools</span>
              </h2>
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
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300"
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

      {/* Final CTA */}
      

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
                question: "How quickly can I get started?",
                answer: "You can start collecting data within minutes. Our AI-powered setup wizard guides you through creating your first survey or analysis in under 5 minutes."
              },
              {
                question: "What makes your AI different?",
                answer: "Our proprietary AI models are trained on billions of market research data points and continuously learn from new data. This enables 99.9% accuracy and insights you won't find elsewhere."
              },
              {
                question: "Can I integrate with my existing tools?",
                answer: "Yes! We offer 100+ native integrations and a robust API. Connect with Salesforce, HubSpot, Tableau, and more in just a few clicks."
              },
              {
                question: "How secure is my data?",
                answer: "We use bank-level encryption and are SOC 2 Type II certified. Your data is encrypted at rest and in transit, with regular security audits."
              },
              {
                question: "What support do you offer?",
                answer: "All plans include email support. Professional plans get priority support, and Enterprise customers receive 24/7 phone support with dedicated success managers."
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
                Ready to Transform Your <span className="text-yellow-300">Research Process?</span>
              </h2>

              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Join 10,000+ companies using our AI-powered platform to make smarter decisions faster
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
                    <span>Schedule Demo</span>
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
    </div>
  );
};

export default Services;