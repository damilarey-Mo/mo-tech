"use client";

import React, { useEffect, useState, useRef } from 'react';
import { FaDesktop, FaCheckCircle, FaClock, FaCogs, FaGamepad, FaNetworkWired, FaWifi, FaPlug, FaMicrophone, FaHeadphones, FaCamera, FaTools, FaQuestionCircle, FaHome, FaLaptopCode, FaChartLine, FaMoneyBillWave, FaChevronLeft, FaChevronRight, FaBars, FaTimes, FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'gaming-setup', label: 'Gaming Setup' },
  { id: 'streaming-setup', label: 'Streaming Setup' },
  { id: 'studio-setup', label: 'Studio Setup' },
  { id: 'process', label: 'Process' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

const process = [
  { step: 'Consultation & Needs Analysis', desc: 'We discuss your workflow, space, and performance needs.' },
  { step: 'Design & Planning', desc: 'Custom layout, hardware selection, and ergonomic planning.' },
  { step: 'Procurement & Assembly', desc: 'We source, deliver, and assemble all components.' },
  { step: 'Configuration & Optimization', desc: 'System setup, software installation, network configuration, and performance tuning.' },
  { step: 'Training & Handover', desc: 'We train you on your new setup and provide ongoing support.' },
];

const techStack = [
  { icon: <FaDesktop className="text-yellow-400 text-2xl" />, label: 'Intel/AMD CPUs' },
  { icon: <FaCogs className="text-yellow-400 text-2xl" />, label: 'NVIDIA/AMD GPUs' },
  { icon: <FaNetworkWired className="text-yellow-400 text-2xl" />, label: 'CAT6/CAT7 Cabling' },
  { icon: <FaWifi className="text-yellow-400 text-2xl" />, label: 'WiFi 6/6E Mesh' },
  { icon: <FaPlug className="text-yellow-400 text-2xl" />, label: 'UPS & Power Management' },
  { icon: <FaMicrophone className="text-yellow-400 text-2xl" />, label: 'Pro Audio/Streaming Gear' },
  { icon: <FaCamera className="text-yellow-400 text-2xl" />, label: 'Webcams & Capture Cards' },
  { icon: <FaHeadphones className="text-yellow-400 text-2xl" />, label: 'Audio Isolation & Monitoring' },
  { icon: <FaTools className="text-yellow-400 text-2xl" />, label: 'Custom BIOS/OS Tuning' },
];

const gamingSetupFeatures = [
  {
    title: 'High-Performance Gaming PCs',
    features: [
      'Custom-built gaming rigs with latest gen CPUs and GPUs',
      'Liquid cooling and advanced thermal management',
      'RGB lighting and custom case mods',
      'Dual/Quad monitor setups with high refresh rates',
      'Mechanical keyboards and gaming mice',
      'Gaming chairs and ergonomic accessories',
      'Custom water cooling loops and hardline tubing',
      'Overclocking and performance optimization',
      'Gaming-specific audio setup with surround sound',
      'Streaming PC integration for dual PC setups'
    ]
  },
  {
    title: 'Gaming Room Setup',
    features: [
      'Ambient lighting and LED strips',
      'Soundproofing and acoustic treatment',
      'Gaming furniture and cable management',
      'High-speed internet optimization',
      'Console integration and setup',
      'VR/AR setup and calibration',
      'Smart home integration for gaming',
      'Gaming room climate control',
      'Custom gaming desk and monitor mounts',
      'Gaming room sound system setup'
    ]
  },
  {
    title: 'Esports & Competitive Gaming',
    features: [
      'Tournament-grade PC optimization',
      'Low-latency network setup',
      'Competitive gaming peripherals',
      'Streaming and recording setup',
      'Team communication systems',
      'Backup power solutions',
      'Multiple monitor calibration',
      'Gaming room sound isolation',
      'Tournament streaming setup',
      'Practice and warm-up stations'
    ]
  }
];

const streamingSetupFeatures = [
  {
    title: 'Streaming Equipment',
    features: [
      'Professional webcams and capture cards',
      'Studio-quality microphones and audio interfaces',
      'Streaming software setup and optimization',
      'Green screen and lighting setup',
      'Stream deck and control panel integration',
      'Multi-camera setup for different angles',
      'Professional audio mixing and processing',
      'Stream alerts and overlay setup',
      'Chat bot and moderation tools',
      'Stream analytics and monitoring'
    ]
  },
  {
    title: 'Streaming Room Design',
    features: [
      'Acoustic treatment and sound isolation',
      'Professional lighting setup',
      'Backdrop and scene design',
      'Cable management and power solutions',
      'Streaming PC optimization',
      'Network setup for stable streaming',
      'Streaming room climate control',
      'Smart home integration for streaming',
      'Streaming room sound system',
      'Emergency backup systems'
    ]
  },
  {
    title: 'Content Creation Setup',
    features: [
      'Video editing workstation setup',
      'Thumbnail and graphic design setup',
      'Content scheduling and management',
      'Social media integration',
      'Content backup and storage solutions',
      'Multi-platform streaming setup',
      'Content creation software suite',
      'Remote collaboration tools',
      'Content analytics dashboard',
      'Automated content workflows'
    ]
  }
];

const studioSetupFeatures = [
  {
    title: 'Professional Studio Setup',
    features: [
      'Audio recording and mixing setup',
      'Video production and editing stations',
      'Photography and design workstations',
      '3D modeling and animation rigs',
      'Music production and DAW setup',
      'Broadcast and podcast equipment',
      'Professional color grading setup',
      'Motion capture and animation setup',
      'Virtual production studio setup',
      'Live broadcast and streaming setup'
    ]
  },
  {
    title: 'Studio Environment',
    features: [
      'Professional acoustic treatment',
      'Studio lighting and color grading',
      'Ergonomic furniture and equipment placement',
      'Climate control and ventilation',
      'Power management and UPS systems',
      'Network infrastructure for file sharing',
      'Studio security and access control',
      'Green room and waiting area setup',
      'Studio storage and organization',
      'Emergency backup systems'
    ]
  },
  {
    title: 'Specialized Studio Solutions',
    features: [
      'Voice-over and podcast studio setup',
      'Music recording and production studio',
      'Video production and editing suite',
      'Photography and digital art studio',
      '3D printing and prototyping lab',
      'Virtual reality development studio',
      'Game development workstation setup',
      'Architectural visualization setup',
      'Scientific research workstation',
      'Data analysis and visualization setup'
    ]
  }
];

const faqs = [
  {
    q: 'What kind of gaming PC can you build?',
    a: 'We build custom gaming PCs tailored to your needs, from budget-friendly builds to high-end gaming rigs with the latest RTX 4090 GPUs and Intel/AMD processors. We handle everything from parts selection to assembly and optimization, including custom water cooling, RGB lighting, and performance tuning.'
  },
  {
    q: 'Do you offer streaming setup services?',
    a: 'Yes! We provide complete streaming setups including professional webcams, microphones, lighting, and software configuration. We can also help with stream deck setup, scene creation, stream optimization, and multi-platform streaming integration.'
  },
  {
    q: 'Can you help with studio acoustic treatment?',
    a: 'Absolutely! We offer professional acoustic treatment services including soundproofing, bass traps, diffusers, and acoustic panels. We can also help with room analysis, optimal speaker placement, and studio design for optimal sound quality.'
  },
  {
    q: 'What brands do you work with for equipment?',
    a: 'We work with top brands like Elgato, Logitech, Shure, Rode, Elgato, Corsair, ASUS, MSI, and more. We can source any equipment you need or work with your existing gear, ensuring compatibility and optimal performance.'
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes, we offer comprehensive support including setup, training, troubleshooting, and maintenance. We also provide remote support and can help with software updates, optimization, and emergency assistance when needed.'
  },
  {
    q: 'Can you help with network setup for streaming?',
    a: 'Yes! We specialize in network optimization for streaming, including router configuration, QoS settings, and network infrastructure setup to ensure stable, high-quality streams with minimal latency.'
  },
  {
    q: 'What kind of studio setups do you offer?',
    a: 'We offer a wide range of studio setups including music production, podcast, video production, photography, 3D modeling, and game development studios. Each setup is customized to your specific needs and workflow.'
  },
  {
    q: 'Do you provide training for the equipment?',
    a: 'Yes, we provide comprehensive training for all equipment and software, including best practices, workflow optimization, and troubleshooting. We also offer ongoing support and can help you learn new features as they become available.'
  }
];

export default function WorkstationStudioSetupPage() {
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

      {/* Default Navbar - Enhanced for mobile */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-yellow-400 font-bold text-xl hover:text-yellow-300 transition-colors duration-200">
                MO-TECH
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/services/web-development" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-yellow-400/10">
                  Web Development
                </Link>
                <Link href="/services/app-development" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-yellow-400/10">
                  App Development
                </Link>
                <Link href="/services/it-support" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-yellow-400/10">
                  IT Support
                </Link>
                <Link href="/services/workstation-setup" className="text-yellow-400 bg-yellow-400/10 px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-400/20 transition-all duration-200">
                  Workstation Setup
                </Link>
                <Link href="/services/cybersecurity" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-yellow-400/10">
                  Cybersecurity
                </Link>
                <Link href="/services/gadget-sales-repair" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-yellow-400/10">
                  Gadget Sales & Repair
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-yellow-400 hover:text-yellow-300 p-2 rounded-md hover:bg-yellow-400/10 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Service-specific Sidebar - Enhanced for mobile */}
      <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-black/90 backdrop-blur-lg border-r border-yellow-400/20 z-40 hidden md:block transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-48'}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            {!isSidebarCollapsed && (
              <h3 className="text-yellow-400 font-semibold">Workstation Setup</h3>
            )}
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="text-yellow-400 hover:text-yellow-300 p-2 rounded-md hover:bg-yellow-400/10 transition-all duration-200"
              aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isSidebarCollapsed ? <FaChevronRight size={16} /> : <FaChevronLeft size={16} />}
            </button>
          </div>
          <nav className="space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'text-yellow-400 bg-yellow-400/10'
                    : 'text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5'
                }`}
                title={isSidebarCollapsed ? section.label : ''}
              >
                {section.id === 'hero' && <FaHome className="flex-shrink-0" size={16} />}
                {section.id === 'services' && <FaTools className="flex-shrink-0" size={16} />}
                {section.id === 'gaming-setup' && <FaGamepad className="flex-shrink-0" size={16} />}
                {section.id === 'streaming-setup' && <FaCamera className="flex-shrink-0" size={16} />}
                {section.id === 'studio-setup' && <FaMicrophone className="flex-shrink-0" size={16} />}
                {section.id === 'process' && <FaCogs className="flex-shrink-0" size={16} />}
                {section.id === 'technologies' && <FaLaptopCode className="flex-shrink-0" size={16} />}
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

      {/* Mobile Menu - Enhanced with animations */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-yellow-400/20 z-50 animate-slideDown"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/services/web-development" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all duration-200">
              Web Development
            </Link>
            <Link href="/services/app-development" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all duration-200">
              App Development
            </Link>
            <Link href="/services/it-support" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all duration-200">
              IT Support
            </Link>
            <Link href="/services/workstation-setup" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 bg-yellow-400/10">
              Workstation Setup
            </Link>
            <Link href="/services/cybersecurity" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all duration-200">
              Cybersecurity
            </Link>
            <Link href="/services/gadget-sales-repair" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all duration-200">
              Gadget Sales & Repair
            </Link>
            <div className="border-t border-yellow-400/20 my-2"></div>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
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

      {/* Main Content with Sidebar Offset - Enhanced for mobile */}
      <div className={`w-full transition-all duration-300 ${isSidebarCollapsed ? 'md:ml-16' : 'md:ml-48'}`}>
        {/* Back to Top Button - Enhanced with animation */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 animate-fadeIn"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}

        {/* Hero Section - Enhanced for mobile */}
        <section id="hero" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 leading-tight">
              Workstation, Studio & Network Setup
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-yellow-100 mb-6 max-w-2xl mx-auto">
              Custom studio and network setups for professionals, creators, and gamers. Ergonomic, high-performance, and fully tailored to your needs—including robust wired and wireless networking.
            </p>
          </div>
        </section>

        {/* Services Section - Enhanced for mobile */}
        <section id="services" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">What's Included</h2>
            <ul className="text-yellow-100 mb-6 space-y-3 list-none">
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-200">
                <FaDesktop className="text-yellow-400 flex-shrink-0" />
                <span>Custom workstation or gaming PC build</span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-200">
                <FaGamepad className="text-yellow-400 flex-shrink-0" />
                <span>Multi-monitor and audio setup</span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-200">
                <FaCogs className="text-yellow-400 flex-shrink-0" />
                <span>Ergonomic furniture and lighting</span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-200">
                <FaNetworkWired className="text-yellow-400 flex-shrink-0" />
                <span>Wired and wireless network setup & optimization</span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-200">
                <FaTools className="text-yellow-400 flex-shrink-0" />
                <span>Software installation and configuration</span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-200">
                <FaPlug className="text-yellow-400 flex-shrink-0" />
                <span>Onsite delivery, assembly, and cable management</span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-200">
                <FaCheckCircle className="text-yellow-400 flex-shrink-0" />
                <span>Post-setup support and training</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Feature Sections - Enhanced for mobile */}
        <section id="gaming-setup" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Gaming Setup Solutions</h2>
            <div className="space-y-6">
              {gamingSetupFeatures.map((category, index) => (
                <div key={index} className="bg-black rounded-xl border border-yellow-400/20 p-6 hover:border-yellow-400/40 transition-all duration-200">
                  <h3 className="text-xl font-semibold text-yellow-300 mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-yellow-100">
                        <FaCheckCircle className="text-yellow-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Similar enhancements for streaming-setup and studio-setup sections */}
        {/* ... */}

        {/* Process Section - Enhanced for mobile */}
        <section id="process" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Our Process & Roadmap</h2>
            <div className="space-y-4">
              {process.map((p, index) => (
                <div key={p.step} className="flex items-start gap-4 p-4 rounded-lg bg-black border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-200">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-300 mb-1">{p.step}</h3>
                    <p className="text-yellow-100">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 p-4 rounded-lg bg-yellow-400/5 border border-yellow-400/20">
              <FaClock className="text-yellow-400 text-2xl" />
              <div>
                <span className="font-bold text-yellow-300">Average Delivery:</span>
                <span className="text-yellow-100 ml-2">3-7 days (depending on complexity)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section - Enhanced for mobile */}
        <section id="technologies" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Tech Stack & Gear</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((item) => (
                <div key={item.label} className="flex flex-col items-center bg-black rounded-xl border border-yellow-400/20 p-4 hover:border-yellow-400/40 transition-all duration-200">
                  {item.icon}
                  <span className="text-yellow-100 mt-2 text-sm text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section - Enhanced for mobile */}
        <section id="pricing" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Why Choose TeaMo?</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-black border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-200">
                <FaCheckCircle className="text-yellow-400 flex-shrink-0" />
                <span className="text-yellow-100">Expert studio designers and PC builders</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-black border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-200">
                <FaCogs className="text-yellow-400 flex-shrink-0" />
                <span className="text-yellow-100">Performance-tuned for your workflow or gaming</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-black border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-200">
                <FaGamepad className="text-yellow-400 flex-shrink-0" />
                <span className="text-yellow-100">Genuine parts, warranty, and aftercare</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-black border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-200">
                <FaTools className="text-yellow-400 flex-shrink-0" />
                <span className="text-yellow-100">Personalized ergonomic and aesthetic design</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-black border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-200">
                <FaCheckCircle className="text-yellow-400 flex-shrink-0" />
                <span className="text-yellow-100">Free consultation and layout planning</span>
              </div>
            </div>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Book Your Studio Setup
            </Link>
          </div>
        </section>

        {/* FAQ Section - Enhanced for mobile */}
        <section id="faq" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
              <FaQuestionCircle className="text-yellow-400" /> FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-black rounded-xl border border-yellow-400/20 p-6 hover:border-yellow-400/40 transition-all duration-200">
                  <h3 className="text-yellow-300 font-semibold mb-3">{faq.q}</h3>
                  <p className="text-yellow-100">{faq.a}</p>
                </div>
              ))}
            </div>
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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
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

        /* Optimize animations for low-end devices */
        @media (prefers-reduced-motion: reduce) {
          section, .animate-fadeIn, .animate-slideDown {
            transition: none;
            animation: none;
          }
        }

        /* Improve touch targets on mobile */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </main>
  );
} 