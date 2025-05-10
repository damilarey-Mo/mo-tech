import React from 'react';
import { FaServer, FaCheckCircle, FaClock, FaRocket, FaCogs } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = {
  title: 'Web Development | TeaMo - Lagos Web Design & Development',
  description: 'Custom websites, e-commerce, and web apps built for performance, security, and growth. Discover our process, delivery times, and why TeaMo is your best choice for web development in Lagos.'
};

const process = [
  { step: 'Consultation & Discovery', desc: 'We learn about your business, goals, and audience.' },
  { step: 'Design & Prototyping', desc: 'Wireframes and mockups for your approval.' },
  { step: 'Development', desc: 'Modern, scalable code with best practices.' },
  { step: 'Testing & QA', desc: 'Thorough testing for performance and security.' },
  { step: 'Launch & Training', desc: 'Go live and train your team to manage your new site.' },
];

export default function WebDevelopmentPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <section className="w-full py-16 md:py-24 bg-black text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">Web Development</h1>
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-yellow-100 mb-6">Custom websites, e-commerce, and web apps built for performance, security, and growth.</p>
      </section>
      <section className="w-full py-8 md:py-12 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">What's Included</h2>
          <ul className="text-yellow-100 mb-6 space-y-2 list-disc list-inside">
            <li>Responsive design for all devices</li>
            <li>SEO optimization and fast load times</li>
            <li>Custom features and integrations</li>
            <li>Secure hosting and SSL</li>
            <li>Content management system (CMS)</li>
            <li>Ongoing support and maintenance</li>
          </ul>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Process & Roadmap</h2>
          <ol className="text-yellow-100 mb-6 space-y-3 list-decimal list-inside">
            {process.map((p) => (
              <li key={p.step}><span className="font-bold text-yellow-300">{p.step}:</span> {p.desc}</li>
            ))}
          </ol>
          <div className="flex items-center gap-3 text-yellow-200 mb-4">
            <FaClock className="text-yellow-400 text-2xl" />
            <span className="font-bold">Average Delivery:</span> 2-4 weeks (depending on project scope)
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Why Choose TeaMo?</h2>
          <ul className="text-yellow-100 mb-6 space-y-2 list-disc list-inside">
            <li><FaCheckCircle className="inline mr-2 text-yellow-400" />Proven track record with 100+ successful launches</li>
            <li><FaRocket className="inline mr-2 text-yellow-400" />Lightning-fast, secure, and scalable sites</li>
            <li><FaCogs className="inline mr-2 text-yellow-400" />Custom integrations and automation</li>
            <li>Transparent pricing and clear communication</li>
            <li>Free consultation and project roadmap</li>
          </ul>
          <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200">Start Your Project</Link>
        </div>
      </section>
    </main>
  );
} 