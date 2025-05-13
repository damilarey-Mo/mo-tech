"use client";

import React, { useEffect, useState, useRef } from 'react';
import { FaCode, FaCheckCircle, FaClock, FaTools, FaShoppingCart, FaServer, FaDatabase, FaMobile, FaShieldAlt, FaQuestionCircle, FaReact, FaNodeJs, FaPython, FaPhp, FaWordpress, FaLaravel, FaAws, FaDocker, FaGitAlt, FaVuejs, FaAngular, FaSass, FaBootstrap, FaJenkins, FaGithub, FaJira, FaTrello, FaSlack, FaConfluence, FaBitbucket, FaCircle, FaArrowUp, FaBars, FaTimes, FaHome, FaCogs, FaLaptopCode, FaChartLine, FaMoneyBillWave, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const process = [
  { step: 'Discovery & Planning', desc: 'We analyze your requirements and create a detailed project roadmap.' },
  { step: 'Design & Prototype', desc: 'We create wireframes and design mockups for your approval.' },
  { step: 'Development', desc: 'Our expert developers build your solution using modern technologies.' },
  { step: 'Testing & QA', desc: 'We thoroughly test all features and ensure quality standards.' },
  { step: 'Deployment & Support', desc: 'We launch your project and provide ongoing maintenance.' },
];

const techStack = [
  { icon: <FaReact className="text-yellow-400 text-2xl" />, label: 'Frontend' },
  { icon: <FaNodeJs className="text-yellow-400 text-2xl" />, label: 'Backend' },
  { icon: <FaDatabase className="text-yellow-400 text-2xl" />, label: 'Databases' },
  { icon: <FaMobile className="text-yellow-400 text-2xl" />, label: 'Mobile Apps' },
  { icon: <FaWordpress className="text-yellow-400 text-2xl" />, label: 'CMS' },
  { icon: <FaServer className="text-yellow-400 text-2xl" />, label: 'DevOps' },
  { icon: <FaShieldAlt className="text-yellow-400 text-2xl" />, label: 'Security' },
  { icon: <FaTools className="text-yellow-400 text-2xl" />, label: 'Maintenance' },
  { icon: <FaShoppingCart className="text-yellow-400 text-2xl" />, label: 'E-commerce' },
];

const services = [
  { icon: <FaCode className="text-yellow-400 text-2xl" />, label: 'Custom Web Development', desc: 'Tailored web applications built with modern frameworks and best practices' },
  { icon: <FaShoppingCart className="text-yellow-400 text-2xl" />, label: 'E-commerce Solutions', desc: 'Online stores with secure payment gateways and inventory management' },
  { icon: <FaMobile className="text-yellow-400 text-2xl" />, label: 'Responsive Design', desc: 'Mobile-first websites that work perfectly on all devices' },
  { icon: <FaDatabase className="text-yellow-400 text-2xl" />, label: 'API Development', desc: 'RESTful APIs and backend services for your applications' },
  { icon: <FaWordpress className="text-yellow-400 text-2xl" />, label: 'CMS Development', desc: 'Custom WordPress and other CMS solutions' },
  { icon: <FaServer className="text-yellow-400 text-2xl" />, label: 'Cloud Solutions', desc: 'AWS, Azure, and Google Cloud deployment and management' },
];

const technologies = [
  { icon: <FaReact className="text-yellow-400 text-2xl" />, label: 'React/Next.js', desc: 'Modern frontend development with server-side rendering' },
  { icon: <FaVuejs className="text-yellow-400 text-2xl" />, label: 'Vue.js/Nuxt', desc: 'Progressive framework for building user interfaces' },
  { icon: <FaAngular className="text-yellow-400 text-2xl" />, label: 'Angular', desc: 'Platform for building mobile & desktop web apps' },
  { icon: <FaNodeJs className="text-yellow-400 text-2xl" />, label: 'Node.js/Express', desc: 'Scalable backend solutions and APIs' },
  { icon: <FaPython className="text-yellow-400 text-2xl" />, label: 'Python/Django', desc: 'Rapid development and clean design' },
  { icon: <FaPhp className="text-yellow-400 text-2xl" />, label: 'PHP/Laravel', desc: 'Enterprise-grade solutions' },
  { icon: <FaDatabase className="text-yellow-400 text-2xl" />, label: 'MongoDB', desc: 'NoSQL database for modern applications' },
  { icon: <FaDatabase className="text-yellow-400 text-2xl" />, label: 'PostgreSQL', desc: 'Advanced open-source database' },
  { icon: <FaAws className="text-yellow-400 text-2xl" />, label: 'AWS', desc: 'Cloud infrastructure and services' },
  { icon: <FaDocker className="text-yellow-400 text-2xl" />, label: 'Docker', desc: 'Containerization and deployment' },
  { icon: <FaSass className="text-yellow-400 text-2xl" />, label: 'Sass/SCSS', desc: 'Advanced CSS preprocessing' },
  { icon: <FaBootstrap className="text-yellow-400 text-2xl" />, label: 'Bootstrap/Tailwind', desc: 'Modern CSS frameworks' },
];

const caseStudies = [
  {
    title: 'E-commerce Platform',
    description: 'Built a scalable e-commerce platform for a retail chain with real-time inventory management and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
    results: 'Increased online sales by 200% in 6 months'
  },
  {
    title: 'Healthcare Management System',
    description: 'Developed a comprehensive healthcare management system with patient records and appointment scheduling.',
    tech: ['Vue.js', 'Laravel', 'PostgreSQL', 'Docker'],
    results: 'Reduced administrative time by 40%'
  },
  {
    title: 'Educational Platform',
    description: 'Created an online learning platform with video streaming and interactive assessments.',
    tech: ['Next.js', 'Python', 'MongoDB', 'AWS'],
    results: 'Served 10,000+ active users'
  },
  {
    title: 'Real Estate Portal',
    description: 'Developed a property listing platform with virtual tours and mortgage calculator.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    results: 'Increased property inquiries by 150%'
  },
  {
    title: 'Banking Application',
    description: 'Built a secure banking application with real-time transaction processing and fraud detection.',
    tech: ['Angular', 'Java Spring', 'Oracle', 'Azure'],
    results: 'Processed ₦1B+ in transactions'
  },
  {
    title: 'Food Delivery Platform',
    description: 'Created a food delivery platform with real-time tracking and automated dispatch.',
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'Google Cloud'],
    results: 'Reduced delivery time by 30%'
  }
];

