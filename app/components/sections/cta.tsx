"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta">
      <div className="mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
        <motion.div 
          className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-40 -left-20 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-primary-900/40 to-secondary-900/40 dark:from-yellow-700/30 dark:to-yellow-500/20 opacity-30 blur-3xl"
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
            className="absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-secondary-900/40 to-primary-900/40 dark:from-yellow-500/20 dark:to-yellow-700/30 opacity-30 blur-3xl"
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

          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <span className="inline-flex items-center space-x-2 rounded-full bg-primary-500/10 dark:bg-yellow-500/10 px-4 py-2 text-sm font-medium text-primary-400 dark:text-yellow-300 ring-1 ring-inset ring-primary-500/20 dark:ring-yellow-500/20">
                <Zap className="h-4 w-4" />
                <span>Fast Response Guaranteed</span>
              </span>
            </motion.div>
            <motion.h2 
              className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get a Free Tech Diagnosis
            </motion.h2>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Not sure what's wrong with your system? Let our experts diagnose your tech issues 
              at no cost. We'll provide a clear solution path with transparent pricing.
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="#contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-md bg-primary-600 dark:bg-yellow-500 px-5 py-3 text-base font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-primary-500 dark:hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:focus-visible:outline-yellow-500"
                >
                  Request Now
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "mirror" }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </motion.span>
                </motion.button>
              </Link>
              <Link 
                href="#services" 
                className="text-base font-semibold leading-6 text-white hover:text-primary-300 dark:hover:text-yellow-300"
              >
                Learn more<span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 