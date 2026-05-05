import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import { FaShieldAlt, FaLock, FaUserShield, FaDatabase, FaCookie, FaEnvelope, FaGlobe, FaCheckCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "January 1, 2025";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <FaDatabase />,
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: <FaUserShield />,
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <FaShieldAlt />,
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: <FaCookie />,
    },
    {
      id: "third-parties",
      title: "Third-Party Services",
      icon: <FaGlobe />,
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: <FaLock />,
    },
  ];

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
            <FaShieldAlt className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Your Privacy Matters</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We are committed to protecting your privacy and ensuring the security of your data
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-500 mt-4"
          >
            Last updated: {lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50 sticky top-20 z-30 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:text-blue-600 hover:shadow-md transition-all duration-300"
              >
                <span className="text-blue-600">{section.icon}</span>
                <span>{section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <AnimatedSection>
              <div className="mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At The Quantics ("we," "our," or "us"), we understand the importance of privacy and are committed to protecting the personal information of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered market research platform.
                </p>
              </div>
            </AnimatedSection>

            {/* Information We Collect */}
            <AnimatedSection>
              <div id="information-collection" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-blue-600">
                    <FaDatabase className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Personal Information</h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Name, email address, and contact information</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Company name and job title</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Billing information (processed securely through third-party providers)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Usage Information</h3>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Platform usage patterns and preferences</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Research data and survey responses</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>IP address and device information</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* How We Use Your Information */}
            <AnimatedSection>
              <div id="how-we-use" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-purple-600">
                    <FaUserShield className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>We use the collected information for the following purposes:</p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>To provide and maintain our AI-powered market research services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>To personalize your experience and deliver tailored insights</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>To process transactions and send related information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>To send administrative information, updates, and security alerts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>To improve our platform through analytics and machine learning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>To comply with legal obligations and protect our rights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Data Security */}
            <AnimatedSection>
              <div id="data-security" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-green-600">
                    <FaShieldAlt className="text-xl" />
                  </div>
                                    <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p>
                    We implement industry-leading security measures to protect your information:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface-container-low p-6 rounded-xl border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-3">Technical Safeguards</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• 256-bit SSL encryption</li>
                        <li>• SOC 2 Type II compliance</li>
                        <li>• Regular security audits</li>
                        <li>• Multi-factor authentication</li>
                      </ul>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-xl border border-blue-200">
                      <h4 className="font-semibold text-gray-900 mb-3">Operational Security</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Access controls and monitoring</li>
                        <li>• Employee training programs</li>
                        <li>• Incident response procedures</li>
                        <li>• Regular backups</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Cookies & Tracking */}
            <AnimatedSection>
              <div id="cookies" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-orange-600">
                    <FaCookie className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Cookies & Tracking Technologies</h2>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                      <p className="text-sm">Required for platform functionality and security</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                      <p className="text-sm">Help us understand how users interact with our platform</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Preference Cookies</h4>
                      <p className="text-sm">Remember your settings and personalization choices</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm">
                      You can manage cookie preferences through your browser settings. Note that disabling certain cookies may impact platform functionality.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Third-Party Services */}
            <AnimatedSection>
              <div id="third-parties" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-indigo-600">
                    <FaGlobe className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Third-Party Services</h2>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    We work with trusted third-party services to enhance our platform:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Payment Processors:</strong> Secure payment handling (Stripe, PayPal)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Cloud Infrastructure:</strong> AWS for secure data storage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Analytics:</strong> Google Analytics for usage insights</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Communication:</strong> Email service providers for notifications</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    These services have their own privacy policies and we encourage you to review them.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Your Rights */}
            <AnimatedSection>
              <div id="your-rights" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-purple-600">
                    <FaLock className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Your Rights</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p>
                    You have the following rights regarding your personal information:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Access", desc: "Request a copy of your personal data" },
                      { title: "Correction", desc: "Update or correct inaccurate information" },
                      { title: "Deletion", desc: "Request removal of your personal data" },
                      { title: "Portability", desc: "Receive your data in a portable format" },
                      { title: "Restriction", desc: "Limit how we process your data" },
                      { title: "Objection", desc: "Object to certain processing activities" },
                    ].map((right, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-1">{right.title}</h4>
                        <p className="text-sm">{right.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm">
                    To exercise any of these rights, please contact us at{" "}
                    <a href="mailto:privacy@thequantics.com" className="text-blue-600 hover:underline">
                      privacy@thequantics.com
                    </a>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection>
              <div className="bg-surface-container-low p-8 rounded-2xl border border-blue-200">
                <div className="flex items-center space-x-3 mb-6">
                  <FaEnvelope className="text-2xl text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="flex items-center space-x-2">
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:privacy@thequantics.com" className="text-blue-600 hover:underline">
                      privacy@thequantics.com
                    </a>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="font-semibold">Address:</span>
                    <span>The Quantics, [Your Address]</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Updates */}
            <AnimatedSection>
              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 text-center">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;