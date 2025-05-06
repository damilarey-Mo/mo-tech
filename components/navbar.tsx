"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./theme-switcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            TeaMo
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
} 