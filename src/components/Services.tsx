'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaCheck, 
  FaCode, 
  FaUsersCog, 
  FaHospital, 
  FaGraduationCap, 
  FaMobileAlt,
  FaDatabase,
  FaEye,
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Secure & Scalable"],
      color: "from-blue-500 to-blue-600",
      projects: 15
    },
    {
      icon: <FaUsersCog className="text-4xl" />,
      title: "CRM Solutions", 
      description: "Enterprise-grade customer relationship management systems",
      features: ["Lead Management", "Sales Pipeline", "Analytics Dashboard", "Automated Workflows"],
      color: "from-green-500 to-green-600",
      projects: 8
    },
    {
      icon: <FaHospital className="text-4xl" />,
      title: "Healthcare Systems",
      description: "Comprehensive healthcare management and patient care solutions",
      features: ["Patient Management", "Appointment Scheduling", "Medical Records", "Billing Integration"],
      color: "from-red-500 to-red-600", 
      projects: 5
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Educational Platforms",
      description: "Complete school management systems and e-learning platforms",
      features: ["Student Portal", "LMS", "Fee Management", "Communication Tools"],
      color: "from-purple-500 to-purple-600",
      projects: 12
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile app development",
      features: ["iOS & Android", "Cross-platform", "Push Notifications", "Offline Support"],
      color: "from-indigo-500 to-indigo-600",
      projects: 7
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Backend Solutions",
      description: "Robust APIs and server-side architecture for scalable applications",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security"],
      color: "from-gray-600 to-gray-700",
      projects: 20
    }
  ];

  const demoProjects = [
    {
      id: 1,
      title: "EduManage - School Management System",
      category: "Educational Platform",
      description: "Comprehensive school management platform with 20+ pages covering complete academic administration, multi-role dashboards, and real-time analytics.",
      image: "/edu-vue-demo.png",
      demoUrl: "https://edu-vue-demo.vercel.app/",
      githubUrl: "#",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Recharts"],
      coreFeatures: {
        "Admin Dashboard": [
          "Student Management - Add, edit, view, and manage student records",
          "Teacher Management - Staff database with qualifications and assignments", 
          "Fee Management - Payment tracking, overdue alerts, receipt generation",
          "Admission Processing - Multi-step admission forms with document verification",
          "Approval Workflow - Review and approve/reject admission requests",
          "Teacher Attendance - Mark and track staff attendance",
          "Test Report Analytics - View and analyze all student test results",
          "Exam Report Creation - Generate comprehensive exam reports",
          "Marksheet Templates - Customizable report card designs",
          "Announcements - Create and manage school-wide communications"
        ],
        "Teacher Portal": [
          "My Classes - View assigned classes with schedules and student counts",
          "Student Grades - Enter and manage student performance data", 
          "Test Report Creation - Create individual test reports with remarks",
          "Student Attendance - Mark daily attendance with parent notifications",
          "Class Analytics - View class performance and attendance statistics"
        ],
        "Parent Dashboard": [
          "Child Performance - Detailed academic progress and analysis",
          "Fee Status - Payment history, pending amounts, and payment options",
          "Attendance Tracking - Real-time attendance updates and summaries", 
          "School Communications - View announcements and notices",
          "Report Cards - Download and view examination results"
        ],
        "Student Portal": [
          "Personal Profile - Complete student information and records",
          "Test Reports - Individual test results with performance insights",
          "Marksheet Access - Download official examination marksheets", 
          "Academic Progress - Subject-wise performance and improvement areas"
        ]
      },
      uiFeatures: [
        "Responsive Design - Works on desktop, tablet, and mobile devices",
        "Dark/Light Themes - Toggle between color schemes",
        "Modern UI - Clean, professional interface with gradients and icons", 
        "Role-Based Navigation - Different sidebar menus for each user type",
        "Interactive Charts - Data visualization with Recharts library",
        "Multi-Step Forms - Guided admission process with progress indicators",
        "Real-Time Notifications - Toast messages for user feedback",
        "Search & Filtering - Advanced filtering across all data tables"
      ],
      technicalFeatures: [
        "Error Boundaries - Graceful error recovery without app crashes",
        "404 Protection - Smart routing with fallback pages", 
        "Performance Optimized - Efficient React components with proper state management",
        "ARIA Compliance - Proper accessibility attributes",
        "Code Splitting - Efficient bundle loading",
        "Bulk Operations - Mass data processing and exports"
      ],
      stats: {
        pages: "20+ Pages",
        userRoles: "4 User Roles",
        students: "500+ Students", 
        schools: "15+ Schools",
        satisfaction: "98%"
      },
      testimonial: {
        text: "EduManage transformed our school administration completely. The multi-role system and real-time analytics have increased our efficiency by 60%. The error-free operation and modern UI impressed both staff and parents!",
        author: "Principal, Modern Academy"
      }
    },
    {
      id: 2,
      title: "Sunrise Education Academy Website",
      category: "School Landing Page",
      description: "Professional school landing page built with Next.js showcasing programs, achievements, and community engagement for Sunrise Education Academy in Losal, Sikar.",
      image: "/Sunrise-Education-Academy-Losal-Sikar.png",
      demoUrl: "https://www.sunriselosal.com/",
      githubUrl: "#",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      coreFeatures: {
        "Homepage Sections": [
          "Hero Section - Welcome message with call-to-action buttons",
          "Gallery Showcase - Interactive photo gallery with categories", 
          "Achievement Statistics - Excellence in numbers display",
          "Programs Overview - Academic programs and activities",
          "Testimonials - Parent and student feedback carousel",
          "Contact Information - School details and contact form",
          "Navigation Menu - Responsive navigation with quick links"
        ],
        "Content Management": [
          "Photo Categories - School Events, Activities, Learning, etc.",
          "Program Details - Primary Education, STEM, Language Arts, Creative Arts",
          "Statistics Display - Student count, teacher count, programs",
          "Testimonial Management - Parent reviews and ratings",
          "Contact Integration - Phone, email, and location details"
        ]
      },
      uiFeatures: [
        "Responsive Design - Works perfectly on desktop, tablet, and mobile",
        "Modern UI - Clean, professional design with school branding",
        "Interactive Gallery - Categorized photo showcase with smooth transitions", 
        "Animated Statistics - Eye-catching number counters and achievements",
        "Professional Typography - Clear, readable fonts and hierarchy",
        "Call-to-Action Buttons - Schedule Visit and Apply Now buttons",
        "Smooth Scrolling - Pleasant navigation experience",
        "Loading Animations - Professional loading states"
      ],
      technicalFeatures: [
        "Next.js Framework - Server-side rendering and optimization",
        "SEO Optimized - Meta tags and semantic HTML structure", 
        "Fast Loading - Optimized images and efficient code",
        "Mobile Responsive - Bootstrap/Tailwind responsive grid",
        "Cross-browser Compatible - Works on all modern browsers",
        "Newsletter Integration - Email subscription functionality"
      ],
      stats: {
        students: "400+ Students",
        teachers: "15+ Teachers",
        programs: "10+ Programs", 
        experience: "25+ Years",
        satisfaction: "100%"
      },
      testimonial: {
        text: "The website perfectly represents our school's values and achievements. Parents love the clean design and easy access to information. It has significantly improved our online presence and inquiry rates!",
        author: "Sunrise Education Academy Administration"
      }
    },
    {
      id: 3,
      title: "Eatinout - Restaurant Deals Platform",
      category: "Subscription Platform",
      description: "Subscription-based restaurant deals platform connecting diners with exclusive offers. Features Stripe payments, restaurant partnerships, and deal redemption system.",
      image: "/Eatinout.png",
      demoUrl: "https://www.eatinout.co.uk/",
      githubUrl: "#",
      technologies: ["React", "Next.js", "Stripe", "Node.js", "MongoDB"],
      coreFeatures: {
        "User Platform": [
          "Monthly Subscription - £4.99/month with Stripe integration",
          "Deal Browsing - Filter by area, cuisine, and dining type", 
          "Code Redemption - Generate unique discount codes in wallet",
          "Restaurant Search - Find participating restaurants by location",
          "Savings Tracker - Track total savings and deal usage",
          "Mobile Wallet - Store and manage redeemed offers",
          "User Dashboard - Account management and subscription control"
        ],
        "Restaurant Dashboard": [
          "Partner Registration - Easy restaurant onboarding process",
          "Deal Management - Create and manage exclusive offers",
          "Analytics Dashboard - Track redemption rates and performance",
          "Customer Insights - View deal usage and customer data",
          "Offer Scheduling - Set deal availability and time restrictions",
          "Revenue Tracking - Monitor partnership revenue and commissions"
        ],
        "Admin Panel": [
          "Subscription Management - Handle user payments and billing",
          "Restaurant Approval - Review and approve restaurant partners",
          "Deal Moderation - Ensure deal quality and compliance",
          "Payment Processing - Manage Stripe transactions and payouts",
          "Analytics & Reports - Platform-wide performance metrics",
          "Customer Support - Handle user and restaurant inquiries"
        ]
      },
      uiFeatures: [
        "Responsive Design - Perfect experience on all devices",
        "Interactive Map - Location-based restaurant discovery",
        "Advanced Filtering - Search by cuisine, area, and offer type", 
        "Clean UI Design - Modern, user-friendly interface",
        "Quick Deal Browse - Easy scrolling through available offers",
        "Instant Code Generation - Real-time offer redemption",
        "Subscription Flow - Seamless Stripe checkout integration",
        "Loading States - Smooth transitions and data loading"
      ],
      technicalFeatures: [
        "Stripe Integration - Secure subscription and payment processing",
        "Real-time Updates - Live deal availability and restaurant status", 
        "Geolocation Services - Location-based restaurant suggestions",
        "API Integration - Restaurant data and deal management",
        "Subscription Logic - Recurring billing and access control",
        "Code Generation - Unique redemption codes for each offer",
        "Email Notifications - Deal alerts and subscription updates",
        "Security Features - User authentication and payment protection"
      ],
      stats: {
        subscription: "£4.99/month",
        savings: "Up to 50%",
        restaurants: "100+ Partners",
        deals: "Weekly Updates",
        satisfaction: "95%"
      },
      testimonial: {
        text: "Eatinout has transformed how we dine out! The subscription pays for itself with just one meal, and we're discovering amazing restaurants we never knew existed. The deal redemption process is seamless and restaurants love the platform too!",
        author: "Platform User & Restaurant Partner"
      }
    },
    // {
    //   id: 2,
    //   title: "MediCare Manager",
    //   category: "Healthcare System", 
    //   description: "Healthcare management system for hospitals and clinics with patient records and appointment scheduling.",
    //   image: "/serviwo.png",
    //   demoUrl: "#",
    //   githubUrl: "#", 
    //   technologies: ["React", "Express.js", "PostgreSQL", "Redis"],
    //   features: [
    //     "Patient Registration & Medical History",
    //     "Appointment Scheduling System",
    //     "Doctor Dashboard & Patient Queue",
    //     "Prescription Management",
    //     "Billing & Insurance Claims",
    //     "Medical Report Generation", 
    //     "Inventory Management",
    //     "Staff Shift Management",
    //     "Emergency Alert System",
    //     "Telemedicine Integration"
    //   ],
    //   stats: {
    //     users: "300+ Doctors",
    //     patients: "10K+ Patients",
    //     clinics: "25+ Clinics"
    //   },
    //   testimonial: {
    //     text: "Our clinic operations are now 60% more efficient. Patient satisfaction has increased significantly.",
    //     author: "Dr. Smith, City Hospital"
    //   }
    // },
    // {
    //   id: 3,
    //   title: "LeadGen CRM",
    //   category: "CRM Solution",
    //   description: "Advanced customer relationship management system with lead scoring and automation.",
    //   image: "/amazing.png",
    //   demoUrl: "#", 
    //   githubUrl: "#",
    //   technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    //   features: [
    //     "Intelligent Lead Scoring",
    //     "Automated Follow-up Sequences",
    //     "Sales Pipeline Visualization",
    //     "Customer Journey Tracking",
    //     "Email Marketing Integration",
    //     "Analytics & Reporting Dashboard",
    //     "Team Collaboration Tools",
    //     "Mobile CRM App",
    //     "Third-party Integrations",
    //     "Custom Field Management"
    //   ],
    //   stats: {
    //     conversion: "40% Higher",
    //     leads: "50K+ Leads",
    //     teams: "100+ Sales Teams"
    //   },
    //   testimonial: {
    //     text: "Our conversion rate improved by 40% after implementing this CRM. The automation saves hours daily.",
    //     author: "Sales Director, TechCorp"
    //   }
    // },
    // {
    //   id: 4,
    //   title: "EduLearn Platform", 
    //   category: "E-Learning",
    //   description: "Comprehensive learning management system with video courses, quizzes, and progress tracking.",
    //   image: "/serviwo.png",
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   technologies: ["React", "Node.js", "MongoDB", "AWS"],
    //   features: [
    //     "Interactive Video Courses",
    //     "Real-time Quizzes & Assessments",
    //     "Progress Tracking & Analytics",
    //     "Discussion Forums & Chat",
    //     "Certificate Generation",
    //     "Multi-language Support",
    //     "Mobile Learning App",
    //     "Instructor Dashboard",
    //     "Payment Gateway Integration",
    //     "AI-powered Recommendations"
    //   ],
    //   stats: {
    //     students: "2K+ Students", 
    //     courses: "200+ Courses",
    //     completion: "85% Rate"
    //   },
    //   testimonial: {
    //     text: "The platform made online learning engaging and effective. Students love the interactive features.",
    //     author: "Education Director, LearnTech"
    //   }
    // },
    // {
    //   id: 5,
    //   title: "RetailSync POS",
    //   category: "Business Solution",
    //   description: "Point of sale system with inventory management, sales analytics, and customer loyalty programs.",
    //   image: "/amazing.png", 
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   technologies: ["Angular", "Django", "PostgreSQL", "Docker"],
    //   features: [
    //     "Modern POS Interface",
    //     "Real-time Inventory Tracking", 
    //     "Sales Analytics & Reports",
    //     "Customer Loyalty Programs",
    //     "Multi-store Management",
    //     "Barcode Scanning Integration",
    //     "Payment Gateway Support",
    //     "Staff Management System",
    //     "Supplier Management",
    //     "Cloud Backup & Sync"
    //   ],
    //   stats: {
    //     stores: "50+ Stores",
    //     transactions: "100K+ Daily",
    //     revenue: "25% Increase"
    //   },
    //   testimonial: {
    //     text: "Our retail operations are now streamlined. The analytics help us make better business decisions.",
    //     author: "Store Manager, RetailChain"
    //   }
    // },
    // {
    //   id: 6,
    //   title: "AgriTech Monitor",
    //   category: "IoT Solution", 
    //   description: "Smart agriculture monitoring system with sensor integration and crop management features.",
    //   image: "/serviwo.png",
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   technologies: ["React Native", "IoT Sensors", "Firebase", "Machine Learning"],
    //   features: [
    //     "Soil Moisture Monitoring",
    //     "Weather Data Integration",
    //     "Crop Health Analysis", 
    //     "Automated Irrigation Control",
    //     "Pest & Disease Detection",
    //     "Yield Prediction Analytics",
    //     "Mobile Farm Management",
    //     "Drone Integration Support",
    //     "Marketplace Connection",
    //     "Expert Advisory System"
    //   ],
    //   stats: {
    //     farmers: "500+ Farmers",
    //     acres: "10K+ Acres",
    //     yield: "30% Improvement"
    //   },
    //   testimonial: {
    //     text: "This technology revolutionized our farming. Crop yields increased by 30% with smart monitoring.",
    //     author: "Farm Owner, GreenFields"
    //   }
    // }
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
    <section id="services" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services & Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we build comprehensive digital solutions that drive business growth and user engagement.
          </p>
          <div className="mt-6 inline-block bg-primary-100 text-primary-800 px-6 py-3 rounded-full">
            <p className="text-sm font-semibold">🚀 10+ Projects Delivered • 98% Client Satisfaction</p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <div className="bg-white/20 rounded-lg px-3 py-1 backdrop-blur-sm">
                    <span className="text-sm font-semibold">{service.projects} Projects</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm opacity-90">{service.description}</p>
              </div>
              
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-center text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-4"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects & Demos
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across different industries and technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Link href={`/projects/${project.id}`} target="_blank"> <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all">
                        <FaEye className="text-lg" />
                      </button> </Link>
                      <Link href={project.demoUrl} target="_blank">
                        <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all">
                          <FaExternalLinkAlt className="text-lg" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                    <div className="flex space-x-1">
                      {project.technologies.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="font-bold text-lg text-primary-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm text-center"
                    >
                      View Details
                    </Link>
                    {/* <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <FaGithub />
                    </a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Solution?</h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss your project requirements and create a custom solution that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
             
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
