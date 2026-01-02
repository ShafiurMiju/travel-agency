import { Metadata } from "next";
import Link from "next/link";
import { Palmtree, CheckCircle, Clock, FileText, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Tourist Visa Services | Tripbirds Travels",
  description: "Tourist visa processing for vacation, sightseeing, and leisure travel. Fast and reliable visa services for tourists worldwide."
};

export default function TourVisaPage() {
  return (
    <div className="flex flex-col">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-900 via-teal-800 to-cyan-700 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop"
            alt="Tourist Travel"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-teal-800/80 to-cyan-700/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-6 rounded-full">
                <Palmtree className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tourist Visa Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Hassle-free tourist visa processing for your vacation and leisure travel worldwide
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Make Your Travel Dreams Come True
            </h2>
            <p className="text-lg text-gray-600">
              Whether it's a family vacation, solo adventure, or group tour, we handle all your tourist visa needs so you can focus on planning your perfect trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-8 rounded-xl">
              <Clock className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Processing</h3>
              <p className="text-gray-600">Fast turnaround times to get your visa before your travel dates</p>
            </div>
            <div className="bg-teal-50 p-8 rounded-xl">
              <FileText className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Simple Documentation</h3>
              <p className="text-gray-600">Easy-to-understand checklist and document preparation assistance</p>
            </div>
            <div className="bg-teal-50 p-8 rounded-xl">
              <CheckCircle className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Group Bookings</h3>
              <p className="text-gray-600">Special services for family and group tourist visa applications</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tourist Visa Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Single Entry Tourist Visa", desc: "For one-time visit to your destination country" },
              { title: "Multiple Entry Tourist Visa", desc: "For travelers who want to visit multiple times" },
              { title: "Family Tourist Visa", desc: "For families traveling together on vacation" },
              { title: "Group Tourist Visa", desc: "For organized tour groups and travel parties" },
              { title: "Transit Visa", desc: "For travelers passing through a country en route" },
              { title: "Extended Stay Tourist Visa", desc: "For longer vacation periods and extended tours" }
            ].map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Typical Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Valid passport (6 months validity)",
              "Visa application form",
              "Recent passport photographs",
              "Travel itinerary",
              "Hotel reservations",
              "Return flight tickets",
              "Bank statements (3-6 months)",
              "Employment/leave letter",
              "Travel insurance",
              "Covering letter",
              "Previous visa copies",
              "Income tax returns"
            ].map((doc, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Tourist Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Thailand", "UAE", "Singapore", "Turkey", "USA", "UK", "Australia", "Japan"].map((country) => (
              <Link
                key={country}
                href="/visa-information"
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all border border-gray-200 group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {country}
                </h3>
                <ArrowRight className="h-4 w-4 mx-auto mt-2 text-primary-600 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
