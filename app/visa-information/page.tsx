import { Metadata } from "next";
import Link from "next/link";
import { Search, Globe, FileText, Clock, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Visa Information | Complete Guide for All Countries | Tripbirds Travels",
  description: "Comprehensive visa information for 150+ countries. Find visa requirements, processing times, fees, and application procedures for your destination."
};

export default function VisaInformationPage() {
  const countries = [
    { name: "United States", code: "us", continent: "North America", processing: "15-30 days", fee: "$160", visaRequired: true },
    { name: "United Kingdom", code: "gb", continent: "Europe", processing: "10-21 days", fee: "£100", visaRequired: true },
    { name: "Canada", code: "ca", continent: "North America", processing: "20-30 days", fee: "CAD $100", visaRequired: true },
    { name: "Australia", code: "au", continent: "Oceania", processing: "15-25 days", fee: "AUD $145", visaRequired: true },
    { name: "Germany", code: "de", continent: "Europe", processing: "10-15 days", fee: "€80", visaRequired: true },
    { name: "France", code: "fr", continent: "Europe", processing: "10-15 days", fee: "€80", visaRequired: true },
    { name: "UAE", code: "ae", continent: "Asia", processing: "3-5 days", fee: "AED 350", visaRequired: true },
    { name: "Singapore", code: "sg", continent: "Asia", processing: "5-7 days", fee: "SGD $30", visaRequired: true },
    { name: "Japan", code: "jp", continent: "Asia", processing: "7-10 days", fee: "¥3,000", visaRequired: true },
    { name: "South Korea", code: "kr", continent: "Asia", processing: "5-10 days", fee: "$40", visaRequired: true },
    { name: "Switzerland", code: "ch", continent: "Europe", processing: "10-15 days", fee: "CHF 80", visaRequired: true },
    { name: "Netherlands", code: "nl", continent: "Europe", processing: "10-15 days", fee: "€80", visaRequired: true },
    { name: "Italy", code: "it", continent: "Europe", processing: "10-15 days", fee: "€80", visaRequired: true },
    { name: "Spain", code: "es", continent: "Europe", processing: "10-15 days", fee: "€80", visaRequired: true },
    { name: "New Zealand", code: "nz", continent: "Oceania", processing: "20-30 days", fee: "NZD $211", visaRequired: true },
    { name: "China", code: "cn", continent: "Asia", processing: "4-7 days", fee: "$140", visaRequired: true },
    { name: "Thailand", code: "th", continent: "Asia", processing: "3-5 days", fee: "$40", visaRequired: true },
    { name: "Malaysia", code: "my", continent: "Asia", processing: "5-7 days", fee: "$25", visaRequired: false },
    { name: "Turkey", code: "tr", continent: "Asia/Europe", processing: "1-3 days", fee: "$50", visaRequired: true },
    { name: "Brazil", code: "br", continent: "South America", processing: "5-15 days", fee: "$160", visaRequired: true },
    { name: "India", code: "in", continent: "Asia", processing: "3-5 days", fee: "$25", visaRequired: true },
    { name: "Saudi Arabia", code: "sa", continent: "Asia", processing: "2-5 days", fee: "$120", visaRequired: true },
    { name: "Qatar", code: "qa", continent: "Asia", processing: "3-5 days", fee: "$30", visaRequired: true },
    { name: "South Africa", code: "za", continent: "Africa", processing: "10-20 days", fee: "$100", visaRequired: true },
  ];

  const continents = ["All", "Asia", "Europe", "North America", "South America", "Oceania", "Africa"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop"
            alt="Visa Information"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/80 to-accent-700/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Globe className="h-20 w-20 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Visa Information Directory
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in animation-delay-100">
            Complete visa requirements and processing information for 150+ countries worldwide
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a country..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none text-lg"
              />
            </div>
          </div>

          {/* Continent Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {continents.map((continent) => (
              <button
                key={continent}
                className="px-6 py-2 bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700 rounded-full font-medium transition-all"
              >
                {continent}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Countries</h2>
            <p className="text-gray-600">Click on any country to view detailed visa requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <Link
                key={country.code}
                href={`/country/${country.code}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-4xl mb-2">{getFlagEmoji(country.code.toUpperCase())}</div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {country.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{country.continent}</p>
                  </div>
                  <div>
                    {country.visaRequired ? (
                      <span className="inline-block bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-semibold">
                        Visa Required
                      </span>
                    ) : (
                      <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                        Visa Free
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-primary-600" />
                    <span><strong>Processing:</strong> {country.processing}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2 text-primary-600" />
                    <span><strong>Fee:</strong> {country.fee}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FileText className="h-4 w-4 mr-2 text-primary-600" />
                    <span className="text-primary-600 font-medium group-hover:underline">View Requirements →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help with Your Visa Application?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our visa experts are ready to assist you with the entire application process
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

function getFlagEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
