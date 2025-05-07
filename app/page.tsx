import React from 'react';
import HeroSection from "@/app/components/sections/hero";
import AboutSection from "@/app/components/sections/about";
import ServicesSection from "@/app/components/sections/services";
import FeaturedProjectsSection from "@/app/components/sections/featured-projects";
import TestimonialsSection from "@/app/components/sections/testimonials";
import CTASection from "@/app/components/sections/cta";
import BlogPreviewSection from "@/app/components/sections/blog-preview";
import ContactSection from "@/app/components/sections/contact";
import ServiceCarousel from './components/sections/service-carousel';

// These sections will be created
// import AboutSection from "@/app/components/sections/about";
// import ServicesSection from "@/app/components/sections/services";
// import FeaturedProjectsSection from "@/app/components/sections/featured-projects";
// import BlogPreviewSection from "@/app/components/sections/blog-preview";
// import ContactSection from "@/app/components/sections/contact";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <ServiceCarousel />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <BlogPreviewSection />
      <ContactSection />
    </React.Fragment>
  );
}
