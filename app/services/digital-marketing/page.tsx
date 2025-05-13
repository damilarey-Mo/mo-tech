"use client";

import React, { useEffect, useState, useRef } from 'react';
import { FaChartLine, FaSearch, FaHashtag, FaPenFancy, FaBullhorn, FaChartBar, FaUsers, FaMobile, FaGlobe, FaCheckCircle, FaClock, FaQuestionCircle, FaHome, FaChevronLeft, FaChevronRight, FaBars, FaTimes, FaArrowUp, FaMoneyBillWave, FaStar, FaQuoteLeft, FaComments } from 'react-icons/fa';
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
    icon: <FaSearch className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Search Engine Optimization (SEO)', 
    desc: 'Improve your website visibility and rankings in search engines through technical SEO, on-page optimization, and content strategy.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaHashtag className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Social Media Marketing', 
    desc: 'Engage your audience and build brand presence across major social platforms with strategic content and community management.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaPenFancy className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Content Marketing', 
    desc: 'Create compelling content that attracts, engages, and converts your target audience through blogs, videos, and more.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaBullhorn className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'PPC & Paid Advertising', 
    desc: 'Drive targeted traffic and conversions through Google Ads, social media ads, and display advertising campaigns.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaChartBar className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Analytics & Reporting', 
    desc: 'Track and analyze your marketing performance with detailed reports and actionable insights.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaUsers className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Email Marketing', 
    desc: 'Build and nurture your email list with engaging campaigns and automated sequences.',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const process = [
  { step: 'Strategy Development', desc: 'We analyze your business, competitors, and target audience to create a custom digital marketing strategy.' },
  { step: 'Implementation', desc: 'Our team executes the strategy across all chosen channels with best practices and optimization.' },
  { step: 'Monitoring & Analysis', desc: 'We track performance metrics and analyze data to measure campaign effectiveness.' },
  { step: 'Optimization', desc: 'Based on data insights, we continuously improve campaigns for better results.' },
  { step: 'Reporting & Communication', desc: 'Regular reports and updates keep you informed of progress and ROI.' },
];

