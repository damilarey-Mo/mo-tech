"use client";

import React, { useEffect, useState, useRef } from 'react';
import { FaCode, FaCheckCircle, FaClock, FaTools, FaShoppingCart, FaServer, FaDatabase, FaMobile, FaShieldAlt, FaQuestionCircle, FaReact, FaNodeJs, FaPython, FaPhp, FaWordpress, FaLaravel, FaAws, FaDocker, FaGitAlt, FaVuejs, FaAngular, FaSass, FaBootstrap, FaJenkins, FaGithub, FaJira, FaTrello, FaSlack, FaConfluence, FaBitbucket, FaCircle, FaArrowUp, FaBars, FaTimes, FaLaptop, FaDesktop, FaNetworkWired, FaWifi, FaPrint, FaServer as FaServerIcon, FaDatabase as FaDatabaseIcon, FaCloud, FaLock, FaUserShield, FaShieldAlt as FaShieldAltIcon, FaCog } from 'react-icons/fa';
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
    icon: <FaTools className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Assessment', 
    desc: 'Evaluate your current setup and requirements',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaDesktop className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Hardware Setup', 
    desc: 'Install and configure workstations',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaNetworkWired className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Network Configuration', 
    desc: 'Set up network infrastructure',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaClock className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Testing & Support', 
    desc: 'Verify setup and provide ongoing support',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const services = [
  { 
    icon: <FaDesktop className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Workstation Setup', 
    desc: 'Complete setup of individual workstations',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaNetworkWired className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Network Infrastructure', 
    desc: 'Office network setup and configuration',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaPrint className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Printer Setup', 
    desc: 'Network printer installation and configuration',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaServerIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Server Setup', 
    desc: 'File and application server configuration',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaCloud className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Cloud Integration', 
    desc: 'Cloud service setup and synchronization',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaShieldAltIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Security Setup', 
    desc: 'Security software and policy implementation',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const technologies = [
  { 
    icon: <FaDesktop className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Windows/Mac', 
    desc: 'Operating system setup and optimization',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaNetworkWired className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Network Equipment', 
    desc: 'Routers, switches, and access points',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaServerIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Server Software', 
    desc: 'File sharing and application servers',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaDatabaseIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Backup Solutions', 
    desc: 'Data backup and recovery systems',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaCloud className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Cloud Services', 
    desc: 'Microsoft 365, Google Workspace',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaShieldAltIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Security Tools', 
    desc: 'Antivirus and security software',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaPrint className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Print Solutions', 
    desc: 'Network printer management',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaTools className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Remote Support', 
    desc: 'Remote access and support tools',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const caseStudies = [
  {
    title: 'Law Firm Setup',
    description: 'Complete workstation and network setup for a law firm',
    results: ['Set up 50+ workstations', 'Implemented secure file sharing', 'Configured network printers', 'Established backup systems'],
  },
  {
    title: 'Design Studio Setup',
    description: 'High-performance workstation setup for a design studio',
    results: ['Configured 30+ workstations', 'Set up shared storage', 'Implemented cloud backup', 'Optimized network performance'],
  },
  {
    title: 'Medical Practice Setup',
    description: 'HIPAA-compliant setup for a medical practice',
    results: ['Ensured HIPAA compliance', 'Set up secure workstations', 'Implemented data encryption', 'Configured secure printing'],
  },
];

const pricingStructure = [
  {
    title: 'Basic Setup',
    price: '₦50,000',
    features: [
      'Single Workstation Setup',
      'Basic Software Installation',
      'Network Connection',
      'Email Support',
    ],
  },
  {
    title: 'Business Setup',
    price: '₦150,000',
    features: [
      'Multiple Workstation Setup',
      'Network Infrastructure',
      'Printer Setup',
      'Cloud Integration',
      'Basic Security Setup',
    ],
  },
  {
    title: 'Enterprise Setup',
    price: '₦300,000',
    features: [
      'Complete Office Setup',
      'Server Configuration',
      'Advanced Security',
      'Cloud Integration',
      'Training & Documentation',
      'Ongoing Support',
    ],
  },
];

const faqs = [
  {
    question: 'How long does a typical workstation setup take?',
    answer: 'A single workstation setup typically takes 2-3 hours, while a complete office setup may take 1-2 days depending on the size and complexity.',
  },
  {
    question: 'Do you provide ongoing support after setup?',
    answer: 'Yes, we offer various support packages to ensure your systems continue running smoothly after the initial setup.',
  },
  {
    question: 'What kind of security measures do you implement?',
    answer: 'We implement comprehensive security measures including antivirus software, firewalls, data encryption, and secure backup solutions.',
  },
  {
    question: 'Can you help with existing setups?',
    answer: 'Yes, we can assess and optimize existing setups, implement security improvements, and resolve any issues you may be experiencing.',
  },
];

export default function WorkstationSetupPage() {
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
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-yellow-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-yellow-400/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-yellow-400 font-bold text-xl">TeaMo</Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'text-yellow-400'
                      : 'text-yellow-100 hover:text-yellow-400'
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-yellow-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <Link
              href="/contact"
              className="hidden md:inline-block px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-yellow-400/20 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-yellow-400'
                    : 'text-yellow-100 hover:text-yellow-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300 transition-colors duration-200 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

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

      {/* Hero Section with enhanced animation */}
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
              Workstation Setup Services
              <div className="absolute -inset-1 bg-yellow-400/20 rounded-lg blur-lg -z-10 animate-pulse-slow"></div>
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-yellow-100 mb-6 animate-fade-in-delay relative">
            Professional workstation setup and network configuration services. From individual workstations to complete office setups, we've got you covered.
            <div className="absolute -inset-1 bg-yellow-400/5 rounded-lg blur-lg -z-10 animate-pulse-slow"></div>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Link 
              href="/contact" 
              className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 relative group"
            >
              <span className="relative z-10">Get Started</span>
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
                <FaDesktop className="text-2xl animate-float" />
                <div className="feature-glow"></div>
              </div>
              <span className="text-sm">Workstation Setup</span>
            </div>
            <div className="w-1 h-1 bg-yellow-400/40 rounded-full"></div>
            <div className="feature-highlight group">
              <div className="feature-icon-wrapper">
                <FaNetworkWired className="text-2xl animate-float-delay-1" />
                <div className="feature-glow"></div>
              </div>
              <span className="text-sm">Network Configuration</span>
            </div>
            <div className="w-1 h-1 bg-yellow-400/40 rounded-full"></div>
            <div className="feature-highlight group">
              <div className="feature-icon-wrapper">
                <FaShieldAlt className="text-2xl animate-float-delay-2" />
                <div className="feature-glow"></div>
              </div>
              <span className="text-sm">Security Setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with enhanced cards */}
      <section id="services" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`workstation-card bg-gradient-to-br ${service.color} p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 group cursor-pointer`}
                onClick={() => {
                  // Add click animation
                  const element = document.getElementById(`service-${index}`);
                  if (element) {
                    element.classList.add('animate-click');
                    setTimeout(() => element.classList.remove('animate-click'), 300);
                  }
                }}
                id={`service-${index}`}
              >
                <div className="text-yellow-400 mb-4 transform group-hover:rotate-12 transition-transform duration-300 relative">
                  {service.icon}
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{service.label}</h3>
                <p className="text-yellow-100 group-hover:text-yellow-50 transition-colors duration-300">{service.desc}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 w-0 group-hover:w-full bg-yellow-400/50 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with enhanced steps */}
      <section id="process" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className={`text-center bg-gradient-to-br ${step.color} p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 group`}
              >
                <div className="text-yellow-400 mb-4 transform group-hover:rotate-12 transition-transform duration-300">{step.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{step.label}</h3>
                <p className="text-yellow-100 group-hover:text-yellow-50 transition-colors duration-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section with enhanced cards */}
      <section id="technologies" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Technologies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`workstation-card bg-gradient-to-br ${tech.color} p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 group cursor-pointer relative overflow-hidden`}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  card.style.setProperty('--mouse-x', `${x}px`);
                  card.style.setProperty('--mouse-y', `${y}px`);
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  card.style.setProperty('--mouse-x', `${x}px`);
                  card.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       backgroundPosition: 'var(--mouse-x) var(--mouse-y)',
                       backgroundSize: '200% 200%',
                     }}
                />
                <div className="text-yellow-400 mb-4 transform group-hover:rotate-12 transition-transform duration-300 relative">
                  {tech.icon}
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{tech.label}</h3>
                <p className="text-yellow-100 group-hover:text-yellow-50 transition-colors duration-300">{tech.desc}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 w-0 group-hover:w-full bg-yellow-400/50 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section with enhanced interactivity */}
      <section id="case-studies" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="case-study-card bg-black/50 p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 group cursor-pointer relative overflow-hidden"
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  card.style.setProperty('--mouse-x', `${x}px`);
                  card.style.setProperty('--mouse-y', `${y}px`);
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  card.style.setProperty('--mouse-x', `${x}px`);
                  card.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       backgroundPosition: 'var(--mouse-x) var(--mouse-y)',
                       backgroundSize: '200% 200%',
                     }}
                />
                <h3 className="text-xl font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{study.title}</h3>
                <p className="text-yellow-100 mb-4 group-hover:text-yellow-50 transition-colors duration-300">{study.description}</p>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li 
                      key={i} 
                      className="flex items-center text-yellow-100 group-hover:text-yellow-50 transition-colors duration-300 transform hover:translate-x-2"
                    >
                      <FaCheckCircle className="text-yellow-400 mr-2 transform group-hover:scale-110 transition-transform duration-300" />
                      {result}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 w-0 group-hover:w-full bg-yellow-400/50 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with enhanced animations */}
      <section id="pricing" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Pricing Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingStructure.map((plan, index) => (
              <div 
                key={index} 
                className="pricing-card bg-black/50 p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 group cursor-pointer relative overflow-hidden"
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  card.style.setProperty('--mouse-x', `${x}px`);
                  card.style.setProperty('--mouse-y', `${y}px`);
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  card.style.setProperty('--mouse-x', `${x}px`);
                  card.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       backgroundPosition: 'var(--mouse-x) var(--mouse-y)',
                       backgroundSize: '200% 200%',
                     }}
                />
                <h3 className="text-xl font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{plan.title}</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li 
                      key={i} 
                      className="flex items-center text-yellow-100 group-hover:text-yellow-50 transition-colors duration-300 transform hover:translate-x-2"
                    >
                      <FaCheckCircle className="text-yellow-400 mr-2 transform group-hover:scale-110 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link 
                    href="/contact" 
                    className="block w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-200 text-center transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-lg border border-yellow-400/20">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{faq.question}</h3>
                <p className="text-yellow-100">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={setSectionRef} className="w-full py-16 md:py-24 bg-black text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Ready to Set Up Your Workstations?</h2>
          <p className="text-lg text-yellow-100 mb-8">Contact us today to discuss your workstation setup needs.</p>
          <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200">
            Get Started
          </Link>
        </div>
      </section>

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

        @keyframes pulse {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.5;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-rotate {
          animation: rotate 20s linear infinite;
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

        /* Enhanced workstation-specific animations */
        .workstation-card {
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .workstation-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(251, 191, 36, 0.1),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s;
        }

        .workstation-card:hover::after {
          opacity: 1;
        }

        /* Enhanced case study card animations */
        .case-study-card {
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .case-study-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(251, 191, 36, 0.1),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s;
        }

        .case-study-card:hover::after {
          opacity: 1;
        }

        /* Enhanced pricing card animations */
        .pricing-card {
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .pricing-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(251, 191, 36, 0.1),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s;
        }

        .pricing-card:hover::after {
          opacity: 1;
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

        /* Tech Gears Animation */
        .tech-gear {
          position: absolute;
          animation: rotate 20s linear infinite;
        }

        .tech-gear-1 {
          top: 10%;
          left: 10%;
          animation-duration: 30s;
        }

        .tech-gear-2 {
          top: 20%;
          right: 15%;
          animation-duration: 25s;
          animation-direction: reverse;
        }

        .tech-gear-3 {
          bottom: 15%;
          left: 20%;
          animation-duration: 35s;
        }

        .tech-gear-4 {
          bottom: 25%;
          right: 10%;
          animation-duration: 28s;
          animation-direction: reverse;
        }

        .tech-gear-5 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-duration: 40s;
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

        /* Enhanced mobile optimizations for hero section */
        @media (max-width: 640px) {
          .tech-gear {
            display: none;
          }

          .feature-highlight {
            padding: 0.5rem;
          }

          .feature-icon-wrapper {
            padding: 0.75rem;
          }

          .feature-highlight span {
            font-size: 0.875rem;
          }
        }

        /* Optimize animations for low-end devices */
        @media (prefers-reduced-motion: reduce) {
          .tech-gear,
          .feature-highlight,
          .feature-icon-wrapper,
          .feature-glow {
            animation: none !important;
            transition: none !important;
          }
        }

        /* Optimize for touch devices */
        @media (hover: none) {
          .feature-highlight:hover {
            transform: none;
          }

          .feature-highlight:active {
            transform: scale(0.98);
          }

          .feature-highlight:active .feature-icon-wrapper {
            transform: scale(0.95);
          }
        }
      `}</style>
    </main>
  );
} 