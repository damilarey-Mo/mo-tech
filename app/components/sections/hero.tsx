"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

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

const hoverButtonEffect = {
  scale: 1.05,
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

const testimonials = [
  { name: "Adebayo K.", role: "Business Owner", rating: 5 },
  { name: "Chioma N.", role: "Startup Founder", rating: 5 },
  { name: "Oluwaseun J.", role: "Office Manager", rating: 5 },
];

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-black">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      
      {/* Colorful gradient blob */}
      <motion.div 
        className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-primary-200 to-secondary-200 dark:from-yellow-900/40 dark:to-yellow-800/40 opacity-20 blur-3xl"
        animate={{ 
          x: [0, 10, 0], 
          y: [0, 15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-primary-200 to-secondary-300 dark:from-yellow-900/40 dark:to-yellow-800/40 opacity-20 blur-3xl"
        animate={{ 
          x: [0, -10, 0], 
          y: [0, -15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20,
          ease: "easeInOut"
        }}
      />
      
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <motion.div 
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="mt-24 sm:mt-32 lg:mt-16"
            variants={fadeIn}
          >
            <motion.a 
              href="#services" 
              className="inline-flex items-center space-x-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="rounded-full bg-gradient-to-r from-primary-600/20 to-secondary-600/20 dark:from-yellow-500/30 dark:to-yellow-600/30 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 dark:text-yellow-400 ring-1 ring-inset ring-primary-600/10 dark:ring-yellow-500/30"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                IT & Tech Solutions
              </motion.span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-yellow-400/80">
                <span>Based in Lagos, Nigeria</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatType: "mirror" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
          <motion.h1 
            className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            variants={fadeIn}
          >
            <span className="block dark:text-yellow-400">
              Where Tech Meets 
            </span>
            <motion.span 
              className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% center", "100% center", "0% center"],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "mirror"
              }}
              style={{
                backgroundSize: "200% auto"
              }}
            >
              Trust
            </motion.span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-yellow-400/80"
            variants={fadeIn}
          >
            Your trusted partner for comprehensive IT support, web development, 
            and tech solutions in Lagos and beyond.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex gap-4 flex-col sm:flex-row"
            variants={fadeIn}
          >
            <Link href="#services">
              <motion.div whileHover={hoverButtonEffect} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 dark:from-yellow-500 dark:to-yellow-600 dark:text-gray-900 dark:hover:from-yellow-400 dark:hover:to-yellow-500 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Book a Service
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "mirror" }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </Link>
            <Link href="#contact">
              <motion.div whileHover={hoverButtonEffect} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto dark:text-yellow-400 dark:border-yellow-500 dark:hover:bg-black/70"
                >
                  Contact Us
                </Button>
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-10"
            variants={fadeIn}
          >
            <div className="flex flex-col sm:flex-row sm:items-center">
              <div className="flex -space-x-2 overflow-hidden">
                {testimonials.map((person, index) => (
                  <motion.img
                    key={index}
                    whileHover={{ scale: 1.2, y: -5, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-yellow-500/30"
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${30 + index}.jpg`}
                    alt={person.name}
                  />
                ))}
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Star
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                      />
                    </motion.div>
                  ))}
                  <span className="ml-2 text-sm text-gray-500 dark:text-yellow-400/80">
                    5/5 from over 500+ satisfied clients
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2"
            variants={fadeIn}
          >
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ShieldCheck className="h-5 w-5 text-primary-500 dark:text-yellow-500 mr-2" />
              <span className="text-sm text-gray-500 dark:text-yellow-400/80">Family-run business you can trust</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Clock className="h-5 w-5 text-primary-500 dark:text-yellow-500 mr-2" />
              <span className="text-sm text-gray-500 dark:text-yellow-400/80">Fast response & same-day service</span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <motion.div 
              className="relative rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <img
                src="/images/hero-teamo.jpg"
                alt="TeaMo IT/Tech Solutions team helping a client"
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 