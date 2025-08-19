'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false); // For store dropdown in mobile
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsStoreOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 px-8 py-4 z-50" style={{ backgroundColor: '#1A2B22' }}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto w-full px-4 md:px-8">
        {/* Logo */}
        <div className="logo">
          <Link href="/#hmpg">
            <Image
              src="/Images/Logo 1.png"
              alt="Casa Progetto Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none gap-8 lg:gap-20 font-inter text-xs sm:text-sm lg:text-sm">
          <li>
            <Link href="/#about" className="text-white/90 hover:text-casa-green transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white/90 hover:text-casa-green transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/store" className="text-white/90 hover:text-casa-green transition-colors">
              Store &gt;
            </Link>
          </li>
          <li>
            <Link href="/#why-us" className="text-white/90 hover:text-casa-green transition-colors">
              Why Us?
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="border-2 border-casa-green text-casa-green px-3 py-1 rounded text-xs sm:text-sm lg:text-sm hover:bg-casa-green hover:text-gray-900 transition-all"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col gap-4 font-inter text-sm">
            <li>
              <Link href="/#about" className="block text-white/90">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="block text-white/90">
                Services
              </Link>
            </li>

            {/* Store with dropdown */}
            <li>
              <button
                onClick={() => setIsStoreOpen(!isStoreOpen)}
                className="w-full text-left text-white/90 flex justify-between items-center"
              >
                Store &gt;
              </button>
              {isStoreOpen && (
                <ul className="mt-2 ml-4 flex flex-col gap-2 text-white/70">
                  <li>
                    <Link href="/store/#store" className="block">
                      Store
                    </Link>
                  </li>
                  <li>
                    <Link href="/store/#product" className="block">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/store/#project" className="block">
                      Projects Showcase
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/#why-us" className="block text-white/90">
                Why Us?
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block text-casa-green border border-casa-green px-4 py-2 rounded text-center"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
