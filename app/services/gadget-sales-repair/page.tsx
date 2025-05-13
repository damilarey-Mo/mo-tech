import React from 'react';
import { FaMobile, FaCheckCircle, FaClock, FaTools, FaShoppingCart, FaTruck, FaDiagnoses, FaShieldAlt, FaQuestionCircle, FaLaptop, FaTablet, FaHeadphones, FaCamera, FaGamepad, FaSync, FaBatteryFull, FaMemory, FaHdd, FaDesktop, FaMicrochip, FaKeyboard, FaWifi, FaWater, FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = {
  title: 'Gadget Sales & Repair | TeaMo - Lagos Gadget Experts',
  description: 'Professional gadget repair and sales services in Lagos. Free pickup and delivery, expert diagnostics, and genuine parts. Get your devices fixed or buy new ones with warranty.'
};

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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <section className="w-full py-16 md:py-24 bg-black text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">Gadget Sales & Repair</h1>
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-yellow-100 mb-6">Expert gadget repair and sales services in Lagos. Free pickup and delivery, certified technicians, and genuine parts. Get your devices fixed or buy new ones with warranty.</p>
      </section>
      <section className="w-full py-8 md:py-12 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">What's Included</h2>
          <ul className="text-yellow-100 mb-6 space-y-2 list-none">
            <li className="flex items-center gap-2"><FaDiagnoses className="text-yellow-400" />Free device diagnostics</li>
            <li className="flex items-center gap-2"><FaTools className="text-yellow-400" />Expert repair services</li>
            <li className="flex items-center gap-2"><FaShoppingCart className="text-yellow-400" />New device sales</li>
            <li className="flex items-center gap-2"><FaTruck className="text-yellow-400" />Free pickup & delivery</li>
            <li className="flex items-center gap-2"><FaShieldAlt className="text-yellow-400" />Warranty on repairs</li>
            <li className="flex items-center gap-2"><FaSync className="text-yellow-400" />Trade-in services</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-yellow-400" />Post-repair support</li>
          </ul>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 bg-black">
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
            <span className="font-bold">Average Repair Time:</span> 24-48 hours (depending on complexity)
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 bg-black">
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
      {/* New Repair Types Section */}
      <section className="w-full py-8 md:py-12 bg-black">
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
      {/* New Common Issues Section */}
      <section className="w-full py-8 md:py-12 bg-black">
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
      {/* New Pricing Structure Section */}
      <section className="w-full py-8 md:py-12 bg-black">
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
    </main>
  );
} 