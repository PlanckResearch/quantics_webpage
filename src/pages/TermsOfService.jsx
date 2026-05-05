import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";
import ParticleBackground from "../components/common/ParticleBackground";
import { FaFileContract, FaHandshake, FaBalanceScale, FaExclamationTriangle, FaBan, FaGavel, FaCheckCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "January 1, 2025";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <FaHandshake />,
    },
    {
      id: "use-of-services",
      title: "Use of Services",
      icon: <FaFileContract />,
    },
    {
      id: "user-obligations",
      title: "User Obligations",
      icon: <FaBalanceScale />,
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: <FaGavel />,
    },
    {
      id: "limitations",
      title: "Limitations",
      icon: <FaExclamationTriangle />,
    },
    {
      id: "termination",
      title: "Termination",
      icon: <FaBan />,
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
            <FaFileContract className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Legal Agreement</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Please read these terms carefully before using The Quantics platform
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
                  Welcome to The Quantics. These Terms of Service ("Terms") govern your use of our AI-powered market research platform and related services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
              </div>
            </AnimatedSection>

            {/* Acceptance of Terms */}
            <AnimatedSection>
              <div id="acceptance" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-blue-600">
                    <FaHandshake className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    By creating an account, accessing, or using The Quantics platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Eligibility Requirements:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>You must be at least 18 years old</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>You have the legal authority to enter into these Terms</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>You are not prohibited from using our Services under applicable law</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Use of Services */}
            <AnimatedSection>
              <div id="use-of-services" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-purple-600">
                    <FaFileContract className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">2. Use of Services</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">2.1 Account Registration</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• You must provide accurate and complete information</li>
                      <li>• You are responsible for maintaining account security</li>
                      <li>• You must notify us immediately of any unauthorized access</li>
                      <li>• One account per user or organization unless otherwise agreed</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">2.2 Permitted Use</h3>
                    <p className="mb-3">You may use our Services for:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Conducting market research and analysis</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Creating and distributing surveys</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Accessing AI-generated insights and reports</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Integrating with approved third-party services</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">2.3 Prohibited Use</h3>
                    <p className="mb-3">You may NOT use our Services to:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-600">✗</span>
                        <span>Violate any laws or regulations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-600">✗</span>
                        <span>Infringe on intellectual property rights</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-600">✗</span>
                        <span>Distribute malware or harmful content</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-600">✗</span>
                        <span>Attempt to reverse engineer our AI algorithms</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-600">✗</span>
                        <span>Scrape or harvest data without permission</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* User Obligations */}
            <AnimatedSection>
              <div id="user-obligations" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-green-600">
                    <FaBalanceScale className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">3. User Obligations</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p>As a user of our Services, you agree to:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">Data & Content</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Ensure you have rights to all uploaded data</li>
                        <li>• Maintain data accuracy and quality</li>
                        <li>• Comply with data protection laws</li>
                        <li>• Not upload sensitive personal data without consent</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">Platform Usage</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Use services only for intended purposes</li>
                        <li>• Respect usage limits and quotas</li>
                        <li>• Report bugs and vulnerabilities</li>
                        <li>• Maintain confidentiality of API keys</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-sm">
                      <strong>Note:</strong> You are responsible for all activities under your account, including those by authorized users.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Intellectual Property */}
            <AnimatedSection>
              <div id="intellectual-property" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-indigo-600">
                    <FaGavel className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">4. Intellectual Property</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">4.1 Our Property</h3>
                    <p className="mb-3">The Quantics retains all rights to:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• Platform technology and AI algorithms</li>
                      <li>• Trademarks, logos, and branding</li>
                      <li>• Aggregated and anonymized data insights</li>
                      <li>• Documentation and educational materials</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">4.2 Your Property</h3>
                    <p className="mb-3">You retain ownership of:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• Data you upload to the platform</li>
                      <li>• Custom surveys and questionnaires</li>
                      <li>• Reports generated from your data</li>
                      <li>• Your company's confidential information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">4.3 License Grant</h3>
                    <p>
                      By using our Services, you grant us a limited, non-exclusive license to process your data solely for the purpose of providing the Services. This license ends when you delete your data or terminate your account.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Limitations */}
            <AnimatedSection>
              <div id="limitations" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-orange-600">
                    <FaExclamationTriangle className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">5. Limitations of Liability</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Disclaimer of Warranties</h4>
                    <p className="text-sm">
                      THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">5.1 Limitation of Liability</h3>
                    <p>
                      To the maximum extent permitted by law, The Quantics shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">5.2 Indemnification</h3>
                    <p>
                      You agree to indemnify and hold harmless The Quantics from any claims, damages, or expenses arising from your violation of these Terms or misuse of the Services.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Termination */}
            <AnimatedSection>
              <div id="termination" className="mb-16 scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-gray-600">
                    <FaBan className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">6. Termination</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">6.1 Termination by You</h3>
                    <p>
                      You may terminate your account at any time through your account settings. Upon termination, you can export your data within 30 days.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">6.2 Termination by Us</h3>
                    <p className="mb-3">We may suspend or terminate your account if you:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• Violate these Terms</li>
                      <li>• Engage in fraudulent activities</li>
                      <li>• Fail to pay applicable fees</li>
                      <li>• Pose a security risk to the platform</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">6.3 Effect of Termination</h3>
                    <p>
                      Upon termination, your right to access the Services will cease immediately. Provisions that should survive termination (including intellectual property, limitations of liability, and dispute resolution) will remain in effect.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Additional Terms */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">7. General Provisions</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">7.1 Modifications to Terms</h3>
                      <p className="text-gray-700">
                        We may update these Terms from time to time. We will notify you of material changes via email or platform notification. Continued use after changes constitutes acceptance.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">7.2 Governing Law</h3>
                      <p className="text-gray-700">
                        These Terms shall be governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.
                      </p>
                    </div>

                    <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">7.3 Dispute Resolution</h3>
                      <p className="text-gray-700">
                        Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of [Arbitration Body]. The arbitration shall be conducted in [Location].
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">7.4 Severability</h3>
                      <p className="text-gray-700">
                        If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">7.5 Entire Agreement</h3>
                      <p className="text-gray-700">
                        These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and The Quantics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection>
              <div className="bg-surface-container-low p-8 rounded-2xl border border-blue-200 mt-12">
                <div className="flex items-center space-x-3 mb-6">
                  <FaHandshake className="text-2xl text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Questions About These Terms?</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="flex items-center space-x-2">
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:legal@thequantics.com" className="text-blue-600 hover:underline">
                      legal@thequantics.com
                    </a>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="font-semibold">Address:</span>
                    <span>The Quantics, [Your Address]</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Acceptance Notice */}
            <AnimatedSection>
              <div className="mt-12 p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">By Using Our Services</h4>
                    <p className="text-sm text-gray-700">
                      By creating an account or using The Quantics platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use our Services.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Updates */}
            <AnimatedSection>
              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-600 text-center">
                  These Terms of Service were last updated on {lastUpdated}. We reserve the right to update these Terms at any time. 
                  Material changes will be communicated to users via email or platform notification.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg z-40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
};

export default TermsOfService;