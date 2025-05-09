"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Retail E-Commerce Platform",
    category: "Web Development",
    description: "A fully responsive e-commerce solution with integrated payment systems for a leading Lagos retailer.",
    imageSrc: "/images/projects/ecommerce.jpg",
    tags: ["E-commerce", "Web Design", "Payment Integration"],
    link: "#"
  },
  {
    id: 2,
    title: "Corporate Staff Computer Procurement and Setup",
    category: "IT Infrastructure",
    description: "End-to-end procurement and deployment of 200+ high-performance workstations for a leading financial institution, including hardware sourcing, OS deployment, security hardening, and staff training.",
    imageSrc: "/images/projects/fin.jpg",
    tags: ["Hardware Procurement", "System Deployment", "IT Training"],
    link: "#"
  },
  {
    id: 3,
    title: "Cyber Security Solutions WebApp",
    category: "Web Application",
    description: "Enterprise-grade All in One cybersecurity Suite with 30+ tools",
    imageSrc: "/images/projects/Mosecure.png",
    tags: ["Web App", "Healthcare", "UX Design"],
    link: "#"
  }
];

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

export default function FeaturedProjectsSection() {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful IT solutions and digital transformations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium text-yellow-400 bg-yellow-400/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{project.category}</span>
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">View Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-300 transition-colors duration-300"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
} 