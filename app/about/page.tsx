import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Code, Smartphone, Cloud, Server, Laptop, Users, Zap, CheckCircle } from 'lucide-react';
import CTASection from "@/app/components/sections/cta";
import ServiceCarousel from '../components/sections/service-carousel';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About TeaMo - Leading IT Solutions Provider in Lagos",
  description: "Learn about TeaMo, a premier IT solutions provider in Lagos. Discover our mission, team, and commitment to delivering innovative technology solutions.",
};

const team = [
  {
    name: "Damilarey Moshood",
    role: "CEO & Founder",
    image: "https://placehold.co/400x400/1a1a1a/ffffff?text=DM",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "https://placehold.co/400x400/1a1a1a/ffffff?text=SJ",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://placehold.co/400x400/1a1a1a/ffffff?text=MC",
  },
];

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

const stats = [
  { number: "500+", label: "Clients Served" },
  { number: "99.9%", label: "Uptime Guaranteed" },
  { number: "24/7", label: "Support Available" },
  { number: "15+", label: "Years Experience" }
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About TeaMo
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Empowering businesses with innovative IT solutions since 2020
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Carousel */}
      <ServiceCarousel />

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                TeaMo was founded with a vision to transform how businesses leverage technology. We combine technical expertise with business acumen to deliver solutions that drive growth and innovation.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                To empower businesses with cutting-edge technology solutions that drive efficiency, security, and growth. We're committed to delivering exceptional service and building long-term partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Meet the experts behind our success
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <div key={person.name} className="flex flex-col items-center space-y-4 text-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{person.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold tracking-tight text-primary-600 dark:text-yellow-400">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-base text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
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

      {/* Why Choose Us section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Why Choose TeaMo?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Experience the difference of working with Nigeria's leading IT solutions provider
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Our certified professionals bring years of industry experience to every project."
                },
                {
                  icon: Zap,
                  title: "Fast Response",
                  description: "24/7 support with rapid response times to keep your business running smoothly."
                },
                {
                  icon: CheckCircle,
                  title: "Quality Guaranteed",
                  description: "We stand behind our work with comprehensive service guarantees."
                }
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-start"
                >
                  <div className="rounded-lg bg-white dark:bg-gray-900 p-2 ring-1 ring-gray-200 dark:ring-gray-800">
                    <feature.icon className="h-6 w-6 text-primary-600 dark:text-yellow-400" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </main>
  );
} 