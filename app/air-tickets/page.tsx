import type { Metadata } from "next";
import {
  Plane,
  Globe,
  Shield,
  Clock,
  DollarSign,
  Calendar,
  Users,
  CheckCircle,
  TrendingDown,
} from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Air Ticket Booking - Best Prices on International & Domestic Flights",
  description:
    "Book flight tickets at the best prices. International and domestic flights with flexible booking options and 24/7 support.",
};

export default function AirTickets() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop"
            alt="Air Travel"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-700/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Plane className="h-20 w-20 text-white mx-auto mb-6 animate-fade-in" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Air Ticket Booking
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in animation-delay-100">
            Book domestic and international flights at the best prices with
            flexible options and 24/7 support.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Book With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy the best flight booking experience with unbeatable benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Best Price Guarantee",
                description:
                  "We guarantee the most competitive prices on all flights. Find a lower price? We'll match it.",
                image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=300&fit=crop",
              },
              {
                icon: Globe,
                title: "Global Coverage",
                description:
                  "Access to all major airlines worldwide. Book flights to any destination across the globe.",
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=300&fit=crop",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description:
                  "Round-the-clock customer support for bookings, changes, and emergency assistance.",
                image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=300&fit=crop",
              },
              {
                icon: Shield,
                title: "Secure Booking",
                description:
                  "Your payment and personal information are protected with industry-leading security.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop",
              },
              {
                icon: Calendar,
                title: "Flexible Options",
                description:
                  "Flexible date changes, cancellations, and refund policies for peace of mind.",
                image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=300&fit=crop",
              },
              {
                icon: Users,
                title: "Group Bookings",
                description:
                  "Special rates and dedicated support for group travel and corporate bookings.",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=300&fit=crop",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Flight Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive flight booking solutions for all your travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* International Flights */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-lg border border-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                International Flights
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Connect to any destination worldwide with our extensive network
                of international airlines.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "All major international airlines",
                  "Economy, business, and first-class options",
                  "Multi-city and stopover bookings",
                  "Special meal and seat preferences",
                  "Visa assistance for your destination",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Domestic Flights */}
            <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-lg border border-green-100">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Domestic Flights
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Quick and convenient domestic flight bookings with the best
                deals and flexible schedules.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "All domestic airlines covered",
                  "Same-day booking available",
                  "Web check-in assistance",
                  "Frequent flyer program integration",
                  "Last-minute booking support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Book
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and straightforward booking process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Contact Us",
                description:
                  "Reach out via phone, WhatsApp, or email with your travel dates and destination.",
              },
              {
                step: "2",
                title: "Get Quote",
                description:
                  "Receive the best available flight options with transparent pricing within minutes.",
              },
              {
                step: "3",
                title: "Confirm & Fly",
                description:
                  "Confirm your booking, make payment, and receive your e-ticket instantly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Special Offers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take advantage of our exclusive deals and discounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: "Early Bird Discounts",
                description:
                  "Book 60+ days in advance and save up to 30% on international flights.",
                color: "blue",
              },
              {
                icon: Users,
                title: "Group Travel Deals",
                description:
                  "Special rates for groups of 10 or more passengers. Perfect for corporate travel.",
                color: "green",
              },
              {
                icon: Calendar,
                title: "Off-Season Savings",
                description:
                  "Exclusive discounts during off-peak travel seasons on popular routes.",
                color: "purple",
              },
            ].map((offer, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-${offer.color}-50 to-white p-8 rounded-2xl border border-${offer.color}-100 shadow-lg hover:shadow-xl transition-all`}
              >
                <div
                  className={`bg-${offer.color}-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6`}
                >
                  <offer.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {offer.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change or cancel my flight booking?",
                answer:
                  "Yes, flight changes and cancellations are subject to airline policies. We assist you with the entire process and help minimize any fees.",
              },
              {
                question: "Do you offer travel insurance?",
                answer:
                  "Yes, we provide comprehensive travel insurance options that cover trip cancellation, medical emergencies, and lost baggage.",
              },
              {
                question: "How do I receive my tickets?",
                answer:
                  "E-tickets are sent to your email immediately after booking confirmation. You can use them for web check-in or at the airport.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, debit cards, bank transfers, and digital payment methods for your convenience.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Book Your Flight?"
        description="Get the best deals on air tickets with our expert assistance. Contact us today!"
        primaryButton={{
          text: "Get Flight Quote",
          href: "/contact",
        }}
        secondaryButton={{
          text: "View All Services",
          href: "/",
        }}
        gradient="from-blue-600 via-blue-700 to-indigo-600"
      />
    </div>
  );
}
