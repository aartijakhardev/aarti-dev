import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PromiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const features = [
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Projects completed on time, every time",
      gradient: "from-amber-500/10 to-orange-500/10"
    },
    {
      icon: "🛡️",
      title: "Quality Assured",
      description: "Clean, maintainable, production-ready code",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: "🤝",
      title: "Full Support",
      description: "We're with you beyond project completion",
      gradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <div ref={ref} className="w-full max-w-7xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative z-10 p-8 md:p-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                  Our Commitment
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Our Promise to You
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  <div className="relative h-full bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Icon container with gradient background */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl">{feature.icon}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover effect accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom text */}
            <motion.div variants={itemVariants} className="text-center">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Your success drives us. We combine technical excellence with transparent communication, 
                ensuring your vision becomes reality.{' '}
                <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Let's build something amazing together.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </motion.div>
    </div>
  );
}