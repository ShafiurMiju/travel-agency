import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Palmtree,
  Plane,
  Hotel,
  Globe,
  Shield,
  Clock,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import CountryCard from "@/components/CountryCard";

export const metadata: Metadata = {
  title: "Tripbirds Travels | Expert Visa Processing & Travel Solutions",
  description:
    "Professional visa processing services for business and tourist visas to any country. We also provide air ticket booking and hotel reservations worldwide.",
};

export default function Home() {
  // Featured countries data
  const featuredCountries = [
    {
      name: "United States",
      code: "US",
      visaTypes: ["Business", "Tourist", "Student"],
      processingTime: "15-30 days",
      popular: true,
    },
    {
      name: "United Kingdom",
      code: "GB",
      visaTypes: ["Business", "Tourist", "Student"],
      processingTime: "10-21 days",
      popular: true,
    },
    {
      name: "Canada",
      code: "CA",
      visaTypes: ["Business", "Tourist", "Work", "Student"],
      processingTime: "20-30 days",
      popular: true,
    },
    {
      name: "Australia",
      code: "AU",
      visaTypes: ["Business", "Tourist", "Work"],
      processingTime: "15-25 days",
      popular: true,
    },
    {
      name: "Germany",
      code: "DE",
      visaTypes: ["Schengen", "Business"],
      processingTime: "10-15 days",
      popular: false,
    },
    {
      name: "UAE",
      code: "AE",
      visaTypes: ["Tourist", "Business"],
      processingTime: "3-5 days",
      popular: true,
    },
    {
      name: "Singapore",
      code: "SG",
      visaTypes: ["Tourist", "Business"],
      processingTime: "5-7 days",
      popular: false,
    },
    {
      name: "Japan",
      code: "JP",
      visaTypes: ["Tourist", "Business"],
      processingTime: "7-10 days",
      popular: false,
    },
  ];

  // Stats data
  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Clients" },
    { icon: Globe, value: "150+", label: "Countries Covered" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content:
        "Excellent service! They helped me get my business visa to the US within 3 weeks. Professional and reliable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Travel Enthusiast",
      content:
        "Made my family vacation planning so easy. From visa to flight tickets and hotels, everything was perfectly arranged.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Corporate Executive",
      content:
        "Fast, efficient, and trustworthy. They handle all our company's business visa requirements. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop"
            alt="Travel Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/80 to-primary-700/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Gateway to
              <br />
              <span className="text-accent-400">Global Travel</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Professional visa processing, air ticket booking, and hotel
              reservations for any country. Your journey starts here.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/visa-services"
                className="inline-flex items-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 group"
              >
                Apply for Visa
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-10 w-10 text-accent-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive travel solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Briefcase}
              title="Business Visa"
              description="Fast-track business visa processing for professionals and entrepreneurs traveling for work."
              features={[
                "Express processing available",
                "Document assistance",
                "Interview preparation",
                "High success rate",
              ]}
              href="/visa-services#business"
              image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop"
            />

            <ServiceCard
              icon={Palmtree}
              title="Tourist Visa"
              description="Hassle-free tourist visa services for your vacation and leisure travel worldwide."
              features={[
                "All countries supported",
                "Family visa packages",
                "Travel insurance assistance",
                "Post-visa support",
              ]}
              href="/visa-services#tourist"
              image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop"
            />

            <ServiceCard
              icon={Plane}
              title="Air Tickets"
              description="Competitive rates on international and domestic flight bookings with flexible options."
              features={[
                "Best price guarantee",
                "24/7 booking support",
                "Flexible cancellation",
                "Group bookings",
              ]}
              href="/air-tickets"
              image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop"
            />

            <ServiceCard
              icon={Hotel}
              title="Hotel Booking"
              description="Wide selection of hotels worldwide, from budget stays to luxury accommodations."
              features={[
                "Verified properties",
                "Instant confirmation",
                "Special corporate rates",
                "Free cancellation options",
              ]}
              href="/hotels"
              image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
            />

            <ServiceCard
              icon={Globe}
              title="Travel Consultation"
              description="Expert travel advice and customized itinerary planning for your perfect trip."
              features={[
                "Personalized planning",
                "Budget optimization",
                "Country-specific tips",
                "Travel documentation help",
              ]}
              href="/contact"
              image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop"
            />

            <ServiceCard
              icon={Shield}
              title="Travel Insurance"
              description="Comprehensive travel insurance coverage for peace of mind during your journey."
              features={[
                "Medical coverage",
                "Trip cancellation protection",
                "Lost baggage coverage",
                "24/7 emergency assistance",
              ]}
              href="/contact"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Countries Supported Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We process visas for over 150 countries worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredCountries.map((country) => (
              <CountryCard key={country.code} {...country} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/visa-services"
              className="inline-flex items-center text-primary-600 font-semibold text-lg hover:text-primary-700 transition-colors group"
            >
              View All Countries
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for all travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Secure & Trusted",
                description:
                  "Your documents and personal information are handled with utmost security and confidentiality.",
              },
              {
                icon: Clock,
                title: "Fast Processing",
                description:
                  "We expedite your applications with our streamlined process and expert handling.",
              },
              {
                icon: Award,
                title: "98% Success Rate",
                description:
                  "Our experienced team ensures the highest approval rates in the industry.",
              },
              {
                icon: Users,
                title: "Expert Support",
                description:
                  "Dedicated visa consultants guide you through every step of the application process.",
              },
              {
                icon: Globe,
                title: "Global Coverage",
                description:
                  "Process visas for any country in the world with our extensive network.",
              },
              {
                icon: CheckCircle,
                title: "No Hidden Fees",
                description:
                  "Transparent pricing with no surprise charges. What you see is what you pay.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from satisfied travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg border border-primary-100 flex flex-col"
              >
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent-400 text-accent-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="mt-auto">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Journey?"
        description="Get expert assistance for your visa application and travel booking today. Our team is ready to help you every step of the way."
        primaryButton={{
          text: "Apply for Visa Now",
          href: "/visa-services",
        }}
        secondaryButton={{
          text: "Talk to Expert",
          href: "/contact",
        }}
        gradient="from-primary-600 via-primary-700 to-accent-600"
      />
    </div>
  );
}
