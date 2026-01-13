'use client';

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#001F3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <span className="text-[#001F3F] font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#D4AF37]">Pragati Distributors</h3>
              </div>
            </div>
            <p className="text-[#F5E6D3] text-sm">
              Your trusted partner for premium kitchen appliances. Quality products, exceptional service.
            </p>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link href="/categories" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">Categories</Link></li>
              <li><Link href="/brands" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">Brands</Link></li>
              <li><Link href="/products" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-[#D4AF37]" />
                <a href="tel:9000061008" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">
                  9000061008
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#D4AF37]" />
                <a href="mailto:pragatidistributors.in@gmail.com" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors text-sm">
                  pragatidistributors.in@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-[#D4AF37]" />
                <a href="https://wa.me/919000061008" target="_blank" rel="noopener noreferrer" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#c49a2a] transition-all">
                <FaFacebook className="text-[#001F3F]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#c49a2a] transition-all">
                <FaInstagram className="text-[#001F3F]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#c49a2a] transition-all">
                <FaLinkedin className="text-[#001F3F]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 mt-8 pt-8 text-center">
          <p className="text-[#F5E6D3] text-sm">
            © {new Date().getFullYear()} Pragati Distributors. All rights reserved.
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/919000061008"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all z-50 animate-bounce"
      >
        <FaWhatsapp size={28} className="text-white" />
      </a>
    </footer>
  );
}
