"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Code, Smartphone, Laptop } from 'lucide-react';
import Image from 'next/image';

// Import Framer Motion components directly
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Cybersecurity Solutions",
    description: "Protect your business with enterprise-grade security protocols and 24/7 monitoring. Our comprehensive cybersecurity solutions include threat detection, vulnerability assessment, and real-time protection against evolving digital threats.",
    icon: Shield,
    image: "/images/cybersec.png",
    features: [
      "Real-time threat monitoring",
      "Advanced firewall protection",
      "Data encryption",
      "Security compliance"
    ],
    cta: "Secure Your Business"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Transform your online presence with custom web applications and e-commerce solutions. We build scalable, secure, and high-performance websites that drive business growth and enhance user engagement.",
    icon: Code,
    image: "/images/webapp.png",
    features: [
      "Custom web applications",
      "E-commerce solutions",
      "Progressive web apps",
      "SEO optimization"
    ],
    cta: "Build Your Website"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Reach your customers anywhere with native and cross-platform mobile applications. Our expert developers create intuitive, feature-rich apps that deliver exceptional user experiences across all devices.",
    icon: Smartphone,
    image: "/images/gadgets.jpg",
    features: [
      "iOS & Android development",
      "Cross-platform solutions",
      "App maintenance",
      "Performance optimization"
    ],
    cta: "Create Your App"
  },
  {
    id: 4,
    title: "Hardware Services",
    description: "Keep your business running smoothly with our comprehensive hardware services. From diagnostics to repairs, we provide expert solutions for all your business hardware needs with guaranteed quality service.",
    icon: Laptop,
    image: "/images/Hardware.jpg",
    features: [
      "Hardware diagnostics",
      "Repair & maintenance",
      "Parts replacement",
      "Warranty service"
    ],
    cta: "Fix Your Hardware"
  }
];

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setProgress(0);
  };

  useEffect(() => {
    if (!isAutoPlaying || !isMounted) return;
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isAutoPlaying, currentIndex, isMounted]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const IconComponent = services[currentIndex].icon;

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Core Services
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how our comprehensive IT solutions can transform your business
          </motion.p>
        </div>

        <div 
          className="relative h-[600px] overflow-hidden rounded-3xl shadow-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200/20 z-20">
            <motion.div
              className="h-full bg-yellow-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <div className="relative h-full">
                <Image
                  src={services[currentIndex].image}
                  alt={services[currentIndex].title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
                <div className="absolute inset-0 flex items-center">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div 
                      className="max-w-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                          className="p-2 rounded-lg bg-yellow-400/10"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconComponent className="h-8 w-8 text-yellow-400" />
                        </motion.div>
                        <h3 className="text-3xl font-bold tracking-tight text-white">
                          {services[currentIndex].title}
                        </h3>
                      </div>
                      <p className="mt-4 text-lg text-gray-200">
                        {services[currentIndex].description}
                      </p>
                      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {services[currentIndex].features.map((feature, index) => (
                          <motion.li 
                            key={feature} 
                            className="flex items-center gap-2 text-gray-200 group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 group-hover:scale-150 transition-transform duration-200" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div 
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <motion.a
                          href="#contact"
                          className="inline-flex items-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-semibold text-gray-900 hover:bg-yellow-500 transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {services[currentIndex].cta}
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-all duration-200 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-all duration-200 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setProgress(0);
                }}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white/70 w-2'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 