import React from 'react';
import { FaLaptopCode, FaCheckCircle, FaClock, FaHeadset, FaTools } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = {
  title: 'IT Support & Consulting | TeaMo - Lagos IT Experts',
  description: 'On-demand tech support, troubleshooting, and strategic IT consulting for all business sizes. Discover our process, delivery times, and why TeaMo is your best choice for IT support in Lagos.'
};

const process = [
  { step: 'Initial Consultation', desc: 'We assess your current IT setup and listen to your needs.' },
  { step: 'Support Plan', desc: 'Custom support plan or project scope tailored to your business.' },
  { step: 'Implementation', desc: 'We resolve issues, optimize systems, and provide hands-on support.' },
  { step: 'Ongoing Consulting', desc: 'Strategic advice, upgrades, and proactive monitoring.' },
  { step: 'Review & Reporting', desc: 'Regular check-ins and transparent reporting.' },
];

export default function ITSupportConsultingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <section className="w-full py-16 md:py-24 bg-black text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">IT Support & Consulting</h1>
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-yellow-100 mb-6">On-demand tech support, troubleshooting, and strategic IT consulting for all business sizes.</p>
      </section>
      <section className="w-full py-8 md:py-12 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">What's Included</h2>
          <ul className="text-yellow-100 mb-6 space-y-2 list-disc list-inside">
            <li>Remote and onsite tech support</li>
            <li>System troubleshooting and repairs</li>
            <li>Network setup and optimization</li>
            <li>Cloud migration and management</li>
            <li>IT strategy and consulting</li>
            <li>Proactive monitoring and maintenance</li>
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
            <span className="font-bold">Average Delivery:</span> Same day to 1 week (depending on issue/project)
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Why Choose TeaMo?</h2>
          <ul className="text-yellow-100 mb-6 space-y-2 list-disc list-inside">
            <li><FaCheckCircle className="inline mr-2 text-yellow-400" />24/7 support with rapid response times</li>
            <li><FaHeadset className="inline mr-2 text-yellow-400" />Friendly, knowledgeable technicians</li>
            <li><FaTools className="inline mr-2 text-yellow-400" />Proactive maintenance and monitoring</li>
            <li>Flexible plans for every business size</li>
            <li>Free initial consultation</li>
          </ul>
          <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200">Get Support Now</Link>
        </div>
      </section>
    </main>
  );
} 