"use client";

import React, { useEffect, useState, useRef } from 'react';
import { FaCode, FaCheckCircle, FaClock, FaTools, FaShoppingCart, FaServer, FaDatabase, FaMobile, FaShieldAlt, FaQuestionCircle, FaReact, FaNodeJs, FaPython, FaPhp, FaWordpress, FaLaravel, FaAws, FaDocker, FaGitAlt, FaVuejs, FaAngular, FaSass, FaBootstrap, FaJenkins, FaGithub, FaJira, FaTrello, FaSlack, FaConfluence, FaBitbucket, FaCircle, FaArrowUp, FaAndroid, FaApple, FaFilter, FaFire, FaGooglePlay, FaAppStore, FaBars, FaTimes, FaHome, FaCogs, FaLaptopCode, FaChartLine, FaMoneyBillWave, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const process = [
  { step: 'Discovery & Planning', desc: 'We analyze your requirements and create a detailed project roadmap.' },
  { step: 'Design & Prototype', desc: 'We create wireframes and design mockups for your approval.' },
  { step: 'Development', desc: 'Our expert developers build your solution using modern technologies.' },
  { step: 'Testing & QA', desc: 'We thoroughly test all features and ensure quality standards.' },
  { step: 'Deployment & Support', desc: 'We launch your app and provide ongoing maintenance.' },
];

const services = [
  { icon: <FaMobile className="text-yellow-400 text-2xl" />, label: 'Native iOS Development', desc: 'High-performance iOS apps built with Swift and SwiftUI' },
  { icon: <FaAndroid className="text-yellow-400 text-2xl" />, label: 'Native Android Development', desc: 'Robust Android apps using Kotlin and Jetpack Compose' },
  { icon: <FaFilter className="text-yellow-400 text-2xl" />, label: 'Cross-Platform Development', desc: 'Flutter and React Native apps for multiple platforms' },
  { icon: <FaTools className="text-yellow-400 text-2xl" />, label: 'App Maintenance', desc: 'Regular updates, bug fixes, and performance optimization' },
  { icon: <FaServer className="text-yellow-400 text-2xl" />, label: 'Backend Development', desc: 'Scalable backend services and APIs for your app' },
  { icon: <FaShieldAlt className="text-yellow-400 text-2xl" />, label: 'App Security', desc: 'Security audits and implementation of best practices' },
];

const technologies = [
  { icon: <FaApple className="text-yellow-400 text-2xl" />, label: 'iOS/Swift', desc: 'Native iOS development with Swift and SwiftUI' },
  { icon: <FaAndroid className="text-yellow-400 text-2xl" />, label: 'Android/Kotlin', desc: 'Modern Android development with Kotlin' },
  { icon: <FaFilter className="text-yellow-400 text-2xl" />, label: 'Flutter', desc: 'Cross-platform development framework' },
  { icon: <FaReact className="text-yellow-400 text-2xl" />, label: 'React Native', desc: 'JavaScript-based mobile development' },
  { icon: <FaCode className="text-yellow-400 text-2xl" />, label: 'Unity', desc: 'Game development and 3D applications' },
  { icon: <FaFire className="text-yellow-400 text-2xl" />, label: 'Firebase', desc: 'Backend services and real-time database' },
  { icon: <FaAws className="text-yellow-400 text-2xl" />, label: 'AWS', desc: 'Cloud infrastructure and services' },
  { icon: <FaDocker className="text-yellow-400 text-2xl" />, label: 'Docker', desc: 'Containerization and deployment' },
];

const caseStudies = [
  {
    title: 'E-commerce Mobile App',
    description: 'Developed a cross-platform e-commerce app with real-time inventory and payment integration.',
    tech: ['Flutter', 'Firebase', 'Node.js', 'AWS'],
    results: 'Increased mobile sales by 150% in 3 months'
  },
  {
    title: 'Healthcare Management App',
    description: 'Built a comprehensive healthcare app with patient records and appointment scheduling.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    results: 'Reduced appointment no-shows by 40%'
  },
  {
    title: 'Fitness Tracking App',
    description: 'Created a fitness app with real-time tracking and social features.',
    tech: ['Swift', 'Kotlin', 'Firebase', 'Google Cloud'],
    results: 'Reached 50,000+ active users'
  },
  {
    title: 'Food Delivery App',
    description: 'Developed a food delivery app with real-time tracking and payment integration.',
    tech: ['Flutter', 'Node.js', 'MongoDB', 'AWS'],
    results: 'Reduced delivery time by 30%'
  },
  {
    title: 'Banking App',
    description: 'Built a secure banking app with biometric authentication and real-time transactions.',
    tech: ['Swift', 'Kotlin', 'Java Spring', 'Azure'],
    results: 'Processed ₦500M+ in transactions'
  },
  {
    title: 'Educational App',
    description: 'Created an educational app with video streaming and interactive quizzes.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    results: 'Served 20,000+ students'
  }
];

const pricingStructure = [
  { 
    type: 'Basic App',
    price: '₦300,000 - ₦600,000',
    desc: 'Simple mobile app with basic features',
    features: [
      'Single platform (iOS or Android)',
      'Basic UI/UX',
      'Core functionality',
      'Basic backend',
      '1 month support'
    ]
  },
  { 
    type: 'Cross-Platform App',
    price: '₦600,000 - ₦1,200,000',
    desc: 'App that works on both iOS and Android',
    features: [
      'iOS and Android support',
      'Advanced UI/UX',
      'Backend integration',
      'Push notifications',
      '3 months support'
    ]
  },
  { 
    type: 'Enterprise App',
    price: '₦1,200,000+',
    desc: 'Complex applications with advanced features',
    features: [
      'Custom features',
      'Advanced security',
      'Analytics integration',
      '24/7 support',
      '6 months support'
    ]
  },
  { 
    type: 'Game Development',
    price: 'Custom Quote',
    desc: 'Mobile games and interactive applications',
    features: [
      '2D/3D graphics',
      'Game mechanics',
      'Multiplayer support',
      'In-app purchases',
      'Ongoing updates'
    ]
  },
  { 
    type: 'Maintenance',
    price: '₦50,000/month',
    desc: 'Regular updates and support',
    features: [
      'Bug fixes',
      'Performance optimization',
      'Security updates',
      'Technical support',
      'Monthly reports'
    ]
  }
];

const techStackPricing = [
  {
    name: 'Native iOS App',
    stack: ['Swift', 'SwiftUI', 'Firebase', 'AWS'],
    basePrice: '₦800,000',
    features: [
      'Custom UI/UX design',
      'Push notifications',
      'In-app purchases',
      'Analytics integration',
      'Offline support',
      'App Store deployment'
    ],
    addons: [
      { name: 'Apple Watch support', price: '₦200,000' },
      { name: 'iPad optimization', price: '₦150,000' },
      { name: 'Advanced animations', price: '₦100,000' }
    ]
  },
  {
    name: 'Native Android App',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'AWS'],
    basePrice: '₦700,000',
    features: [
      'Material Design UI',
      'Push notifications',
      'In-app purchases',
      'Analytics integration',
      'Offline support',
      'Play Store deployment'
    ],
    addons: [
      { name: 'Wear OS support', price: '₦200,000' },
      { name: 'Tablet optimization', price: '₦150,000' },
      { name: 'Advanced animations', price: '₦100,000' }
    ]
  },
  {
    name: 'Cross-Platform App',
    stack: ['Flutter', 'Firebase', 'Node.js', 'AWS'],
    basePrice: '₦1,000,000',
    features: [
      'iOS and Android support',
      'Custom UI/UX',
      'Push notifications',
      'In-app purchases',
      'Analytics integration',
      'Offline support'
    ],
    addons: [
      { name: 'Web version', price: '₦300,000' },
      { name: 'Desktop version', price: '₦400,000' },
      { name: 'Advanced animations', price: '₦150,000' }
    ]
  }
];

