"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Server, Shield, Cpu, Monitor, ShoppingBag, ChevronRight } from "lucide-react";

const services = [
  {
    name: "Web Development Services",
    description: "Custom website design, e-commerce solutions, and web application development tailored to your business needs.",
    icon: Globe,
    color: "from-blue-400 to-blue-600",
    textColor: "text-blue-600 dark:text-blue-400",
    link: "#contact"
  },
  {
    name: "Web Management & SEO",
    description: "Ongoing website maintenance, content updates, SEO optimization, and performance monitoring to keep your online presence strong.",
    icon: Server,
    color: "from-purple-400 to-purple-600",
    textColor: "text-purple-600 dark:text-purple-400",
    link: "#contact"
  },
  {
    name: "Hosting & Security Solutions",
    description: "Reliable web hosting, domain management, SSL certificates, and website security to protect your digital assets.",
    icon: Shield,
    color: "from-green-400 to-green-600",
    textColor: "text-green-600 dark:text-green-400",
    link: "#contact"
  },
  {
    name: "IT & Tech Support Services",
    description: "Comprehensive technical support for businesses and individuals, including troubleshooting, repairs, and network setup.",
    icon: Cpu,
    color: "from-red-400 to-red-600",
    textColor: "text-red-600 dark:text-red-400",
    link: "#contact"
  },
  {
    name: "Workstation Design and Setup",
    description: "Custom workstation configurations, office network installation, and optimization for productivity and ergonomics.",
    icon: Monitor,
    color: "from-amber-400 to-amber-600",
    textColor: "text-amber-600 dark:text-amber-400",
    link: "#contact"
  },
  {
    name: "Gadget Sales and Procurement",
    description: "Sourcing and supply of quality computers, accessories, and tech equipment at competitive prices.",
    icon: ShoppingBag,
    color: "from-cyan-400 to-cyan-600",
    textColor: "text-cyan-600 dark:text-cyan-400",
    link: "#contact"
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 
            className="text-base font-semibold leading-7 text-primary-600 dark:text-yellow-400"
            variants={item}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            variants={item}
          >
            Comprehensive IT & Tech Solutions
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            variants={item}
          >
            From web development to tech support, we provide end-to-end solutions
            to help your business thrive in the digital world.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          {services.map((service) => (
            <motion.div 
              key={service.name}
              variants={item}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="flex-1 p-8 sm:p-10">
                <div className="flex items-center">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                </div>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
              <Link 
                href={service.link} 
                className={`flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 py-3 ${service.textColor} text-sm font-medium transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                Learn more
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="#contact">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-primary-600 dark:bg-yellow-500 px-5 py-3 text-base font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-primary-500 dark:hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:focus-visible:outline-yellow-500"
            >
              Request a Service Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 