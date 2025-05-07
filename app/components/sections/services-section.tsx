"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Smartphone, Cloud, Server, Laptop } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Enterprise-grade security protocols and 24/7 monitoring to protect your digital assets."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications and e-commerce solutions built with cutting-edge technologies."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Secure cloud infrastructure and migration services for scalable business operations."
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Comprehensive IT infrastructure setup and management for optimal performance."
  },
  {
    icon: Laptop,
    title: "Hardware Services",
    description: "Expert diagnostics, repair, and maintenance for all your business hardware needs."
  }
];

export default function ServicesSection() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Comprehensive IT Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We offer a full spectrum of IT services to meet your business needs
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <service.icon className="h-5 w-5 flex-none text-primary-600 dark:text-yellow-400" aria-hidden="true" />
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 