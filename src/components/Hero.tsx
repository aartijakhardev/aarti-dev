'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaRocket, FaLaptopCode } from 'react-icons/fa';

export default function Hero() {
  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-8">
            <FaRocket />
            <span className="text-sm font-semibold">Your Trusted Technology Partner</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Building Digital Solutions
            <br />
            <span className="text-primary-600">That Drive Growth</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            We specialize in enterprise CRM systems, healthcare applications,
            and scalable web solutions for educational institutions and businesses across India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Start Your Project
            </Link>
            <a
              href="#pricing"
              onClick={handlePricingClick}
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-primary-600 cursor-pointer"
            >
              View Pricing
            </a>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <motion.div animate={floatingAnimation}>
                <FaCode className="text-5xl text-primary-600 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-black">Clean Code</h3>
              <p className="text-gray-600">
                Well-structured, maintainable code following industry best practices
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <motion.div animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}>
                <FaLaptopCode className="text-5xl text-primary-600 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-black">Responsive Design</h3>
              <p className="text-gray-600">
                Beautiful interfaces that work perfectly on all devices
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <motion.div animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}>
                <FaRocket className="text-5xl text-primary-600 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-black">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround times without compromising on quality
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

