import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Lightbulb, 
  Globe, 
  TrendingUp,
  Shield,
  Zap,
  Brain,
  CheckCircle,
  Star,
  Quote,
  MapPin,
  Calendar,
  Briefcase,
  Code,
  Database,
  Cloud,
  Factory,
  Settings,
  BarChart3
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

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Enhanced Hero Section */}
      <ImprovedHeroSection 
        title={
          <>
            The Bhrigu
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Story
            </span>
          </>
        }
        subtitle="Engineering Intelligence. Empowering Compliance."
        description="Transforming the future of regulated manufacturing through innovative AI solutions, cutting-edge technology, and unwavering commitment to compliance excellence."
        primaryButtonText="Join Our Mission"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Story"
        secondaryButtonLink="#our-story"
        heroType="about"
      />

      {/* Our Story */}
      <AnimatedSection id="our-story" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerChildren}>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Our Story
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                Founded with a vision to revolutionize regulated manufacturing, Bhrigu.tech emerged from the 
                realization that traditional approaches to compliance and manufacturing excellence were limiting 
                innovation and efficiency in critical industries.
              </motion.p>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Named after the ancient sage Bhrigu, known for his wisdom and foresight, our company embodies 
                the same principles of intelligence and forward-thinking in bringing Industry 4.0/5.0 solutions 
                to pharmaceuticals, medical devices, food & beverage, and biotechnology sectors.
              </motion.p>

              <motion.div 
                variants={staggerChildren}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { number: "2020", label: "Founded", icon: Calendar, color: "from-blue-500 to-cyan-500" },
                  { number: "50+", label: "Global Clients", icon: Globe, color: "from-green-500 to-emerald-500" },
                  { number: "15+", label: "Countries", icon: MapPin, color: "from-purple-500 to-pink-500" },
                  { number: "99.9%", label: "Uptime", icon: TrendingUp, color: "from-orange-500 to-red-500" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="text-center"
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-2xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
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
                  src="https://images.unsplash.com/photo-1560472355-536de3962603"
                  alt="Our Story"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Mission & Vision
            </motion.h2>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div
              variants={scaleIn}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower regulated industries with intelligent, AI-driven manufacturing solutions that 
                ensure compliance while maximizing operational efficiency and innovation. We bridge the 
                gap between regulatory requirements and technological advancement.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the global leader in intelligent manufacturing solutions for regulated industries, 
                enabling a future where compliance and innovation work hand-in-hand to create safer, 
                more efficient, and more sustainable manufacturing processes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Core Values */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Core Values
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              The principles that guide our innovation and shape our relationships with clients and partners.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Innovation",
                icon: Brain,
                desc: "Pushing boundaries with cutting-edge AI and technology solutions",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Compliance",
                icon: Shield,
                desc: "Unwavering commitment to regulatory excellence and standards",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Excellence",
                icon: Award,
                desc: "Delivering superior quality in every solution and interaction",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Partnership",
                icon: Heart,
                desc: "Building lasting relationships based on trust and mutual success",
                color: "from-orange-500 to-red-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Leadership Team */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Leadership Team
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Visionary leaders with decades of experience in regulated industries and cutting-edge technology.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "CEO & Co-Founder",
                background: "Former VP of Manufacturing at Global Pharma Corp",
                expertise: "15+ years in pharmaceutical manufacturing and compliance",
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Sarah Chen",
                role: "CTO & Co-Founder",
                background: "Former Principal Engineer at Tech Innovations Inc",
                expertise: "20+ years in AI/ML and industrial automation",
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Dr. Michael Rodriguez",
                role: "VP of Compliance",
                background: "Former FDA Senior Compliance Officer",
                expertise: "25+ years in regulatory affairs and quality assurance",
                color: "from-green-500 to-emerald-500"
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${leader.color} flex items-center justify-center`}>
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${leader.color} bg-clip-text text-transparent`}>
                  {leader.role}
                </p>
                <p className="text-gray-600 text-sm mb-3">{leader.background}</p>
                <p className="text-gray-700 text-sm">{leader.expertise}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Company Culture */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={scaleIn}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Company Culture"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerChildren}>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Company Culture
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                At Bhrigu.tech, we foster a culture of innovation, collaboration, and continuous learning. 
                Our diverse team of experts from various industries and backgrounds work together to solve 
                complex challenges in regulated manufacturing.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                {[
                  { title: "Innovation First", desc: "Encouraging creative problem-solving and cutting-edge solutions" },
                  { title: "Collaborative Excellence", desc: "Working together across disciplines to achieve common goals" },
                  { title: "Continuous Learning", desc: "Investing in our team's growth and professional development" },
                  { title: "Work-Life Balance", desc: "Supporting our team's well-being and personal fulfillment" }
                ].map((culture, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{culture.title}</h4>
                      <p className="text-gray-600">{culture.desc}</p>
                    </div>
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
            Join Our Journey
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Be part of the revolution in regulated manufacturing. Whether you're looking for solutions or 
            want to join our team, we'd love to connect with you.
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
              Get In Touch
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="/solutions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300"
            >
              Explore Solutions
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;