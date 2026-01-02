import type { Metadata } from "next";
import {
  Hotel,
  Star,
  Shield,
  Clock,
  DollarSign,
  MapPin,
  Users,
  CheckCircle,
  Award,
} from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Hotel Booking - Best Rates on Hotels Worldwide",
  description:
    "Book hotels worldwide at the best rates. Wide selection from budget stays to luxury accommodations with instant confirmation.",
};

export default function Hotels() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop"
            alt="Hotel Accommodation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-indigo-800/80 to-indigo-700/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Hotel className="h-20 w-20 text-white mx-auto mb-6 animate-fade-in" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Hotel Booking
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in animation-delay-100">
            Find and book the perfect accommodation worldwide, from budget-friendly
            stays to luxury resorts.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Book Hotels With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience hassle-free hotel bookings with exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Best Price Guarantee",
                description:
                  "We offer competitive rates and price match guarantee. Save more on your accommodation.",
                image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=300&fit=crop",
              },
              {
                icon: Shield,
                title: "Verified Properties",
                description:
                  "All hotels are carefully verified and rated by real guests for quality assurance.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=300&fit=crop",
              },
              {
                icon: Clock,
                title: "Instant Confirmation",
                description:
                  "Receive immediate booking confirmation and hotel vouchers via email.",
                image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=300&fit=crop",
              },
              {
                icon: MapPin,
                title: "Global Coverage",
                description:
                  "Access to millions of hotels worldwide in all major cities and destinations.",
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=300&fit=crop",
              },
              {
                icon: Award,
                title: "Quality Assured",
                description:
                  "Handpicked selection of hotels meeting high quality and service standards.",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=300&fit=crop",
              },
              {
                icon: Users,
                title: "24/7 Support",
                description:
                  "Round-the-clock customer support for bookings, changes, and special requests.",
                image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=300&fit=crop",
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

      {/* Hotel Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hotel Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect accommodation for your budget and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Budget Hotels",
                description: "Comfortable stays at affordable prices",
                rating: 2,
                features: ["Clean rooms", "Basic amenities", "Great value"],
                image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
              },
              {
                title: "Mid-Range Hotels",
                description: "Balance of comfort and affordability",
                rating: 3,
                features: ["Quality service", "Good amenities", "Prime locations"],
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
              },
              {
                title: "Upscale Hotels",
                description: "Premium comfort and service",
                rating: 4,
                features: ["Luxury amenities", "Excellent service", "Fine dining"],
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
              },
              {
                title: "Luxury Resorts",
                description: "Ultimate luxury experience",
                rating: 5,
                features: ["5-star service", "Premium facilities", "Exclusive experiences"],
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
                  <div className="absolute inset-0 p-6 flex flex-col">
                    <div className="flex space-x-1 mb-2">
                      {[...Array(category.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-white text-white"
                        />
                      ))}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {category.title}
                      </h3>
                      <p className="text-white/90 text-sm drop-shadow">{category.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find hotels in the world's most sought-after destinations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { city: "Dubai", emoji: "🏙️" },
              { city: "Paris", emoji: "🗼" },
              { city: "London", emoji: "🏰" },
              { city: "New York", emoji: "🗽" },
              { city: "Tokyo", emoji: "🏯" },
              { city: "Singapore", emoji: "🦁" },
              { city: "Bangkok", emoji: "🛕" },
              { city: "Rome", emoji: "🏛️" },
              { city: "Sydney", emoji: "🌉" },
              { city: "Barcelona", emoji: "⛪" },
              { city: "Istanbul", emoji: "🕌" },
              { city: "Bali", emoji: "🏝️" },
            ].map((destination, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center group cursor-pointer hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{destination.emoji}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {destination.city}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Book
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Easy and quick hotel booking process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us Your Needs",
                description:
                  "Share your destination, dates, budget, and preferences with our team.",
              },
              {
                step: "2",
                title: "Get Recommendations",
                description:
                  "Receive personalized hotel options matching your requirements and budget.",
              },
              {
                step: "3",
                title: "Book & Confirm",
                description:
                  "Choose your hotel, complete payment, and receive instant confirmation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
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

      {/* Special Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Special Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional services to enhance your stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Corporate Bookings
              </h3>
              <ul className="space-y-3">
                {[
                  "Special corporate rates",
                  "Flexible payment terms",
                  "Dedicated account manager",
                  "Monthly invoicing available",
                  "Priority support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Group Bookings
              </h3>
              <ul className="space-y-3">
                {[
                  "Volume discounts",
                  "Room block reservations",
                  "Customized packages",
                  "Event coordination support",
                  "Flexible cancellation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I cancel or modify my hotel booking?",
                answer:
                  "Yes, cancellation and modification policies vary by hotel. We help you understand the terms and assist with any changes needed.",
              },
              {
                question: "When will I receive my booking confirmation?",
                answer:
                  "You'll receive instant confirmation via email after payment is processed, including hotel voucher and booking details.",
              },
              {
                question: "Do you offer airport transfers?",
                answer:
                  "Yes, we can arrange airport pickup and drop-off services along with your hotel booking for your convenience.",
              },
              {
                question: "Are there any hidden charges?",
                answer:
                  "No, we provide transparent pricing. Any applicable taxes and fees are clearly mentioned before you confirm your booking.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
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
        title="Ready to Book Your Perfect Stay?"
        description="Find and book the ideal hotel for your trip. Contact our experts for personalized recommendations."
        primaryButton={{
          text: "Find Hotels",
          href: "/contact",
        }}
        secondaryButton={{
          text: "View All Services",
          href: "/",
        }}
        gradient="from-indigo-600 via-indigo-700 to-purple-600"
      />
    </div>
  );
}
