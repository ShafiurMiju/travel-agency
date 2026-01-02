"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visaDropdownOpen, setVisaDropdownOpen] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { 
      label: "Visa Services", 
      href: "/visa-services",
      submenu: [
        { label: "Business Visa", href: "/visa-services/business" },
        { label: "Medical Visa", href: "/visa-services/medical" },
        { label: "Student Visa", href: "/visa-services/student" },
        { label: "Tour Visa", href: "/visa-services/tour" },
      ]
    },
    { label: "Visa Info", href: "/visa-information" },
    { label: "Packages", href: "/packages" },
    { label: "Blog", href: "/blog" },
    { label: "Tickets", href: "/air-tickets" },
    { label: "Hotels", href: "/hotels" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative h-16 w-16 rounded-full overflow-hidden bg-white p-1.5 shadow-sm">
              <Image
                src="/assets/logo.png"
                alt="Tripbirds Travels"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}>
                Tripbirds Travels
              </span>
              <span className={`text-xs -mt-1 transition-colors ${
                isScrolled ? "text-gray-600" : "text-white/90"
              }`}>
                Your Journey Partner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.submenu ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setVisaDropdownOpen(true)}
                  onMouseLeave={() => setVisaDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors relative flex items-center text-sm ${
                      isScrolled
                        ? "text-gray-700 hover:text-primary-600"
                        : "text-white hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 transform transition-all duration-200 ${
                    visaDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors relative group text-sm ${
                    isScrolled
                      ? "text-gray-700 hover:text-primary-600"
                      : "text-white hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? "bg-primary-600" : "bg-white"
                  }`}></span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`} />
            ) : (
              <Menu className={`h-6 w-6 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`} />
            )}
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Menu Portal - Outside navbar for proper layering */}
      {isMobileMenuOpen && (
        <>
          {/* Mobile Menu Overlay */}
          <div
            className="fixed inset-0 bg-black/70 z-[100]"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu Sidebar */}
          <div className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl overflow-hidden z-[101]">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex-shrink-0 px-5 py-5 bg-gradient-to-r from-primary-600 to-primary-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-white p-1">
                      <Image
                        src="/assets/logo.png"
                        alt="Tripbirds Travels"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">Tripbirds Travels</p>
                      <p className="text-[10px] text-primary-100 -mt-0.5">Your Journey Partner</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Mobile Menu Links */}
              <nav className="flex-1 overflow-y-auto py-4">
                <div className="px-3 space-y-1">
                  {navLinks.map((link) => (
                    link.submenu ? (
                      <div key={link.href} className="space-y-1">
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between px-4 py-3.5 text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium rounded-lg transition-all"
                        >
                          <span className="text-[15px]">{link.label}</span>
                        </Link>
                        <div className="ml-4 space-y-1">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center px-4 py-2.5 text-gray-600 hover:bg-primary-50 hover:text-primary-600 text-sm rounded-lg transition-all"
                            >
                              <span>• {sublink.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3.5 text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium rounded-lg transition-all group active:scale-[0.98]"
                      >
                        <span className="text-[15px]">{link.label}</span>
                        <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-600" />
                      </Link>
                    )
                  ))}
                </div>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="flex-shrink-0 p-4 border-t border-gray-100">
                <p className="text-center text-xs text-gray-500">
                  Available 24/7 for support
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;