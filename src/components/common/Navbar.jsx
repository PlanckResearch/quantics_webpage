import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../../favicon/favicon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "SOLUTIONS", path: "/solutions" },
    { name: "INDUSTRIES", path: "/industries" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Main dark top bar — portal style */}
        <div className={`w-full transition-all duration-300 ${
          scrolled 
            ? "bg-[#0B132B] shadow-lg" 
            : "bg-[#0B132B]"
        }`}>
          <div className="px-6 lg:px-10">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3" onClick={scrollToTop}>
                <img
                  src={logo}
                  alt="The Quantics"
                  className="w-[140px] h-auto brightness-0 invert"
                />
              </Link>

              {/* Desktop Navigation — Right aligned */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={scrollToTop}
                    className={`px-4 py-2 font-mono text-[11px] tracking-[0.15em] transition-all duration-200 ${
                      isActive(item.path)
                        ? "bg-white text-[#0B132B] font-bold"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* CTA Button */}
                <Link
                  to="/demo"
                  onClick={scrollToTop}
                  className="ml-4 px-6 py-2 bg-white text-[#0B132B] font-mono text-[11px] tracking-[0.15em] font-bold hover:bg-slate-200 transition-colors duration-200"
                >
                  EXPERIENCE_DEMO
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white text-2xl p-2 hover:bg-white/10 transition-colors"
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden"
            >
              <div className="bg-[#0B132B] border-t border-white/10 mx-0 p-4">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-4 py-3 font-mono text-[11px] tracking-[0.15em] transition-colors duration-200 ${
                        isActive(item.path)
                          ? "bg-white text-[#0B132B] font-bold"
                          : "text-slate-300 hover:bg-white/10"
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        scrollToTop();
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <Link
                      to="/demo"
                      className="block w-full text-center bg-white text-[#0B132B] px-4 py-3 font-mono text-[11px] tracking-[0.15em] font-bold hover:bg-slate-200 transition-colors duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToTop();
                      }}
                    >
                      EXPERIENCE_DEMO
                    </Link>
                    <Link
                      to="/contact"
                      className="block w-full text-center border border-white/30 text-white px-4 py-3 font-mono text-[11px] tracking-[0.15em] hover:bg-white/10 transition-colors duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToTop();
                      }}
                    >
                      GET_IN_TOUCH
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;