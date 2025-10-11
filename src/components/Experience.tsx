'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaUsersCog, 
  FaHospital, 
  FaCalendarAlt, 
  FaFileInvoiceDollar, 
  FaFileSignature,
  FaChartLine,
  FaDatabase,
  FaMobileAlt,
  FaRocket,
  FaCheckCircle,
  FaCode,
  FaUsers
} from 'react-icons/fa';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      icon: <FaUsersCog className="text-4xl" />,
      title: "CRM for Lead Management",
      description: "Engineered enterprise-grade CRM solutions that increased client conversion rates by 40% through intelligent lead scoring and automated workflows.",
      features: ["Smart lead tracking & scoring", "Automated follow-up sequences", "Visual sales pipeline", "Custom analytics dashboards"],
      color: "from-blue-500 to-blue-600",
      stats: { metric: "40%", label: "Conversion Increase" }
    },
    {
      icon: <FaHospital className="text-4xl" />,
      title: "Healthcare Management System",
      description: "Built comprehensive healthcare platform serving 500+ caregivers, streamlining operations and reducing administrative overhead by 60%.",
      features: ["Intelligent shift scheduling", "Automated invoicing", "Digital signature workflows", "Real-time staff coordination"],
      color: "from-green-500 to-green-600",
      stats: { metric: "500+", label: "Active Users" }
    },
  ];

  const achievements = [
    { icon: <FaRocket />, number: "50+", label: "Projects Delivered", color: "text-blue-600" },
    { icon: <FaUsers />, number: "30+", label: "Happy Clients", color: "text-green-600" },
    { icon: <FaCode />, number: "100K+", label: "Lines of Code", color: "text-purple-600" },
    { icon: <FaCheckCircle />, number: "99%", label: "Client Satisfaction", color: "text-orange-600" },
  ];

  const skills = [
    { icon: <FaCalendarAlt />, name: "Shift Scheduling", description: "Smart automation", gradient: "from-blue-500 to-blue-600" },
    { icon: <FaFileInvoiceDollar />, name: "Payment Systems", description: "Secure processing", gradient: "from-green-500 to-green-600" },
    { icon: <FaFileSignature />, name: "Digital Forms", description: "E-signature ready", gradient: "from-purple-500 to-purple-600" },
    { icon: <FaChartLine />, name: "Analytics", description: "Real-time insights", gradient: "from-orange-500 to-orange-600" },
    { icon: <FaDatabase />, name: "Database Design", description: "Scalable systems", gradient: "from-pink-500 to-pink-600" },
    { icon: <FaMobileAlt />, name: "Mobile First", description: "Responsive design", gradient: "from-indigo-500 to-indigo-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Real-World Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Track Record of Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From enterprise CRM systems to healthcare platforms, we&apos;ve delivered solutions that drive real business results.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
            >
              <div className={`${achievement.color} text-4xl mb-3 flex justify-center`}>
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.number}</div>
              <div className="text-sm text-gray-600">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Main Experience Cards */}
    <div className="mb-20 space-y-16">
          {/* CRM Experience - Left Image Style */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <FaUsersCog className="text-6xl text-blue-600 mb-4" />
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  40% Conversion Increase
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">CRM for Lead Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Engineered enterprise-grade CRM solutions that increased client conversion rates by 40% through intelligent lead scoring and automated workflows. Serving businesses across multiple industries with scalable, robust systems.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Smart lead tracking & scoring algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Automated follow-up sequences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Visual sales pipeline with drag-drop</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Custom analytics dashboards</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Healthcare Experience - Right Image Style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Management System</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Built comprehensive healthcare platform serving 500+ caregivers, streamlining operations and reducing administrative overhead by 60%. A complete solution for modern healthcare management.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Intelligent shift scheduling system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Automated invoicing & payments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Digital signature workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Real-time staff coordination</span>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <FaHospital className="text-6xl text-green-600 mb-4" />
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  500+ Active Users
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Technical Expertise
            </h3>
            <p className="text-gray-600">Technologies and skills we master to deliver exceptional results</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.08, rotate: 2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 text-center group cursor-pointer"
              >
                <div className={`bg-gradient-to-r ${skill.gradient} text-white text-3xl mb-3 flex justify-center w-12 h-12 rounded-lg items-center mx-auto group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{skill.name}</h4>
                <p className="text-xs text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section - Elegant Timeline Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Section Header with Gradient */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 blur-lg opacity-30 rounded-full"></div>
                <h3 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent px-8">
                  Why Partner With Us?
                </h3>
              </div>
            </motion.div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence isn&apos;t just a promise—it&apos;s our commitment to every project
            </p>
          </div>

          {/* Flowing Timeline Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            {/* Promise Items in Staggered Layout */}
            <div className="relative space-y-8">
              {[
                {
                  icon: "⚡",
                  title: "Lightning-Fast Delivery",
                  description: "We respect your time as much as you do. Projects delivered on schedule, every single time, without compromising on quality or attention to detail.",
                  gradient: "from-blue-500 to-cyan-500",
                  delay: 0.6,
                  position: "left"
                },
                {
                  icon: "🛡️",
                  title: "Uncompromising Quality",
                  description: "Clean, scalable, maintainable code backed by rigorous testing. Your website will perform flawlessly from day one and scale beautifully as you grow.",
                  gradient: "from-green-500 to-emerald-500",
                  delay: 0.7,
                  position: "right"
                },
                {
                  icon: "🤝",
                  title: "Partnership Beyond Launch",
                  description: "Your success is our success. We provide dedicated ongoing support, training, and guidance to ensure you thrive in the digital landscape.",
                  gradient: "from-purple-500 to-pink-500",
                  delay: 0.8,
                  position: "left"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className={`flex items-start gap-6 ${item.position === 'right' ? 'md:flex-row-reverse md:text-right' : ''}`}
                >
                  {/* Icon with Glassmorphism */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative flex-shrink-0 group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-2xl backdrop-blur-sm`}>
                      {item.icon}
                    </div>
                    {/* Pulse effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl animate-ping opacity-20`}></div>
                  </motion.div>

                  {/* Content with Glass Effect */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 group"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Decorative corner element */}
                      <div className={`absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full blur-2xl`}></div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Quote Section with Elegant Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-16 relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 text-center">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl opacity-10"
                  ></motion.div>
                  <motion.div
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      rotate: [90, 0, 90]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"
                  ></motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block text-6xl mb-6"
                  >
                    ✨
                  </motion.div>
                  <blockquote className="text-2xl md:text-3xl font-light text-white mb-4 italic">
                    &ldquo;Your vision, our expertise—together we create digital experiences that matter.&rdquo;
                  </blockquote>
                  <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <p className="text-primary-300 font-semibold">Excellence in Every Line of Code</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}