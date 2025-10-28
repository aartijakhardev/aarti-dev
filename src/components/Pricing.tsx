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
    price: "₹8,999",
    duration: "one-time",
    description: "Perfect for new schools & startups looking to establish their online presence with a professional landing page",
    features: [
      { name: "Professional single-page website design", price: 3500 },
      { name: "Eye-catching hero section with custom graphics", price: 1500 },
      { name: "About institution & key features section", price: 1000 },
      { name: "Contact form with Google Maps integration", price: 1500 },
      { name: "Fully mobile-responsive design", price: 800 },
      { name: "Basic SEO setup", price: 700 },
    ],
    includedFree: [
      "2 weeks of dedicated support",
      "SSL certificate setup",
      "Easy upgrade path to full website",
    ],
    color: "from-green-500 to-green-600",
    buttonColor: "bg-green-700 hover:bg-green-800",
  };

  const pricingTiers = [
    {
      name: "Basic",
      price: "₹18,999",
      duration: "one-time",
      description: "Perfect for schools beginning their digital transformation journey",
      features: [
        { name: "Professional 5-page responsive website", price: 8000 },
        { name: "Custom design & branding", price: 3500 },
        { name: "Contact form with email notifications", price: 2000 },
        { name: "Google Maps integration", price: 1000 },
        { name: "Image gallery (up to 50 photos)", price: 1500 },
        { name: "SEO optimization (on-page)", price: 2000 },
        { name: "Social media integration", price: 999 },
      ],
      includedFree: [
        "1 month dedicated support",
        "SSL certificate & security",
        "Mobile optimization",
      ],
      popular: false,
      color: "from-gray-500 to-gray-600",
      buttonColor: "bg-gray-700 hover:bg-gray-800",
    },
    {
      name: "Standard",
      price: "₹33,999",
      duration: "one-time",
      description: "Comprehensive solution for schools seeking advanced features and functionality",
      features: [
        { name: "Professional 10-page responsive website", price: 12000 },
        { name: "Premium custom design & UI/UX", price: 5000 },
        { name: "Event calendar & announcements system", price: 3500 },
        { name: "Photo & video gallery", price: 2500 },
        { name: "Downloads section (PDFs, forms)", price: 2000 },
        { name: "Staff & faculty pages with profiles", price: 3500 },
        { name: "Social media feed integration", price: 1500 },
        { name: "Advanced SEO & Google Analytics", price: 3000 },
        { name: "Newsletter signup integration", price: 999 },
      ],
      includedFree: [
        "3 months dedicated support",
        "Content management training",
        "Backup & security setup",
      ],
      popular: true,
      color: "from-primary-500 to-primary-600",
      buttonColor: "bg-[#075985] text-primary-600 hover:bg-gray-100",
    },
    {
      name: "Premium",
      price: "₹64,999",
      duration: "one-time",
      description: "Enterprise-grade solution for schools wanting a complete digital ecosystem",
      features: [
        { name: "Unlimited pages with custom architecture", price: 15000 },
        { name: "Student/Parent login portal", price: 12000 },
        { name: "Admin dashboard with analytics", price: 5000 },
        { name: "Online fee payment integration (Razorpay/Paytm)", price: 8000 },
        { name: "Attendance tracking system", price: 6000 },
        { name: "Assignment upload/download module", price: 5000 },
        { name: "Notice board with push notifications", price: 4000 },
        { name: "Multi-language support (Hindi/English)", price: 3500 },
        { name: "Blog/News section with CMS", price: 3000 },
        { name: "Email/SMS notification system", price: 2500 },
        { name: "Live chat support widget", price: 999 },
      ],
      includedFree: [
        "6 months dedicated support",
        "Priority bug fixes",
        "Monthly performance reports",
        "Staff training sessions",
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

  const calculateSubtotal = (features:any) => {
    return features.reduce((sum:any, feature:any) => sum + feature.price, 0);
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
            Transparent Pricing for Schools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clear, itemized pricing with no hidden costs. See exactly what you&apos;re paying for.
          </p>
          <div className="mt-6 inline-block bg-primary-100 text-primary-800 px-6 py-3 rounded-full">
            <p className="text-sm font-semibold">🎓 Special rates for educational institutions - Invest in your digital future!</p>
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
              Perfect for new schools and startups who want to establish a professional online presence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-500"
            >
              {/* Header Section */}
              <div className={`bg-gradient-to-br ${starterPlan.color} p-6 text-white`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{starterPlan.name}</h3>
                    <p className="text-sm opacity-90">
                      {starterPlan.description}
                    </p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm md:min-w-[200px]">
                    <div className="text-xs opacity-90 mb-1">Package Total</div>
                    <div className="mb-1">
                      <span className="text-3xl font-bold">{starterPlan.price}</span>
                      <span className="text-sm opacity-90">/{starterPlan.duration}</span>
                    </div>
                    <div className="text-xs opacity-75">
                      Value: ₹{calculateSubtotal(starterPlan.features).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Features List */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {starterPlan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start justify-between text-xs border-b border-gray-100 pb-2">
                          <div className="flex items-start space-x-2 flex-1">
                            <FaCheck className="text-green-500 mt-0.5 flex-shrink-0 text-xs" />
                            <span className="text-gray-700">{feature.name}</span>
                          </div>
                          <span className="text-gray-600 font-semibold ml-2 whitespace-nowrap">₹{feature.price.toLocaleString()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bonus & CTA */}
                  <div className="flex flex-col justify-between">
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <h5 className="font-semibold text-green-800 mb-2 text-sm">✨ Bonus Inclusions:</h5>
                      <ul className="space-y-1">
                        {starterPlan.includedFree.map((item, idx) => (
                          <li key={idx} className="text-green-700 text-xs flex items-start">
                            <span className="mr-2 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="flex justify-between items-center text-xs mb-2">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-semibold text-gray-900">₹{calculateSubtotal(starterPlan.features).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-200">
                        <span className="font-bold text-gray-900">Package Price:</span>
                        <span className="font-bold text-green-600">{starterPlan.price}</span>
                      </div>
                     
                    </div>

                    <Link
                      href="/contact"
                      className={`block w-full ${starterPlan.buttonColor} text-center text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm`}
                    >
                      Start Small, Grow Big →
                    </Link>
                  </div>
                </div>
              </div>
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
              whileHover={{ scale: 1.03, y: -10 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                tier.popular ? 'ring-4 ring-primary-500' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-semibold flex items-center space-x-1 z-10">
                  <FaStar className="text-yellow-300" />
                  <span>Most Popular</span>
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${tier.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className={`text-sm mb-4 ${tier.popular ? 'text-white' : 'opacity-90'}`}>
                  {tier.description}
                </p>
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-xs opacity-90 mb-1">Package Total</div>
                  <div>
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-sm opacity-90">/{tier.duration}</span>
                  </div>
                  <div className="text-xs opacity-75 mt-1">
                    Value: ₹{calculateSubtotal(tier.features).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Feature Breakdown:</h4>
                <ul className="space-y-2 mb-4 max-h-96 overflow-y-auto">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start justify-between text-xs border-b border-gray-50 pb-2">
                      <div className="flex items-start space-x-2 flex-1">
                        <FaCheck className="text-green-500 mt-0.5 flex-shrink-0 text-xs" />
                        <span className="text-gray-700">{feature.name}</span>
                      </div>
                      <span className="text-gray-600 font-semibold ml-2 whitespace-nowrap">₹{feature.price.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mb-4">
                  <h5 className="font-semibold text-blue-800 mb-2 text-xs">✨ Bonus Inclusions (Free):</h5>
                  <ul className="space-y-1">
                    {tier.includedFree.map((item, idx) => (
                      <li key={idx} className="text-blue-700 text-xs flex items-center">
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              

                <Link
                  href="/contact"
                  className={`block w-full ${tier.buttonColor} text-center text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm`}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Our Transparent Pricing?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left mb-6">
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">✓ No Hidden Costs</h4>
                <p className="text-sm text-gray-600">See exactly what each feature costs - complete transparency</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">✓ Fair Pricing</h4>
                <p className="text-sm text-gray-600">Package discounts mean you save more when you choose comprehensive plans</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">✓ Flexible Options</h4>
                <p className="text-sm text-gray-600">Add or remove features based on your specific needs</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                💡 <strong>Need a custom solution?</strong> We offer tailored packages for unique requirements including 
                ERP systems, learning management systems, and custom integrations. Contact us for a personalized quote!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Payment Terms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 max-w-3xl mx-auto">
            <h4 className="font-bold text-gray-900 mb-3">💳 Flexible Payment Options</h4>
            <p className="text-sm text-gray-600 mb-2">
              We understand budget constraints. Enjoy 50% payment upfront, 50% on delivery.
            </p>
            <p className="text-xs text-gray-500">
              All prices are one-time development costs. Optional: Annual maintenance available at 15% of package price.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}