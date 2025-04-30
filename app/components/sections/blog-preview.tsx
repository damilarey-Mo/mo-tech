"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Cybersecurity Tips for Small Businesses in Lagos",
    description: "Learn how to protect your business from the most common cyber threats targeting Nigerian companies.",
    category: "Security",
    date: "June 15, 2023",
    readTime: "6 min read",
    imageSrc: "/images/blog/cybersecurity-tips.jpg",
    slug: "/blog/cybersecurity-tips-small-businesses"
  },
  {
    id: 2,
    title: "How to Set Up the Perfect Remote Workstation: A Guide for Nigerian Professionals",
    description: "Create an efficient and ergonomic home office with these expert tips from TeaMo's workstation specialists.",
    category: "Workstation",
    date: "May 28, 2023",
    readTime: "8 min read",
    imageSrc: "/images/blog/remote-workstation.jpg",
    slug: "/blog/perfect-remote-workstation-setup"
  },
  {
    id: 3,
    title: "Why Your Lagos Business Needs SEO: Local Search Optimization Guide",
    description: "Discover how to improve your local search rankings and attract more customers in Lagos and beyond.",
    category: "SEO",
    date: "April 10, 2023",
    readTime: "5 min read",
    imageSrc: "/images/blog/lagos-seo.jpg",
    slug: "/blog/lagos-business-local-seo-guide"
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

export default function BlogPreviewSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/40">
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
            Our Blog
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            variants={fadeIn}
          >
            Latest Tech Insights
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            variants={fadeIn}
          >
            Stay updated with the latest technology trends, security tips, and IT best practices
            to help your business succeed in the digital landscape.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              variants={fadeIn}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex flex-col items-start justify-between rounded-2xl bg-white p-6 dark:bg-gray-800 shadow-md ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden"
            >
              <div className="w-full">
                <div className="relative w-full mb-6 overflow-hidden rounded-lg">
                  <img
                    src={post.imageSrc}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-md bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10 dark:ring-white/10"></div>
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2023-03-16" className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar className="mr-1 h-3 w-3" />
                    {post.date}
                  </time>
                  <span className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-x-2">
                  <span className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/20 px-2 py-1 text-xs font-medium text-primary-700 dark:text-primary-300 ring-1 ring-inset ring-primary-700/10 dark:ring-primary-400/20">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-yellow-400">
                    <Link href={post.slug}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>
                </div>
              </div>
              <div className="mt-5 w-full">
                <Link href={post.slug} className="flex items-center justify-end text-sm font-medium text-primary-600 dark:text-yellow-400 hover:text-primary-500 dark:hover:text-yellow-300">
                  Read article
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <motion.div 
          className="mx-auto mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/blog" className="text-primary-600 dark:text-yellow-400 font-medium hover:text-primary-500 dark:hover:text-yellow-300 inline-flex items-center">
            View all articles
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 