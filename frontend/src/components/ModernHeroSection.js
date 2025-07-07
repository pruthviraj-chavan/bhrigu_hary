import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

const ModernHeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "#",
  centerIcon: CenterIcon,
  backgroundGradient = "from-blue-900 via-purple-900 to-indigo-900",
  showParticles = true,
  showScrollIndicator = true
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
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

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${backgroundGradient}`}>
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

      {/* Particle Effects */}
      {showParticles && (
        <div className="absolute inset-0 z-1">
          {[...Array(60)].map((_, i) => (
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
      )}

      {/* Central Icon Animation */}
      {CenterIcon && (
        <div className="absolute inset-0 z-5 flex items-center justify-center">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
          >
            <CenterIcon className="w-16 h-16 text-blue-400" />
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg px-6 py-3 rounded-full text-sm font-medium border border-blue-400/30">
              <Sparkles className="w-4 h-4 text-blue-400" />
              {subtitle}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            {title}
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-xl lg:text-2xl mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto"
          >
            {description}
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href={primaryButtonLink}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Zap size={20} />
              {primaryButtonText}
            </motion.a>
            
            <motion.a
              href={secondaryButtonLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              {secondaryButtonText}
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm opacity-70">Explore More</span>
            <ChevronDown size={24} className="text-blue-400" />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ModernHeroSection;