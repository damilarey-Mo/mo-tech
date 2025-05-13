"use client";

import React, { useEffect, useState, useRef } from 'react';
import { FaCode, FaCheckCircle, FaClock, FaTools, FaShoppingCart, FaServer, FaDatabase, FaMobile, FaShieldAlt, FaQuestionCircle, FaReact, FaNodeJs, FaPython, FaPhp, FaWordpress, FaLaravel, FaAws, FaDocker, FaGitAlt, FaVuejs, FaAngular, FaSass, FaBootstrap, FaJenkins, FaGithub, FaJira, FaTrello, FaSlack, FaConfluence, FaBitbucket, FaCircle, FaArrowUp, FaBars, FaTimes, FaLaptop, FaDesktop, FaNetworkWired, FaWifi, FaPrint, FaServer as FaServerIcon, FaDatabase as FaDatabaseIcon, FaCloud, FaLock, FaUserShield, FaShieldAlt as FaShieldAltIcon, FaCog, FaHeadset, FaUserCog, FaNetworkWired as FaNetworkWiredIcon, FaTools as FaToolsIcon, FaDesktop as FaDesktopIcon, FaServer as FaServerIcon2, FaCloud as FaCloudIcon, FaShieldAlt as FaShieldAltIcon2, FaPrint as FaPrintIcon, FaTools as FaToolsIcon2 } from 'react-icons/fa';
import Link from 'next/link';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

