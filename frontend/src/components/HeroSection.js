import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  ChevronDown, 
  Play, 
  ArrowRight, 
  Zap, 
  Shield, 
  BarChart3,
  Globe,
  Cpu,
  Network,
  Database,
  Cloud,
  Brain,
  Settings,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Users,
  Award,
  Activity,
  Microscope,
  Factory,
  Pill,
  Utensils,
  Dna,
  Beaker,
  FlaskConical,
  TestTube,
  Atom,
  Leaf,
  Gauge,
  Lock,
  Code,
  Layers,
  Server,
  Workflow
} from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  // Floating tech cards with industry-specific content
  const floatingCards = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      subtitle: "Predictive Intelligence",
      position: { top: '15%', left: '8%' },
      delay: 0,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "GxP Compliance",
      subtitle: "Regulatory Excellence",
      position: { top: '20%', right: '10%' },
      delay: 0.5,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      subtitle: "24/7 Operations",
      position: { bottom: '25%', left: '12%' },
      delay: 1,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Factory,
      title: "Smart Manufacturing",
      subtitle: "Industry 4.0/5.0",
      position: { bottom: '30%', right: '8%' },
      delay: 1.5,
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      subtitle: "Actionable Insights",
      position: { top: '60%', left: '5%' },
      delay: 2,
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Workflow,
      title: "Process Automation",
      subtitle: "Streamlined Operations",
      position: { top: '45%', right: '5%' },
      delay: 2.5,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  // Central 3D-like illustration elements
  const centerElements = [
    { icon: Pill, angle: 0, radius: 120, color: "text-blue-400" },
    { icon: Microscope, angle: 60, radius: 140, color: "text-green-400" },
    { icon: Beaker, angle: 120, radius: 130, color: "text-purple-400" },
    { icon: Dna, angle: 180, radius: 125, color: "text-cyan-400" },
    { icon: FlaskConical, angle: 240, radius: 135, color: "text-pink-400" },
    { icon: TestTube, angle: 300, radius: 140, color: "text-orange-400" }
  ];

  useEffect(() => {
    setIsVisible(true);
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 bg-[length:200%_200%]"
        />
      </div>

      {/* Floating Cards */}
      {floatingCards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute z-10 hidden lg:block"
          style={card.position}
          variants={cardVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: card.delay }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: card.delay
            }}
            className={`bg-gradient-to-r ${card.gradient} p-4 rounded-2xl backdrop-blur-lg shadow-2xl border border-white/20 min-w-[180px]`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">{card.title}</h4>
                <p className="text-white/70 text-xs">{card.subtitle}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Central 3D Illustration */}
      <div className="absolute inset-0 z-5 flex items-center justify-center">
        <div className="relative w-96 h-96 hidden lg:block">
          {/* Central Core */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Cpu className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Orbiting Elements */}
          {centerElements.map((element, index) => {
            const x = Math.cos((element.angle * Math.PI) / 180) * element.radius;
            const y = Math.sin((element.angle * Math.PI) / 180) * element.radius;
            
            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                }}
              >
                <element.icon className={`w-8 h-8 ${element.color}`} />
              </motion.div>
            );
          })}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {centerElements.map((_, index) => (
              <motion.circle
                key={index}
                cx="50%"
                cy="50%"
                r={120 + (index * 5)}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                strokeDasharray="5,5"
                animate={{ rotate: 360 }}
                transition={{ duration: 15 + (index * 2), repeat: Infinity, ease: "linear" }}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 z-1">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg px-6 py-3 rounded-full text-sm font-medium border border-blue-400/30">
              <Zap className="w-4 h-4 text-blue-400" />
              Revolutionizing Regulated Industries with AI & Industry 4.0/5.0
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            Engineering{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Intelligence
            </span>
            .
            <br />
            Empowering{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Compliance
            </span>
            .
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl lg:text-2xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Transform your regulated manufacturing operations with our cutting-edge 
            <span className="text-blue-400 font-semibold"> AI-powered platform</span>, 
            ensuring seamless compliance while maximizing efficiency across 
            <span className="text-green-400 font-semibold"> pharmaceuticals</span>, 
            <span className="text-purple-400 font-semibold"> medical devices</span>, 
            and <span className="text-cyan-400 font-semibold">biotechnology</span>.
          </motion.p>

          {/* Key Metrics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {[
              { number: "99.9%", label: "System Uptime", icon: TrendingUp, color: "text-green-400" },
              { number: "50+", label: "Global Customers", icon: Users, color: "text-blue-400" },
              { number: "15+", label: "Countries", icon: Globe, color: "text-purple-400" },
              { number: "24/7", label: "Support", icon: Shield, color: "text-cyan-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/solutions"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Play size={20} />
              Explore BhriguOne Platform
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Schedule Live Demo
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 mt-12 text-gray-400"
          >
            {[
              { icon: Award, text: "FDA Validated" },
              { icon: Shield, text: "SOC 2 Certified" },
              { icon: CheckCircle, text: "GxP Compliant" },
              { icon: Star, text: "Industry Leader" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <badge.icon className="w-5 h-5" />
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm opacity-70">Discover More</span>
          <ChevronDown size={24} className="text-blue-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;