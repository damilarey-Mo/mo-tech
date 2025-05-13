import React from 'react';
import { FaDesktop, FaCheckCircle, FaClock, FaCogs, FaGamepad, FaNetworkWired, FaWifi, FaPlug, FaMicrophone, FaHeadphones, FaCamera, FaTools, FaQuestionCircle } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = {
  title: 'Workstation & Gaming Studio Setup | TeaMo - Lagos Studio Experts',
  description: 'Custom workstation and gaming studio setup for professionals, creators, and gamers. Discover our process, delivery times, and why TeaMo is your best choice for studio setup in Lagos.'
};

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

const faqs = [
  {
    q: 'Can you set up both wired and wireless networks?',
    a: 'Yes! We install and optimize both CAT6/CAT7 wired networks and WiFi 6/6E mesh for seamless connectivity.'
  },
  {
    q: 'Do you handle soundproofing or acoustic treatment?',
    a: 'We can recommend and install basic acoustic panels and isolation for studios and streaming rooms.'
  },
  {
    q: 'What brands do you use for hardware?',
    a: 'We work with top brands like Intel, AMD, NVIDIA, Ubiquiti, Elgato, Logitech, Corsair, and more.'
  },
  {
    q: 'Can you help with streaming/recording setup?',
    a: 'Absolutely! We set up streaming PCs, capture cards, pro audio, and lighting for creators.'
  },
  {
    q: 'Is aftercare/support included?',
    a: 'Yes, we provide post-setup support, troubleshooting, and training for all clients.'
  },
];

export default function WorkstationStudioSetupPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <section className="w-full py-16 md:py-24 bg-black text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">Workstation, Studio & Network Setup</h1>
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-yellow-100 mb-6">Custom studio and network setups for professionals, creators, and gamers. Ergonomic, high-performance, and fully tailored to your needs—including robust wired and wireless networking.</p>
      </section>
      <section className="w-full py-8 md:py-12 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">What's Included</h2>
          <ul className="text-yellow-100 mb-6 space-y-2 list-none">
            <li className="flex items-center gap-2"><FaDesktop className="text-yellow-400" />Custom workstation or gaming PC build</li>
            <li className="flex items-center gap-2"><FaGamepad className="text-yellow-400" />Multi-monitor and audio setup</li>
            <li className="flex items-center gap-2"><FaCogs className="text-yellow-400" />Ergonomic furniture and lighting</li>
            <li className="flex items-center gap-2"><FaNetworkWired className="text-yellow-400" />Wired and wireless network setup & optimization</li>
            <li className="flex items-center gap-2"><FaTools className="text-yellow-400" />Software installation and configuration</li>
            <li className="flex items-center gap-2"><FaPlug className="text-yellow-400" />Onsite delivery, assembly, and cable management</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-yellow-400" />Post-setup support and training</li>
          </ul>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Tech Stack & Gear</h2>
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
            <span className="font-bold">Average Delivery:</span> 3-7 days (depending on complexity)
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Why Choose TeaMo?</h2>
          <ul className="text-yellow-100 mb-6 space-y-2 list-disc list-inside">
            <li><FaCheckCircle className="inline mr-2 text-yellow-400" />Expert studio designers and PC builders</li>
            <li><FaCogs className="inline mr-2 text-yellow-400" />Performance-tuned for your workflow or gaming</li>
            <li><FaGamepad className="inline mr-2 text-yellow-400" />Genuine parts, warranty, and aftercare</li>
            <li>Personalized ergonomic and aesthetic design</li>
            <li>Free consultation and layout planning</li>
          </ul>
          <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200">Book Your Studio Setup</Link>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full py-8 md:py-12 bg-black">
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
    </main>
  );
} 