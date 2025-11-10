'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaCheck, 
  FaArrowLeft,
  FaExternalLinkAlt,
  FaUser,
  FaUsers,
  FaChartLine,
  FaCog,
  FaDesktop,
} from 'react-icons/fa';
import { Project } from '@/data/projectsData';

const roleIcons = {
  "Admin Dashboard": <FaUser className="text-red-500" />,
  "Teacher Portal": <FaUsers className="text-blue-500" />,
  "Parent Dashboard": <FaChartLine className="text-green-500" />,
  "Student Portal": <FaCog className="text-purple-500" />,
  "Homepage Sections": <FaDesktop className="text-blue-500" />,
  "Content Management": <FaCog className="text-green-500" />,
  "User Platform": <FaUsers className="text-blue-500" />,
  "Restaurant Dashboard": <FaUser className="text-green-500" />,
  "Admin Panel": <FaCog className="text-red-500" />,
  "Patient Management": <FaUser className="text-red-500" />
};

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Built With:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Link
          href="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-all"
        >
          <FaArrowLeft className="mr-2" />
          Back to Services
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-5 gap-6 mb-12"
        >
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="font-bold text-3xl text-primary-600 mb-2">{value}</div>
              <div className="text-gray-600 capitalize font-semibold">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
            </div>
          ))}
        </motion.div>

        {/* Core Features */}
        {project.coreFeatures && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Features by User Role</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {Object.entries(project.coreFeatures).map(([role, features]) => (
                <div key={role} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white">
                    <div className="flex items-center space-x-3">
                      {roleIcons[role as keyof typeof roleIcons]}
                      <h3 className="text-2xl font-bold">{role}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                     <ul className="space-y-4">
                       {features.map((feature: string, idx: number) => (
                         <li key={idx} className="flex items-start text-gray-700">
                           <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                           <span>{feature}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* UI/UX Features */}
        {project.uiFeatures && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FaDesktop className="text-3xl text-blue-500" />
              <h2 className="text-3xl font-bold text-gray-900">UI/UX Features</h2>
            </div>
             <div className="grid md:grid-cols-2 gap-4">
               {project.uiFeatures.map((feature: string, idx: number) => (
                 <div key={idx} className="flex items-start text-gray-700">
                   <FaCheck className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                   <span>{feature}</span>
                 </div>
               ))}
             </div>
          </motion.div>
        )}

        {/* Technical Features */}
        {project.technicalFeatures && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FaCog className="text-3xl text-purple-500" />
              <h2 className="text-3xl font-bold text-gray-900">Technical Features</h2>
            </div>
             <div className="grid md:grid-cols-2 gap-4">
               {project.technicalFeatures.map((feature: string, idx: number) => (
                 <div key={idx} className="flex items-start text-gray-700">
                   <FaCheck className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                   <span>{feature}</span>
                 </div>
               ))}
             </div>
          </motion.div>
        )}

        {/* Key Highlights */}
        {project.keyHighlights && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Key Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="font-semibold">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Testimonial */}
        {project.testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
            <blockquote className="text-xl text-gray-600 italic mb-4">
              &quot;{project.testimonial.text}&quot;
            </blockquote>
            <p className="text-gray-500 font-semibold">— {project.testimonial.author}</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl shadow-lg p-8 text-center text-white mb-6"
        >
          <h2 className="text-3xl font-bold mb-4">Interested in a Similar Solution?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let&apos;s discuss your project requirements and create a custom solution that fits your needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

