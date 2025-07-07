import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  User,
  Building,
  MessageSquare,
  Calendar,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Award,
  Users,
  TrendingUp,
  Zap,
  Brain,
  Settings,
  Target,
  Heart,
  Headphones,
  Video,
  Coffee,
  Lightbulb
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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      color: "from-blue-500 to-cyan-500",
      available: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      contact: "hello@bhrigu.tech",
      action: "Send Email",
      color: "from-green-500 to-emerald-500",
      available: "24/7 Response"
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Schedule a live demonstration",
      contact: "Schedule Meeting",
      action: "Book Now",
      color: "from-purple-500 to-pink-500",
      available: "Available Worldwide"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant support and answers",
      contact: "Start Chat",
      action: "Chat Now",
      color: "from-orange-500 to-red-500",
      available: "24/7 Support"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Innovation Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "usa@bhrigu.tech",
      timezone: "PST",
      color: "from-blue-500 to-cyan-500"
    },
    {
      city: "London",
      country: "UK",
      address: "456 Tech Street, London EC2A 4BX, UK",
      phone: "+44 20 7123 4567",
      email: "uk@bhrigu.tech",
      timezone: "GMT",
      color: "from-green-500 to-emerald-500"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "789 Business Avenue, Singapore 048619",
      phone: "+65 6123 4567",
      email: "asia@bhrigu.tech",
      timezone: "SGT",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const faqs = [
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timeline varies based on complexity, but typically ranges from 3-6 months for full deployment."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes, we provide comprehensive training programs and 24/7 ongoing support to ensure successful adoption."
    },
    {
      question: "Is the platform compliant with FDA regulations?",
      answer: "Absolutely. Our platform is designed with FDA 21 CFR Part 11 compliance and other regulatory requirements built-in."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Yes, we have extensive integration capabilities with ERP, LIMS, SCADA, and other manufacturing systems."
    }
  ];

  return (
    <div className="pt-16">
      {/* Enhanced Hero Section with Better Mobile Layout */}
      <ImprovedHeroSection 
        title={
          <>
            Get In
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Touch
            </span>
          </>
        }
        subtitle="Connect with Manufacturing Intelligence Experts"
        description="Ready to transform your regulated manufacturing operations? Our team of experts is here to guide you through your digital transformation journey with personalized solutions and dedicated support."
        primaryButtonText="Start Conversation"
        primaryButtonLink="#contact-form"
        secondaryButtonText="Schedule Demo"
        secondaryButtonLink="#schedule-demo"
        heroType="contact"
      />

      {/* Contact Methods */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Choose Your Preferred Contact Method
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We're here to help through multiple channels. Choose the method that works best for you.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <p className="text-lg font-semibold text-gray-900 mb-2">{method.contact}</p>
                <p className="text-sm text-gray-500 mb-4">{method.available}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${method.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  {method.action}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact Form */}
      <AnimatedSection id="contact-form" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={staggerChildren}>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Send Us a Message
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Fill out the form below and our team will get back to you within 24 hours. 
                We'll provide personalized recommendations based on your specific needs.
              </motion.p>

              <motion.div variants={staggerChildren} className="space-y-6">
                {[
                  { icon: Users, title: "Expert Consultation", desc: "Get guidance from industry experts" },
                  { icon: Calendar, title: "Flexible Scheduling", desc: "Book meetings at your convenience" },
                  { icon: Shield, title: "Secure Communication", desc: "Your data is protected and confidential" },
                  { icon: Zap, title: "Quick Response", desc: "We respond within 24 hours" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Industry</option>
                      <option value="pharmaceuticals">Pharmaceuticals</option>
                      <option value="medical-devices">Medical Devices</option>
                      <option value="food-beverage">Food & Beverage</option>
                      <option value="biotechnology">Biotechnology</option>
                      <option value="nutraceuticals">Nutraceuticals</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request Demo</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your requirements, challenges, or questions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Global Offices */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Global Presence
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              With offices worldwide, we provide local support and expertise wherever you are.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {offices.map((office, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${office.color} flex items-center justify-center`}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{office.city}, {office.country}</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">Timezone: {office.timezone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700"
            >
              Quick answers to common questions about our platform and services.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerChildren}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              <MessageSquare size={16} />
              Ask a Question
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;