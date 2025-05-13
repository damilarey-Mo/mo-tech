import React from 'react';
import { Metadata } from 'next';
import { FaServer, FaShieldAlt, FaMobileAlt, FaLaptopCode, FaUsers, FaAward, FaBolt, FaMoneyBillWave, FaCheckCircle, FaChartLine, FaCogs, FaHandshake, FaGamepad } from 'react-icons/fa';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | TeaMo - Leading IT Solutions in Lagos',
  description: "Discover TeaMo's full range of IT and tech services. From web and app development to cybersecurity, support, and consulting. See why we're the best choice for your business.",
};

const services = [
  {
    icon: <FaServer className="text-yellow-400 text-3xl mb-3" />, 
    title: 'Web Development',
    desc: 'Custom websites, e-commerce, and web apps built for performance, security, and growth.',
    link: '/services/web-development',
  },
  {
    icon: <FaMobileAlt className="text-yellow-400 text-3xl mb-3" />, 
    title: 'Mobile App Development',
    desc: 'iOS & Android apps tailored to your business goals, with seamless UX and robust code.',
    link: '/services/app-development',
  },
  {
    icon: <FaShieldAlt className="text-yellow-400 text-3xl mb-3" />, 
    title: 'Cybersecurity',
    desc: 'Protect your business with advanced security solutions, audits, and 24/7 monitoring.',
    link: '/services/cybersecurity',
  },
  {
    icon: <FaLaptopCode className="text-yellow-400 text-3xl mb-3" />, 
    title: 'IT Support & Consulting',
    desc: 'On-demand tech support, troubleshooting, and strategic IT consulting for all business sizes.',
    link: '/services/it-support',
  },
  {
    icon: <FaUsers className="text-yellow-400 text-3xl mb-3" />, 
    title: 'Workstation & Network Setup',
    desc: 'Custom workstation design, ergonomic setup, office network installation, and optimization for productivity. Includes hardware procurement, configuration, and staff onboarding.',
    link: '/services/workstation-setup',
  },
  {
    icon: <FaGamepad className="text-yellow-400 text-3xl mb-3" />, 
    title: 'Workstation & Studio Setup',
    desc: 'Custom gaming, streaming, and professional studio setups. From high-performance gaming rigs to complete streaming and content creation studios with professional audio/video equipment.',
    link: '/services/workstation-studio-setup',
  },
  {
    icon: <FaCogs className="text-yellow-400 text-3xl mb-3" />, 
    title: 'Gadget Repairs & Sales',
    desc: 'Expert diagnostics and repairs for laptops, desktops, and gadgets. Free pickup & delivery for diagnostics/repair. Sourcing and supply of quality computers, accessories, and tech equipment at competitive prices.',
    link: 'services/gadget-sales-repair',
  },
  {
    icon: <FaChartLine className="text-yellow-400 text-3xl mb-3" />, 
    title: 'Digital Marketing',
    desc: 'Comprehensive digital marketing solutions including SEO, social media management, content marketing, and PPC campaigns to grow your online presence and drive business growth.',
    link: '/services/digital-marketing',
  },
];

const extended = [
  {
    icon: <FaChartLine className="text-yellow-400 text-2xl mb-2" />,
    title: 'SEO & Digital Marketing',
    desc: 'Grow your online presence and reach more customers with proven strategies.'
  },
  {
    icon: <FaCheckCircle className="text-yellow-400 text-2xl mb-2" />,
    title: 'Compliance & Training',
    desc: 'Staff training, IT compliance, and documentation for peace of mind.'
  },
  {
    icon: <FaMoneyBillWave className="text-yellow-400 text-2xl mb-2" />,
    title: 'Flexible Pricing',
    desc: 'Transparent, competitive pricing for every business size.'
  },
];

const whyUs = [
  {
    icon: <FaAward className="text-yellow-400 text-3xl mb-2" />,
    title: 'Unmatched Expertise',
    desc: 'Certified professionals with years of real-world experience.'
  },
  {
    icon: <FaBolt className="text-yellow-400 text-3xl mb-2" />,
    title: '24/7 Support',
    desc: 'Rapid response times and always-on support.'
  },
  {
    icon: <FaHandshake className="text-yellow-400 text-3xl mb-2" />,
    title: 'Client-First Approach',
    desc: 'We treat every client as a partner, not just a customer.'
  },
  {
    icon: <FaMoneyBillWave className="text-yellow-400 text-3xl mb-2" />,
    title: 'Transparent Pricing',
    desc: 'No hidden fees. Clear, honest quotes every time.'
  },
];

