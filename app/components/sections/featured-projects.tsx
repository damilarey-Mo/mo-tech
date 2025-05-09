"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Retail E-Commerce Platform",
    category: "Web Development",
    description: "A fully responsive e-commerce solution with integrated payment systems for a leading Lagos retailer.",
    imageSrc: "/images/projects/ecommerce-project.jpg",
    tags: ["E-commerce", "Web Design", "Payment Integration"],
    link: "#"
  },
  {
    id: 2,
    title: "Corporate Network Upgrade",
    category: "IT Infrastructure",
    description: "Complete network overhaul for a financial institution, improving security and performance by 200%.",
    imageSrc: "/images/projects/network-project.jpg",
    tags: ["Network Setup", "Security", "Infrastructure"],
    link: "#"
  },
  {
    id: 3,
    title: "Cyber Security Solutions WebApp",
    category: "Web Application",
    description: "Enterprise-grade All in One cybersecurity Suite with 30+ tools",
    imageSrc: "/images/projects/healthcare-project.jpg",
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
    <section id="projects" className="py-24 sm:py-32 bg-gradient-to-b from-amber-900/90 to-yellow-900/80 dark:from-amber-900/90 dark:to-yellow-900/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-base font-semibold leading-7 text-yellow-300 dark:text-yellow-300"
            variants={fadeIn}
          >
            Success Stories
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-white dark:text-white sm:text-4xl"
            variants={fadeIn}
          >
            Featured Projects
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-yellow-100 dark:text-yellow-100"
            variants={fadeIn}
          >
            Take a look at some of our recent work and the impact we've made for our clients.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-40 sm:pt-24 lg:pt-40"
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </motion.div>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center rounded-full bg-primary-100 dark:bg-yellow-900/30 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:text-yellow-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="absolute inset-0 -z-10" />
              
              <div>
                <h3 className="text-lg font-semibold leading-6 text-white">
                  <Link href={project.link} className="flex items-center group">
                    <span>{project.title}</span>
                    <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </h3>
                <div className="mt-2 text-xs text-gray-300">{project.category}</div>
                <p className="mt-2 text-sm leading-6 text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="#contact">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px 5px rgba(250, 204, 21, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-yellow-300 shadow-lg ring-1 ring-yellow-300/30 shadow-yellow-300/10 hover:bg-gray-900 dark:bg-black dark:text-yellow-300 dark:ring-yellow-400/50 dark:shadow-yellow-400/20 dark:hover:bg-gray-900"
            >
              View More Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 