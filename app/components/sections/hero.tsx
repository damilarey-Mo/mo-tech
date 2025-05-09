"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  "24/7 IT Support & Monitoring",
  "Fasted Service Delivery",
  "Free System/GadgetDiagnostics",
  "Flexible Pickup and delivery",
  "Team of Experienced and Certified Professionals",
  "Sourcing Top-Quality Gadgets at the Best Prices"
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: "/images/IT_generals.jpg",
      alt: "IT Solutions"
    },
    {
      src: "/images/webapp.png",
      alt: "Modern Gadgets"
    },
    {
      src: "/images/Hardware.jpg",
      alt: "Hardware Solutions"
    },
    {
      src: "/images/hardwares.jpg",
      alt: "IT Services"
    },
    {
      src: "/images/cybersec.png",
      alt: "IT Services"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-black/95" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
      <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-sm font-medium text-yellow-400 ring-1 ring-inset ring-yellow-400/20 mb-6">
                Leading IT Solutions in Lagos
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Empowering Your Business with{' '}
                <span className="text-yellow-400">Modern Technology</span>
              </h1>
              <p className="text-base sm:text-lg text-yellow-100 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Transform your business with our comprehensive IT solutions. From 24/7 support to advanced cybersecurity, we're your trusted technology partner in Lagos.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20 backdrop-blur-sm hover:border-white/30 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Explore Services
                </Link>
              </div>

              {/* Features List */}
          <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-12 grid grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center text-yellow-100"
                  >
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
              </motion.div>
                ))}
              </motion.div>
          </motion.div>
          
            {/* Right Column - Hero Image/Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
                  <div className="relative w-full h-full">
                    <AnimatePresence mode="wait">
          <motion.div 
                        key={currentImage}
                        className="absolute inset-0"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={images[currentImage].src}
                          alt={images[currentImage].alt}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Carousel Controls */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                      {images.map((_, index) => (
                        <button
                    key={index}
                          onClick={() => setCurrentImage(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentImage === index ? 'bg-yellow-400 w-4' : 'bg-white/50'
                          }`}
                  />
                ))}
              </div>

                    {/* Navigation Buttons */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "500+", label: "Clients Served" },
              { number: "99.9%", label: "Uptime Guaranteed" },
              { number: "24/7", label: "Support Available" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
            <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                      </div>
                <div className="text-yellow-100">
                  {stat.label}
                  </div>
              </motion.div>
            ))}
            </motion.div>
          </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[60px] text-gray-50 dark:text-gray-900"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 17.75C960 17.75 1056 35.5 1152 44.375C1248 53.25 1344 53.25 1392 53.25H1440V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
} 