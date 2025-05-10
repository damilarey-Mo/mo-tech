import React from 'react';
import Image from "next/image";
import CTASection from "@/app/components/sections/cta";
import ServiceCarousel from '../components/sections/service-carousel';
import AnimatedSections from '../components/sections/animated-sections';
import ServicesSection from '../components/sections/services-section';
import { Metadata } from 'next';
import { FaBullseye, FaUsers, FaAward, FaRocket, FaHandshake } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "About TeaMo - Leading IT Solutions Provider in Lagos",
  description: "Learn about TeaMo, a premier IT solutions provider in Lagos. Discover our mission, team, and commitment to delivering innovative technology solutions.",
};

const team = [
  {
    name: "Damilarey Moshood",
    role: "CEO & Founder",
    image: "/images/team/moshood.jpg",
    bio: "Visionary leader with a passion for empowering businesses through technology."
  },
  {
    name: "Chris Obi",
    role: "Technical Lead",
    image: "/images/team/chris.png",
    bio: "Expert in scalable systems and cloud infrastructure."
  },
  {
    name: "Angela Okafor",
    role: "UI/UX Lead",
    image: "/images/team/Angela.png",
    bio: "Designs intuitive, beautiful digital experiences."
  },
  {
    name: "Ahmad Faraz",
    role: "Cybersecurity Lead",
    image: "/images/team/ahmad.png",
    bio: "Keeps our clients secure with cutting-edge solutions."
  },
  {
    name: "Anefiok Abang",
    role: "Project Management Lead",
    image: "/images/team/anefiok.jpg",
    bio: "Ensures every project is delivered on time and on budget."
  },
  {
    name: "Halimat Hamzat",
    role: "Customer Relation Manager",
    image: "/images/team/halimat.jpg",
    bio: "Delivers exceptional support and client satisfaction."
  },
  {
    name: "Tyronne Thomas",
    role: "Digital Marketing Lead",
    image: "/images/team/tyronne.jpg",
    bio: "Drives growth through innovative digital strategies."
  },
  {
    name: "Fola Adekitan",
    role: "IT Compliance",
    image: "/images/team/shade.jpg",
    bio: "Ensures all solutions meet industry standards."
  },
  {
    name: "Olamilekan Adisa",
    role: "Lead Software Developer",
    image: "/images/team/lekan.png",
    bio: "Builds robust, scalable software for our clients."
  },
];

const stats = [
  { number: "500+", label: "Clients Served", icon: <FaUsers className="text-yellow-500 text-2xl" /> },
  { number: "99.9%", label: "Uptime Guaranteed", icon: <FaAward className="text-yellow-500 text-2xl" /> },
  { number: "24/7", label: "Support Available", icon: <FaRocket className="text-yellow-500 text-2xl" /> },
  { number: "15+", label: "Years Experience", icon: <FaHandshake className="text-yellow-500 text-2xl" /> },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4 tracking-tight animate-fade-in-up">About TeaMo</h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white mb-6 animate-fade-in-up delay-100">
            Empowering businesses with innovative IT solutions since 2020. We blend technical expertise, creativity, and a passion for service to help you thrive in a digital world.
          </p>
        </div>
      </section>

      {/* Service Carousel */}
      <section className="w-full min-h-[350px] md:min-h-[500px] flex items-center justify-center bg-black p-0 m-0">
        <div className="w-full h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceCarousel />
        </div>
      </section>

      {/* About/Mission Section */}
      <section className="w-full py-12 md:py-20 lg:py-28 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          <div className="bg-black rounded-2xl shadow-lg p-8 flex flex-col justify-between mb-4 md:mb-0 border border-yellow-400/30">
            <div className="flex items-center gap-3 mb-2">
              <FaBullseye className="text-yellow-400 text-2xl" />
              <h2 className="text-2xl font-bold text-yellow-400">Our Story</h2>
            </div>
            <p className="text-white">
              TeaMo <span className="text-yellow-400 font-semibold italic">Formerly TechAffairsng</span> was founded with a vision to transform how businesses leverage technology. We combine technical expertise with business acumen to deliver solutions that drive growth and innovation.
            </p>
          </div>
          <div className="bg-black rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-yellow-400/30">
            <div className="flex items-center gap-3 mb-2">
              <FaRocket className="text-yellow-400 text-2xl" />
              <h2 className="text-2xl font-bold text-yellow-400">Our Mission</h2>
            </div>
            <p className="text-white">
              To empower businesses with cutting-edge technology solutions that drive efficiency, security, and growth. We're committed to delivering exceptional service and building long-term partnerships with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-20 lg:py-28 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow-400">Our Team</h2>
            <p className="mx-auto max-w-[700px] text-yellow-100 md:text-xl">
              Meet the experts behind our success
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person, idx) => (
              <div
                key={person.name}
                className="flex flex-col items-center space-y-4 text-center bg-black rounded-2xl shadow-lg p-6 transition-shadow duration-300 group border-2 border-yellow-400/60 animate-glow hover:animate-glow-hover hover:border-yellow-400/90"
              >
                <div className="relative h-36 w-36 sm:h-40 sm:w-40 overflow-hidden rounded-full border-4 border-yellow-400 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-yellow-400">{person.name}</h3>
                  <p className="text-sm text-yellow-300 font-medium">{person.role}</p>
                  <p className="text-sm text-yellow-100 group-hover:text-yellow-200 transition-colors duration-300">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="flex flex-col items-center bg-black rounded-xl shadow p-6 text-center border border-yellow-400/30 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              {stat.icon}
              <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.number}</div>
              <div className="text-yellow-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
} 