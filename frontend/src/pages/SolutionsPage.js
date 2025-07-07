import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Brain, 
  Network, 
  Shield, 
  BarChart3, 
  Settings,
  Zap,
  Database,
  Cloud,
  Activity,
  Target,
  TrendingUp,
  Workflow,
  Layers,
  Server,
  Lock,
  Eye,
  AlertTriangle,
  FileText,
  Calendar,
  Users,
  Gauge
} from 'lucide-react';
import ImprovedHeroSection from '../components/ImprovedHeroSection';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
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

const SolutionsPage = () => {
  return (
    <div className="pt-16">
      {/* Enhanced Hero Section */}
      <ImprovedHeroSection 
        title={
          <>
            BhriguOne Platform
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Deep Dive
            </span>
          </>
        }
        subtitle="Comprehensive AI-Powered Manufacturing Solutions"
        description="Unified platform combining AI, IoT, and compliance automation specifically designed for regulated industries including pharmaceuticals, medical devices, food & beverage, and biotechnology."
        primaryButtonText="Explore Platform"
        primaryButtonLink="/contact"
        secondaryButtonText="View Demo"
        secondaryButtonLink="#platform-overview"
        heroType="solutions"
      />

      {/* Platform Overview */}
      <AnimatedSection id="platform-overview" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Platform Overview
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Interactive 3D module explorer showcasing the complete BhriguOne ecosystem.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "Manufacturing Execution", icon: Settings, desc: "Real-time production control", color: "from-blue-500 to-cyan-500" },
              { title: "Quality Management", icon: Shield, desc: "Automated QA processes", color: "from-green-500 to-emerald-500" },
              { title: "Compliance Engine", icon: FileText, desc: "Regulatory automation", color: "from-purple-500 to-pink-500" },
              { title: "Analytics Dashboard", icon: BarChart3, desc: "Advanced reporting", color: "from-orange-500 to-red-500" }
            ].map((module, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${module.color} flex items-center justify-center`}>
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600">{module.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* AI-Powered Analytics */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerChildren}>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                AI-Powered Analytics
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                Neural network visualizations for predictive maintenance, quality prediction, 
                and operational optimization across all manufacturing processes.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                {[
                  "Predictive Maintenance Algorithms",
                  "Quality Prediction Models",
                  "Anomaly Detection Systems",
                  "Performance Optimization AI"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <Brain className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={scaleIn}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
                  alt="AI Analytics"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* IoT Integration */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            >
              IoT Integration
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Real-time sensor network animations and comprehensive monitoring solutions.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Sensor Integration", icon: Network, desc: "Connect all manufacturing sensors", color: "from-cyan-500 to-blue-500" },
              { title: "Real-time Monitoring", icon: Eye, desc: "Live data visualization dashboards", color: "from-green-500 to-emerald-500" },
              { title: "Edge Computing", icon: Server, desc: "Local processing and analysis", color: "from-purple-500 to-pink-500" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Data Management */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Data Management
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Animated data lake and warehouse systems for comprehensive data governance.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { title: "Data Lake Architecture", icon: Database, desc: "Scalable storage for structured and unstructured data", color: "from-blue-500 to-cyan-500" },
              { title: "Real-time Processing", icon: Zap, desc: "Stream processing for immediate insights", color: "from-green-500 to-emerald-500" },
              { title: "Data Governance", icon: Shield, desc: "Compliance-ready data management", color: "from-purple-500 to-pink-500" },
              { title: "Advanced Analytics", icon: TrendingUp, desc: "Machine learning and statistical analysis", color: "from-orange-500 to-red-500" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Manufacturing Optimization */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={scaleIn}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1"
                  alt="Manufacturing Optimization"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerChildren} className="order-1 lg:order-2">
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Manufacturing Optimization
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                Smart factory floor simulations and optimization algorithms for maximum efficiency 
                and minimal downtime in regulated manufacturing environments.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { title: "Production Planning", icon: Calendar, color: "from-blue-500 to-cyan-500" },
                  { title: "Resource Optimization", icon: Target, color: "from-green-500 to-emerald-500" },
                  { title: "Quality Control", icon: CheckCircle, color: "from-purple-500 to-pink-500" },
                  { title: "Performance Monitoring", icon: Gauge, color: "from-orange-500 to-red-500" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-10 h-10 mb-2 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Ready to Transform Your Manufacturing?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Experience the power of BhriguOne with a personalized demo tailored to your industry.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 127, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Schedule Demo
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300"
            >
              View Products
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SolutionsPage;