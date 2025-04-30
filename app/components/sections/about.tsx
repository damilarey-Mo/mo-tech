"use client";

import { motion } from "framer-motion";
import { Users, Check, Trophy, Clock } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 
            className="text-base font-semibold leading-7 text-primary-600 dark:text-yellow-400"
            variants={fadeIn}
          >
            About TeaMo
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            variants={fadeIn}
          >
            A Family of Tech Experts
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            variants={fadeIn}
          >
            Founded in Lagos with a passion for technology and a commitment to excellent service,
            TeaMo IT/Tech Solutions brings together family values and technical expertise to serve
            businesses and individuals across Nigeria.
          </motion.p>
        </motion.div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <motion.div 
            className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-black shadow-xl"
              variants={fadeIn}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Our Story
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                  TeaMo was born from a simple idea: to provide honest, reliable tech support with a personal touch. 
                  Starting as a family business, we've grown to serve hundreds of clients across Lagos and beyond, 
                  maintaining our core values of trust, excellence, and community service.
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                  Our name "TeaMo" reflects our belief in the power of teamwork - both within our company and
                  with our clients. When you work with us, you're not just a customer; you become part of our extended family.
                </p>

                <motion.div 
                  className="mt-8 flex items-center gap-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Users className="h-8 w-8 flex-none text-primary-600 dark:text-yellow-400" />
                  <h4 className="flex-auto text-base font-semibold text-gray-900 dark:text-white">
                    Family-owned & operated since 2015
                  </h4>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              variants={container}
            >
              <motion.div 
                className="bg-white dark:bg-black shadow-md rounded-xl p-6 border border-gray-100 dark:border-gray-800"
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Check className="h-10 w-10 text-primary-600 dark:text-yellow-400" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Trust</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We build lasting relationships through honesty, transparency, and delivering on our promises.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-black shadow-md rounded-xl p-6 border border-gray-100 dark:border-gray-800"
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Trophy className="h-10 w-10 text-primary-600 dark:text-yellow-400" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Expertise</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Our team stays on the cutting edge of technology to provide the best solutions for your needs.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-black shadow-md rounded-xl p-6 border border-gray-100 dark:border-gray-800"
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Clock className="h-10 w-10 text-primary-600 dark:text-yellow-400" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Speed</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We understand that tech issues can't wait. Expect fast response times and efficient solutions.
                </p>
              </motion.div>

              <motion.div 
                className="bg-primary-50 dark:bg-yellow-900/20 shadow-md rounded-xl p-6 border border-primary-100 dark:border-yellow-900/50"
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-5xl text-primary-600 dark:text-yellow-400">₦</span>
                </motion.div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Affordability</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Quality tech support doesn't have to break the bank. We offer competitive and transparent pricing.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 