const developmentMethodologies = [
  {
    name: 'Agile/Scrum',
    practices: [
      '2-week sprint cycles',
      'Daily standup meetings',
      'Sprint planning sessions',
      'Sprint review meetings',
      'Retrospective meetings'
    ],
    tools: ['Jira', 'Confluence', 'Slack'],
    benefits: [
      'Regular delivery of working software',
      'Adaptability to changing requirements',
      'Continuous improvement',
      'Better team collaboration'
    ]
  },
  {
    name: 'Kanban',
    practices: [
      'Visual workflow management',
      'Work-in-progress limits',
      'Continuous delivery',
      'Pull-based system',
      'Cycle time optimization'
    ],
    tools: ['Trello', 'Monday.com', 'GitHub Projects'],
    benefits: [
      'Improved workflow visibility',
      'Reduced bottlenecks',
      'Faster delivery times',
      'Better resource utilization'
    ]
  },
  {
    name: 'DevOps',
    practices: [
      'Continuous Integration',
      'Continuous Deployment',
      'Automated testing',
      'Monitoring and logging',
      'App store deployment'
    ],
    tools: ['Jenkins', 'Fastlane', 'Firebase', 'AWS'],
    benefits: [
      'Faster deployment cycles',
      'Improved reliability',
      'Better collaboration',
      'Automated processes'
    ]
  }
];

