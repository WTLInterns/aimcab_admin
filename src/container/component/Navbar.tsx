/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function for anchor links
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`h-18 w-full text-white sticky top-0 z-50 shadow-lg transition-all duration-300 ease-in-out backdrop-blur-sm ${
      scrolled 
        ? 'bg-[#0F0E0E]/90' // Darker background when scrolled
        : 'bg-transparent' // Transparent when at top
    }`}>
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Added hover effect that works with scroll state */}
        <Link href="/" className="flex items-center text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-1">
          <img
            src="images/logo-png.png"
            alt="AIMCAB Logo"
            className={`w-12 h-12 transform transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110 ${
              scrolled ? 'drop-shadow-lg' : 'drop-shadow-xl'
            }`}
          />
          <span className={`ml-3 font-bold tracking-wider ${
            scrolled ? 'text-white' : 'text-white'
          }`}>AIMCAB</span>
        </Link>

        {/* Navbar links for large screens - Enhanced scroll effects */}
        <div className="hidden md:flex space-x-10 font-semibold items-center">
          <a href="tel:9130030054" className={`text-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] flex items-center gap-2 ${
            scrolled ? 'text-white hover:text-yellow-400' : 'text-white hover:text-yellow-400'
          }`}>
            <i className="fas fa-phone-alt fa-lg"></i> Call Us
          </a>
          
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => {
            const id = item.toLowerCase();
            return (
              <a 
                key={id}
                href={`#${id}`} 
                onClick={(e) => handleAnchorClick(e, id)}
                className={`text-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] relative group ${
                  scrolled ? 'text-white hover:text-yellow-400' : 'text-white hover:text-yellow-400'
                }`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-yellow-400' : 'bg-yellow-400'
                }`}></span>
              </a>
            );
          })}
        </div>

        {/* Mobile menu toggle - Consistent across scroll states */}
        <button
          className={`md:hidden focus:outline-none hover:scale-110 transition-transform duration-300 ${
            scrolled ? 'text-white' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 ${
            scrolled ? 'bg-white' : 'bg-white'
          }`}></span>
          <span className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 ${
            scrolled ? 'bg-white' : 'bg-white'
          }`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${
            scrolled ? 'bg-white' : 'bg-white'
          }`}></span>
        </button>
      </div>

      {/* Mobile menu - Enhanced background based on scroll */}
      <div
        className={`md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } ${
          scrolled 
            ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
            : 'bg-gradient-to-b from-gray-900/95 to-gray-800/95'
        } shadow-xl`}
      >
        <div className="flex flex-col items-center py-8 space-y-6">
          <a href="tel:9130030054" className="text-white text-xl hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 flex items-center gap-2">
            <i className="fas fa-phone-alt fa-lg"></i> Call Us
          </a>
          
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => {
            const id = item.toLowerCase();
            return (
              <a 
                key={id}
                href={`#${id}`}
                onClick={(e) => handleAnchorClick(e, id)}
                className="text-white text-xl hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}