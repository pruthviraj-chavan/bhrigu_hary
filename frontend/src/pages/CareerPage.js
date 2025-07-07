import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Users, 
  Briefcase,
  Calendar,
  ChevronRight,
  Star,
  Award,
  TrendingUp,
  Heart,
  Coffee,
  Lightbulb,
  Target,
  Brain,
  Code,
  Settings,
  Database,
  Shield,
  Globe,
  Zap,
  Building,
  GraduationCap,
  Rocket,
  MessageCircle,
  CheckCircle,
  DollarSign
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

const CareerPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Positions', icon: Briefcase, color: 'from-blue-500 to-cyan-500' },
    { id: 'engineering', name: 'Engineering', icon: Code, color: 'from-purple-500 to-pink-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-green-500 to-emerald-500' },
    { id: 'sales', name: 'Sales & Marketing', icon: Target, color: 'from-orange-500 to-red-500' },
    { id: 'operations', name: 'Operations', icon: Settings, color: 'from-indigo-500 to-purple-500' },
    { id: 'compliance', name: 'Compliance & Quality', icon: Shield, color: 'from-teal-500 to-cyan-500' }
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer - Full Stack",
      department: "engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3-5 years",
      salary: "$120k - $160k",
      description: "Join our engineering team to build cutting-edge solutions for regulated manufacturing. Work with React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Expertise in React, Node.js, TypeScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Knowledge of manufacturing or regulated industries preferred"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health benefits",
        "Flexible work arrangements",
        "Learning and development budget"
      ],
      featured: true
    },
    {
      id: 2,
      title: "AI/ML Engineer - Manufacturing Intelligence",
      department: "ai-ml",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      salary: "$140k - $180k",
      description: "Develop AI-powered analytics and machine learning models for manufacturing process optimization and predictive maintenance.",
      requirements: [
        "MS in Computer Science, AI, or related field",
        "Experience with Python, TensorFlow, PyTorch",
        "Knowledge of manufacturing processes",
        "Experience with time-series analysis and IoT data"
      ],
      benefits: [
        "Cutting-edge AI projects",
        "Conference and training opportunities",
        "Remote-first culture",
        "Stock options"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Sales Development Representative",
      department: "sales",
      location: "Boston, MA",
      type: "Full-time",
      experience: "1-2 years",
      salary: "$60k - $80k + Commission",
      description: "Drive growth by identifying and qualifying prospects in pharmaceutical and medical device industries.",
      requirements: [
        "1-3 years of B2B sales experience",
        "Experience in SaaS or technology sales",
        "Knowledge of regulated industries preferred",
        "Excellent communication skills"
      ],
      benefits: [
        "Uncapped commission structure",
        "Sales enablement tools",
        "Career advancement opportunities",
        "Team events and rewards"
      ],
      featured: false
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "engineering",
      location: "Austin, TX",
      type: "Full-time",
      experience: "3-5 years",
      salary: "$110k - $140k",
      description: "Build and maintain scalable infrastructure for our manufacturing intelligence platform using modern DevOps practices.",
      requirements: [
        "Experience with Kubernetes, Docker",
        "Cloud infrastructure (AWS/Azure/GCP)",
        "CI/CD pipeline management",
        "Infrastructure as Code (Terraform, CloudFormation)"
      ],
      benefits: [
        "Latest DevOps tools and technologies",
        "Flexible working hours",
        "Professional development budget",
        "Health and wellness programs"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Quality Assurance Manager",
      department: "compliance",
      location: "New York, NY",
      type: "Full-time",
      experience: "5-7 years",
      salary: "$90k - $120k",
      description: "Lead quality assurance initiatives and ensure compliance with FDA, ISO, and other regulatory standards.",
      requirements: [
        "7+ years in quality assurance",
        "Experience with FDA regulations (21 CFR Part 11)",
        "Knowledge of ISO 13485, HACCP standards",
        "Manufacturing or pharmaceutical background"
      ],
      benefits: [
        "Leadership development programs",
        "Regulatory training opportunities",
        "Comprehensive benefits package",
        "Professional certification support"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "operations",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "2-4 years",
      salary: "$75k - $95k",
      description: "Ensure customer success and drive adoption of our manufacturing intelligence platform across enterprise clients.",
      requirements: [
        "3+ years in customer success or account management",
        "Experience with enterprise B2B software",
        "Strong analytical and problem-solving skills",
        "Manufacturing industry knowledge preferred"
      ],
      benefits: [
        "Customer-focused work environment",
        "Professional growth opportunities",
        "Travel opportunities",
        "Performance bonuses"
      ],
      featured: true
    }
  ];

  const filteredJobs = jobs.filter(job => 
    selectedDepartment === 'all' || job.department === selectedDepartment
  );

  const companyValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in manufacturing intelligence",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "We believe the best solutions come from diverse teams working together",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Customer-Centric",
      description: "Every decision we make is guided by delivering value to our customers",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We're committed to continuous learning and professional development",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance plus wellness programs",
      color: "text-red-500"
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-competitive salaries, equity participation, and performance bonuses",
      color: "text-green-500"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO policy",
      color: "text-amber-500"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and internal training programs",
      color: "text-blue-500"
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Clear career paths, mentorship programs, and leadership development",
      color: "text-purple-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on products that improve manufacturing processes worldwide",
      color: "text-cyan-500"
    }
  ];

  return (
    <div className="pt-16">
      {/* Enhanced Hero Section */}
      <ImprovedHeroSection 
        title={
          <>
            Join Our
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Mission
            </span>
          </>
        }
        subtitle="Shape the Future of Manufacturing Intelligence"
        description="Help us revolutionize regulated industries with cutting-edge AI and automation. Join a team of passionate innovators building the next generation of manufacturing intelligence solutions."
        primaryButtonText="View Open Positions"
        primaryButtonLink="#careers-positions"
        secondaryButtonText="Learn About Culture"
        secondaryButtonLink="#company-culture"
        heroType="contact"
      />

      {/* Company Values */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Our Values Drive Everything We Do
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We're building more than just software – we're creating a culture where innovation thrives and every team member can make a meaningful impact.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
            >
              Benefits & Perks
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We believe in taking care of our team members so they can do their best work and live their best lives.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Open Positions */}
      <AnimatedSection id="careers-positions" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            >
              Open Positions
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Join our growing team and help shape the future of manufacturing intelligence.
            </motion.p>
          </div>

          {/* Department Filter */}
          <motion.div 
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {departments.map((dept) => (
                <motion.button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? `bg-gradient-to-r ${dept.color} text-white shadow-lg`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <dept.icon size={16} />
                  {dept.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Jobs Grid */}
          <motion.div 
            variants={staggerChildren}
            className="space-y-6"
          >
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">{job.title}</h3>
                          {job.featured && (
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mb-4">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={14} />
                            {job.experience}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign size={14} />
                            {job.salary}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
              <p className="text-gray-400">Try selecting a different department.</p>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Application Process */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Our Hiring Process
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We've designed our interview process to be transparent, efficient, and give you a real sense of what it's like to work at Bhrigu.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                step: 1,
                title: "Application Review",
                description: "We review your application and reach out within 3-5 business days",
                icon: CheckCircle,
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: 2,
                title: "Phone Screening",
                description: "30-minute call with our talent team to discuss your background and interests",
                icon: MessageCircle,
                color: "from-green-500 to-emerald-500"
              },
              {
                step: 3,
                title: "Technical Interview",
                description: "Technical discussion and problem-solving session with the hiring team",
                icon: Code,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: 4,
                title: "Final Interview",
                description: "Meet the team and leadership to ensure cultural fit and alignment",
                icon: Users,
                color: "from-orange-500 to-red-500"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${process.color} flex items-center justify-center`}>
                  <process.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-500 mb-2">STEP {process.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Ready to Make an Impact?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Don't see the perfect role? We're always looking for exceptional talent to join our mission. Send us your resume and let's start a conversation.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="mailto:careers@bhrigu.tech"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 127, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Send Resume
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CareerPage;