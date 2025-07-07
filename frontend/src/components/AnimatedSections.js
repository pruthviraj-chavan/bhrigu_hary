import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Cpu, 
  Cloud, 
  Brain, 
  Network, 
  Database, 
  Settings, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award, 
  Target, 
  Eye, 
  Lock, 
  ArrowRight,
  Sparkles,
  Rocket,
  Factory,
  Activity,
  Microscope,
  Layers,
  Server,
  Code,
  Workflow,
  Gauge,
  Calendar,
  LineChart,
  BarChart,
  PieChart,
  Package,
  Truck,
  Building,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Star
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Enhanced 3D Floating Card Animation Component
const FloatingCard3D = ({ children, delay = 0, direction = 1 }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        rotateY: -30, 
        rotateX: 15, 
        z: -100,
        scale: 0.8 
      }}
      whileInView={{ 
        opacity: 1, 
        rotateY: 0, 
        rotateX: 0, 
        z: 0,
        scale: 1 
      }}
      whileHover={{ 
        rotateY: direction * 10, 
        rotateX: 5, 
        z: 50,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      transition={{ 
        duration: 1, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      animate={{
        y: [0, -10, 0],
        rotateY: [0, direction * 2, 0],
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {children}
    </motion.div>
  );
};

// Modern 3D Glass Card Component
const GlassCard3D = ({ icon: Icon, title, description, color, delay = 0 }) => {
  return (
    <FloatingCard3D delay={delay}>
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300"
           style={{
             background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
             backdropFilter: "blur(10px)",
             boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
           }}>
        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center shadow-lg`}
             style={{ transform: "translateZ(20px)" }}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3" style={{ transform: "translateZ(10px)" }}>
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed" style={{ transform: "translateZ(5px)" }}>
          {description}
        </p>
      </div>
    </FloatingCard3D>
  );
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: true });
  
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animated Statistics Counter
const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^\d]/g, ''));
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
    >
      {inView ? value : "0"}{suffix}
    </motion.span>
  );
};

// Floating Animation Component
const FloatingElement = ({ children, delay = 0, duration = 3 }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 2, -2, 0]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  >
    {children}
  </motion.div>
);

// Parallax Background
const ParallaxBackground = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

// Animated Data Flow
const DataFlowSection = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Intelligent Data Flow
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Watch how data flows through our AI-powered platform in real-time
          </motion.p>
        </div>

        <div className="relative">
          {/* Animated SVG Data Flow */}
          <svg width="100%" height="400" className="absolute inset-0">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            
            {/* Data Flow Paths */}
            <motion.path
              d="M50 200 Q 200 100, 350 200 T 650 200"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M50 250 Q 200 350, 350 250 T 650 250"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            />
          </svg>

          {/* Data Nodes - Enhanced 3D Version */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <GlassCard3D
              icon={Database}
              title="Smart Data Collection"
              description="IoT sensors and manufacturing systems continuously collect real-time operational data with advanced filtering and preprocessing"
              color="from-blue-500 to-cyan-500"
              delay={0.2}
            />
            
            <GlassCard3D
              icon={Brain}
              title="AI-Powered Processing"
              description="Advanced machine learning algorithms analyze patterns, predict outcomes, and optimize manufacturing processes in real-time"
              color="from-purple-500 to-pink-500"
              delay={0.4}
            />
            
            <GlassCard3D
              icon={BarChart3}
              title="Actionable Insights"
              description="Real-time dashboards, predictive alerts, and automated recommendations enable immediate decision-making and process optimization"
              color="from-green-500 to-emerald-500"
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Live Metrics Dashboard
const LiveMetricsSection = () => {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Live Performance Metrics
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Real-time insights into your manufacturing operations
          </motion.p>
        </div>

        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {[
            { 
              icon: TrendingUp, 
              title: "Production Efficiency", 
              value: "94.7%", 
              trend: "+12%",
              color: "from-green-500 to-emerald-500",
              chart: LineChart
            },
            { 
              icon: Shield, 
              title: "Quality Score", 
              value: "99.2%", 
              trend: "+5%",
              color: "from-blue-500 to-cyan-500",
              chart: BarChart
            },
            { 
              icon: Zap, 
              title: "Energy Usage", 
              value: "847kW", 
              trend: "-8%",
              color: "from-orange-500 to-red-500",
              chart: PieChart
            },
            { 
              icon: Users, 
              title: "Active Users", 
              value: "1,247", 
              trend: "+23%",
              color: "from-purple-500 to-pink-500",
              chart: BarChart3
            }
          ].map((metric, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <metric.chart className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">{metric.title}</h3>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  <AnimatedCounter value={metric.value} />
                </span>
                <span className={`text-sm font-medium ${
                  metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Chart */}
        <motion.div
          variants={scaleIn}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Production Timeline</h3>
          <div className="h-64 flex items-end justify-between gap-4">
            {[65, 78, 82, 75, 91, 87, 94, 89, 96, 92, 98, 95].map((height, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg flex-1"
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

// Interactive Product Showcase
const ProductShowcaseSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      title: "Manufacturing Execution System",
      description: "Complete MES solution for regulated industries",
      icon: Factory,
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time monitoring", "Batch tracking", "Quality control"]
    },
    {
      title: "AI Analytics Platform",
      description: "Predictive insights for operational excellence",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      features: ["Predictive maintenance", "Quality prediction", "Process optimization"]
    },
    {
      title: "Compliance Manager",
      description: "Automated regulatory compliance and reporting",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      features: ["FDA validation", "Audit trails", "Electronic signatures"]
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Product Ecosystem
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive solutions designed for regulated manufacturing
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Selector */}
          <motion.div variants={staggerChildren} className="space-y-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={slideIn}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveProduct(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeProduct === index 
                    ? `bg-gradient-to-r ${product.color} shadow-2xl` 
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${
                    activeProduct === index ? 'bg-white/20' : `bg-gradient-to-r ${product.color}`
                  } flex items-center justify-center`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{product.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Product Preview */}
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${products[activeProduct].color} flex items-center justify-center`}>
                {React.createElement(products[activeProduct].icon, { className: "w-10 h-10 text-white" })}
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">{products[activeProduct].title}</h3>
              <p className="text-gray-300 text-center mb-6">{products[activeProduct].description}</p>
              
              {/* Interactive Demo Placeholder */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Live Demo</span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">Active</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.random() * 80 + 20}%` }}
                        transition={{ delay: i * 0.2, duration: 1 }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Global Network Animation
const GlobalNetworkSection = () => {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Global Manufacturing Network
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Connected facilities across 15+ countries ensuring compliance and efficiency worldwide
          </motion.p>
        </div>

        <div className="relative">
          {/* World Map Visualization */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { region: "North America", facilities: "12", color: "from-blue-500 to-cyan-500" },
                { region: "Europe", facilities: "18", color: "from-green-500 to-emerald-500" },
                { region: "Asia Pacific", facilities: "25", color: "from-purple-500 to-pink-500" },
                { region: "Latin America", facilities: "8", color: "from-orange-500 to-red-500" }
              ].map((region, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="text-white"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${region.color} flex items-center justify-center`}>
                    <Building className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    <AnimatedCounter value={region.facilities} />
                  </h3>
                  <p className="text-gray-400">{region.region}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating Connection Points */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 60 + 20}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export {
  DataFlowSection,
  LiveMetricsSection,
  ProductShowcaseSection,
  GlobalNetworkSection,
  AnimatedSection,
  FloatingElement,
  ParallaxBackground
};