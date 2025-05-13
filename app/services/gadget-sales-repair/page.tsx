"use client";

import React, { useEffect, useState, useRef } from 'react';
import { FaMobile, FaCheckCircle, FaClock, FaTools, FaShoppingCart, FaTruck, FaDiagnoses, FaShieldAlt, FaQuestionCircle, FaLaptop, FaTablet, FaHeadphones, FaCamera, FaGamepad, FaSync, FaBatteryFull, FaMemory, FaHdd, FaDesktop, FaMicrochip, FaKeyboard, FaWifi, FaWater, FaExclamationTriangle, FaHome, FaCogs, FaLaptopCode, FaChartLine, FaMoneyBillWave, FaChevronLeft, FaChevronRight, FaBars, FaTimes, FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'repair-types', label: 'Repair Types' },
  { id: 'common-issues', label: 'Common Issues' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

const process = [
  { step: 'Diagnosis & Quote', desc: 'We assess your device and provide a detailed quote with no hidden fees.' },
  { step: 'Approval & Parts', desc: 'After your approval, we source genuine parts for the repair.' },
  { step: 'Expert Repair', desc: 'Our certified technicians perform the repair with precision.' },
  { step: 'Quality Check', desc: 'We thoroughly test your device to ensure perfect functionality.' },
  { step: 'Delivery & Support', desc: 'We deliver your device and provide warranty support.' },
];

const techStack = [
  { icon: <FaMobile className="text-yellow-400 text-2xl" />, label: 'Smartphones' },
  { icon: <FaLaptop className="text-yellow-400 text-2xl" />, label: 'Laptops & PCs' },
  { icon: <FaTablet className="text-yellow-400 text-2xl" />, label: 'Tablets' },
  { icon: <FaHeadphones className="text-yellow-400 text-2xl" />, label: 'Audio Devices' },
  { icon: <FaCamera className="text-yellow-400 text-2xl" />, label: 'Cameras' },
  { icon: <FaGamepad className="text-yellow-400 text-2xl" />, label: 'Gaming Consoles' },
  { icon: <FaTools className="text-yellow-400 text-2xl" />, label: 'Parts & Accessories' },
  { icon: <FaShieldAlt className="text-yellow-400 text-2xl" />, label: 'Warranty' },
  { icon: <FaSync className="text-yellow-400 text-2xl" />, label: 'Trade-in' },
];

const faqs = [
  {
    q: 'Do you offer free pickup and delivery?',
    a: 'Yes! We provide free pickup and delivery for all repair services within Lagos.'
  },
  {
    q: 'What types of devices do you repair?',
    a: 'We repair smartphones, laptops, tablets, gaming consoles, cameras, and other electronic devices. Our technicians are certified for multiple brands.'
  },
  {
    q: 'Do you use genuine parts?',
    a: 'Yes, we only use genuine or high-quality compatible parts to ensure the best performance and longevity of your device.'
  },
  {
    q: 'What warranty do you offer?',
    a: 'We offer a 90-day warranty on all repairs and parts. New devices come with manufacturer warranty.'
  },
  {
    q: 'Can I trade in my old device?',
    a: 'Yes! We offer competitive trade-in values for your old devices when purchasing new ones.'
  },
];

const repairTypes = [
  { icon: <FaBatteryFull className="text-yellow-400 text-2xl" />, label: 'Battery Replacement', desc: 'Genuine battery replacement for all major brands' },
  { icon: <FaDesktop className="text-yellow-400 text-2xl" />, label: 'Screen Repair', desc: 'LCD/LED/OLED screen replacement and digitizer repair' },
  { icon: <FaMemory className="text-yellow-400 text-2xl" />, label: 'Memory Upgrade', desc: 'RAM and storage upgrades for laptops and PCs' },
  { icon: <FaMicrochip className="text-yellow-400 text-2xl" />, label: 'Motherboard Repair', desc: 'Component-level repair and replacement' },
  { icon: <FaKeyboard className="text-yellow-400 text-2xl" />, label: 'Keyboard Repair', desc: 'Keyboard replacement and repair services' },
  { icon: <FaWifi className="text-yellow-400 text-2xl" />, label: 'Network Issues', desc: 'WiFi, Bluetooth, and cellular repair' },
];

const commonIssues = [
  { icon: <FaWater className="text-yellow-400 text-2xl" />, label: 'Water Damage', desc: 'Liquid damage assessment and repair' },
  { icon: <FaExclamationTriangle className="text-yellow-400 text-2xl" />, label: 'Software Issues', desc: 'OS repair, virus removal, data recovery' },
  { icon: <FaHdd className="text-yellow-400 text-2xl" />, label: 'Storage Problems', desc: 'Hard drive/SSD replacement and data recovery' },
  { icon: <FaMicrochip className="text-yellow-400 text-2xl" />, label: 'Performance Issues', desc: 'Overheating, slow performance, crashes' },
];

const pricingStructure = [
  { type: 'Diagnostic', price: 'Free', desc: 'Comprehensive device assessment' },
  { type: 'Basic Repair', price: '₦5,000 - ₦15,000', desc: 'Simple fixes like screen protector, basic cleaning' },
  { type: 'Standard Repair', price: '₦15,000 - ₦35,000', desc: 'Common repairs like battery, screen, keyboard' },
  { type: 'Complex Repair', price: '₦35,000+', desc: 'Motherboard repair, water damage, data recovery' },
];

export default function GadgetSalesRepairPage() {
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
                <Link href="/services/cybersecurity" className="text-yellow-100 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                  Cybersecurity
                </Link>
                <Link href="/services/gadget-sales-repair" className="text-yellow-400 bg-yellow-400/10 px-3 py-2 rounded-md text-sm font-medium">
                  Gadget Sales & Repair
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
              <h3 className="text-yellow-400 font-semibold">Gadget Sales & Repair</h3>
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
                {section.id === 'repair-types' && <FaTools className="flex-shrink-0" size={16} />}
                {section.id === 'common-issues' && <FaExclamationTriangle className="flex-shrink-0" size={16} />}
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
            <Link href="/services/cybersecurity" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-100 hover:text-yellow-400 hover:bg-yellow-400/5">
              Cybersecurity
            </Link>
            <Link href="/services/gadget-sales-repair" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 bg-yellow-400/10">
              Gadget Sales & Repair
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

        {/* Existing sections with refs */}
        <section id="hero" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">Gadget Sales & Repair</h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-yellow-100 mb-6">Expert gadget repair and sales services in Lagos. Free pickup and delivery, certified technicians, and genuine parts. Get your devices fixed or buy new ones with warranty.</p>
        </section>

        <section id="services" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Devices & Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {techStack.map((item) => (
                <div key={item.label} className="flex flex-col items-center bg-black rounded-xl border border-yellow-400/20 p-4">
                  {item.icon}
                  <span className="text-yellow-100 mt-2 text-sm text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Process & Roadmap</h2>
            <ol className="text-yellow-100 mb-6 space-y-3 list-decimal list-inside">
              {process.map((p) => (
                <li key={p.step}><span className="font-bold text-yellow-300">{p.step}:</span> {p.desc}</li>
              ))}
            </ol>
            <div className="flex items-center gap-3 text-yellow-200 mb-4">
              <FaClock className="text-yellow-400 text-2xl" />
              <span className="font-bold">Average Repair Time:</span> 24-48 hours (depending on complexity)
            </div>
          </div>
        </section>

        <section id="technologies" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Why Choose TeaMo?</h2>
            <ul className="text-yellow-100 mb-6 space-y-2 list-disc list-inside">
              <li><FaCheckCircle className="inline mr-2 text-yellow-400" />Certified technicians</li>
              <li><FaTools className="inline mr-2 text-yellow-400" />Genuine parts guarantee</li>
              <li><FaTruck className="inline mr-2 text-yellow-400" />Free pickup & delivery</li>
              <li>Competitive pricing</li>
              <li>90-day repair warranty</li>
            </ul>
            <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200">Get Your Device Fixed</Link>
          </div>
        </section>

        <section id="repair-types" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Repair Types</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {repairTypes.map((item) => (
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

        <section id="common-issues" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Common Issues We Fix</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {commonIssues.map((item) => (
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

        <section id="pricing" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Pricing Structure</h2>
            <div className="space-y-4 mb-6">
              {pricingStructure.map((item) => (
                <div key={item.type} className="flex justify-between items-center bg-black rounded-xl border border-yellow-400/20 p-4">
                  <div>
                    <h3 className="text-yellow-300 font-semibold">{item.type}</h3>
                    <p className="text-yellow-100 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-yellow-400 font-bold">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-yellow-100 text-sm italic">* Prices may vary based on device model and repair complexity</p>
          </div>
        </section>

        <section id="faq" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
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
          section {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
} 