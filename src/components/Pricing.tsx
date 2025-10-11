'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FaCheck, FaStar } from 'react-icons/fa';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const starterPlan = {
    name: "Starter",
    price: "₹3,999",
    duration: "one-time",
    description: "Perfect for new schools & startups looking to establish their online presence with a professional landing page",
    features: [
      "Professional single-page website",
      "Eye-catching hero section",
      "About your institution section",
      "Key features & highlights",
      "Contact information & location map",
      "Fully mobile-responsive design",
      "Contact form integration",
      "2 weeks of dedicated support",
      "Easy upgrade path to full website",
    ],
    color: "from-green-500 to-green-600",
    buttonColor: "bg-green-700 hover:bg-green-800",
  };

  const pricingTiers = [
    {
      name: "Basic",
      price: "₹6,999",
      duration: "one-time",
      description: "Perfect for schools beginning their digital transformation journey",
      features: [
        "Professional 5-page responsive website",
        "Home, About, Academics, Gallery, Contact",
        "Mobile-friendly design",
        "Contact form with email notifications",
        "Google Maps integration",
        "Basic SEO optimization",
        "Dedicated support for 1 month",
        "Professional hosting guidance",
      ],
      popular: false,
      color: "from-gray-500 to-gray-600",
      buttonColor: "bg-gray-700 hover:bg-gray-800",
    },
    {
      name: "Standard",
      price: "₹13,999",
      duration: "one-time",
      description: "Comprehensive solution for schools seeking advanced features and functionality",
      features: [
        "Professional 10-page responsive website",
        "All Basic features included",
        "Event calendar & announcements",
        "Photo & video gallery",
        "Downloads section (PDFs, forms)",
        "Admission inquiry form",
        "Staff & faculty pages",
        "Social media integration",
        "Premium SEO optimization",
        "3 months dedicated support",
      ],
      popular: true,
      color: "from-primary-500 to-primary-600",
      buttonColor: "bg-[#075985] text-primary-600 hover:bg-gray-100",
    },
    {
      name: "Premium",
      price: "₹21,999",
      duration: "one-time",
      description: "Enterprise-grade solution for schools wanting a complete digital ecosystem",
      features: [
        "Unlimited pages",
        "All Standard features included",
        "Student/Parent login portal",
        "Online fee payment integration",
        "Attendance tracking system",
        "Assignment upload/download",
        "Notice board with notifications",
        "Multi-language support (Hindi/English)",
        "Blog/News section",
        "Admin dashboard",
        "Professional email/SMS notification setup",
        "6 months dedicated support & maintenance",
      ],
      popular: false,
      color: "from-purple-500 to-purple-600",
      buttonColor: "bg-purple-700 hover:bg-purple-800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="pricing" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Affordable Pricing for Schools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Special rates for educational institutions across India. Quality websites that fit your budget.
          </p>
          <div className="mt-6 inline-block bg-primary-100 text-primary-800 px-6 py-3 rounded-full">
            <p className="text-sm font-semibold">🎓 Special introductory pricing - Partner with us as we grow together!</p>
          </div>
        </motion.div>

        {/* Starter Plan - Special Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚀 Just Getting Started?
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Try Our Landing Page Package
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perfect for new schools and startups who want to establish a professional online presence with room to grow
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.01, y: -5 }}
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-500"
          >
            <div className="grid md:grid-cols-3 gap-0">
              {/* Header */}
              <div className={`bg-gradient-to-br ${starterPlan.color} p-8 text-white flex flex-col justify-center`}>
                <h3 className="text-3xl font-bold mb-2">{starterPlan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{starterPlan.price}</span>
                  <span className="text-lg opacity-90">/{starterPlan.duration}</span>
                </div>
                <p className="text-sm opacity-90">
                  {starterPlan.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-8 md:col-span-2">
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                  {starterPlan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full md:w-auto md:inline-block ${starterPlan.buttonColor} text-center text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  Start Small, Grow Big →
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Upgrade Path Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              What Changes When You Upgrade?
            </h3>
            <p className="text-gray-600 text-sm">
              See exactly what additional value each tier brings to your school
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl border border-gray-200 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Starter → Basic
                </h4>
                <span className="text-green-600 text-sm font-bold bg-green-50 px-3 py-1 rounded-full">+₹3,000</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start group/item">
                  <span className="text-green-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">1 page → 5 full pages</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-green-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">Email notifications</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-green-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">SEO optimization</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-green-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">Extended support</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-xl border border-blue-200 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-blue-200">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Basic → Standard
                </h4>
                <span className="text-blue-600 text-sm font-bold bg-blue-50 px-3 py-1 rounded-full">+₹7,000</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start group/item">
                  <span className="text-blue-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">10 pages instead of 5</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-blue-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">Events & announcements</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-blue-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">Media galleries</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-blue-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">Downloads & forms</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-blue-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">Staff pages & socials</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative p-6 rounded-xl bg-gradient-to-br from-white to-purple-50 shadow-md hover:shadow-xl border border-purple-200 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-purple-200">
                <h4 className="font-bold text-gray-900 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Standard → Premium
                </h4>
                <span className="text-purple-600 text-sm font-bold bg-purple-50 px-3 py-1 rounded-full">+₹8,000</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start group/item">
                  <span className="text-purple-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">Login portal system</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-purple-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">Online fee payments</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-purple-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">Attendance tracking</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-purple-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">Multi-language support</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-purple-500 mr-3 mt-0.5">✦</span>
                  <span className="group-hover/item:translate-x-1 transition-transform">Admin dashboard</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Pricing Tiers */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Full Website Packages
          </h3>
          <p className="text-gray-600">
            Ready for a complete web presence? Choose from our comprehensive packages
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                tier.popular ? 'ring-4 ring-primary-500' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-semibold flex items-center space-x-1">
                  <FaStar className="text-yellow-300" />
                  <span>Most Popular</span>
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${tier.color} p-8 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  <span className="text-lg opacity-90">/{tier.duration}</span>
                </div>
                <p className={`text-sm ${tier.popular ? 'text-white' : 'opacity-90'}`}>
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full ${tier.buttonColor} text-center text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included in All Plans</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">✓ Clean Design</h4>
                <p className="text-sm text-gray-600">Modern, professional look that represents your school well</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">✓ Fast Loading</h4>
                <p className="text-sm text-gray-600">Optimized for quick loading even on slow connections</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">✓ Easy Updates</h4>
                <p className="text-sm text-gray-600">Simple content management you can handle yourself</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                💡 <strong>Need something unique?</strong> We offer custom solutions including student portals, 
                online examination systems, and library management. Let&apos;s build the perfect solution for your institution!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}