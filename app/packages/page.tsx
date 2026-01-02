import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  Hotel,
  MapPin,
  Clock,
  Users,
  Star,
  Calendar,
  CheckCircle,
  ArrowRight,
  Utensils,
  Camera,
  Shield,
  Award,
} from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Travel Packages - Tripbirds Travels",
  description:
    "Explore our amazing travel packages with flight, hotel, and tour included. Affordable holiday packages to popular destinations worldwide.",
};

export default function Packages() {
  const packages = [
    {
      id: 1,
      name: "Dubai Luxury Experience",
      destination: "Dubai, UAE",
      duration: "5 Days / 4 Nights",
      price: "৳85,000",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 156,
      featured: true,
      includes: ["Flight", "Hotel", "Breakfast", "City Tour", "Visa"],
      highlights: [
        "Burj Khalifa Visit",
        "Desert Safari",
        "Dubai Mall Shopping",
        "Marina Dhow Cruise",
      ],
    },
    {
      id: 2,
      name: "Thailand Beach Paradise",
      destination: "Bangkok & Phuket",
      duration: "7 Days / 6 Nights",
      price: "৳65,000",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 203,
      featured: true,
      includes: ["Flight", "Hotel", "Breakfast", "Island Tours", "Visa"],
      highlights: [
        "Phi Phi Islands",
        "James Bond Island",
        "Bangkok Temple Tour",
        "Phuket Beach Resort",
      ],
    },
    {
      id: 3,
      name: "Malaysia Cultural Tour",
      destination: "Kuala Lumpur",
      duration: "4 Days / 3 Nights",
      price: "৳45,000",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 124,
      featured: false,
      includes: ["Flight", "Hotel", "Breakfast", "City Tour", "Visa"],
      highlights: [
        "Twin Towers Visit",
        "Batu Caves",
        "Genting Highlands",
        "Shopping Malls",
      ],
    },
    {
      id: 4,
      name: "Singapore City Break",
      destination: "Singapore",
      duration: "4 Days / 3 Nights",
      price: "৳75,000",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 187,
      featured: false,
      includes: ["Flight", "Hotel", "Breakfast", "Universal Studios", "Visa"],
      highlights: [
        "Gardens by the Bay",
        "Marina Bay Sands",
        "Sentosa Island",
        "Night Safari",
      ],
    },
    {
      id: 5,
      name: "Maldives Honeymoon",
      destination: "Male, Maldives",
      duration: "5 Days / 4 Nights",
      price: "৳120,000",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
      rating: 5.0,
      reviews: 98,
      featured: true,
      includes: ["Flight", "Resort", "All Meals", "Water Sports", "Visa"],
      highlights: [
        "Overwater Villa",
        "Private Beach",
        "Snorkeling & Diving",
        "Romantic Dinner",
      ],
    },
    {
      id: 6,
      name: "Turkey Historical Tour",
      destination: "Istanbul & Cappadocia",
      duration: "8 Days / 7 Nights",
      price: "৳95,000",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 142,
      featured: false,
      includes: ["Flight", "Hotel", "Breakfast", "Tours", "Visa"],
      highlights: [
        "Hot Air Balloon",
        "Blue Mosque",
        "Hagia Sophia",
        "Grand Bazaar",
      ],
    },
    {
      id: 7,
      name: "Nepal Mountain Adventure",
      destination: "Kathmandu & Pokhara",
      duration: "6 Days / 5 Nights",
      price: "৳55,000",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop",
      rating: 4.6,
      reviews: 89,
      featured: false,
      includes: ["Flight", "Hotel", "Breakfast", "Trekking", "Visa"],
      highlights: [
        "Everest Base Camp View",
        "Pokhara Lake",
        "Temple Tours",
        "Mountain Trekking",
      ],
    },
    {
      id: 8,
      name: "Bali Island Escape",
      destination: "Bali, Indonesia",
      duration: "6 Days / 5 Nights",
      price: "৳68,000",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 176,
      featured: true,
      includes: ["Flight", "Hotel", "Breakfast", "Tours", "Visa"],
      highlights: [
        "Ubud Rice Terraces",
        "Beach Clubs",
        "Temple Visits",
        "Water Sports",
      ],
    },
  ];

  const packageFeatures = [
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Flight Included",
      description: "Round-trip flights from Dhaka",
    },
    {
      icon: <Hotel className="h-6 w-6" />,
      title: "Premium Hotels",
      description: "3-5 star hotels with breakfast",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Visa Assistance",
      description: "Complete visa processing support",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Tour Guide",
      description: "Professional local guides",
    },
  ];

  const popularDestinations = [
    { name: "Dubai", flag: "🇦🇪", packages: 12 },
    { name: "Thailand", flag: "🇹🇭", packages: 15 },
    { name: "Malaysia", flag: "🇲🇾", packages: 10 },
    { name: "Singapore", flag: "🇸🇬", packages: 8 },
    { name: "Maldives", flag: "🇲🇻", packages: 6 },
    { name: "Turkey", flag: "🇹🇷", packages: 9 },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-20 w-20 text-white mx-auto mb-6 animate-fade-in" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Travel Packages
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in animation-delay-100">
            All-inclusive holiday packages with flights, hotels, tours, and visa assistance.
            Book your dream vacation today!
          </p>
        </div>
      </section>

      {/* Package Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packageFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Quick Links */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Popular Destinations</h2>
            <p className="text-gray-600 mt-2">Quick access to destination packages</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {popularDestinations.map((dest) => (
              <button
                key={dest.name}
                className="px-6 py-3 bg-gray-100 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg transition-all group"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{dest.flag}</span>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 group-hover:text-primary-700">
                      {dest.name}
                    </p>
                    <p className="text-xs text-gray-600">{dest.packages} packages</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Travel Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked packages with the best value and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group flex flex-col"
              >
                {/* Package Image/Icon */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {pkg.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ Featured
                    </div>
                  )}
                </div>

                {/* Package Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {pkg.destination}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 font-semibold text-sm">{pkg.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({pkg.reviews} reviews)</span>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>

                  {/* Includes */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2">INCLUDES:</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.includes.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-700 mb-2">HIGHLIGHTS:</p>
                    <ul className="space-y-1">
                      {pkg.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t mt-auto">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl font-bold text-primary-600">{pkg.price}</p>
                      <p className="text-xs text-gray-500">per person</p>
                    </div>
                    <Link
                      href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                      className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all inline-flex items-center space-x-2 group-hover:shadow-lg"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Book Packages With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make your travel planning easy and hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Best Price Guarantee</h3>
              <p className="text-gray-700">
                Competitive prices with no hidden charges. Get the best value for your money.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Secure Booking</h3>
              <p className="text-gray-700">
                100% secure payment gateway and instant booking confirmation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">24/7 Support</h3>
              <p className="text-gray-700">
                Dedicated customer support team available round the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <CTASection
        title="Need a Custom Package?"
        description="Tell us your requirements and we'll create a personalized travel package just for you"
        primaryButton={{
          text: "Request Custom Package",
          href: "/contact",
        }}
      />
    </div>
  );
}
