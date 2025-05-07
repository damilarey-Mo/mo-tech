import React from 'react';
import Image from "next/image";
import { Shield, Code, Smartphone, Cloud, Server, Laptop } from 'lucide-react';
import CTASection from "@/app/components/sections/cta";
import ServiceCarousel from '../components/sections/service-carousel';
import AnimatedSections from '../components/sections/animated-sections';
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

      {/* Animated Sections */}
      <AnimatedSections stats={stats} services={services} />

      <CTASection />
    </main>
  );
} 