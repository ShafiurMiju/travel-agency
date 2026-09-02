import { Metadata } from "next";
import { Briefcase, CheckCircle, Clock, FileText } from "lucide-react";
import CTASection from "@/components/CTASection";
import DestinationGrid from "@/components/DestinationGrid";
import { destinations } from "@/data/destinations";
import PageHeaderBackdrop from "@/components/PageHeaderBackdrop";

export const metadata: Metadata = {
  title: "Business Visa Services | Tripbirds Travels",
  description: "Professional business visa services for corporate travel, business meetings, conferences, and trade shows worldwide."
};

export default function BusinessVisaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <PageHeaderBackdrop gradient="from-blue-900 via-blue-800 to-blue-700" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-6 rounded-full">
                <Briefcase className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Business Visa Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Streamlined visa processing for business travelers, corporate meetings, conferences, and trade events
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Business Visa Solutions
            </h2>
            <p className="text-lg text-gray-600">
              We specialize in business visa applications for executives, entrepreneurs, and corporate travelers. Our expert team ensures your visa is processed efficiently so you can focus on your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Processing</h3>
              <p className="text-gray-600">Priority handling for urgent business travel needs with express services available</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Document Assistance</h3>
              <p className="text-gray-600">Expert help with business letters, invitations, and supporting documentation</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">High Success Rate</h3>
              <p className="text-gray-600">99% approval rate for business visa applications through our services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Types of Business Visas</h2>
          <div className="space-y-6">
            {[
              {
                title: "China Business Visa (M)",
                description: "For business meetings, supplier visits and contract negotiations in China",
                countries: "China - 3 months single entry, 10+ working days"
              },
              {
                title: "Trade Fair and Exhibition Visa",
                description: "For the Canton Fair, Yiwu and other trade exhibitions",
                countries: "China - processed under the M category"
              },
              {
                title: "Multiple Entry Business Visa",
                description: "For buyers and traders who travel repeatedly through the year",
                countries: "China - 6 month double entry, or 1-2 year multiple entry subject to eligibility"
              },
              {
                title: "Business Visit Visa",
                description: "For meetings, factory visits and sourcing trips across our other destinations",
                countries: "India, Malaysia, Thailand, Singapore, Hong Kong, Indonesia"
              }
            ].map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <p className="text-sm text-primary-600 font-medium">
                  <strong>Available for:</strong> {type.countries}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Typical Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Valid passport (minimum 6 months validity)",
              "Completed visa application form",
              "Passport-sized photographs",
              "Business invitation letter",
              "Company registration documents",
              "Bank statements (last 6 months)",
              "Employment letter",
              "Travel itinerary",
              "Proof of accommodation",
              "Previous travel history",
              "Business meeting agenda",
              "Conference registration (if applicable)"
            ].map((doc, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DestinationGrid
        title="Popular Business Destinations"
        description="The destinations we process business and trade fair visas for - tap any country for its requirements, fees and processing time."
        destinations={destinations}
      />

      <CTASection />
    </div>
  );
}
