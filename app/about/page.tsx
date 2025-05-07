import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Code, Smartphone, Cloud, Server, Laptop, Users, Zap, CheckCircle } from 'lucide-react';
import CTASection from "@/app/components/sections/cta";

export const metadata = {
  title: "About TeaMo - Leading IT Solutions Provider in Lagos",
  description: "Discover how TeaMo is revolutionizing IT services in Nigeria with cutting-edge solutions in cybersecurity, web development, and hardware services. Learn about our mission to empower businesses through technology.",
};

const team = [
  {
    name: "Damilarey Moshood",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in IT infrastructure and digital transformation, Damilarey leads TeaMo's vision of making enterprise-grade technology accessible to businesses of all sizes.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Sarah brings 12+ years of experience in software architecture and cybersecurity. She's led the development of secure, scalable solutions for Fortune 500 companies before joining TeaMo.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Rodriguez",
    role: "VP of Product",
    bio: "David specializes in user experience and product strategy. His expertise in digital transformation has helped numerous businesses modernize their operations and enhance customer engagement.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Emily Taylor",
    role: "Head of Marketing",
    bio: "Emily's strategic approach to digital marketing has helped TeaMo establish itself as a thought leader in the IT services industry, driving significant growth and market presence.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
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
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-primary-600/10 to-transparent dark:from-yellow-500/20 dark:via-yellow-500/10" />
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Transforming Businesses Through Technology
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                TeaMo is Nigeria's premier IT solutions provider, delivering cutting-edge technology services that drive business growth and digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

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

      {/* Mission section */}
      <div className="overflow-hidden py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-yellow-400">Our Mission</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Empowering Digital Success
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  At TeaMo, we're committed to transforming how businesses leverage technology. Our mission is to provide innovative, reliable, and scalable IT solutions that drive growth and efficiency.
                </p>
                <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300">
                  <div className="relative pl-9">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-primary-50 dark:bg-yellow-500/20 flex items-center justify-center">
                        <span className="text-primary-600 dark:text-yellow-400 font-bold">1</span>
                      </span>
                      Innovation at Core
                    </div>
                    <p className="mt-2">We stay ahead of technology trends to deliver cutting-edge solutions.</p>
                  </div>
                  <div className="relative pl-9">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-primary-50 dark:bg-yellow-500/20 flex items-center justify-center">
                        <span className="text-primary-600 dark:text-yellow-400 font-bold">2</span>
                      </span>
                      Client Success
                    </div>
                    <p className="mt-2">Your success is our priority. We provide dedicated support and guidance.</p>
                  </div>
                  <div className="relative pl-9">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-primary-50 dark:bg-yellow-500/20 flex items-center justify-center">
                        <span className="text-primary-600 dark:text-yellow-400 font-bold">3</span>
                      </span>
                      Quality Assurance
                    </div>
                    <p className="mt-2">We maintain the highest standards in every service we deliver.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about-hero.jpg"
                alt="TeaMo team collaborating"
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
                width={2432}
                height={1442}
                priority
              />
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

      {/* Team section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {team.map((person) => (
              <motion.li
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 xl:flex-row"
              >
                <Image
                  className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                  src={person.image}
                  alt={`${person.name}'s profile picture`}
                  width={208}
                  height={260}
                  priority={person.name === "Damilarey Moshood"}
                />
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-primary-600 dark:text-yellow-400">{person.role}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{person.bio}</p>
                </div>
              </motion.li>
            ))}
          </ul>
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
    </div>
  );
} 