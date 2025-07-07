import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  FileText, 
  Video, 
  Calendar, 
  Users, 
  Clock, 
  Star,
  Search,
  Filter,
  BookOpen,
  Play,
  Eye,
  TrendingUp,
  Award,
  Target,
  Brain,
  Shield,
  BarChart3,
  Settings,
  CheckCircle,
  ExternalLink,
  Mail,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Globe,
  Lightbulb,
  Zap
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

const ResourcesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resourceCategories = [
    { id: 'all', name: 'All Resources', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { id: 'whitepapers', name: 'Whitepapers', icon: FileText, color: 'from-purple-500 to-pink-500' },
    { id: 'case-studies', name: 'Case Studies', icon: Target, color: 'from-green-500 to-emerald-500' },
    { id: 'webinars', name: 'Webinars', icon: Video, color: 'from-orange-500 to-red-500' },
    { id: 'documentation', name: 'Documentation', icon: BookOpen, color: 'from-indigo-500 to-purple-500' },
    { id: 'guides', name: 'Implementation Guides', icon: Settings, color: 'from-teal-500 to-cyan-500' }
  ];

  const resources = [
    {
      id: 1,
      title: "AI-Powered Quality Control in Pharmaceutical Manufacturing",
      type: "Whitepaper",
      category: "whitepapers",
      description: "Comprehensive guide on implementing AI-driven quality control systems to ensure compliance and reduce defects.",
      downloadCount: "2.3k",
      readTime: "15 min",
      publishDate: "2024-12-15",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["AI", "Quality Control", "Pharmaceuticals"],
      featured: true
    },
    {
      id: 2,
      title: "Digital Transformation Success: MedDevice Corp Case Study",
      type: "Case Study",
      category: "case-studies",
      description: "How MedDevice Corp achieved 40% efficiency improvement with BhriguOne platform implementation.",
      downloadCount: "1.8k",
      readTime: "12 min",
      publishDate: "2024-12-10",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
      tags: ["Digital Transformation", "Medical Devices", "ROI"],
      featured: true
    },
    {
      id: 3,
      title: "Compliance Automation in Regulated Industries",
      type: "Webinar",
      category: "webinars",
      description: "Live webinar discussing best practices for automating compliance processes in regulated manufacturing.",
      downloadCount: "3.1k",
      readTime: "45 min",
      publishDate: "2024-12-05",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7",
      tags: ["Compliance", "Automation", "Webinar"],
      featured: false
    },
    {
      id: 4,
      title: "BhriguOne Platform API Documentation",
      type: "Documentation",
      category: "documentation",
      description: "Complete API reference and integration guide for developers working with BhriguOne platform.",
      downloadCount: "5.2k",
      readTime: "30 min",
      publishDate: "2024-11-28",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      tags: ["API", "Documentation", "Integration"],
      featured: false
    },
    {
      id: 5,
      title: "IoT Implementation Guide for Manufacturing",
      type: "Implementation Guide",
      category: "guides",
      description: "Step-by-step guide for implementing IoT sensors and connectivity in manufacturing environments.",
      downloadCount: "1.9k",
      readTime: "25 min",
      publishDate: "2024-11-20",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
      tags: ["IoT", "Manufacturing", "Implementation"],
      featured: false
    },
    {
      id: 6,
      title: "Food Safety Revolution: Smart HACCP Implementation",
      type: "Case Study",
      category: "case-studies",
      description: "How Global Foods Inc. revolutionized their HACCP compliance using intelligent monitoring systems.",
      downloadCount: "1.4k",
      readTime: "18 min",
      publishDate: "2024-11-15",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
      tags: ["Food Safety", "HACCP", "Smart Monitoring"],
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === 'all' || resource.category === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="pt-16">
      {/* Enhanced Hero Section with 3D Elements */}
      <ImprovedHeroSection 
        title={
          <>
            Knowledge
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Hub
            </span>
          </>
        }
        subtitle="Expert Insights & Resources for Manufacturing Intelligence"
        description="Access comprehensive resources including whitepapers, case studies, webinars, and implementation guides to accelerate your digital transformation journey in regulated industries."
        primaryButtonText="Browse Resources"
        primaryButtonLink="#resources-library"
        secondaryButtonText="Subscribe to Updates"
        secondaryButtonLink="#newsletter"
        heroType="resources"
      />

      {/* Featured Resources */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Featured Resources
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Trending insights and latest publications from our experts in regulated manufacturing and compliance.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                variants={scaleIn}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {resource.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Download size={16} />
                      {resource.downloadCount}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {resource.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(resource.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                  >
                    <Download size={16} />
                    Download Resource
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Resources Library */}
      <AnimatedSection id="resources-library" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Resources Library
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Explore our comprehensive collection of resources organized by category and topic.
            </motion.p>
          </div>

          {/* Search and Filters */}
          <motion.div 
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400" size={20} />
                <span className="text-gray-600 text-sm">Filter by category:</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {resourceCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <category.icon size={16} />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Resources Grid */}
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                      {resource.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
                  
                  <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Download size={14} />
                      {resource.downloadCount}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {resource.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                    {resource.tags.length > 2 && (
                      <span className="text-gray-400 text-xs">+{resource.tags.length - 2} more</span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1"
                    >
                      <Download size={14} />
                      Download
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Bookmark size={14} className="text-gray-600" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Newsletter Subscription */}
      <AnimatedSection id="newsletter" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Stay Updated
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Subscribe to our newsletter and get the latest insights, resources, and updates delivered to your inbox.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 127, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300"
              >
                <Mail size={20} />
                Subscribe
              </motion.button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-8 text-center"
            >
              {[
                { icon: FileText, title: "Weekly Insights", desc: "Latest industry trends and best practices" },
                { icon: Video, title: "Exclusive Webinars", desc: "Early access to expert sessions" },
                { icon: Lightbulb, title: "Product Updates", desc: "New features and improvements" }
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-3 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Need Personalized Guidance?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Our experts are ready to help you navigate your digital transformation journey with personalized consultations and custom resources.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Schedule Consultation
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="/solutions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              Explore Solutions
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ResourcesPage;