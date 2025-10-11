'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FaCheck, FaStar } from 'react-icons/fa';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingTiers = [
    {
      name: "Basic",
      price: "₹5,000",
      duration: "one-time",
      description: "Perfect for small rural schools starting their digital journey",
      features: [
        "5-page responsive website",
        "Home, About, Academics, Gallery, Contact",
        "Mobile-friendly design",
        "Contact form with email notifications",
        "Google Maps integration",
        "Basic SEO optimization",
        "1 month free support",
        "Hosting guidance",
      ],
      popular: false,
      color: "from-gray-500 to-gray-200",
      buttonColor: "bg-gray-700 hover:bg-gray-800",
    },
    {
      name: "Standard",
      price: "₹12,000",
      duration: "one-time",
      description: "Ideal for schools wanting more features and functionality",
      features: [
        "10-page responsive website",
        "All Basic features included",
        "Event calendar & announcements",
        "Photo & video gallery",
        "Downloads section (PDFs, forms)",
        "Admission inquiry form",
        "Staff & faculty pages",
        "Social media integration",
        "Advanced SEO optimization",
        "3 months free support",
      ],
      popular: true,
      color: "from-primary-500 to-primary-600",
      buttonColor: "bg-[#075985] text-primary-600 hover:bg-gray-100",
    },
    {
      name: "Premium",
      price: "₹20,000",
      duration: "one-time",
      description: "Complete solution for schools wanting a full-featured portal",
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
        "Email/SMS notification setup",
        "6 months free support",
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
            <p className="text-sm font-semibold">🎓 As I&apos;m starting my freelance career, these are introductory rates - invest early!</p>
          </div>
        </motion.div>

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
                💡 <strong>Custom requirements?</strong> Need additional features like student portals, 
                online exams, or library management? Let&apos;s discuss a custom package for your needs!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

