"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-base font-semibold leading-7 text-primary-600 dark:text-yellow-400"
            variants={fadeIn}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            variants={fadeIn}
          >
            Contact TeaMo
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            variants={fadeIn}
          >
            Have a tech issue or need a new website? We're here to help. 
            Reach out to us for a free consultation or service request.
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-6 lg:px-0"
          >
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contact Information
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              Reach out to us through any of these channels. We typically respond within 2 hours during business hours.
            </p>
            
            <div className="mt-10 space-y-6">
              <motion.div 
                className="flex gap-4 items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-yellow-900/30">
                  <Phone className="h-6 w-6 text-primary-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">+234 801 234 5678</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4 items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                  <Link 
                    href="https://wa.me/2348012345678" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-1 text-green-600 dark:text-green-400 font-medium hover:underline"
                  >
                    Chat with us on WhatsApp
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4 items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-yellow-900/30">
                  <Mail className="h-6 w-6 text-primary-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a 
                    href="mailto:support@teamotech.com" 
                    className="mt-1 text-primary-600 dark:text-yellow-400 hover:underline"
                  >
                    support@teamotech.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4 items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-yellow-900/30">
                  <MapPin className="h-6 w-6 text-primary-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Victoria Island, Lagos, Nigeria
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-10">
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Business Hours</h4>
              <div className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed (Emergency Support Available)</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 dark:bg-gray-900/50 dark:ring-gray-800"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Send us a message</h3>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Your full name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="+234 801 234 5678"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                  Service Needed
                </label>
                <div className="mt-2">
                  <select
                    id="service"
                    name="service"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="web-management">Web Management & SEO</option>
                    <option value="hosting">Hosting & Security</option>
                    <option value="it-support">IT & Tech Support</option>
                    <option value="workstation">Workstation Design</option>
                    <option value="gadgets">Gadget Sales</option>
                    <option value="other">Other (please specify)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Tell us about your project or issue..."
                  />
                </div>
              </div>
              
              <div>
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center rounded-md bg-primary-600 dark:bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-primary-500 dark:hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:focus-visible:outline-yellow-500"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 