import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  Settings, 
  Building, 
  Cpu, 
  Info, 
  Briefcase, 
  BookOpen, 
  MessageCircle,
  ChevronDown,
  Sparkles,
  Zap,
  Globe,
  Phone,
  Mail
} from 'lucide-react';

const ImprovedNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      path: '/', 
      icon: Home,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Solutions', 
      path: '/solutions', 
      icon: Settings,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Industries', 
      path: '/industries', 
      icon: Building,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Technology', 
      path: '/technology', 
      icon: Cpu,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'About', 
      path: '/about', 
      icon: Info,
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      name: 'Products', 
      path: '/products', 
      icon: Briefcase,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Resources', 
      path: '/resources', 
      icon: BookOpen,
      color: 'from-amber-500 to-orange-500'
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      icon: MessageCircle,
      color: 'from-pink-500 to-rose-500'
    },
    { 
      name: 'Careers', 
      path: '/careers', 
      icon: Briefcase,
      color: 'from-emerald-500 to-green-500'
    }
  ];

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white/10 backdrop-blur-md border-b border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.a 
              href="/"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              {/* Bhrigu Logo */}
              <div className="flex items-center gap-3">
                {/* Logo Icon - New geometric design */}
                <div className="w-10 h-10 relative">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0891b2" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                    </defs>
                    {/* Updated geometric design matching the provided logo */}
                    <path
                      d="M5 15 L20 5 L35 15 L30 25 L20 20 L10 25 Z"
                      fill="url(#logoGradient)"
                      stroke="none"
                    />
                    <path
                      d="M15 30 L20 20 L25 30 L20 35 Z"
                      fill="url(#logoGradient)"
                      stroke="none"
                      opacity="0.8"
                    />
                    <circle
                      cx="20"
                      cy="20"
                      r="2"
                      fill="white"
                    />
                  </svg>
                </div>
                
                {/* Logo Text */}
                <div className="flex flex-col">
                  <span className={`text-xl sm:text-2xl font-bold ${
                    isScrolled 
                      ? 'text-cyan-600' 
                      : 'text-white'
                  }`}>
                    Bhrigu
                  </span>
                  <span className={`text-xs font-medium -mt-1 ${
                    isScrolled 
                      ? 'text-cyan-500' 
                      : 'text-cyan-300'
                  }`}>
                    FUTURE ENGINEERED
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={item.path}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 relative overflow-hidden group ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-white' 
                        : 'text-white hover:text-white'
                    }`}
                  >
                    {/* Animated background */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Icon and text */}
                    <div className="relative z-10 flex items-center gap-2">
                      <item.icon size={16} />
                      {item.name}
                    </div>
                  </motion.a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Zap size={16} />
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors p-2 rounded-lg ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:text-cyan-400 hover:bg-white/10'
              }`}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200/50 max-h-screen overflow-y-auto"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 max-h-96 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.path}
                    className="flex items-center gap-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon size={16} className="text-white" />
                    </div>
                    {item.name}
                  </a>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.a
                href="/contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold mt-4 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Zap size={16} />
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default ImprovedNavbar;