import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Play,
  Settings,
  Brain,
  Shield,
  BarChart3,
  Database,
  Network,
  Cloud,
  Zap,
  Activity,
  Target,
  Eye,
  Lock,
  Code,
  Users,
  Calendar,
  FileText,
  Gauge,
  TrendingUp,
  Award,
  Layers,
  Server,
  Workflow
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

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const products = [
    {
      id: 'bhriguone',
      name: 'BhriguOne Platform',
      tagline: 'Complete Manufacturing Excellence',
      description: 'Comprehensive manufacturing execution system designed specifically for regulated industries with built-in compliance automation.',
      icon: Settings,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      features: [
        'Real-time Manufacturing Execution',
        'Automated Compliance Reporting',
        'Quality Management Integration',
        'Batch Record Management',
        'FDA 21 CFR Part 11 Compliance',
        'Electronic Signatures'
      ],
      pricing: 'Enterprise',
      industries: ['Pharmaceuticals', 'Medical Devices', 'Food & Beverage']
    },
    {
      id: 'ai-analytics',
      name: 'AI Analytics Suite',
      tagline: 'Predictive Intelligence Platform',
      description: 'Advanced artificial intelligence and machine learning platform for predictive maintenance, quality prediction, and process optimization.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      features: [
        'Predictive Maintenance',
        'Quality Prediction Models',
        'Anomaly Detection',
        'Process Optimization',
        'Real-time Analytics',
        'Custom ML Models'
      ],
      pricing: 'Custom',
      industries: ['All Regulated Industries']
    },
    {
      id: 'compliance-manager',
      name: 'Compliance Manager',
      tagline: 'Automated Regulatory Excellence',
      description: 'Comprehensive compliance management solution ensuring adherence to all regulatory requirements with automated reporting and audit trails.',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
      features: [
        'Regulatory Compliance Automation',
        'Audit Trail Management',
        'Document Control',
        'Risk Management',
        'Change Control',
        'Deviation Management'
      ],
      pricing: 'Subscription',
      industries: ['Pharmaceuticals', 'Biotechnology', 'Medical Devices']
    }
  ];

  return (
    <div className="pt-16">
      {/* Enhanced Hero Section */}
      <ImprovedHeroSection 
        title={
          <>
            Product
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </>
        }
        subtitle="Comprehensive Solutions for Regulated Manufacturing"
        description="Discover our complete suite of AI-powered products designed to transform regulated manufacturing operations while ensuring seamless compliance and operational excellence."
        primaryButtonText="Explore Products"
        primaryButtonLink="#products-overview"
        secondaryButtonText="Request Demo"
        secondaryButtonLink="/contact"
        heroType="products"
      />

      {/* Products Overview */}
      <AnimatedSection id="products-overview" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Our Product Suite
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Integrated solutions that work seamlessly together to provide comprehensive manufacturing intelligence and compliance automation.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <product.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Starting at</span>
                    <span className="text-lg font-bold text-gray-900">{product.pricing}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${product.color} text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Product Comparison */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Feature Comparison
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Compare features across our product suite to find the perfect solution for your needs.
            </motion.p>
          </div>

          <motion.div 
            variants={scaleIn}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <tr>
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">BhriguOne</th>
                    <th className="text-center p-4">AI Analytics</th>
                    <th className="text-center p-4">Compliance Manager</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Real-time Monitoring', true, true, false],
                    ['Predictive Analytics', false, true, false],
                    ['Compliance Automation', true, false, true],
                    ['Quality Management', true, true, true],
                    ['Audit Trails', true, false, true],
                    ['Custom Dashboards', true, true, false],
                    ['Mobile Access', true, true, true],
                    ['API Integration', true, true, true]
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium text-gray-900">{row[0]}</td>
                      <td className="p-4 text-center">
                        {row[1] ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-400">—</span>}
                      </td>
                      <td className="p-4 text-center">
                        {row[2] ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-400">—</span>}
                      </td>
                      <td className="p-4 text-center">
                        {row[3] ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-400">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Integration Ecosystem */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Integration Ecosystem
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our products integrate seamlessly with existing systems and third-party tools to create a unified manufacturing intelligence platform.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { name: 'ERP Systems', icon: Database, desc: 'SAP, Oracle, Microsoft Dynamics', color: 'from-blue-500 to-cyan-500' },
              { name: 'SCADA/HMI', icon: Activity, desc: 'Wonderware, GE iFIX, Siemens WinCC', color: 'from-green-500 to-emerald-500' },
              { name: 'LIMS', icon: FileText, desc: 'LabWare, Thermo Fisher, Waters', color: 'from-purple-500 to-pink-500' },
              { name: 'Quality Systems', icon: Award, desc: 'TrackWise, MasterControl, Veeva', color: 'from-orange-500 to-red-500' },
              { name: 'Cloud Platforms', icon: Cloud, desc: 'AWS, Azure, Google Cloud', color: 'from-indigo-500 to-purple-500' },
              { name: 'Automation', icon: Settings, desc: 'Rockwell, Schneider, Honeywell', color: 'from-teal-500 to-cyan-500' },
              { name: 'Analytics Tools', icon: BarChart3, desc: 'Tableau, Power BI, Qlik', color: 'from-amber-500 to-orange-500' },
              { name: 'IoT Platforms', icon: Network, desc: 'PTC ThingWorx, GE Predix', color: 'from-pink-500 to-rose-500' }
            ].map((integration, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${integration.color} flex items-center justify-center`}>
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-400">{integration.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Pricing Plans */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Flexible Pricing Plans
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Choose the perfect plan for your organization. All plans include 24/7 support and regular updates.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Starter',
                price: '$50,000',
                period: 'per year',
                description: 'Perfect for small to medium manufacturing facilities',
                features: [
                  'Basic MES functionality',
                  'Quality management',
                  'Real-time monitoring',
                  'Standard reporting',
                  'Email support',
                  'Up to 50 users'
                ],
                color: 'from-blue-500 to-cyan-500',
                popular: false
              },
              {
                name: 'Professional',
                price: '$150,000',
                period: 'per year',
                description: 'Comprehensive solution for growing enterprises',
                features: [
                  'Full MES suite',
                  'AI Analytics',
                  'Compliance automation',
                  'Advanced reporting',
                  'Priority support',
                  'Up to 200 users',
                  'Custom integrations'
                ],
                color: 'from-purple-500 to-pink-500',
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                description: 'Tailored solutions for large-scale operations',
                features: [
                  'Complete platform access',
                  'Custom AI models',
                  'Multi-site deployment',
                  'Dedicated support',
                  'Unlimited users',
                  'Custom development',
                  'Training & consulting'
                ],
                color: 'from-orange-500 to-red-500',
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </div>
                  <p className="text-gray-600">{plan.period}</p>
                  <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.popular 
                      ? `bg-gradient-to-r ${plan.color} text-white shadow-lg` 
                      : `border-2 border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600`
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Ready to Transform Your Operations?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Experience the power of our products with a personalized demonstration tailored to your industry and requirements.
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
              Request Demo
              <Play size={20} />
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300"
            >
              Contact Sales
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProductsPage;