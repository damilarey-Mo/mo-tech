"use client";

import React, { useEffect, useState, useRef } from 'react';
import { FaPalette, FaPencilRuler, FaLayerGroup, FaBrush, FaCamera, FaVideo, FaPrint, FaMobile, FaGlobe, FaCheckCircle, FaClock, FaQuestionCircle, FaHome, FaChevronLeft, FaChevronRight, FaBars, FaTimes, FaArrowUp, FaMoneyBillWave, FaStar, FaQuoteLeft, FaComments } from 'react-icons/fa';
import Link from 'next/link';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

const services = [
  { 
    icon: <FaPencilRuler className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Brand Identity Design', 
    desc: 'Comprehensive brand identity development including logo design, color palette, typography, and brand guidelines. We create cohesive visual identities that resonate with your target audience.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaLayerGroup className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Print Design', 
    desc: 'Professional print design services for business cards, brochures, flyers, banners, and packaging. We ensure high-quality designs that maintain brand consistency across all materials.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaBrush className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Digital Design', 
    desc: 'Engaging digital designs for websites, social media, email marketing, and digital advertisements. We create visually appealing content that drives engagement and conversions.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaCamera className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Photography & Image Editing', 
    desc: 'Professional photography services and expert image editing. We capture and enhance visuals that tell your brand story and showcase your products or services.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaVideo className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Motion Graphics & Animation', 
    desc: 'Dynamic motion graphics and animations for social media, websites, and presentations. We create engaging visual content that captures attention and communicates your message effectively.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaPrint className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Packaging Design', 
    desc: 'Innovative packaging design that enhances product appeal and brand recognition. We create packaging solutions that stand out on shelves and provide excellent user experience.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaMobile className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'UI/UX Design', 
    desc: 'User-centered interface and experience design for websites and applications. We create intuitive, engaging, and accessible digital experiences that delight users.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaGlobe className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Environmental Design', 
    desc: 'Comprehensive environmental design for retail spaces, offices, and exhibitions. We create immersive brand experiences through thoughtful spatial design.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  }
];

const process = [
  { step: 'Discovery & Research', desc: 'We analyze your brand, market, and competitors to understand your unique positioning and design needs.' },
  { step: 'Concept Development', desc: 'Our team creates initial design concepts and presents multiple options for your review and feedback.' },
  { step: 'Design Refinement', desc: 'We refine the chosen concept based on your feedback, ensuring it perfectly aligns with your vision.' },
  { step: 'Finalization', desc: 'Final designs are polished and prepared for implementation across all required platforms and materials.' },
  { step: 'Implementation', desc: 'We provide all necessary files and guidelines for consistent brand application across all touchpoints.' },
];

const technologies = [
  { 
    icon: <FaPalette className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Design Software', 
    desc: 'Adobe Creative Suite, Figma, Sketch, Procreate',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaCamera className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Photo & Video', 
    desc: 'Adobe Lightroom, Photoshop, Premiere Pro, After Effects',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaPrint className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Print Production', 
    desc: 'Adobe InDesign, Illustrator, Print Production Tools',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaMobile className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'UI/UX Tools', 
    desc: 'Figma, Adobe XD, Sketch, InVision',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaVideo className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Animation Tools', 
    desc: 'After Effects, Premiere Pro, Cinema 4D',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaGlobe className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: '3D & Rendering', 
    desc: 'Blender, Maya, V-Ray, Corona',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const pricingStructure = [
  {
    title: 'Basic Package',
    price: '₦150,000',
    features: [
      'Logo Design',
      'Basic Brand Guidelines',
      'Business Card Design',
      'Social Media Templates',
      'Basic Image Editing',
    ],
  },
  {
    title: 'Growth Package',
    price: '₦300,000',
    features: [
      'Complete Brand Identity',
      'Comprehensive Brand Guidelines',
      'Marketing Materials Design',
      'Social Media Kit',
      'Website Design',
      'Photo Editing & Retouching',
    ],
  },
  {
    title: 'Enterprise Package',
    price: '₦500,000',
    features: [
      'Full Brand Strategy',
      'Complete Brand Identity System',
      'All Marketing Materials',
      'Motion Graphics & Animation',
      'UI/UX Design',
      'Photography & Videography',
      'Dedicated Designer',
    ],
  },
];

const faqs = [
  {
    q: 'How long does it take to complete a branding project?',
    a: 'Timeline varies by project scope. A basic logo design typically takes 1-2 weeks, while a complete brand identity project may take 4-6 weeks. We provide detailed timelines during consultation.'
  },
  {
    q: 'Do you offer revisions on designs?',
    a: 'Yes, we include multiple revision rounds in our packages to ensure you\'re completely satisfied with the final design. The number of revisions depends on your chosen package.'
  },
  {
    q: 'What file formats do you provide?',
    a: 'We provide all necessary file formats including vector files (AI, EPS), raster files (PNG, JPG), and source files. We also include guidelines for proper usage across different platforms.'
  },
  {
    q: 'Can you help with printing services?',
    a: 'Yes, we work with trusted printing partners and can manage the entire print production process, ensuring high-quality results for all your printed materials.'
  },
  {
    q: 'Do you offer photography services?',
    a: 'Yes, we provide professional photography services for products, corporate events, and brand photography. This can be included in our comprehensive packages.'
  },
  {
    q: 'How do you ensure brand consistency?',
    a: 'We create detailed brand guidelines that cover logo usage, color palettes, typography, and design elements. These guidelines ensure consistent brand application across all platforms.'
  }
];

const caseStudies = [
  {
    title: 'Brand Transformation',
    client: 'Tech Startup',
    results: [
      '200% increase in brand recognition',
      '150% growth in social media engagement',
      '40% improvement in customer perception'
    ],
    description: 'Complete brand overhaul including new identity, website design, and marketing materials.'
  },
  {
    title: 'Product Packaging Design',
    client: 'Fashion Brand',
    results: [
      '300% increase in shelf appeal',
      '80% improvement in customer feedback',
      '50% growth in retail sales'
    ],
    description: 'Innovative packaging design that enhanced product visibility and customer experience.'
  },
  {
    title: 'Digital Brand Presence',
    client: 'E-commerce Platform',
    results: [
      '250% increase in website engagement',
      '120% growth in social media following',
      '90% improvement in conversion rate'
    ],
    description: 'Comprehensive digital design strategy including website, social media, and marketing materials.'
  }
];

const testimonials = [
  {
    name: 'David Okafor',
    role: 'Marketing Director',
    company: 'Tech Innovations Ltd',
    content: 'TeaMo\'s design team transformed our brand identity. Their creative approach and attention to detail helped us stand out in a competitive market.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    role: 'Founder',
    company: 'Eco Fashion',
    content: 'The packaging design created by TeaMo has significantly improved our product presentation and customer experience. Their team is incredibly talented and professional.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Digital Solutions',
    content: 'Working with TeaMo on our brand refresh was a game-changer. Their strategic approach to design helped us connect better with our target audience.',
    rating: 5
  }
];

export default function GraphicsDesignPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      sectionsRef.current.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setSectionRef = (element: HTMLElement | null) => {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  };

  return (
    <main className={`min-h-screen bg-black text-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-yellow-400/20 z-50">
        <div 
          className="h-full bg-yellow-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`fixed inset-0 bg-black/95 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-yellow-400 text-xl font-bold">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-yellow-400 hover:text-yellow-300"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <nav className="space-y-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-yellow-100 hover:text-yellow-400 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-yellow-400/20 z-40 md:hidden">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-yellow-400 hover:text-yellow-300"
          >
            <FaBars size={24} />
          </button>
          <h1 className="text-yellow-400 font-bold">Graphics Design</h1>
          <div className="w-6" />
        </div>
      </header>

      {/* Desktop Sidebar */}
      <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-black/90 backdrop-blur-lg border-r border-yellow-400/20 z-40 hidden md:block transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-48'}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            {!isSidebarCollapsed && (
              <h3 className="text-yellow-400 font-semibold">Graphics Design</h3>
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
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-yellow-400/20 text-yellow-400'
                    : 'text-yellow-100 hover:bg-yellow-400/10 hover:text-yellow-400'
                }`}
              >
                {section.id === 'hero' && <FaHome size={16} />}
                {section.id === 'services' && <FaPalette size={16} />}
                {section.id === 'process' && <FaClock size={16} />}
                {section.id === 'technologies' && <FaGlobe size={16} />}
                {section.id === 'pricing' && <FaMoneyBillWave size={16} />}
                {section.id === 'faq' && <FaQuestionCircle size={16} />}
                {!isSidebarCollapsed && <span>{section.label}</span>}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`pt-16 md:pt-0 md:pl-${isSidebarCollapsed ? '16' : '48'} transition-all duration-300`}>
        {/* Hero Section */}
        <section id="hero" ref={setSectionRef} className="w-full py-16 md:py-24 bg-black text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 leading-tight">
              Graphics Design & Branding
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-yellow-100 mb-6 max-w-2xl mx-auto">
              Transform your brand with our professional graphic design and branding services. From logo design to complete brand identity, we create visual solutions that make your business stand out.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Our Services</h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6">
              {services.map((item, index) => (
                <div
                  key={item.label}
                  className="flex flex-col items-start gap-2 bg-black rounded-xl border border-yellow-400/20 p-3 sm:p-4 transition-all duration-300 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-yellow-300 font-semibold text-sm sm:text-base">{item.label}</h3>
                    <p className="text-yellow-100 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Our Process</h2>
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
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Technologies We Use</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech.label}
                  className="flex items-start gap-4 bg-black rounded-xl border border-yellow-400/20 p-4 transition-all duration-300 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mt-1">{tech.icon}</div>
                  <div>
                    <h3 className="text-yellow-300 font-semibold">{tech.label}</h3>
                    <p className="text-yellow-100 text-sm">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-black rounded-xl border border-yellow-400/20 p-6 transition-all duration-300 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10"
                >
                  <h3 className="text-yellow-400 font-bold text-xl mb-2">{study.title}</h3>
                  <p className="text-yellow-300 mb-4">{study.client}</p>
                  <ul className="space-y-2 mb-4">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-2 text-yellow-100">
                        <FaCheckCircle className="text-yellow-400" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-yellow-100 text-sm">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-black rounded-xl border border-yellow-400/20 p-6 transition-all duration-300 hover:border-yellow-400/40"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-yellow-400/20 text-2xl mb-4" />
                  <p className="text-yellow-100 mb-4">{testimonial.content}</p>
                  <div>
                    <p className="text-yellow-400 font-semibold">{testimonial.name}</p>
                    <p className="text-yellow-300 text-sm">{testimonial.role}</p>
                    <p className="text-yellow-200 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingStructure.map((plan, index) => (
                <div
                  key={plan.title}
                  className="bg-black rounded-xl border border-yellow-400/20 p-6 transition-all duration-300 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10"
                >
                  <h3 className="text-yellow-400 font-bold text-xl mb-2">{plan.title}</h3>
                  <div className="text-yellow-300 text-2xl font-bold mb-4">{plan.price}</div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-yellow-100">
                        <FaCheckCircle className="text-yellow-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-black rounded-xl border border-yellow-400/20 p-6 transition-all duration-300 hover:border-yellow-400/40"
                >
                  <h3 className="text-yellow-300 font-semibold mb-2">{faq.q}</h3>
                  <p className="text-yellow-100">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-black text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Ready to Transform Your Brand?</h2>
            <p className="text-yellow-100 mb-8">Let's discuss how our design services can help you create a powerful brand identity.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Live Chat Widget */}
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => window.open('https://wa.me/your-number', '_blank')}
            className="bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-200 flex items-center gap-2"
          >
            <FaComments size={24} />
            <span className="hidden md:inline">Chat with us</span>
          </button>
        </div>
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
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }

        section {
          opacity: 1;
          transform: translateY(0);
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