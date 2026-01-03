import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Visa Services", href: "/visa-services" },
    { name: "Flight Booking", href: "/air-tickets" },
    { name: "Hotel Booking", href: "/hotels" },
    { name: "Tour Packages", href: "/packages" },
    { name: "Umrah Services", href: "/umrah" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const popularCountries = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Schengen",
    "Dubai",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-white p-1">
                <Image
                  src="/assets/logo.png"
                  alt="Tripbirds Travels"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">
                  Tripbirds Travels
                </span>
                <span className="text-sm text-gray-400 -mt-1">
                  A Trusted Travel Solution Center
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Your trusted partner for visa processing, air ticket booking, and
              hotel reservations worldwide. Making your travel dreams a reality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-primary-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-2">
                Popular Countries
              </h4>
              <div className="flex flex-wrap gap-2">
                {popularCountries.map((country) => (
                  <span
                    key={country}
                    className="text-xs bg-gray-800 px-2 py-1 rounded"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:infotripbirds@gmail.com"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  infotripbirds@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+8801603898001"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  +880 1603-898001
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Ta-114, Day Night Shiraj Tower
                  <br />
                  Gulshan Badda Link Road
                  <br />
                  Dhaka-1212, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Tripbirds Travels. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
