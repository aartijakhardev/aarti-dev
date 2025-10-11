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
  FaMobileAlt 
} from 'react-icons/fa';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      icon: <FaUsersCog className="text-4xl" />,
      title: "CRM for Lead Management",
      description: "Built comprehensive Customer Relationship Management systems with advanced lead tracking, automated workflows, and analytics dashboards.",
      features: ["Lead tracking & scoring", "Automated follow-ups", "Sales pipeline management", "Custom reporting"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaHospital className="text-4xl" />,
      title: "Healthcare Management System",
      description: "Developed healthcare applications for caregiver management with shift scheduling, payment processing, and digital documentation.",
      features: ["Shift management", "Invoice & payments", "Automated form signing", "Staff coordination"],
      color: "from-green-500 to-green-600",
    },
  ];

  const skills = [
    { icon: <FaCalendarAlt />, name: "Shift Scheduling", description: "Automated scheduling systems" },
    { icon: <FaFileInvoiceDollar />, name: "Payment Management", description: "Invoice generation & tracking" },
    { icon: <FaFileSignature />, name: "Digital Forms", description: "E-signature integration" },
    { icon: <FaChartLine />, name: "Analytics", description: "Real-time reporting" },
    { icon: <FaDatabase />, name: "Database Design", description: "Scalable architecture" },
    { icon: <FaMobileAlt />, name: "Responsive UI", description: "Mobile-first approach" },
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

  const itemVariants = {
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
    <section id="experience" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a software engineer, I&apos;ve built robust systems for businesses across multiple industries,
            ensuring quality, scalability, and client satisfaction.
          </p>
        </motion.div>

        {/* Main Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  {exp.icon}
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{exp.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {exp.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-primary-600 text-3xl mb-3 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{skill.name}</h4>
                <p className="text-xs text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">My Commitment to You</h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            As a software engineer, I guarantee clean, maintainable code, transparent communication,
            and ongoing support. Your success is my priority, and I&apos;ll work with you every step of the way
            to ensure your website exceeds expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

