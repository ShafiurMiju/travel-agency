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
import WorldMapBackdrop from "@/components/WorldMapBackdrop";

export const metadata: Metadata = {
  title: "Tripbirds Travels | Expert Visa Processing & Travel Solutions",
  description:
    "Professional visa processing services for business and tourist visas to any country. We also provide air ticket booking and hotel reservations worldwide.",
};

export default function Home() {
  // Featured countries data
  const featuredCountries = [
    {
      name: "China",
      code: "CN",
      visaTypes: ["Tourist", "Business", "Medical"],
      processingTime: "10+ working days",
      popular: true,
    },
    {
      name: "India",
      code: "IN",
      visaTypes: ["Tourist", "Medical"],
      processingTime: "4-7 working days",
      popular: true,
    },
    {
      name: "Malaysia",
      code: "MY",
      visaTypes: ["Tourist"],
      processingTime: "7+ working days",
      popular: true,
    },
    {
      name: "Thailand",
      code: "TH",
      visaTypes: ["Tourist", "Medical"],
      processingTime: "15+ working days",
      popular: true,
    },
    {
      name: "Singapore",
      code: "SG",
      visaTypes: ["Visit"],
      processingTime: "7+ working days",
      popular: false,
    },
    {
      name: "Hong Kong",
      code: "HK",
      visaTypes: ["Visit"],
      processingTime: "30+ working days",
      popular: false,
    },
    {
      name: "Japan",
      code: "JP",
      visaTypes: ["Tourist", "Family Visit"],
      processingTime: "5-10 working days",
      popular: false,
    },
    {
      name: "Indonesia",
      code: "ID",
      visaTypes: ["Tourist"],
      processingTime: "15+ working days",
      popular: false,
    },
    {
      name: "Philippines",
      code: "PH",
      visaTypes: ["Tourist"],
      processingTime: "15+ working days",
      popular: false,
    },
    {
      name: "Egypt",
      code: "EG",
      visaTypes: ["Tourist", "Transit"],
      processingTime: "40+ working days",
      popular: false,
    },
  ];

  // Stats data
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Clients" },
    { icon: Globe, value: "20+", label: "Countries Covered" },
    { icon: Award, value: "99%", label: "Success Rate" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Rashedul Islam",
      role: "Garments Exporter, Dhaka",
      content:
        "Got my China business visa for the Canton Fair without any hassle. They prepared the whole file and guided me before the interview.",
      rating: 5,
    },
    {
      name: "Nusrat Jahan",
      role: "Homemaker, Gulshan",
      content:
        "We applied for Thailand tourist visa for our family of four. All the visas came together and the whole process was very smooth.",
      rating: 5,
    },
    {
      name: "Mizanur Rahman",
      role: "Businessman, Chattogram",
      content:
        "Took my mother to India for treatment. Both the medical visa and my attendant visa were done on time. Truly grateful to the team.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-950">
        {/* Background: layered gradient + aurora glows + flight paths (no imagery, no text) */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />

          {/* Aurora glows */}
          <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-accent-500/25 blur-3xl animate-float" />
          <div className="absolute top-1/4 -right-40 h-[36rem] w-[36rem] rounded-full bg-primary-500/30 blur-3xl animate-float animation-delay-300" />
          <div className="absolute -bottom-48 left-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-400/15 blur-3xl animate-float animation-delay-200" />

          {/* Dotted world map + live flight routes */}
          <div className="absolute inset-0 opacity-95">
            <WorldMapBackdrop />
          </div>

          {/* Soft scrim so the map never fights the headline */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_50%_45%,rgba(9,18,54,0.6),transparent_72%)]" />

          {/* Drifting plane silhouettes */}
          <Plane className="absolute top-[16%] left-[10%] h-10 w-10 text-white/20 rotate-[25deg] animate-float" />
          <Plane className="absolute top-[30%] right-[18%] h-8 w-8 text-white/15 rotate-[15deg] animate-float animation-delay-200" />
          <Plane className="absolute top-[66%] right-[12%] h-14 w-14 text-accent-300/20 -rotate-12 animate-float animation-delay-300" />

          {/* Vignette + fade into next section */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(9,18,54,0.55)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
              Your Gateway to
              <br />
              <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">Global Travel</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Professional visa processing, air ticket booking, and hotel
              reservations for any country. Your journey starts here.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/visa-services"
                className="inline-flex items-center bg-white text-primary-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-primary-950/30 hover:bg-accent-300 hover:text-primary-900 transition-all hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                Apply for Visa
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/40 hover:bg-white/15 hover:border-white transition-all hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fade-in animation-delay-200">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md px-4 py-6 transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-1"
              >
                <stat.icon className="h-9 w-9 text-accent-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
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
                title: "99% Success Rate",
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
              Real experiences from 50+ satisfied travellers across Bangladesh
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