const devOpsPractices = [
  {
    name: 'CI/CD Pipeline',
    tools: ['Jenkins', 'GitHub Actions', 'Fastlane'],
    practices: [
      'Automated build process',
      'Automated testing',
      'Automated deployment',
      'App store submission'
    ],
    benefits: [
      'Faster delivery cycles',
      'Reduced manual errors',
      'Better code quality',
      'Improved collaboration'
    ]
  },
  {
    name: 'Monitoring & Analytics',
    tools: ['Firebase Analytics', 'Crashlytics', 'New Relic'],
    practices: [
      'Real-time performance monitoring',
      'Crash reporting',
      'User behavior tracking',
      'Performance optimization'
    ],
    benefits: [
      'Proactive issue detection',
      'Better app reliability',
      'Improved performance',
      'Data-driven decisions'
    ]
  },
  {
    name: 'Security & Compliance',
    tools: ['OWASP Mobile', 'App Security', 'Compliance Tools'],
    practices: [
      'Security testing',
      'Compliance checking',
      'Vulnerability scanning',
      'Data protection'
    ],
    benefits: [
      'Enhanced security',
      'Regulatory compliance',
      'User data protection',
      'Trust building'
    ]
  }
];

const qaProcedures = [
  {
    name: 'Unit Testing',
    tools: ['Jest', 'XCTest', 'JUnit'],
    practices: ['Test-driven development', 'Code coverage', 'Automated testing']
  },
  {
    name: 'UI Testing',
    tools: ['XCUITest', 'Espresso', 'Flutter Driver'],
    practices: ['UI automation', 'Cross-device testing', 'Accessibility testing']
  },
  {
    name: 'Security Testing',
    tools: ['OWASP Mobile', 'MobSF', 'Burp Suite'],
    practices: ['Vulnerability scanning', 'Penetration testing', 'Code analysis']
  },
  {
    name: 'Performance Testing',
    tools: ['Firebase Performance', 'New Relic', 'JMeter'],
    practices: ['Load testing', 'Battery testing', 'Memory profiling']
  }
];

const projectManagementTools = [
  {
    name: 'Jira',
    icon: <FaJira className="text-yellow-400 text-2xl" />,
    features: ['Agile boards', 'Sprint planning', 'Issue tracking', 'Custom workflows']
  },
  {
    name: 'Trello',
    icon: <FaTrello className="text-yellow-400 text-2xl" />,
    features: ['Kanban boards', 'Task management', 'Team collaboration', 'Power-ups']
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="text-yellow-400 text-2xl" />,
    features: ['Version control', 'Code review', 'CI/CD', 'Project management']
  },
  {
    name: 'Confluence',
    icon: <FaConfluence className="text-yellow-400 text-2xl" />,
    features: ['Documentation', 'Knowledge base', 'Team collaboration', 'Templates']
  },
  {
    name: 'Slack',
    icon: <FaSlack className="text-yellow-400 text-2xl" />,
    features: ['Team communication', 'File sharing', 'Integration', 'Channels']
  }
];

