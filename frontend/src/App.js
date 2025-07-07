import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ChevronDown, 
  Play, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Shield, 
  Zap, 
  Database, 
  Settings, 
  Award,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Building,
  Globe,
  Clock,
  Star,
  Bookmark,
  FileText,
  Video,
  Download,
  Search,
  Filter,
  Calendar,
  Target,
  TrendingUp,
  Cpu,
  Cloud,
  Lock,
  Code,
  BarChart3,
  Workflow,
  Layers,
  Network,
  Server,
  Brain,
  Activity,
  Gauge,
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
  ChevronRight,
  Home,
  Info,
  Briefcase,
  Lightbulb,
  BookOpen,
  MessageCircle,
  Sparkles,
  Rocket,
  Coffee,
  Heart,
  Headphones
} from 'lucide-react';
import './App.css';

// Import components
import ImprovedHeroSection from './components/ImprovedHeroSection';
import ImprovedNavbar from './components/ImprovedNavbar';
import { 
  DataFlowSection, 
  LiveMetricsSection, 
  ProductShowcaseSection, 
  GlobalNetworkSection,
  AnimatedSection 
} from './components/AnimatedSections';

// Lazy load page components for better performance
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CareerPage = lazy(() => import('./pages/CareerPage'));

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-white text-lg">Loading...</span>
    </div>
  </div>
);

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

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Bhrigu.tech
                </span>
                <span className="text-xs text-gray-400 -mt-1">Engineering Intelligence</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Engineering Intelligence. Empowering Compliance.
            </p>
            <p className="text-gray-400">
              Redefining regulated manufacturing through Industry 4.0/5.0 innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/solutions" className="hover:text-white transition-colors">BhriguOne Platform</a></li>
              <li><a href="/solutions" className="hover:text-white transition-colors">AI Analytics</a></li>
              <li><a href="/solutions" className="hover:text-white transition-colors">IoT Integration</a></li>
              <li><a href="/solutions" className="hover:text-white transition-colors">Compliance Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/industries" className="hover:text-white transition-colors">Pharmaceuticals</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Medical Devices</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Food & Beverage</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Biotech</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Bhrigu.tech. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