const technologies = [
  { 
    icon: <FaSearch className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'SEO Tools', 
    desc: 'SEMrush, Ahrefs, Moz, Google Search Console',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaChartBar className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Analytics Platforms', 
    desc: 'Google Analytics, Facebook Analytics, Custom Dashboards',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaBullhorn className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Advertising Platforms', 
    desc: 'Google Ads, Facebook Ads, LinkedIn Ads',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaUsers className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Email Marketing', 
    desc: 'Mailchimp, SendGrid, HubSpot',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaHashtag className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Social Media Tools', 
    desc: 'Buffer, Hootsuite, Later',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
  { 
    icon: <FaPenFancy className="text-yellow-400 text-3xl transform hover:scale-110 transition-transform duration-300" />, 
    label: 'Content Creation', 
    desc: 'Canva, Adobe Creative Suite, WordPress',
    color: 'from-yellow-400/20 to-yellow-400/5'
  },
];

const pricingStructure = [
  {
    title: 'Basic Package',
    price: '₦150,000',
    features: [
      'Basic SEO Optimization',
      'Social Media Management (2 platforms)',
      'Monthly Content Creation',
      'Basic Analytics Reporting',
      'Email Support',
    ],
  },
  {
    title: 'Growth Package',
    price: '₦300,000',
    features: [
      'Advanced SEO Strategy',
      'Social Media Management (4 platforms)',
      'Weekly Content Creation',
      'PPC Campaign Management',
      'Email Marketing',
      'Detailed Analytics & Reporting',
    ],
  },
  {
    title: 'Enterprise Package',
    price: '₦500,000',
    features: [
      'Full-Service Digital Marketing',
      'All Social Media Platforms',
      'Daily Content Creation',
      'Advanced PPC & Retargeting',
      'Custom Email Marketing',
      'Advanced Analytics & Strategy',
      'Dedicated Account Manager',
    ],
  },
];

const faqs = [
  {
    q: 'How long does it take to see results from digital marketing?',
    a: 'Results vary by strategy, but typically: SEO takes 3-6 months for significant results, PPC can show immediate results, and social media marketing usually shows engagement within 1-2 months. We provide regular reports to track progress.'
  },
  {
    q: 'Do you offer content creation services?',
    a: 'Yes, we provide comprehensive content creation including blog posts, social media content, email newsletters, and video content. All content is optimized for SEO and engagement.'
  },
  {
    q: 'How do you measure ROI for digital marketing?',
    a: 'We track key metrics like website traffic, conversion rates, lead generation, and revenue. We provide detailed analytics reports and can set up custom tracking for your specific business goals.'
  },
  {
    q: 'Which social media platforms do you manage?',
    a: "We manage all major platforms including Facebook, Instagram, Twitter, LinkedIn, and TikTok. We'll help you choose the right platforms based on your target audience and business goals."
  },
  {
    q: 'Do you offer local SEO services?',
    a: 'Yes, we specialize in local SEO to help businesses improve their visibility in local search results, including Google My Business optimization and local content strategy.'
  },
  {
    q: 'How often will I receive reports?',
    a: "We provide monthly detailed reports, but you'll also have access to real-time dashboards to monitor performance. For enterprise clients, we offer weekly reports and strategy calls."
  }
];

const caseStudies = [
  {
    title: 'E-commerce Growth Strategy',
    client: 'Fashion Retailer',
    results: [
      '300% increase in online sales',
      '50% reduction in customer acquisition cost',
      '200% growth in social media engagement'
    ],
    description: 'Implemented a comprehensive digital marketing strategy combining SEO, social media, and PPC campaigns.'
  },
  {
    title: 'Local Business Expansion',
    client: 'Restaurant Chain',
    results: [
      '150% increase in foot traffic',
      '80% growth in online orders',
      'Top 3 ranking in local search results'
    ],
    description: 'Developed and executed a local SEO and social media strategy to increase visibility and customer engagement.'
  },
  {
    title: 'B2B Lead Generation',
    client: 'Software Company',
    results: [
      '200% increase in qualified leads',
      '40% improvement in conversion rate',
      '300% growth in LinkedIn engagement'
    ],
    description: 'Created a targeted content marketing and LinkedIn advertising campaign to generate high-quality B2B leads.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Tech Solutions Ltd',
    content: 'TeaMo\'s digital marketing team transformed our online presence. Their strategic approach and data-driven decisions helped us achieve remarkable growth in just 6 months.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Eco Products',
    content: 'The ROI from our digital marketing campaigns has been outstanding. TeaMo\'s team is professional, responsive, and truly understands our business goals.',
    rating: 5
  },
  {
    name: 'Aisha Okafor',
    role: 'Founder',
    company: 'Fashion Forward',
    content: 'Working with TeaMo has been a game-changer for our brand. Their social media strategy and content creation have helped us connect with our audience in meaningful ways.',
    rating: 5
  }
];

export default function DigitalMarketingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visibility after component mount
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
          <h1 className="text-yellow-400 font-bold">Digital Marketing</h1>
          <div className="w-6" />
        </div>
      </header>

      {/* Desktop Sidebar */}
      <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-black/90 backdrop-blur-lg border-r border-yellow-400/20 z-40 hidden md:block transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-48'}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            {!isSidebarCollapsed && (
              <h3 className="text-yellow-400 font-semibold">Digital Marketing</h3>
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
                {section.id === 'services' && <FaChartLine size={16} />}
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
              Digital Marketing Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-yellow-100 mb-6 max-w-2xl mx-auto">
              Drive growth and engagement with our comprehensive digital marketing services. From SEO to social media, we help businesses thrive in the digital landscape.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={setSectionRef} className="w-full py-8 md:py-12 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Our Services</h2>
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
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Ready to Grow Your Business?</h2>
            <p className="text-yellow-100 mb-8">Let's discuss how our digital marketing services can help you achieve your goals.</p>
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