// Project data - centralized location for all project information
export const projectsData = [
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
     },
     testimonial: {
       text: "Healthcare management made simple and efficient.",
       author: "Healthcare Professional"
     },
     keyHighlights: [
       "Patient Management System",
       "Appointment Scheduling",
       "Electronic Health Records",
       "Billing Integration"
     ]
   }
];

export type Project = typeof projectsData[0];

