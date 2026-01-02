import type { Metadata } from "next";
import {
  Briefcase,
  Palmtree,
  GraduationCap,
  Heart,
  FileText,
  Clock,
  CheckCircle,
  Users,
  Shield,
} from "lucide-react";
import CountryCard from "@/components/CountryCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Visa Services - Business & Tourist Visa Processing",
  description:
    "Professional visa processing services for business, tourist, student, and other visa types. Expert assistance for visa applications to any country.",
};

export default function VisaServices() {
  // All countries data (expanded list)
  const allCountries = [
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
    {
      name: "France",
      code: "FR",
      visaTypes: ["Schengen", "Business"],
      processingTime: "10-15 days",
      popular: false,
    },
    {
      name: "Switzerland",
      code: "CH",
      visaTypes: ["Schengen", "Business"],
      processingTime: "10-15 days",
      popular: false,
    },
    {
      name: "New Zealand",
      code: "NZ",
      visaTypes: ["Tourist", "Business"],
      processingTime: "15-20 days",
      popular: false,
    },
    {
      name: "South Korea",
      code: "KR",
      visaTypes: ["Tourist", "Business"],
      processingTime: "7-10 days",
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop"
            alt="Visa Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/80 to-primary-700/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Visa Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expert visa processing for business, tourist, and other travel purposes
            to any country in the world.
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
                For business meetings, conferences, and corporate travel.
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
                  <span>All countries supported</span>
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

            {/* Student Visa */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Student Visa
              </h3>
              <p className="text-gray-600 mb-4">
                For studying abroad and educational programs.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>University admission support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Financial documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pre-departure guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Post-arrival support</span>
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
                Work permits, transit visas, and specialized visa types.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Work visa processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Transit visa assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dependent visa support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customized solutions</span>
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
              Process visas for over 150 countries worldwide
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
              We process visas for all countries. Contact us for personalized assistance.
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
                  "Valid passport (minimum 6 months validity)",
                  "Completed visa application form",
                  "Recent passport-size photographs",
                  "Proof of travel booking",
                  "Travel insurance",
                  "Financial statements",
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
                  "Letter of invitation (if applicable)",
                  "Hotel booking confirmation",
                  "Employment letter or proof of business",
                  "Income tax returns",
                  "Purpose of visit documentation",
                  "Previous visa copies (if any)",
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
              <strong>Note:</strong> Requirements vary by country and visa type. Our team will provide a detailed checklist for your specific application.
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
