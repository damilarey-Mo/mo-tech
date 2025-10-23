"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/app/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <header className="fixed w-full z-50 bg-black/90 border-b border-gray-800 dark:bg-black dark:border-gray-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">TeaMo</span>
            <Image
              src="/images/logo/ITEAM360UPDATED.JPG"
              alt="TeaMo Logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-black/95 shadow-md backdrop-blur-sm dark:bg-black dark:shadow-dark-lg"
          : "bg-black/90 border-b border-gray-800 dark:bg-black dark:border-gray-800"
      )}
      suppressHydrationWarning
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <motion.div 
          className="flex lg:flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">TeaMo</span>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/logo/ITEAM360UPDATED.JPG"
                alt="TeaMo Logo"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>
        </motion.div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 ml-2 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 dark:text-yellow-400"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <motion.div 
          className="hidden lg:flex lg:gap-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors duration-200",
                  isActive(item.href)
                    ? "text-primary-400 dark:text-yellow-300"
                    : "text-gray-300 dark:text-yellow-400 hover:text-primary-400 dark:hover:text-yellow-300"
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div 
                    className="h-0.5 bg-primary-400 dark:bg-yellow-400 mt-0.5"
                    layoutId="navbar-active-indicator"
                  />
                )}
              </Link>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="transition-all duration-300 ease-in-out dark:text-yellow-400 dark:border-yellow-500 dark:hover:bg-black hover:shadow-md"
              >
                Contact Us
              </Button>
            </motion.div>
          </Link>
          <Link href="#contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                className="transition-all duration-300 ease-in-out bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 dark:from-yellow-500 dark:to-yellow-600 dark:text-gray-900 dark:hover:from-yellow-400 dark:hover:to-yellow-500 hover:shadow-lg"
              >
                Book a Service
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-yellow-500/30"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={toggleMenu}>
                  <span className="sr-only">TeaMo</span>
                  <Image
                    src="/images/logo/ITEAM360UPDATED.JPG"
                    alt="TeaMo Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                    priority
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-300 dark:text-yellow-400"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-yellow-500/20">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className="block rounded-lg py-2 text-base font-semibold leading-7 text-gray-300 dark:text-yellow-400 hover:bg-gray-900 dark:hover:bg-black/70"
                          onClick={toggleMenu}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="py-6 space-y-3">
                    <Link href="#contact" onClick={toggleMenu}>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                        <Button className="w-full border-gray-300 dark:border-yellow-500 dark:text-yellow-400 dark:hover:bg-black hover:shadow-md" variant="outline">Contact Us</Button>
                      </motion.div>
                    </Link>
                    <Link href="#services" onClick={toggleMenu}>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                        <Button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 dark:from-yellow-500 dark:to-yellow-600 dark:text-gray-900">Book a Service</Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 