'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  FaCheck, 
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaUser,
  FaUsers,
  FaChartLine,
  FaCog,
  FaDesktop,
  FaMobile,
  FaCloud
} from 'react-icons/fa';

// Project data - in a real app, this would come from a database or API
const projectsData = [
  {
    id: "1",
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
    },
    keyHighlights: [
      "20+ Pages - Complete school management coverage",
      "4 User Roles - Admin, Teacher, Parent, Student interfaces",
      "Multi-Step Workflows - Admission forms, report generation",
      "Real-Time Features - Live notifications, instant updates",
      "Mobile Responsive - Works perfectly on all devices",
      "Modern Tech Stack - React 18, TypeScript, Tailwind CSS",
      "Error Protection - Comprehensive error boundaries",
      "Professional UI - Clean, modern design with animations",
      "Data Visualization - Interactive charts and analytics",
      "Bulk Operations - Efficient mass data processing"
     ]
   },
   {
     id: "2",
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
     },
     keyHighlights: [
       "Professional Design - Clean, modern school website with excellent UX",
       "Interactive Gallery - Categorized photo showcase with smooth animations",
       "Achievement Display - Impressive statistics and school accomplishments",
       "Program Showcase - Comprehensive academic and extracurricular programs",
       "Mobile Responsive - Perfect viewing experience on all devices",
       "Next.js Optimized - Fast loading with server-side rendering",
       "SEO Friendly - Optimized for search engines and discoverability",
       "Contact Integration - Easy communication channels for parents",
       "Newsletter System - Email subscription and communication features",
       "25+ Years Legacy - Established institution with proven track record"
     ]
   },
   {
     id: "3",
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
     },
     keyHighlights: [
       "Subscription Model - £4.99/month recurring billing with Stripe",
       "Multi-Platform Access - User, restaurant, and admin dashboards",
       "Deal Redemption System - Unique code generation and validation",
       "Restaurant Partnerships - Easy onboarding and management tools",
       "Location-Based Discovery - Geographic restaurant search and filtering",
       "Savings Tracking - Up to 50% savings on dining experiences",
       "Real-Time Updates - Live deal availability and restaurant status",
       "Mobile Optimized - Perfect mobile experience for on-the-go users",
       "Payment Security - Stripe integration for secure transactions",
       "Analytics Dashboard - Comprehensive performance tracking"
     ]
   },
   {
     id: "4",
     title: "MediCare Manager",
     category: "Healthcare System",
     description: "Healthcare management system for hospitals and clinics with patient records and appointment scheduling.",
     image: "/serviwo.png",
     demoUrl: "#",
     githubUrl: "#",
     technologies: ["React", "Express.js", "PostgreSQL", "Redis"],
     coreFeatures: {
       "Patient Management": [
         "Patient Registration & Medical History",
         "Appointment Scheduling System",
         "Doctor Dashboard & Patient Queue",
         "Prescription Management",
         "Billing & Insurance Claims"
       ]
     },
     stats: {
       users: "300+ Doctors",
       patients: "10K+ Patients",
       clinics: "25+ Clinics"
     }
   }
  // Add other projects as needed
];

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

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params?.id as string;
  
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

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
                {/* <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a> */}
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
                <img
                  src={project.image}
                  alt={project.title}
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
