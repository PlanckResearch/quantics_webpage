import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaChartLine,
  FaBrain,
  FaRocket,
  FaArrowRight
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B132B] text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-[2px] bg-white/20"></div>

      <div className="container mx-auto px-6 lg:px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-headline font-bold mb-4 tracking-tighter uppercase">
                THE_QUANTICS
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <HiSparkles className="text-slate-400" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">AI-Powered Market Intelligence Platform</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
                Transform your business decisions with real-time market insights powered by advanced AI.
                Our platform analyzes millions of data points to deliver actionable intelligence that drives growth.
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-6">SOLUTIONS</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-slate-300 hover:text-white text-sm transition-all duration-200 flex items-center gap-3 group">
                  <FaChartLine className="text-xs text-slate-500" />
                  <span className="font-mono text-[11px] tracking-wider uppercase">Market_Analytics</span>
                  <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/solutions" onClick={scrollToTop} className="text-slate-300 hover:text-white text-sm transition-all duration-200 flex items-center gap-3 group">
                  <FaBrain className="text-xs text-slate-500" />
                  <span className="font-mono text-[11px] tracking-wider uppercase">AI_Solutions</span>
                  <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/industries" onClick={scrollToTop} className="text-slate-300 hover:text-white text-sm transition-all duration-200 flex items-center gap-3 group">
                  <FaRocket className="text-xs text-slate-500" />
                  <span className="font-mono text-[11px] tracking-wider uppercase">Industries</span>
                  <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/demo" onClick={scrollToTop} className="text-slate-300 hover:text-white text-sm transition-all duration-200 flex items-center gap-3 group">
                  <HiSparkles className="text-xs text-slate-500" />
                  <span className="font-mono text-[11px] tracking-wider uppercase">Free_Demo</span>
                  <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-6">INITIATE_CONTACT</h4>
            <div className="bg-white/5 border border-white/10 p-5 mb-6">
              <p className="text-sm font-semibold mb-3 uppercase tracking-wider text-[11px]">Ready to transform your research?</p>
              <Link to="/demo" onClick={scrollToTop} className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.15em] bg-white text-[#0B132B] px-4 py-2 hover:bg-slate-200 transition-colors uppercase font-bold">
                START_FREE_TRIAL
                <FaArrowRight className="text-[8px]" />
              </Link>
            </div>

            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@thequantics.com" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-3">
                  <FaEnvelope className="text-xs" />
                  <span className="font-mono text-[11px]">sales@thequantics.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+918619183712" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-3">
                  <FaPhone className="text-xs" />
                  <span className="font-mono text-[11px]">‎+91 86191 83712</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-slate-500 text-[11px] font-mono tracking-wider">
                &copy; {currentYear} THE_QUANTICS. ALL_RIGHTS_RESERVED.
              </p>
              <div className="flex gap-6">
                <Link to="/privacy" onClick={scrollToTop} className="text-slate-500 hover:text-white transition-colors font-mono text-[10px] tracking-wider uppercase">
                  Privacy_Policy
                </Link>
                <Link to="/terms" onClick={scrollToTop} className="text-slate-500 hover:text-white transition-colors font-mono text-[10px] tracking-wider uppercase">
                  Terms_of_Service
                </Link>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-mono text-slate-600 tracking-widest uppercase mr-2">FOLLOW:</span>
              <a
                href="https://www.linkedin.com/in/the-quantics-9ab071376/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0B132B] transition-all duration-300"
              >
                <FaLinkedin className="text-sm" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 text-[9px] font-mono text-slate-600 tracking-widest uppercase">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
                <span>AI_SYSTEMS_ONLINE</span>
              </div>
              <span>|</span>
              <span>PROCESSING_125K_REQ/SEC</span>
              <span>|</span>
              <span>UPTIME_99.99%</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
