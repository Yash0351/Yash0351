'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/categories', label: 'Categories' },
    { href: '/brands', label: 'Brands' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[#001F3F] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
              <span className="text-[#001F3F] font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#D4AF37]">Pragati Distributors</h1>
              <p className="text-xs text-[#F5E6D3]">Kitchen Appliance Excellence</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9000061008"
              className="flex items-center space-x-2 bg-[#D4AF37] text-[#001F3F] px-4 py-2 rounded-lg hover:bg-[#c49a2a] transition-all duration-300 font-semibold"
            >
              <FaPhone />
              <span>9000061008</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#002a5c] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:9000061008"
                className="flex items-center space-x-2 bg-[#D4AF37] text-[#001F3F] px-4 py-3 rounded-lg hover:bg-[#c49a2a] transition-all duration-300 font-semibold justify-center"
              >
                <FaPhone />
                <span>9000061008</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