const competitors = [
  { feature: 'Certified Experts', us: true, them: false },
  { feature: '24/7 Support', us: true, them: false },
  { feature: 'Custom Solutions', us: true, them: 'Limited' },
  { feature: 'Transparent Pricing', us: true, them: false },
  { feature: 'Fast Response', us: true, them: 'Slow' },
  { feature: 'Full Service Range', us: true, them: 'Partial' },
  { feature: 'Client Training', us: true, them: false },
];

// Add unique selling points
const standout = [
  {
    icon: <FaMoneyBillWave className="text-yellow-400 text-3xl mb-2" />,
    title: 'No-Surprise Billing',
    desc: 'Flat-rate pricing, no hidden fees, and clear quotes every time.'
  },
  {
    icon: <FaBolt className="text-yellow-400 text-3xl mb-2" />,
    title: 'SLA-Backed Response',
    desc: 'Guaranteed fast help with service-level agreements for peace of mind.'
  },
  {
    icon: <FaUsers className="text-yellow-400 text-3xl mb-2" />,
    title: 'Onsite & Remote Support',
    desc: 'We come to you or help instantly online—whichever you prefer.'
  },
  {
    icon: <FaCheckCircle className="text-yellow-400 text-3xl mb-2" />,
    title: 'Free Tech Health Check',
    desc: 'New clients get a complimentary IT assessment—no strings attached.'
  },
  {
    icon: <FaChartLine className="text-yellow-400 text-3xl mb-2" />,
    title: 'Lifetime Knowledgebase',
    desc: 'Clients get exclusive access to our expert guides and troubleshooting tips.'
  },
  {
    icon: <FaCogs className="text-yellow-400 text-3xl mb-2" />,
    title: 'Sustainability Commitment',
    desc: 'Eco-friendly hardware recycling and green IT practices.'
  },
  {
    icon: <FaHandshake className="text-yellow-400 text-3xl mb-2" />,
    title: 'Local Partnerships',
    desc: 'We support local businesses and talent in every project.'
  },
];

const testimonials = [
  {
    name: 'Oluwaseun Adebayo',
    role: 'CEO, TechForge Nigeria',
    content: 'TeaMo\'s team is always there when we need them. Their proactive support and honest advice have saved us time and money.'
  },
  {
    name: 'Angela Smith',
    role: 'Startup Founder',
    content: 'The free tech health check was a game changer. We discovered issues we didn\'t even know we had!'
  },
  {
    name: 'Chris Obi',
    role: 'IT Manager, Retail Group',
    content: 'No hidden fees, no surprises—just great service and results. Highly recommended.'
  }
];

const howItWorks = [
  {
    step: '1. Free Consultation',
    desc: 'Book a call and tell us your goals. We listen and learn about your business.'
  },
  {
    step: '2. Solution Design',
    desc: 'We craft a custom IT plan, explain your options, and give you a clear quote.'
  },
  {
    step: '3. Implementation',
    desc: 'Our experts handle setup, migration, and training with minimal disruption.'
  },
  {
    step: '4. Ongoing Support',
    desc: 'Enjoy 24/7 support, proactive monitoring, and regular check-ins.'
  },
];

