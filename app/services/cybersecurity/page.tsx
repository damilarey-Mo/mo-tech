"use client";

import React, { useEffect, useState, useRef } from 'react';
import { FaCode, FaCheckCircle, FaClock, FaTools, FaShoppingCart, FaServer, FaDatabase, FaMobile, FaShieldAlt, FaQuestionCircle, FaReact, FaNodeJs, FaPython, FaPhp, FaWordpress, FaLaravel, FaAws, FaDocker, FaGitAlt, FaVuejs, FaAngular, FaSass, FaBootstrap, FaJenkins, FaGithub, FaJira, FaTrello, FaSlack, FaConfluence, FaBitbucket, FaCircle, FaArrowUp, FaBars, FaTimes, FaLock, FaUserShield, FaBug, FaNetworkWired, FaShieldVirus, FaFingerprint, FaKey, FaLockOpen, FaUserLock, FaUserSecret, FaUserCheck, FaShieldAlt as FaShieldAltIcon, FaShieldVirus as FaShieldVirusIcon, FaHome, FaCogs, FaLaptopCode, FaChartLine, FaMoneyBillWave, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
    icon: <FaShieldAlt className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Security Assessment', 
    desc: 'Comprehensive evaluation of your current security posture',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaBug className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Vulnerability Testing', 
    desc: 'Identify and analyze potential security weaknesses',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaTools className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Implementation', 
    desc: 'Deploy security measures and best practices',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaClock className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Monitoring', 
    desc: '24/7 security monitoring and threat detection',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const services = [
  { 
    icon: <FaShieldAlt className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Security Audits', 
    desc: 'Comprehensive security assessments and compliance checks',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaBug className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Penetration Testing', 
    desc: 'Ethical hacking to identify vulnerabilities',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaNetworkWired className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Network Security', 
    desc: 'Protect your network infrastructure',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaFingerprint className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Data Protection', 
    desc: 'Secure your sensitive business data',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaUserLock className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Access Control', 
    desc: 'Manage and secure user access',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaShieldVirus className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Malware Protection', 
    desc: 'Defend against malicious software',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const technologies = [
  { 
    icon: <FaShieldAltIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'SIEM Tools', 
    desc: 'Security Information and Event Management',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaShieldVirusIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Penetration Testing', 
    desc: 'Ethical hacking and vulnerability assessment',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaNetworkWired className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Network Security', 
    desc: 'Firewalls and intrusion detection',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaFingerprint className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Data Encryption', 
    desc: 'Secure data transmission and storage',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaUserSecret className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'IAM', 
    desc: 'Identity and Access Management',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaShieldVirusIcon className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Antivirus', 
    desc: 'Malware protection and detection',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaAws className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Cloud Security', 
    desc: 'AWS and Azure security services',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaDocker className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Container Security', 
    desc: 'Secure containerized applications',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const caseStudies = [
  {
    title: 'Financial Institution Security',
    description: 'Implemented comprehensive security measures for a leading bank',
    results: ['Reduced security incidents by 80%', 'Achieved ISO 27001 certification', 'Improved compliance with regulatory requirements'],
  },
  {
    title: 'E-commerce Platform Protection',
    description: 'Secured online retail platform against cyber threats',
    results: ['Prevented 99.9% of attempted attacks', 'Reduced fraud cases by 60%', 'Improved customer trust and retention'],
  },
  {
    title: 'Healthcare Data Security',
    description: 'Protected sensitive patient data for healthcare provider',
    results: ['Ensured HIPAA compliance', 'Secured 1M+ patient records', 'Implemented zero-trust architecture'],
  },
];

const pricingStructure = [
  {
    title: 'Basic Security Package',
    price: '₦200,000',
    features: [
      'Security Assessment',
      'Basic Penetration Testing',
      'Monthly Security Reports',
      'Email Support',
    ],
  },
  {
    title: 'Professional Security',
    price: '₦400,000',
    features: [
      'Comprehensive Security Audit',
      'Advanced Penetration Testing',
      'Weekly Security Reports',
      '24/7 Support',
      'Security Training',
    ],
  },
  {
    title: 'Enterprise Security',
    price: '₦800,000',
    features: [
      'Full Security Suite',
      'Continuous Monitoring',
      'Real-time Threat Detection',
      'Dedicated Security Team',
      'Custom Security Solutions',
      'Compliance Management',
    ],
  },
];

const faqs = [
  {
    question: 'What is a security audit?',
    answer: 'A security audit is a comprehensive assessment of your organization\'s security posture, identifying vulnerabilities and providing recommendations for improvement.',
  },
  {
    question: 'How often should we conduct penetration testing?',
    answer: 'We recommend quarterly penetration testing for most organizations, with additional tests after major system changes or security incidents.',
  },
  {
    question: 'What compliance standards do you support?',
    answer: 'We support various compliance standards including ISO 27001, PCI DSS, HIPAA, and NDPR, helping you meet regulatory requirements.',
  },
  {
    question: 'Do you provide 24/7 security monitoring?',
    answer: 'Yes, our enterprise packages include 24/7 security monitoring and incident response services.',
  },
];

export default function CybersecurityPage() {
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
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-yellow-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

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
                <Link href="/services/app-development" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                  App Development
                </Link>
                <Link href="/services/it-support" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                  IT Support
                </Link>
                <Link href="/services/workstation-setup" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                  Workstation Setup
                </Link>
                <Link href="/services/cybersecurity" className="text-yellow-400 bg-yellow-400/10 px-3 py-2 rounded-md text-sm font-medium">
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
              <h3 className="text-yellow-400 font-semibold">Cybersecurity</h3>
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
            <Link href="/services/app-development" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5">
              App Development
            </Link>
            <Link href="/services/it-support" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5">
              IT Support
            </Link>
            <Link href="/services/workstation-setup" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5">
              Workstation Setup
            </Link>
            <Link href="/services/cybersecurity" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 bg-yellow-400/10">
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
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}

        {/* Hero Section with enhanced animation */}
        <section id="hero" ref={setSectionRef} className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-center visible parallax-section relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-transparent animate-pulse"></div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4 animate-fade-in relative">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Cybersecurity Services</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-yellow-100 mb-6 animate-fade-in-delay">Protect your business with our comprehensive cybersecurity solutions. From security audits to penetration testing, we've got you covered.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Link href="/contact" className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20">
              Get Started
            </Link>
            <a href="#services" className="px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold text-lg hover:bg-yellow-400/10 transition-all duration-200 transform hover:scale-105">
              Learn More
            </a>
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
                  className={`bg-gradient-to-br ${service.color} p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 group`}
                >
                  <div className="text-yellow-400 mb-4 transform group-hover:rotate-12 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{service.label}</h3>
                  <p className="text-yellow-100 group-hover:text-yellow-50 transition-colors duration-300">{service.desc}</p>
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
                  className={`text-center bg-gradient-to-br ${tech.color} p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 group`}
                >
                  <div className="text-yellow-400 mb-4 transform group-hover:rotate-12 transition-transform duration-300">{tech.icon}</div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{tech.label}</h3>
                  <p className="text-yellow-100 group-hover:text-yellow-50 transition-colors duration-300">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-black/50 p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors duration-200">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">{study.title}</h3>
                  <p className="text-yellow-100 mb-4">{study.description}</p>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center text-yellow-100">
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
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Pricing Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingStructure.map((plan, index) => (
                <div key={index} className="bg-black/50 p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors duration-200">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">{plan.title}</h3>
                  <p className="text-3xl font-bold text-yellow-400 mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-yellow-100">
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
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Ready to Secure Your Business?</h2>
            <p className="text-lg text-yellow-100 mb-8">Contact us today to discuss your cybersecurity needs.</p>
            <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200">
              Get Started
            </Link>
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

        /* Security-specific animations */
        .security-shield {
          position: relative;
        }

        .security-shield::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #fbbf24, #f59e0b, #d97706);
          border-radius: inherit;
          z-index: -1;
          animation: borderRotate 4s linear infinite;
        }

        @keyframes borderRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
} 