const pricingStructure = [
  { 
    type: 'Basic Website',
    price: '₦150,000 - ₦300,000',
    desc: 'Simple business website with basic features',
    features: [
      '5-10 pages',
      'Contact form',
      'Basic SEO',
      'Mobile responsive',
      '1 month support'
    ]
  },
  { 
    type: 'E-commerce Site',
    price: '₦300,000 - ₦600,000',
    desc: 'Online store with payment integration',
    features: [
      'Product catalog',
      'Payment gateway',
      'Inventory management',
      'Order tracking',
      '3 months support'
    ]
  },
  { 
    type: 'Custom Web App',
    price: '₦600,000+',
    desc: 'Complex web applications with custom features',
    features: [
      'Custom features',
      'API integration',
      'User authentication',
      'Advanced analytics',
      '6 months support'
    ]
  },
  { 
    type: 'Enterprise Solution',
    price: 'Custom Quote',
    desc: 'Large-scale applications with advanced features',
    features: [
      'Custom architecture',
      'High scalability',
      'Advanced security',
      '24/7 support',
      'Dedicated team'
    ]
  },
  { 
    type: 'Maintenance',
    price: '₦30,000/month',
    desc: 'Regular updates, security patches, and support',
    features: [
      'Security updates',
      'Performance monitoring',
      'Backup management',
      'Technical support',
      'Monthly reports'
    ]
  }
];

const methodologies = [
  {
    name: 'Agile Development',
    desc: 'Iterative development with regular feedback and adjustments',
    practices: ['Sprint planning', 'Daily standups', 'Sprint reviews', 'Retrospectives']
  },
  {
    name: 'DevOps',
    desc: 'Continuous integration and deployment for faster delivery',
    practices: ['CI/CD pipelines', 'Automated testing', 'Infrastructure as code', 'Monitoring']
  },
  {
    name: 'Test-Driven Development',
    desc: 'Writing tests before code for better quality',
    practices: ['Unit testing', 'Integration testing', 'End-to-end testing', 'Code coverage']
  }
];

const techStackCombinations = [
  {
    name: 'Modern E-commerce',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
    useCase: 'High-performance online stores with real-time inventory'
  },
  {
    name: 'Enterprise CMS',
    stack: ['React', 'Laravel', 'MySQL', 'Elasticsearch', 'Docker'],
    useCase: 'Large-scale content management systems'
  },
  {
    name: 'Real-time Platform',
    stack: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    useCase: 'Chat applications and live tracking systems'
  },
  {
    name: 'Data Analytics',
    stack: ['React', 'Python', 'PostgreSQL', 'TensorFlow', 'AWS'],
    useCase: 'Business intelligence and data visualization'
  },
  {
    name: 'Mobile-First App',
    stack: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'AWS'],
    useCase: 'Cross-platform mobile applications'
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

const qaProcedures = [
  {
    name: 'Unit Testing',
    tools: ['Jest', 'Mocha', 'PyTest'],
    practices: ['Test-driven development', 'Code coverage', 'Automated testing']
  },
  {
    name: 'Integration Testing',
    tools: ['Cypress', 'Selenium', 'Postman'],
    practices: ['API testing', 'End-to-end testing', 'Performance testing']
  },
  {
    name: 'Security Testing',
    tools: ['OWASP ZAP', 'SonarQube', 'Burp Suite'],
    practices: ['Vulnerability scanning', 'Penetration testing', 'Code analysis']
  },
  {
    name: 'Performance Testing',
    tools: ['JMeter', 'Lighthouse', 'WebPageTest'],
    practices: ['Load testing', 'Stress testing', 'Performance monitoring']
  }
];

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'Basic websites take 2-4 weeks, while complex applications may take 2-3 months. We\'ll provide a detailed timeline during planning.'
  },
  {
    q: 'Do you provide hosting services?',
    a: 'Yes, we offer reliable hosting solutions and can manage your server infrastructure for optimal performance.'
  },
  {
    q: 'What about ongoing support?',
    a: 'We provide maintenance packages that include regular updates, security patches, and technical support.'
  },
  {
    q: 'Can you help with existing websites?',
    a: 'Yes, we can improve, update, or completely revamp your existing website to meet modern standards.'
  },
  {
    q: 'Do you offer SEO services?',
    a: 'Yes, we implement SEO best practices during development and can provide ongoing optimization services.'
  },
];

