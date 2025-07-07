import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Pill, 
  Activity, 
  Utensils, 
  Dna, 
  Leaf,
  Microscope,
  TestTube,
  Beaker,
  FlaskConical,
  Atom,
  Shield,
  FileText,
  Users,
  Award,
  TrendingUp,
  Target,
  Globe,
  Factory,
  Settings,
  BarChart3,
  Lock,
  Eye,
  Calendar,
  Clock,
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

const IndustriesPage = () => {
  return (
    <div className="pt-16">
      {/* Enhanced Hero Section */}
      <ImprovedHeroSection 
        title={
          <>
            Sector-Specific
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </>
        }
        subtitle="Industry-Focused Innovation & Compliance Solutions"
        description="Specialized solutions for regulated industries that demand the highest standards of compliance and operational excellence. From pharmaceuticals to biotechnology, we deliver tailored platforms that ensure regulatory success."
        primaryButtonText="Explore Industry Solutions"
        primaryButtonLink="/solutions"
        secondaryButtonText="Get Industry Consultation"
        secondaryButtonLink="/contact"
        heroType="industries"
      />

      {/* Pharmaceutical Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerChildren}>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <Pill className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Pharmaceuticals
                </h2>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                Drug discovery molecules, clinical trial data flows, and comprehensive 
                pharmaceutical manufacturing solutions with complete FDA compliance.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                {[
                  { title: "API Manufacturing", icon: FlaskConical, desc: "Active pharmaceutical ingredient production control" },
                  { title: "Quality Control", icon: Microscope, desc: "Automated testing and validation systems" },
                  { title: "Batch Tracking", icon: FileText, desc: "Complete traceability from raw materials to finished products" },
                  { title: "FDA Compliance", icon: Shield, desc: "21 CFR Part 11 and GMP compliance automation" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
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
                  src="https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg"
                  alt="Pharmaceutical Manufacturing"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Medical Devices Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={scaleIn}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1"
                  alt="Medical Device Manufacturing"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20"></div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerChildren} className="order-1 lg:order-2">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Medical Devices
                </h2>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                Device assembly lines, testing equipment integration, and comprehensive 
                post-market surveillance with ISO 13485 compliance.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                {[
                  { title: "Manufacturing Control", icon: Settings, desc: "Automated device assembly and testing" },
                  { title: "Traceability", icon: Target, desc: "Complete device lifecycle tracking" },
                  { title: "Post-Market Surveillance", icon: Eye, desc: "Real-time monitoring and reporting" },
                  { title: "ISO 13485 Compliance", icon: Award, desc: "Medical device quality management" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Food & Beverage Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerChildren}>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Food & Beverage
                </h2>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                Production lines automation, packaging control, and comprehensive 
                food safety management with HACCP compliance.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                {[
                  { title: "Recipe Management", icon: Beaker, desc: "Automated formulation and batch control" },
                  { title: "Quality Control", icon: CheckCircle, desc: "Real-time testing and validation" },
                  { title: "Supply Chain Tracking", icon: Globe, desc: "Farm-to-table traceability" },
                  { title: "HACCP Compliance", icon: Shield, desc: "Hazard analysis and critical control points" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
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
                  src="https://images.pexels.com/photos/3889053/pexels-photo-3889053.jpeg"
                  alt="Food & Beverage Processing"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Biotech Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={scaleIn}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1719496525117-469ab037bfe0"
                  alt="Biotech Research"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20"></div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerChildren} className="order-1 lg:order-2">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                  <Dna className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Biotech
                </h2>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                Bioreactor systems monitoring, cell culture automation, and comprehensive 
                biotechnology processes with GMP protocol compliance.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                {[
                  { title: "Process Development", icon: TestTube, desc: "Automated bioreactor control and monitoring" },
                  { title: "Scale-up", icon: TrendingUp, desc: "Seamless transition from lab to production" },
                  { title: "Batch Records", icon: FileText, desc: "Electronic batch record management" },
                  { title: "GMP Compliance", icon: Shield, desc: "Good manufacturing practice automation" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Nutraceuticals Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerChildren}>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Nutraceuticals
                </h2>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                Supplement formulation automation, encapsulation processes, and comprehensive 
                nutraceutical manufacturing with cGMP compliance.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                {[
                  { title: "Ingredient Tracking", icon: Atom, desc: "Complete raw material traceability" },
                  { title: "Potency Testing", icon: BarChart3, desc: "Automated testing and validation" },
                  { title: "Label Claims", icon: FileText, desc: "Regulatory compliance for product claims" },
                  { title: "cGMP Compliance", icon: Award, desc: "Current good manufacturing practices" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
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
                  src="https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg"
                  alt="Nutraceuticals Manufacturing"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Industry Comparison */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Industry-Specific Metrics
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Proven results across all regulated industries with BhriguOne implementation.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { industry: "Pharmaceuticals", improvement: "70%", metric: "Compliance Efficiency", icon: Pill },
              { industry: "Medical Devices", improvement: "85%", metric: "Traceability Accuracy", icon: Activity },
              { industry: "Food & Beverage", improvement: "60%", metric: "Quality Control Speed", icon: Utensils },
              { industry: "Biotech", improvement: "75%", metric: "Process Optimization", icon: Dna },
              { industry: "Nutraceuticals", improvement: "80%", metric: "Label Compliance", icon: Leaf }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              >
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.improvement}</div>
                <div className="text-gray-300 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-400">{stat.industry}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Ready to Transform Your Industry?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Get industry-specific solutions tailored to your regulatory requirements and operational needs.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 102, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Get Industry Consultation
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="/solutions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              View Solutions
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default IndustriesPage;