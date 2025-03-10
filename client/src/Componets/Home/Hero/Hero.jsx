import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Shield, Cpu, ArrowRight, Sparkles, LineChart, Rocket, Brain, Globe2 } from 'lucide-react';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: Brain,
      title: "Web & Mobile Development",
      description: "Creating powerful, user-friendly applications that drive engagement"
    },
    {
      icon: Globe2,
      title: "Digital Transformation",
      description: "Guiding your business through comprehensive digital evolution"
    },
    {
      icon: Rocket,
      title: "Data Analytics",
      description: "Transforming raw data into actionable business insights"
    }
  ];

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden px-5">
      {/* Hero Section */}
      <div className="relative">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-1/2 h-screen bg-blue-50 -skew-x-12 transform origin-top-right"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-40 w-72 h-72 bg-blue-100 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column */}
            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100"
              >
                <motion.div animate={floatingAnimation}>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </motion.div>
                <span className="text-sm font-medium text-blue-600">Welcome to Fascave</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Innovative
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 max-w-xl"
              >
                At Fascave, we deliver innovative technology solutions that drive business growth. From web and mobile app development to cutting-edge data analytics, we're your trusted partner in digital transformation. Let's bring your ideas to life with precision, creativity, and expertise.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-6 py-3 bg-[#172554] rounded-lg text-white font-semibold flex items-center gap-2 hover:bg-[#1c2b5a] transition-all shadow-lg shadow-blue-200"
                >
                  Start Your Journey
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white rounded-lg text-blue-600 font-semibold hover:bg-blue-50 transition-all border border-blue-200"
                >
                  Explore Services
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group p-6 bg-white rounded-2xl border border-blue-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={floatingAnimation}
                      className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors"
                    >
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;