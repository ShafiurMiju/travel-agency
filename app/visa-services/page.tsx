import type { Metadata } from "next";
import {
  Briefcase,
  Palmtree,
  Heart,
  FileText,
  CheckCircle,
  Users,
  Shield,
} from "lucide-react";
import CountryCard from "@/components/CountryCard";
import CTASection from "@/components/CTASection";
import PageHeaderBackdrop from "@/components/PageHeaderBackdrop";

export const metadata: Metadata = {
  title: "Visa Services - Tourist, Business & Medical Visa Processing",
  description:
    "Tourist, business, medical and transit visa processing from Bangladesh for China, India, Thailand, Malaysia, Singapore, Hong Kong, Japan, Indonesia, Philippines and Egypt.",
};

export default function VisaServices() {
  // All countries data (expanded list)
  const allCountries = [
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <PageHeaderBackdrop gradient="from-primary-900 via-primary-800 to-primary-700" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Visa Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Tourist, business and medical visa processing from Bangladesh, handled
            end to end by a Government approved travel agency.
          </p>
        </div>
      </section>

      {/* Visa Types Section */}
      <section id="visa-types" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Types of Visas We Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive visa solutions for all your travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Business Visa */}
            <div
              id="business"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Business Visa
              </h3>
              <p className="text-gray-600 mb-4">
                For meetings, trade fairs such as the Canton Fair, and corporate travel.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fast-track processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Multiple entry options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Document assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Interview preparation</span>
                </li>
              </ul>
            </div>

            {/* Tourist Visa */}
            <div
              id="tourist"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Palmtree className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Tourist Visa
              </h3>
              <p className="text-gray-600 mb-4">
                For vacation, leisure travel, and visiting friends/family.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Family visa packages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Family and group packages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Travel insurance help</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Itinerary planning</span>
                </li>
              </ul>
            </div>

            {/* Medical Visa */}
            <div
              id="medical"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Medical Visa
              </h3>
              <p className="text-gray-600 mb-4">
                For treatment abroad - available for China, India and Thailand.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hospital appointment letter support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Attendant visa for one companion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Priority handling where available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Treatment schedule matched validity</span>
                </li>
              </ul>
            </div>

            {/* Other Visas */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Other Visas
              </h3>
              <p className="text-gray-600 mb-4">
                Umrah and transit visas, family visits and other categories.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Umrah and transit visas (Egypt)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Visiting relatives or friends (Japan)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Letter of Introduction visas (Singapore)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customised solutions on request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Visa Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient visa application process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Users,
                title: "Consultation",
                description:
                  "Free consultation to understand your travel needs and visa requirements.",
              },
              {
                step: "02",
                icon: FileText,
                title: "Documentation",
                description:
                  "We help you prepare and verify all required documents for your application.",
              },
              {
                step: "03",
                icon: Shield,
                title: "Application",
                description:
                  "We submit your application and follow up with embassies/consulates.",
              },
              {
                step: "04",
                icon: CheckCircle,
                title: "Visa Delivery",
                description:
                  "Receive your approved visa and start planning your journey!",
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Connector Line (hidden on mobile, shown on md+) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-200 -z-10"></div>
                )}

                <div className="relative inline-block">
                  <div className="bg-primary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                    <item.icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Countries We Cover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ten destinations we process from Dhaka - click any country for its
              documents, cost and processing time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCountries.map((country) => (
              <CountryCard key={country.code} {...country} />
            ))}
          </div>

          <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              Don&apos;t see your destination country listed?
            </p>
            <p className="text-gray-600 mb-6">
              Tell us where you are heading and we will confirm whether we can
              process it and what it will cost.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              General Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common documents needed for visa applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Basic Documents
              </h3>
              <ul className="space-y-3">
                {[
                  "All passports - current and previous, with all visa and seal pages",
                  "Bank solvency certificate and bank statement of the last 6 months",
                  "Recent photograph (35 x 45 or 35 x 50, white background)",
                  "TIN copy and updated tax return certificate",
                  "NID or birth certificate copy",
                  "Personal information form and visiting card",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-white p-8 rounded-2xl border border-accent-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Additional Documents
              </h3>
              <ul className="space-y-3">
                {[
                  "Updated trade license with English notary, company pad and visiting card (business person)",
                  "NOC, salary certificate or payslip and office ID (job holder)",
                  "Student ID card copy (student)",
                  "Marriage certificate and nikahnama with English notary (husband and wife)",
                  "Confirmed air ticket and hotel booking",
                  "Hospital appointment letter (medical visa applicants)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              <strong>Note:</strong> Minimum bank balance and photo size differ by
              country - Hong Kong asks for 5,00,000 Taka while Malaysia asks for
              1,00,000. Open any country above for its exact checklist.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Apply for Your Visa?"
        description="Let our experts handle your visa application process. Get started today and travel with confidence."
        primaryButton={{
          text: "Start Your Application",
          href: "/contact",
        }}
        secondaryButton={{
          text: "Talk to Consultant",
          href: "/contact",
        }}
        gradient="from-primary-600 via-primary-700 to-accent-600"
      />
    </div>
  );
}