const process = [
  { 
    icon: <FaHeadset className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Initial Contact', 
    desc: 'Reach out to our support team',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaUserCog className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Issue Assessment', 
    desc: 'Analyze and diagnose the problem',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaToolsIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Resolution', 
    desc: 'Implement the solution',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaCheckCircle className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Follow-up', 
    desc: 'Ensure complete resolution',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const services = [
  { 
    icon: <FaDesktopIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Hardware Support', 
    desc: 'Comprehensive hardware troubleshooting, diagnostics, and repair services for computers, printers, and peripheral devices',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaCode className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Software Support', 
    desc: 'Advanced software troubleshooting, installation, updates, and optimization for operating systems and applications',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaNetworkWiredIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Network Support', 
    desc: 'Network diagnostics, troubleshooting, and optimization for improved connectivity and performance',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaServerIcon2 className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Server Support', 
    desc: 'Server maintenance, troubleshooting, and optimization for reliable performance',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaCloudIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Cloud Support', 
    desc: 'Cloud service setup, troubleshooting, and optimization for seamless operations',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaShieldAltIcon2 className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Security Support', 
    desc: 'Comprehensive security implementation, monitoring, and threat prevention',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaPrintIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Printer Support', 
    desc: 'Printer setup, troubleshooting, and maintenance for optimal performance',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaUserCog className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Staff Training', 
    desc: 'Comprehensive IT skills development and software usage training programs',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const technologies = [
  { 
    icon: <FaDesktopIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Operating Systems', 
    desc: 'Windows, macOS, Linux support',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaNetworkWiredIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Network Tools', 
    desc: 'Network diagnostics and tools',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaServerIcon2 className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Server Software', 
    desc: 'Server management tools',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaCloudIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Cloud Platforms', 
    desc: 'AWS, Azure, Google Cloud',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaShieldAltIcon2 className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Security Tools', 
    desc: 'Security and monitoring tools',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaToolsIcon2 className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Remote Support', 
    desc: 'Remote access and support',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaDatabaseIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Database Tools', 
    desc: 'Database management tools',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaMobile className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Mobile Support', 
    desc: 'Mobile device management',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const caseStudies = [
  {
    title: 'Financial Institution Support',
    description: '24/7 IT support for a financial institution',
    results: ['Reduced downtime by 60%', 'Improved response time', 'Enhanced security measures', 'Streamlined support process'],
  },
  {
    title: 'Healthcare IT Support',
    description: 'HIPAA-compliant IT support for healthcare',
    results: ['Ensured HIPAA compliance', 'Improved system reliability', 'Enhanced data security', 'Reduced support tickets'],
  },
  {
    title: 'Educational Institution Support',
    description: 'IT support for educational institution',
    results: ['Improved network stability', 'Enhanced security measures', 'Streamlined support process', 'Reduced downtime'],
  },
];

const pricingStructure = [
  {
    title: 'Basic Support',
    price: '₦30,000',
    features: [
      'Email Support',
      'Basic Troubleshooting',
      'Remote Support',
      'Monthly Reports',
    ],
  },
  {
    title: 'Business Support',
    price: '₦100,000',
    features: [
      '24/7 Phone Support',
      'On-site Support',
      'Network Monitoring',
      'Security Updates',
      'Priority Response',
    ],
  },
  {
    title: 'Enterprise Support',
    price: '₦250,000',
    features: [
      'Dedicated Support Team',
      'Proactive Monitoring',
      'Custom Solutions',
      'Training & Documentation',
      'SLA Guarantee',
      'Regular Maintenance',
    ],
  },
];

const faqs = [
  {
    question: 'What is your response time for support requests?',
    answer: 'Our response time varies by support level. Basic support typically responds within 24 hours, while business and enterprise levels offer faster response times, with critical issues addressed immediately.',
  },
  {
    question: 'Do you provide remote support?',
    answer: 'Yes, we offer remote support for most issues, allowing us to quickly diagnose and resolve problems without the need for on-site visits.',
  },
  {
    question: 'What types of issues do you support?',
    answer: 'We support a wide range of IT issues including hardware problems, software issues, network connectivity, security concerns, and cloud service problems.',
  },
  {
    question: 'Do you offer after-hours support?',
    answer: 'Yes, our business and enterprise support plans include 24/7 support coverage for critical issues.',
  },
];

export default function ITSupportPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      {/* Sticky Navigation */}
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
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-yellow-400/20 z-50"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
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

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-yellow-400/20 z-50">
        <div
          className="h-full bg-yellow-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-colors duration-200 z-50"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* Hero Section */}
      <section id="hero" ref={setSectionRef} className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-center visible parallax-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/5 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Tech Gears Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="tech-gear tech-gear-1">
            <FaCog className="text-yellow-400/20" size={60} />
          </div>
          <div className="tech-gear tech-gear-2">
            <FaCog className="text-yellow-400/20" size={40} />
          </div>
          <div className="tech-gear tech-gear-3">
            <FaCog className="text-yellow-400/20" size={80} />
          </div>
          <div className="tech-gear tech-gear-4">
            <FaCog className="text-yellow-400/20" size={50} />
          </div>
          <div className="tech-gear tech-gear-5">
            <FaCog className="text-yellow-400/20" size={70} />
          </div>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4 animate-fade-in relative">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 relative">
              IT Support Services
              <div className="absolute -inset-1 bg-yellow-400/20 rounded-lg blur-lg -z-10 animate-pulse-slow"></div>
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-yellow-100 mb-6 animate-fade-in-delay relative">
            Professional IT support services for businesses of all sizes. From desktop support to network management, we've got you covered.
            <div className="absolute -inset-1 bg-yellow-400/5 rounded-lg blur-lg -z-10 animate-pulse-slow"></div>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Link 
              href="/contact" 
              className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 relative group"
            >
              <span className="relative z-10">Get Support</span>
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg -z-10 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400/20 group-hover:border-yellow-400/40 transition-colors duration-300"></div>
            </Link>
            <a 
              href="#services" 
              className="px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold text-lg hover:bg-yellow-400/10 transition-all duration-200 transform hover:scale-105 relative group"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-yellow-400/5 rounded-full blur-lg -z-10 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400/20 group-hover:border-yellow-400/40 transition-colors duration-300"></div>
            </a>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-4 animate-fade-in-delay-3">
            <div className="feature-highlight group">
              <div className="feature-icon-wrapper">
                <FaHeadset className="text-2xl animate-float" />
                <div className="feature-glow"></div>
              </div>
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="w-1 h-1 bg-yellow-400/40 rounded-full"></div>
            <div className="feature-highlight group">
              <div className="feature-icon-wrapper">
                <FaToolsIcon className="text-2xl animate-float-delay-1" />
                <div className="feature-glow"></div>
              </div>
              <span className="text-sm">Quick Resolution</span>
            </div>
            <div className="w-1 h-1 bg-yellow-400/40 rounded-full"></div>
            <div className="feature-highlight group">
              <div className="feature-icon-wrapper">
                <FaShieldAlt className="text-2xl animate-float-delay-2" />
                <div className="feature-glow"></div>
              </div>
              <span className="text-sm">Secure Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Our IT Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/40 transition-colors duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{service.label}</h3>
                <p className="text-yellow-100">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Our Support Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-black/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/40 transition-colors duration-300"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{step.label}</h3>
                <p className="text-yellow-100">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Technologies We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-black/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/40 transition-colors duration-300"
              >
                <div className="mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{tech.label}</h3>
                <p className="text-yellow-100">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-black/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/40 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{study.title}</h3>
                <p className="text-yellow-100 mb-4">{study.description}</p>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-center text-yellow-100">
                      <FaCheckCircle className="text-yellow-400 mr-2" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingStructure.map((plan, index) => (
              <div
                key={index}
                className="bg-black/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/40 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-yellow-100">
                      <FaCheckCircle className="text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black/50 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/40 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{faq.question}</h3>
                <p className="text-yellow-100">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={setSectionRef} className="w-full py-16 md:py-24 bg-black text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Need IT Support?</h2>
          <p className="text-lg text-yellow-100 mb-8">Contact us today to discuss your IT support needs.</p>
          <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200">
            Get Support
          </Link>
        </div>
      </section>

      {/* Styles */}
      <style jsx global>{`
        .parallax-section {
          transform: translateZ(0);
          will-change: transform;
        }

        .tech-gear {
          position: absolute;
          opacity: 0.2;
          animation: rotate 20s linear infinite;
        }

        .tech-gear-1 { top: 20%; left: 10%; animation-duration: 30s; }
        .tech-gear-2 { top: 60%; left: 80%; animation-duration: 25s; animation-direction: reverse; }
        .tech-gear-3 { top: 30%; left: 70%; animation-duration: 35s; }
        .tech-gear-4 { top: 70%; left: 20%; animation-duration: 28s; animation-direction: reverse; }
        .tech-gear-5 { top: 40%; left: 50%; animation-duration: 32s; }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.2); }
          50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.4); }
        }

        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delay-1 { animation: float 3s ease-in-out 0.5s infinite; }
        .animate-float-delay-2 { animation: float 3s ease-in-out 1s infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }

        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(251, 191, 36, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(251, 191, 36, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Feature Highlight Styles */
        .feature-highlight {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .feature-highlight:hover {
          transform: translateY(-5px);
        }

        .feature-icon-wrapper {
          position: relative;
          padding: 1rem;
          border-radius: 50%;
          background: rgba(251, 191, 36, 0.1);
          transition: all 0.3s ease;
        }

        .feature-highlight:hover .feature-icon-wrapper {
          background: rgba(251, 191, 36, 0.2);
          transform: scale(1.1);
        }

        .feature-glow {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(45deg, #fbbf24, #f59e0b, #d97706) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-highlight:hover .feature-glow {
          opacity: 1;
          animation: glow 2s ease-in-out infinite;
        }

        .feature-highlight span {
          color: rgba(251, 191, 36, 0.8);
          transition: all 0.3s ease;
        }

        .feature-highlight:hover span {
          color: #fbbf24;
          transform: scale(1.05);
        }

        /* Mobile Optimizations */
        @media (max-width: 640px) {
          .tech-gear {
            display: none;
          }
        }
      `}</style>
    </main>
  );
} 