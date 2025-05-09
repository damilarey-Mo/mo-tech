"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, MapPin, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Oluwaseun Adebayo",
    role: "CEO, TechForge Nigeria Ltd",
    country: "Nigeria",
    image: "/images/testimonials/James Wilson.jpg",
    content: "I was skeptical about managed IT services at first, but TeaMo has completely transformed how our business operates. Their 24/7 support has saved us countless times, especially during critical business hours. The team's response time is incredible - they're often fixing issues before we even notice them!",
    service: "Managed IT Services"
  },
  {
    name: "Sarah Thompson",
    role: "Small Business Owner",
    country: "United Kingdom",
    image: "/images/testimonials/Sarah.avif",
    content: "After a ransomware scare, we knew we needed serious cybersecurity help. TeaMo didn't just set up our security systems; they trained our staff and created easy-to-follow protocols. It's been 18 months now, and we feel so much more confident about our digital security. Worth every penny!",
    service: "Cybersecurity"
  },
  {
    name: "Jeremy Braddock",
    role: "Operations Director, Pacific Trade Solutions",
    country: "Australia",
    image: "/images/testimonials/jeremy.jpg",
    content: "The infrastructure assessment TeaMo conducted opened our eyes to so many inefficiencies we hadn't noticed. They helped us optimize our entire network, and our system performance has improved dramatically. Our employees actually cheered when the new systems went live!",
    service: "IT Infrastructure Optimization"
  },
  {
    name: "Dr. Lisa Mueller",
    role: "Chief of Medicine, SwissCare Clinic",
    country: "Switzerland",
    image: "/images/testimonials/reola.png",
    content: "TeaMo's cloud migration service was exactly what our medical practice needed. They handled all our compliance requirements and made sure our patient data remained secure throughout the transition. The whole process was smoother than I could have imagined.",
    service: "Cloud Services"
  },
  {
    name: "Casandra Thibela",
    role: "Founder, Customer Konnect",
    country: "South Africa",
    image: "/images/testimonials/Casandra.avif",
    content: "I reached out to TeaMo when our remote work setup was a mess. They revamped our entire system, set up proper VPNs, and created a secure but user-friendly environment. Now our team of 50+ can work from anywhere without any hiccups. Game changer!",
    service: "Remote Work Solutions"
  },
  {
    name: "Aisha Mohammed",
    role: "Financial Controller, Lagos Investment Group",
    country: "Nigeria",
    image: "/images/testimonials/Aisha.jpg",
    content: "TeaMo's IT consulting helped us make smart technology investments that aligned with our growth plans. They didn't just throw solutions at us - they took time to understand our business and suggested practical, cost-effective options. Our ROI has been fantastic!",
    service: "IT Consulting"
  },
  {
    name: "Marcus Svensson",
    role: "Manager, Nordic Logistics",
    country: "Sweden",
    image: "/images/testimonials/Marcus.jpg",
    content: "The disaster recovery plan TeaMo developed for us was put to the test during a major power outage. Their system worked flawlessly - we were back up and running in minutes, not hours. Our board was incredibly impressed with the minimal downtime.",
    service: "Disaster Recovery"
  },
  {
    name: "Alexi Replogle",
    role: "Startup Founder",
    country: "Switzerland",
    image: "/images/testimonials/alexi.jpg",
    content: "As a startup, we needed flexible IT solutions that could grow with us. TeaMo provided exactly that. Their scalable infrastructure and support have been crucial in our expansion from 5 to 50 employees. They truly understand the unique challenges of growing businesses.",
    service: "Scalable IT Solutions"
  },
  {
    name: "Maria Rodriguez",
    role: "COO, Digital Marketing Agency",
    country: "Spain",
    image: "/images/testimonials/Maria.avif",
    content: "TeaMo's network security implementation was thorough and professional. They found vulnerabilities we didn't even know existed and fixed them all. Now I sleep better knowing our client data is properly protected.",
    service: "Network Security"
  },
  {
    name: "Ahmed Hassan",
    role: "Managing Director, Tech Distribution Ltd",
    country: "UAE",
    image: "/images/testimonials/ahmed.avif",
    content: "The hardware procurement and management service from TeaMo has been exceptional. They handled everything from selection to installation and maintenance. Their team's knowledge of both local and international markets is impressive.",
    service: "Hardware Management"
  },
  {
    name: "Chioma Okonkwo",
    role: "HR, Savanah Logistics",
    country: "Nigeria",
    image: "/images/testimonials/Chioma.jpg",
    content: "TeaMo's hardware diagnostic service is unmatched in Lagos. They quickly identified and fixed complex motherboard issues that other repair shops couldn't handle. Their technicians are highly skilled and their diagnostic tools are state-of-the-art. They saved us from having to replace expensive equipment!",
    service: "Hardware Diagnostics"
  },
  {
    name: "Maria Adeleke",
    role: " Gadget Plus",
    country: "Nigeria",
    image: "/images/testimonials/Maria .jpg",
    content: "As a gadget business owner, I've dealt with many service providers, but TeaMo stands out. Their hardware repair service is exceptional - quick turnaround times, genuine parts, and excellent customer service. They've become our go-to partner for complex repairs.",
    service: "Hardware Repair"
  },
  {
    name: "Folake Adeyemi",
    role: "Manager, Apple-Plus Nigeria",
    country: "Nigeria",
    image: "/images/testimonials/clasandrathibela.jpg",
    content: "TeaMo has revolutionized our gadget service center. Their diagnostic tools and repair techniques have helped us handle repairs more efficiently. The training they provided to our staff was comprehensive and practical. Our customer satisfaction has improved significantly!",
    service: "Gadget Service"
  },
  {
    name: "Sophie Laurent",
    role: "PM, FinTech Innovations",
    country: "France",
    image: "/images/testimonials/Sophie.avif",
    content: "TeaMo developed our mobile banking app from scratch, and the results exceeded our expectations. The app's performance, security features, and user interface are exactly what we needed. They understood our vision and delivered a product that our customers love.",
    service: "App Development"
  },
  {
    name: "David Cheng",
    role: "Founder, ChengaConnect Tech",
    country: "Singapore",
    image: "/images/testimonials/Cheng.avif",
    content: "We partnered with TeaMo for our e-commerce platform development. Their expertise in both web and mobile development helped us create a seamless shopping experience. The integration with local payment systems was smooth, and the platform's performance is outstanding.",
    service: "Web Development"
  },
  {
    name: "Aubrey Thompson",
    role: "Product Manager, Cerox Finance Solutions",
    country: "Canada",
    image: "/images/testimonials/harps-joseph.jpg",
    content: "TeaMo's web development team built our company's customer portal from the ground up. The attention to detail, responsive design, and robust backend implementation have made it a valuable tool for our business. Their ongoing support has been exceptional.",
    service: "Web Development"
  },
  {
    name: "Hanah Tanaka",
    role: "CEO, SwapCard",
    country: "Japan",
    image: "/images/testimonials/Tanaka.jpg",
    content: "Our mobile app project with TeaMo was a great success. They understood our unique market requirements and delivered a highly polished app that resonates with Japanese users. Their development process was transparent and efficient.",
    service: "App Development"
  },
  {
    name: "Isabella Romano",
    role: "Director, Lima Startups",
    country: "Italy",
    image: "/images/testimonials/isabel.jpg",
    content: "TeaMo developed our startup's MVP in record time. The web application they built is scalable, secure, and user-friendly. Their team's expertise in modern web technologies and agile development practices made the entire process smooth.",
    service: "Web Development"
  },
  {
    name: "Kunle Adebiyi",
    role: "Manager, Gadget Affairs",
    country: "Nigeria",
    image: "/images/testimonials/kunle.jpg",
    content: "TeaMo's gadget repair service has been a game-changer for our business. Their quick diagnostics and reliable repairs have helped us maintain our reputation for quality service. The warranty they provide on repairs gives our customers extra confidence.",
    service: "Gadget Service"
  },
  {
    name: "Michael Jabril",
    role: "Manager, Hamilton Hotel",
    country: "United States",
    image: "/images/testimonials/jurica-koletic.jpg",
    content: "Working with TeaMo on our enterprise web application was a fantastic experience. Their development team's technical expertise and problem-solving skills helped us create a powerful platform that serves thousands of users daily.",
    service: "Web Development"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToRandom = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * testimonials.length);
    } while (newIndex === currentIndex);
    
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        if (currentIndex === testimonials.length - 1) {
          setDirection(-1);
          setCurrentIndex(currentIndex - 1);
        } else if (currentIndex === 0) {
          setDirection(1);
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(currentIndex + direction);
        }
      }, 8000);

      return () => clearInterval(timer);
    }
  }, [currentIndex, direction, isPaused]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              What Our Clients Say
          </h2>
            <p className="mt-4 text-lg text-yellow-100">
              Trusted by businesses worldwide for reliable and innovative IT solutions
          </p>
          </motion.div>
        </div>

        <div 
          className="relative h-[500px] overflow-hidden perspective"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                rotateY: { duration: 0.5 }
              }}
              className="absolute w-full"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-3xl mx-auto cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={goToRandom}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <Quote className="w-12 h-12 text-yellow-400 mb-6" />
                  </motion.div>
                  
                  <motion.div 
                    className="relative mb-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-full transform rotate-6" />
                    <div className="relative w-24 h-24">
                      <Image
                        className="rounded-full object-cover ring-4 ring-yellow-400/20"
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        sizes="(max-width: 96px) 100vw, 96px"
                      />
                    </div>
                  </motion.div>

                  <motion.blockquote 
                    className="text-xl text-yellow-100 mb-8 italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </motion.blockquote>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="text-white font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-yellow-200">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="flex items-center justify-center text-yellow-300 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonials[currentIndex].country}
                    </div>
                    <div className="flex items-center justify-center space-x-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="mt-6 inline-flex items-center rounded-full bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400 ring-1 ring-inset ring-yellow-400/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    {testimonials[currentIndex].service}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute -bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                  index === currentIndex 
                    ? 'bg-yellow-400 scale-110' 
                    : 'bg-yellow-400/30 hover:bg-yellow-400/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Side Navigation Arrows */}
          <motion.button
            onClick={goToPrevious}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-yellow-400 hover:bg-white/20 transition-all duration-200 z-10 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed translate-x-2' : 'hover:translate-x-0'
            }`}
            whileHover={currentIndex > 0 ? { scale: 1.1, x: -4 } : {}}
            whileTap={currentIndex > 0 ? { scale: 0.9 } : {}}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            onClick={goToNext}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-yellow-400 hover:bg-white/20 transition-all duration-200 z-10 ${
              currentIndex === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed -translate-x-2' : 'hover:translate-x-0'
            }`}
            whileHover={currentIndex < testimonials.length - 1 ? { scale: 1.1, x: 4 } : {}}
            whileTap={currentIndex < testimonials.length - 1 ? { scale: 0.9 } : {}}
            disabled={currentIndex === testimonials.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
} 