// Enhanced Technology Stack with Multi-colored Design
const TechnologyStack = () => {
  const technologies = [
    { name: 'React.js', icon: Code, color: 'from-blue-500 to-cyan-500', category: 'Frontend' },
    { name: 'Node.js', icon: Server, color: 'from-green-500 to-emerald-500', category: 'Backend' },
    { name: 'Python', icon: Brain, color: 'from-yellow-500 to-orange-500', category: 'AI/ML' },
    { name: 'MongoDB', icon: Database, color: 'from-purple-600 to-purple-700', category: 'Database' },
    { name: 'Docker', icon: Cloud, color: 'from-indigo-600 to-blue-700', category: 'DevOps' },
    { name: 'TensorFlow', icon: Brain, color: 'from-red-500 to-pink-500', category: 'AI/ML' },
    { name: 'AWS', icon: Cloud, color: 'from-amber-400 to-orange-400', category: 'Cloud' },
    { name: 'FastAPI', icon: Zap, color: 'from-teal-500 to-cyan-500', category: 'Backend' }
  ];

  const categories = ['Frontend', 'Backend', 'AI/ML', 'Database', 'DevOps', 'Cloud'];

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Cutting-Edge Technologies Powering Next-Gen Solutions
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Our technology stack combines the latest innovations in AI, cloud computing, and software development to deliver robust, scalable solutions.
          </motion.p>
        </div>
        
        {/* Technology Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-r ${
                  index % 6 === 0 ? 'from-blue-500 to-cyan-500' :
                  index % 6 === 1 ? 'from-green-500 to-emerald-500' :
                  index % 6 === 2 ? 'from-purple-500 to-pink-500' :
                  index % 6 === 3 ? 'from-orange-500 to-red-500' :
                  index % 6 === 4 ? 'from-indigo-500 to-purple-500' :
                  'from-teal-500 to-cyan-500'
                } text-white px-6 py-3 rounded-full shadow-lg`}
              >
                <span className="font-medium">{category}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <motion.div 
          variants={staggerChildren}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-600">{tech.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

// Enhanced Industry Focus with Multi-colored Design
const IndustryFocus = () => {
  const industries = [
    {
      name: 'Pharmaceuticals',
      icon: Pill,
      color: 'from-blue-500 to-indigo-500',
      description: 'GMP-compliant manufacturing solutions with real-time monitoring and automated documentation.',
      features: ['FDA 21 CFR Part 11 Compliance', 'Batch Record Management', 'Quality Control Integration', 'Regulatory Reporting']
    },
    {
      name: 'Medical Devices',
      icon: Activity,
      color: 'from-red-500 to-pink-500',
      description: 'ISO 13485 certified solutions for medical device manufacturing with traceability.',
      features: ['ISO 13485 Compliance', 'Device History Records', 'Risk Management', 'Post-Market Surveillance']
    },
    {
      name: 'Food & Beverage',
      icon: Utensils,
      color: 'from-green-500 to-emerald-500',
      description: 'HACCP-compliant food safety management with supply chain transparency.',
      features: ['HACCP Implementation', 'Supply Chain Tracking', 'Allergen Management', 'Nutritional Analysis']
    },
    {
      name: 'Biotechnology',
      icon: Dna,
      color: 'from-purple-500 to-violet-500',
      description: 'Advanced bioprocessing solutions with real-time analytics and process optimization.',
      features: ['Bioprocess Monitoring', 'Cell Culture Analytics', 'Downstream Processing', 'Regulatory Compliance']
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-emerald-400 bg-clip-text text-transparent"
          >
            Tailored for Every Regulated Industry
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Specialized solutions designed to meet the unique compliance requirements and operational challenges of regulated industries.
          </motion.p>
        </div>
        
        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-2 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center mr-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{industry.name}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>
              
              <div className="space-y-2">
                {industry.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

// Enhanced Success Metrics with Multi-colored Design
const SuccessMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Operational Efficiency Increase',
      color: 'from-blue-500 to-cyan-500',
      description: 'Average improvement in manufacturing efficiency'
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Compliance Success Rate',
      color: 'from-green-500 to-emerald-500',
      description: 'Regulatory audit pass rate across all implementations'
    },
    {
      icon: Clock,
      value: '60%',
      label: 'Time-to-Market Reduction',
      color: 'from-purple-500 to-pink-500',
      description: 'Faster product development and approval cycles'
    },
    {
      icon: BarChart3,
      value: '3x',
      label: 'ROI Within 18 Months',
      color: 'from-orange-500 to-red-500',
      description: 'Return on investment through cost savings and efficiency'
    }
  ];

  const testimonials = [
    {
      quote: "BhriguOne transformed our manufacturing processes. We achieved FDA compliance while reducing operational costs by 35%.",
      author: "Dr. Sarah Chen",
      role: "VP of Manufacturing, PharmaCorp",
      company: "Fortune 500 Pharmaceutical Company"
    },
    {
      quote: "The AI-powered analytics gave us unprecedented visibility into our production line. Quality issues are now detected in real-time.",
      author: "Michael Rodriguez",
      role: "Quality Director, MedDevice Solutions",
      company: "Leading Medical Device Manufacturer"
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
          >
            Measurable Results That Matter
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our clients consistently achieve significant improvements in efficiency, compliance, and ROI through our innovative solutions.
          </motion.p>
        </div>
        
        {/* Metrics Grid */}
        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
              <p className="text-sm text-gray-400">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

// Homepage Component with Enhanced Multi-colored Design and New Animated Sections
const HomePage = () => {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <ImprovedHeroSection 
        title={
          <>
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
          </>
        }
        subtitle="Revolutionizing Regulated Industries with AI & Industry 4.0/5.0"
        description="Transform your regulated manufacturing operations with our cutting-edge AI-powered platform, ensuring seamless compliance while maximizing efficiency across pharmaceuticals, medical devices, and biotechnology."
        primaryButtonText="Explore BhriguOne Platform"
        primaryButtonLink="/solutions"
        secondaryButtonText="Schedule Live Demo"
        secondaryButtonLink="/contact"
        showMetrics={true}
        heroType="default"
      />

      {/* NEW: Intelligent Data Flow Section */}
      <DataFlowSection />

      {/* Enhanced Technology Stack */}
      <TechnologyStack />

      {/* NEW: Live Metrics Dashboard */}
      <LiveMetricsSection />

      {/* Enhanced Industry Focus */}
      <IndustryFocus />

      {/* NEW: Interactive Product Showcase */}
      <ProductShowcaseSection />

      {/* Enhanced Success Metrics & ROI */}
      <SuccessMetrics />

      {/* NEW: Global Network Animation */}
      <GlobalNetworkSection />

      {/* Enhanced Call to Action */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Ready to Transform Your Operations?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Discover how BhriguOne can revolutionize your regulated manufacturing processes with AI-powered intelligence and seamless compliance automation.
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
              Explore Products
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <ImprovedNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={
            <Suspense fallback={<LoadingSpinner />}>
              <SolutionsPage />
            </Suspense>
          } />
          <Route path="/industries" element={
            <Suspense fallback={<LoadingSpinner />}>
              <IndustriesPage />
            </Suspense>
          } />
          <Route path="/technology" element={
            <Suspense fallback={<LoadingSpinner />}>
              <TechnologyPage />
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<LoadingSpinner />}>
              <AboutPage />
            </Suspense>
          } />
          <Route path="/products" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProductsPage />
            </Suspense>
          } />
          <Route path="/resources" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ResourcesPage />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContactPage />
            </Suspense>
          } />
          <Route path="/careers" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CareerPage />
            </Suspense>
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;