const faqs = [
  {
    q: 'Do you offer one-time projects or only ongoing support?',
    a: 'We do both! Whether you need a single project or a long-term IT partner, we are here to help.'
  },
  {
    q: 'How fast is your response time?',
    a: 'Our SLA-backed support means you get help in as little as 15 minutes for urgent issues.'
  },
  {
    q: 'Can you work with our existing IT team?',
    a: 'Absolutely. We can supplement your team or handle everything—whatever works best for you.'
  },
  {
    q: 'What industries do you serve?',
    a: 'We work with businesses of all sizes, from startups to enterprises, across retail, finance, healthcare, education, and more.'
  },
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4 tracking-tight">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white mb-6">
            Comprehensive IT & Tech Solutions for Modern Businesses
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((srv) => (
            <div key={srv.title} className="bg-black rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 group">
              {srv.icon}
              <h2 className="text-xl font-bold text-yellow-400 mb-2">{srv.title}</h2>
              <p className="text-white mb-4">{srv.desc}</p>
              <Link href={srv.link} className="inline-block mt-auto px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors duration-200">Learn More</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Gadget Repairs & Sales Section */}
      <section className="w-full py-12 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">Gadget Repairs, Sales & Procurement</h2>
            <ul className="text-yellow-100 mb-4 space-y-2 list-disc list-inside">
              <li>Expert diagnostics and repairs for laptops, desktops, and mobile devices</li>
              <li>Free pickup & delivery for all gadget diagnostics and repairs</li>
              <li>Genuine parts, fast turnaround, and warranty on all repairs</li>
              <li>Procurement and supply of quality computers, accessories, and tech equipment</li>
              <li>Bulk sales and custom sourcing for businesses and Personal Use</li>
            </ul>
            <Link href="#contact" className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors duration-200">Book a Free Pickup</Link>
          </div>
          <div className="bg-black rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-2 border-yellow-400/30">
            <FaCogs className="text-yellow-400 text-5xl mb-4" aria-label="Gadget Repairs" />
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Why Choose Us for Gadgets & Workstations?</h3>
            <ul className="text-yellow-100 text-left space-y-2 list-disc list-inside">
              <li>Free pickup & delivery for repairs (no hidden fees)</li>
              <li>Certified technicians and genuine parts</li>
              <li>Fast diagnostics and transparent quotes</li>
              <li>Warranty on all repairs and sales</li>
              <li>Flexible procurement for businesses and Individual</li>
              <li>Personalized setup and onboarding for every workstation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Extended Services */}
      <section className="w-full py-12 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8 text-center">Extended Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {extended.map((srv) => (
              <div key={srv.title} className="bg-black rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-yellow-400/20">
                {srv.icon}
                <h3 className="text-lg font-bold text-yellow-300 mb-1">{srv.title}</h3>
                <p className="text-yellow-100">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8 text-center">Why Choose TeaMo?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-black rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-yellow-400/20">
                {item.icon}
                <h3 className="text-lg font-bold text-yellow-300 mb-1">{item.title}</h3>
                <p className="text-yellow-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Beat the Competition */}
      <section className="w-full py-12 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8 text-center">How We Beat the Competition</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-white border border-yellow-400/30 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-yellow-400 text-black">
                  <th className="px-4 py-2 font-bold">Feature</th>
                  <th className="px-4 py-2 font-bold">TeaMo</th>
                  <th className="px-4 py-2 font-bold">Others</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((row) => (
                  <tr key={row.feature} className="border-t border-yellow-400/20">
                    <td className="px-4 py-2">{row.feature}</td>
                    <td className="px-4 py-2 text-center">{row.us === true ? <span className="text-green-400 font-bold">✔</span> : row.us}</td>
                    <td className="px-4 py-2 text-center">{row.them === true ? <span className="text-green-400 font-bold">✔</span> : row.them || <span className="text-red-400 font-bold">✘</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Makes Us Stand Out */}
      <section className="w-full py-12 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8 text-center">What Makes Us Stand Out</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {standout.map((item) => (
              <div key={item.title} className="bg-black rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-yellow-400/20">
                {item.icon}
                <h3 className="text-lg font-bold text-yellow-300 mb-1">{item.title}</h3>
                <p className="text-yellow-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8 text-center">How It Works</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step) => (
              <div key={step.step} className="bg-black rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-yellow-400/20">
                <h3 className="text-lg font-bold text-yellow-300 mb-1">{step.step}</h3>
                <p className="text-yellow-100">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="w-full py-12 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8 text-center">Client Success Stories</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-black rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-yellow-400/20">
                <p className="text-yellow-100 italic mb-4">"{t.content}"</p>
                <div className="text-yellow-300 font-bold">{t.name}</div>
                <div className="text-yellow-400 text-sm">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-black rounded-2xl shadow-lg p-6 border border-yellow-400/20">
                <h3 className="text-lg font-bold text-yellow-300 mb-2">{faq.q}</h3>
                <p className="text-yellow-100">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-yellow-400 text-black text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">Contact us today for a free consultation and discover how TeaMo can help you achieve your business goals with world-class IT solutions.</p>
        <Link href="#contact" className="inline-block px-8 py-3 rounded-full bg-black text-yellow-400 font-semibold text-lg hover:bg-gray-900 transition-colors duration-200">Get a Free Consultation</Link>
      </section>
    </main>
  );
} 