const faqs = [
  {
    q: 'How long does it take to develop a mobile app?',
    a: 'Basic apps take 2-3 months, while complex applications may take 4-6 months. We\'ll provide a detailed timeline during planning.'
  },
  {
    q: 'Do you develop for both iOS and Android?',
    a: 'Yes, we develop native apps for both platforms and also offer cross-platform solutions using Flutter or React Native.'
  },
  {
    q: 'What about app store submission?',
    a: 'We handle the entire app store submission process, including preparing store listings, screenshots, and compliance requirements.'
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes, we offer maintenance packages that include regular updates, bug fixes, and technical support.'
  },
  {
    q: 'How do you handle app security?',
    a: 'We implement industry best practices for app security, including encryption, secure authentication, and regular security audits.'
  },
];

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

export default function AppDevelopmentPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Back to top button visibility
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Scroll progress
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    // Active section tracking
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Intersection Observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    // Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', () => {
      toggleVisibility();
      handleScroll();
      updateScrollProgress();
    });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', updateScrollProgress);
      document.removeEventListener('mousedown', handleClickOutside);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const setSectionRef = (element: HTMLElement | null) => {
    if (element) {
      sectionsRef.current.push(element);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      {/* Default Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-yellow-400 font-bold text-xl">
                MO-TECH
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/services/web-development" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                  Web Development
                </Link>
                <Link href="/services/app-development" className="text-yellow-400 bg-yellow-400/10 px-3 py-2 rounded-md text-sm font-medium">
                  App Development
                </Link>
                <Link href="/services/it-support" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                  IT Support
                </Link>
                <Link href="/services/workstation-setup" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                  Workstation Setup
                </Link>
                <Link href="/services/cybersecurity" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                  Cybersecurity
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-yellow-400 hover:text-yellow-300"
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Service-specific Sidebar */}
      <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-black/80 backdrop-blur-lg border-r border-yellow-400/20 z-40 hidden md:block transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-48'}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            {!isSidebarCollapsed && (
              <h3 className="text-yellow-400 font-semibold">App Development</h3>
            )}
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
            >
              {isSidebarCollapsed ? <FaChevronRight size={16} /> : <FaChevronLeft size={16} />}
            </button>
          </div>
          <nav className="space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-yellow-400 bg-yellow-400/10'
                    : 'text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5'
                }`}
                title={isSidebarCollapsed ? section.label : ''}
              >
                {section.id === 'hero' && <FaHome className="flex-shrink-0" size={16} />}
                {section.id === 'services' && <FaTools className="flex-shrink-0" size={16} />}
                {section.id === 'process' && <FaCogs className="flex-shrink-0" size={16} />}
                {section.id === 'technologies' && <FaLaptopCode className="flex-shrink-0" size={16} />}
                {section.id === 'case-studies' && <FaChartLine className="flex-shrink-0" size={16} />}
                {section.id === 'pricing' && <FaMoneyBillWave className="flex-shrink-0" size={16} />}
                {section.id === 'faq' && <FaQuestionCircle className="flex-shrink-0" size={16} />}
                {!isSidebarCollapsed && (
                  <span className="ml-3">{section.label}</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-yellow-400/20 z-50"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/services/web-development" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5">
              Web Development
            </Link>
            <Link href="/services/app-development" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 bg-yellow-400/10">
              App Development
            </Link>
            <Link href="/services/it-support" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5">
              IT Support
            </Link>
            <Link href="/services/workstation-setup" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5">
              Workstation Setup
            </Link>
            <Link href="/services/cybersecurity" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5">
              Cybersecurity
            </Link>
            <div className="border-t border-yellow-400/20 my-2"></div>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === section.id
                    ? 'text-yellow-400 bg-yellow-400/10'
                    : 'text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Content with Sidebar Offset */}
      <div className={`w-full transition-all duration-300 ${isSidebarCollapsed ? 'md:ml-16' : 'md:ml-48'}`}>
        {/* Scroll Progress Indicator */}
        <div 
          className="fixed top-0 left-0 h-1 bg-yellow-400 z-50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Back to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}

        {/* Hero Section */}
        <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-center visible parallax-section">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4 animate-fade-in">Mobile App Development Services</h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-yellow-100 mb-6 animate-fade-in-delay">Expert mobile app development services in Lagos. Native and cross-platform solutions for iOS and Android. Modern tech stack, intuitive design, and ongoing support.</p>
          <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-all duration-200 hover:scale-105 animate-fade-in-delay-2">Start Your Project</Link>
      </section>

        {/* Services Overview */}
        <section ref={setSectionRef} id="services" className="w-full py-8 md:py-12 bg-black scroll-mt-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {services.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-black rounded-xl border border-yellow-400/20 p-4 transition-all duration-300 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-yellow-300 font-semibold">{item.label}</h3>
                    <p className="text-yellow-100 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* Process Section */}
        <section ref={setSectionRef} id="process" className="w-full py-8 md:py-12 bg-black scroll-mt-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Process</h2>
          <ol className="text-yellow-100 mb-6 space-y-3 list-decimal list-inside">
            {process.map((p) => (
              <li key={p.step}><span className="font-bold text-yellow-300">{p.step}:</span> {p.desc}</li>
            ))}
          </ol>
          <div className="flex items-center gap-3 text-yellow-200 mb-4">
            <FaClock className="text-yellow-400 text-2xl" />
              <span className="font-bold">Project Timeline:</span> 2-6 months (depending on complexity)
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section ref={setSectionRef} id="technologies" className="w-full py-8 md:py-12 bg-black scroll-mt-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Technologies We Use</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {technologies.map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-black rounded-xl border border-yellow-400/20 p-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-yellow-300 font-semibold">{item.label}</h3>
                    <p className="text-yellow-100 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Methodologies */}
        <section ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Development Methodologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {developmentMethodologies.map((method) => (
                <div key={method.name} className="bg-black rounded-xl border border-yellow-400/20 p-6">
                  <h3 className="text-yellow-300 font-semibold text-xl mb-4">{method.name}</h3>
                  <div className="mb-4">
                    <h4 className="text-yellow-200 font-semibold mb-2">Practices</h4>
                    <ul className="space-y-2">
                      {method.practices.map((practice) => (
                        <li key={practice} className="flex items-center gap-2 text-yellow-100">
                          <FaCheckCircle className="text-yellow-400" />
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-yellow-200 font-semibold mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {method.tools.map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-yellow-200 font-semibold mb-2">Benefits</h4>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-yellow-100">
                          <FaCircle className="text-yellow-400 text-xs" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps & Deployment */}
        <section ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">DevOps & Deployment Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {devOpsPractices.map((practice) => (
                <div key={practice.name} className="bg-black rounded-xl border border-yellow-400/20 p-6">
                  <h3 className="text-yellow-300 font-semibold text-xl mb-4">{practice.name}</h3>
                  <div className="mb-4">
                    <h4 className="text-yellow-200 font-semibold mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {practice.tools.map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-yellow-200 font-semibold mb-2">Practices</h4>
                    <ul className="space-y-2">
                      {practice.practices.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-yellow-100">
                          <FaCheckCircle className="text-yellow-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-yellow-200 font-semibold mb-2">Benefits</h4>
                    <ul className="space-y-2">
                      {practice.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-yellow-100">
                          <FaCircle className="text-yellow-400 text-xs" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Quality Assurance & Testing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qaProcedures.map((qa) => (
                <div key={qa.name} className="bg-black rounded-xl border border-yellow-400/20 p-6">
                  <h3 className="text-yellow-300 font-semibold text-xl mb-4">{qa.name}</h3>
                  <div className="mb-4">
                    <h4 className="text-yellow-200 font-semibold mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {qa.tools.map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-yellow-200 font-semibold mb-2">Practices</h4>
                    <ul className="space-y-2">
                      {qa.practices.map((practice) => (
                        <li key={practice} className="flex items-center gap-2 text-yellow-100">
                          <FaCheckCircle className="text-yellow-400" />
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Management Tools */}
        <section ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Project Management Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectManagementTools.map((tool) => (
                <div key={tool.name} className="bg-black rounded-xl border border-yellow-400/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {tool.icon}
                    <h3 className="text-yellow-300 font-semibold text-xl">{tool.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-yellow-100">
                        <FaCircle className="text-yellow-400 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section ref={setSectionRef} id="case-studies" className="w-full py-8 md:py-12 bg-black scroll-mt-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Case Studies</h2>
            <div className="space-y-6">
              {caseStudies.map((study) => (
                <div key={study.title} className="bg-black rounded-xl border border-yellow-400/20 p-6">
                  <h3 className="text-yellow-300 font-semibold text-xl mb-2">{study.title}</h3>
                  <p className="text-yellow-100 mb-4">{study.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-yellow-300 font-semibold">{study.results}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Structure */}
        <section ref={setSectionRef} id="pricing" className="w-full py-8 md:py-12 bg-black scroll-mt-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Pricing Structure</h2>
            <div className="space-y-6">
              {pricingStructure.map((item) => (
                <div key={item.type} className="bg-black rounded-xl border border-yellow-400/20 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-yellow-300 font-semibold text-xl">{item.type}</h3>
                      <p className="text-yellow-100 text-sm">{item.desc}</p>
                    </div>
                    <span className="text-yellow-400 font-bold text-xl">{item.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-yellow-100">
                        <FaCheckCircle className="text-yellow-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-yellow-100 text-sm italic mt-4">* Prices may vary based on project requirements and complexity</p>
        </div>
      </section>

        {/* Detailed Tech Stack Pricing */}
        <section ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Detailed Tech Stack Pricing</h2>
            <div className="space-y-8">
              {techStackPricing.map((stack) => (
                <div key={stack.name} className="bg-black rounded-xl border border-yellow-400/20 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-yellow-300 font-semibold text-xl">{stack.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {stack.stack.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-yellow-400 font-bold text-xl">{stack.basePrice}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-yellow-200 font-semibold mb-2">Included Features</h4>
                    <ul className="space-y-2">
                      {stack.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-yellow-100">
                          <FaCheckCircle className="text-yellow-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-yellow-200 font-semibold mb-2">Optional Add-ons</h4>
                    <ul className="space-y-2">
                      {stack.addons.map((addon) => (
                        <li key={addon.name} className="flex justify-between items-center text-yellow-100">
                          <span>{addon.name}</span>
                          <span className="text-yellow-400">{addon.price}</span>
                        </li>
                      ))}
          </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={setSectionRef} id="faq" className="w-full py-8 md:py-12 bg-black scroll-mt-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2"><FaQuestionCircle className="text-yellow-400" /> FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-black rounded-xl border border-yellow-400/20 p-4">
                  <h3 className="text-yellow-300 font-semibold mb-2">{faq.q}</h3>
                  <p className="text-yellow-100">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Ready to Start Your Project?</h2>
            <p className="text-yellow-100 mb-6">Let's discuss how we can help bring your app idea to life.</p>
            <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200">Get Started</Link>
        </div>
      </section>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        section {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .parallax-section {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        @media (max-width: 768px) {
          .parallax-section {
            background-attachment: scroll;
          }
        }

        /* Progressive loading styles */
        .lazy-load {
          opacity: 0;
          transition: opacity 0.3s ease-in;
        }

        .lazy-load.loaded {
          opacity: 1;
        }
      `}</style>
    </main>
  );
} 