const techStackPricing = [
  {
    name: 'Modern E-commerce',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
    basePrice: '₦800,000',
    features: [
      'Real-time inventory management',
      'Payment gateway integration',
      'Order tracking system',
      'Customer dashboard',
      'Admin panel',
      'Analytics integration'
    ],
    addons: [
      { name: 'Multi-vendor support', price: '₦200,000' },
      { name: 'Mobile app integration', price: '₦300,000' },
      { name: 'Advanced analytics', price: '₦150,000' }
    ]
  },
  {
    name: 'Enterprise CMS',
    stack: ['React', 'Laravel', 'MySQL', 'Elasticsearch', 'Docker'],
    basePrice: '₦1,200,000',
    features: [
      'Custom content types',
      'Role-based access control',
      'Media management',
      'SEO optimization',
      'API endpoints',
      'Multi-language support'
    ],
    addons: [
      { name: 'Advanced search', price: '₦250,000' },
      { name: 'Workflow automation', price: '₦300,000' },
      { name: 'Custom plugins', price: '₦200,000' }
    ]
  },
  {
    name: 'Real-time Platform',
    stack: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    basePrice: '₦900,000',
    features: [
      'Real-time messaging',
      'Live updates',
      'Push notifications',
      'User presence',
      'Chat history',
      'File sharing'
    ],
    addons: [
      { name: 'Video/audio calls', price: '₦400,000' },
      { name: 'End-to-end encryption', price: '₦250,000' },
      { name: 'Group chat features', price: '₦200,000' }
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
      'Infrastructure as Code',
      'Automated testing',
      'Monitoring and logging'
    ],
    tools: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
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
    name: 'Continuous Integration/Deployment',
    tools: ['Jenkins', 'GitHub Actions', 'CircleCI'],
    practices: [
      'Automated build process',
      'Automated testing',
      'Automated deployment',
      'Version control integration'
    ],
    benefits: [
      'Faster delivery cycles',
      'Reduced manual errors',
      'Better code quality',
      'Improved collaboration'
    ]
  },
  {
    name: 'Infrastructure as Code',
    tools: ['Terraform', 'AWS CloudFormation', 'Ansible'],
    practices: [
      'Automated infrastructure provisioning',
      'Version-controlled infrastructure',
      'Consistent environments',
      'Scalable architecture'
    ],
    benefits: [
      'Faster infrastructure setup',
      'Reduced configuration errors',
      'Better scalability',
      'Cost optimization'
    ]
  },
  {
    name: 'Monitoring & Logging',
    tools: ['Prometheus', 'Grafana', 'ELK Stack'],
    practices: [
      'Real-time performance monitoring',
      'Log aggregation and analysis',
      'Alert management',
      'Resource utilization tracking'
    ],
    benefits: [
      'Proactive issue detection',
      'Better system reliability',
      'Improved performance',
      'Data-driven decisions'
    ]
  }
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

export default function WebDevelopmentPage() {
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

    window.addEventListener('scroll', () => {
      toggleVisibility();
      handleScroll();
    });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Function to set section refs
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
                <Link href="/services/web-development" className="text-yellow-400 bg-yellow-400/10 px-3 py-2 rounded-md text-sm font-medium">
                  Web Development
                </Link>
                <Link href="/services/app-development" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
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
              <h3 className="text-yellow-400 font-semibold">Web Development</h3>
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
            <Link href="/services/web-development" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 bg-yellow-400/10">
              Web Development
            </Link>
            <Link href="/services/app-development" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5">
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
        {/* Back to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}

        {/* Hero Section */}
        <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-center visible">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4 animate-fade-in">Web Development Services</h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-yellow-100 mb-6 animate-fade-in-delay">Expert web development services in Lagos. Custom websites, e-commerce solutions, and web applications. Modern tech stack, responsive design, and ongoing support.</p>
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
              <span className="font-bold">Project Timeline:</span> 2-12 weeks (depending on complexity)
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

        {/* Tech Stack Combinations */}
        <section ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Technology Stack Combinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStackCombinations.map((stack) => (
                <div key={stack.name} className="bg-black rounded-xl border border-yellow-400/20 p-6">
                  <h3 className="text-yellow-300 font-semibold text-xl mb-2">{stack.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {stack.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-yellow-100">{stack.useCase}</p>
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
            <p className="text-yellow-100 mb-6">Let's discuss how we can help bring your vision to life.</p>
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

        section {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
} 