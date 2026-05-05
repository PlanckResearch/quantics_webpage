import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaIndustry,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaChartLine,
  FaLightbulb,
  FaRocket,
  FaCalendar,
  FaClock,
  FaGlobe,
  FaShieldAlt,
  FaBrain,
  FaChartBar,
  FaPlay,
  FaQuoteLeft,
  FaStar,
  FaPoll,
  FaChartPie,
  FaSearchDollar,
  FaFileAlt,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    industry: "",
    companySize: "",
    interests: [],
    preferredDate: "",
    preferredTime: "",
    timezone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState("live");

  // Demo types matching services
  const demoTypes = [
    {
      id: "live",
      title: "Live Platform Demo",
      description: "Experience our AI-powered platform with real-time data",
      icon: <FaChartLine />,
      duration: "30 min",
      features: ["Live data analysis", "AI insights in action", "Custom dashboards"],
    },
    {
      id: "industry",
      title: "Industry-Specific Demo",
      description: "See how our solution works for your industry",
      icon: <FaIndustry />,
      duration: "45 min",
      features: ["Industry benchmarks", "Use case examples", "ROI calculator"],
    },
    {
      id: "custom",
      title: "Custom Solution Demo",
      description: "Tailored demonstration based on your needs",
      icon: <FaLightbulb />,
      duration: "60 min",
      features: ["Personalized scenarios", "Integration options", "Custom pricing"],
    },
  ];

  const industries = [
    "Retail & E-commerce",
    "Healthcare & Life Sciences",
    "Financial Services",
    "Technology & Software",
    "Manufacturing & Industrial",
    "Education & EdTech",
    "Other",
  ];

  const companySizes = [
    "Startup (1-50)",
    "Small Business (51-200)", 
    "Mid-Market (201-1000)",
    "Enterprise (1000+)",
  ];

  const interests = [
    "Surveys & Polling",
    "Consumer Analytics",
    "Competitor Analysis",
    "Industry Reports",
    "AI-Powered Insights",
    "Real-time Data",
    "Custom Solutions",
  ];

  const timezones = [
    "PST (Pacific Time)",
    "CST (Central Time)",
    "EST (Eastern Time)",
    "GMT (London)",
    "CET (Central Europe)",
    "IST (India)",
    "AEST (Australia)",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayToggle = (item) => {
    const updatedInterests = formData.interests.includes(item)
      ? formData.interests.filter((i) => i !== item)
      : [...formData.interests, item];
    setFormData({ ...formData, interests: updatedInterests });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };



  // Success Screen
  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-surface">
        <ParticleBackground />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          className="text-center max-w-2xl mx-auto px-4"
        >
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: "spring", delay: 0.2 }} 
            className="text-7xl text-green-500 mb-8 inline-block"
          >
            <FaCheckCircle />
          </motion.div>

          <h2 className="text-5xl font-bold mb-6 text-primary">Demo Scheduled!</h2>
          <p className="text-xl text-gray-700 mb-8">
            Thank you, {formData.firstName}! We've confirmed your demo for:
          </p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4 }} 
            className="bg-white shadow-lg p-6 rounded-2xl mb-8 border border-gray-100"
          >
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <FaCalendar className="text-primary" />
                <span className="text-gray-700">{new Date(formData.preferredDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-primary-dim" />
                <span className="text-gray-700">{formData.preferredTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-green-600" />
                <span className="text-gray-700">{formData.timezone}</span>
              </div>
            </div>
          </motion.div>

          <p className="text-gray-600 mb-8">
            A calendar invite has been sent to {formData.email}
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
            >
              <span>Back to Home</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-surface overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-surface-container-low border border-outline-variant/30 px-4 py-2 mb-6"
          >
            <HiSparkles className="text-primary-dim" />
            <span className="text-sm font-medium text-gray-700">Experience AI-Powered Market Research</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase"
          >
            See the Platform in <span className="text-primary-dim">Action</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }} 
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Get a personalized walkthrough of our AI-powered platform tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Demo Types */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Choose Your <span className="text-primary-dim">Demo Experience</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select the demo type that best fits your needs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {demoTypes.map((demo) => (
              <motion.div
                key={demo.id}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedDemo(demo.id)}
                className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 border-2 ${
                  selectedDemo === demo.id ? "border-blue-600" : "border-gray-100"
                }`}
              >
                <div className={`w-16 h-16 rounded-xl bg-primary ${
                  demo.id === 'live' ? 'from-blue-500 to-cyan-500' :
                  demo.id === 'industry' ? 'from-purple-500 to-pink-500' :
                  'from-green-500 to-emerald-500'
                } flex items-center justify-center text-white mb-4`}>
                  {demo.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{demo.title}</h3>
                <p className="text-gray-600 mb-4">{demo.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Duration: {demo.duration}</span>
                  {selectedDemo === demo.id && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-primary-full flex items-center justify-center"
                    >
                      <FaCheckCircle className="text-white text-xs" />
                    </motion.div>
                  )}
                </div>
                <div className="space-y-2">
                  {demo.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* What to Expect */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <FaPoll />,
                title: "Live Survey Demo",
                description: "See real-time data collection"
              },
              {
                icon: <FaChartPie />,
                title: "Analytics Dashboard",
                description: "Interactive data visualization"
              },
              {
                icon: <FaBrain />,
                title: "AI Insights",
                description: "Machine learning in action"
              },
              {
                icon: <FaSearchDollar />,
                title: "ROI Calculator",
                description: "See your potential returns"
              }
            ].map((item, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-xl text-center"
                >
                  <div className="text-3xl text-primary mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Form — Single Step */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-headline font-bold text-primary uppercase tracking-tighter">Schedule Your Demo</h2>
              <p className="text-on-surface-variant mt-2">Fill in your details and we'll set up a personalized walkthrough.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white shadow-xl p-8 border border-outline-variant/30">
              {/* Personal Information */}
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-on-surface-variant mb-4 border-b border-outline-variant/30 pb-2">PERSONAL_INFORMATION</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-on-surface">First Name *</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant/50 px-10 py-3 focus:border-primary transition-colors"
                      placeholder="John" required />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-on-surface">Last Name *</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant/50 px-10 py-3 focus:border-primary transition-colors"
                      placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-on-surface">Email *</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant/50 px-10 py-3 focus:border-primary transition-colors"
                      placeholder="john@company.com" required />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-on-surface">Phone</label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant/50 px-10 py-3 focus:border-primary transition-colors"
                      placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-on-surface-variant mb-4 border-b border-outline-variant/30 pb-2">COMPANY_DETAILS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-on-surface">Company Name *</label>
                  <div className="relative">
                    <FaBuilding className="absolute left-3 top-3.5 text-gray-400" />
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant/50 px-10 py-3 focus:border-primary transition-colors"
                      placeholder="Acme Corporation" required />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-on-surface">Job Title</label>
                  <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange}
                    className="w-full bg-surface-container-low border border-outline-variant/50 px-4 py-3 focus:border-primary transition-colors"
                    placeholder="e.g., Marketing Director" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-on-surface">Industry *</label>
                  <div className="relative">
                    <FaIndustry className="absolute left-3 top-3.5 text-gray-400 z-10" />
                    <select name="industry" value={formData.industry} onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant/50 px-10 py-3 focus:border-primary appearance-none cursor-pointer transition-colors" required>
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (<option key={industry} value={industry}>{industry}</option>))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-on-surface">Company Size</label>
                  <div className="relative">
                    <FaUsers className="absolute left-3 top-3.5 text-gray-400 z-10" />
                    <select name="companySize" value={formData.companySize} onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant/50 px-10 py-3 focus:border-primary appearance-none cursor-pointer transition-colors">
                      <option value="">Select company size</option>
                      {companySizes.map((size) => (<option key={size} value={size}>{size}</option>))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-on-surface-variant mb-4 border-b border-outline-variant/30 pb-2">SCHEDULE_PREFERENCES</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-on-surface">Preferred Date *</label>
                  <div className="relative">
                    <FaCalendar className="absolute left-3 top-3.5 text-gray-400" />
                    <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-surface-container-low border border-outline-variant/50 px-10 py-3 focus:border-primary transition-colors" required />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-on-surface">Preferred Time *</label>
                  <div className="relative">
                    <FaClock className="absolute left-3 top-3.5 text-gray-400 z-10" />
                    <select name="preferredTime" value={formData.preferredTime} onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant/50 px-10 py-3 focus:border-primary appearance-none cursor-pointer transition-colors" required>
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-on-surface">Timezone *</label>
                  <div className="relative">
                    <FaGlobe className="absolute left-3 top-3.5 text-gray-400 z-10" />
                    <select name="timezone" value={formData.timezone} onChange={handleInputChange}
                      className="w-full bg-surface-container-low border border-outline-variant/50 px-10 py-3 focus:border-primary appearance-none cursor-pointer transition-colors" required>
                      <option value="">Select timezone</option>
                      {timezones.map((tz) => (<option key={tz} value={tz}>{tz}</option>))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block mb-2 text-sm font-medium text-on-surface">Additional Information (Optional)</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows="3"
                  className="w-full bg-surface-container-low border border-outline-variant/50 px-4 py-3 focus:border-primary resize-none transition-colors"
                  placeholder="Tell us about your specific needs or questions..."></textarea>
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="bg-primary text-white px-10 py-4 font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:bg-primary-dim transition-all flex items-center space-x-2">
                  <span>SCHEDULE_DEMO</span>
                  <FaCheckCircle />
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Why Schedule a <span className="text-primary-dim">Demo?</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaRocket />,
                title: "Quick Setup",
                description: "See how easy it is to get started",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <FaBrain />,
                title: "AI in Action",
                description: "Experience our AI capabilities live",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <FaChartBar />,
                title: "ROI Calculator",
                description: "Calculate your potential returns",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <FaUsers />,
                title: "Expert Guidance",
                description: "Get answers from our team",
                color: "from-orange-500 to-red-500",
              },
            ].map((benefit, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white shadow-lg p-6 rounded-xl text-center h-full border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 text-primary tracking-tighter uppercase">
                Demo <span className="text-primary-dim">FAQs</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How long is the demo?",
                answer: "Our demos typically last 30-60 minutes depending on your selected type. We ensure there's time for all your questions.",
              },
              {
                question: "Can multiple team members join?",
                answer: "Absolutely! We encourage you to invite key stakeholders. We'll send a calendar invite that can be forwarded to your team.",
              },
              {
                question: "What should I prepare?",
                answer: "Just bring your questions and business challenges. We'll handle everything else and tailor the demo to your needs.",
              },
              {
                question: "Is the demo really free?",
                answer: "Yes, completely free with no obligations. We want you to experience our platform before making any decisions.",
              },
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

      {/* Final CTA */}
      {/* <section className="py-20 relative overflow-hidden bg-[#0B132B]">
        <div className="absolute inset-0 bg-black opacity-10" />
        
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
                Ready to See the <span className="text-yellow-300">Future of Market Research?</span>
              </h2>

              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Join thousands of companies already transforming their research with AI
              </p>

              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 bg-white text-[#0B132B] px-8 py-4 font-mono text-[11px] tracking-[0.15em] font-bold uppercase hover:bg-slate-200 transition-all"
              >
                <span>Schedule Your Demo Now</span>
                <FaArrowRight />
              </motion.button>

              <p className="text-sm text-gray-200 mt-6">No credit card required • Free consultation • Expert guidance</p>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

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
            Need help scheduling?
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Demo;