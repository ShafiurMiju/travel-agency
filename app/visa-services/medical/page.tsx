import { Metadata } from "next";
import Link from "next/link";
import { Heart, CheckCircle, Clock, FileText, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Medical Visa Services | Tripbirds Travels",
  description: "Medical visa assistance for patients seeking treatment abroad. Fast processing for medical emergencies and planned procedures."
};

export default function MedicalVisaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-900 via-red-800 to-pink-700 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=600&fit=crop"
            alt="Medical Healthcare"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-800/80 to-pink-700/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-6 rounded-full">
                <Heart className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Medical Visa Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Compassionate visa assistance for medical treatment abroad with priority processing
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Medical Treatment Visa Support
            </h2>
            <p className="text-lg text-gray-600">
              We understand the urgency of medical travel. Our dedicated team provides expedited visa processing services for patients and their companions seeking medical treatment abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl">
              <Clock className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Processing</h3>
              <p className="text-gray-600">Priority handling for urgent medical cases with express visa services</p>
            </div>
            <div className="bg-red-50 p-8 rounded-xl">
              <FileText className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Medical Documentation</h3>
              <p className="text-gray-600">Assistance with hospital letters and medical reports preparation</p>
            </div>
            <div className="bg-red-50 p-8 rounded-xl">
              <CheckCircle className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Companion Visas</h3>
              <p className="text-gray-600">Simultaneous processing for patient attendants and family members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Treatment Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Treatment Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Emergency Medical Treatment", desc: "Urgent medical procedures and emergency care" },
              { title: "Planned Surgery & Procedures", desc: "Scheduled operations and medical treatments" },
              { title: "Organ Transplants", desc: "Kidney, liver, heart transplant procedures" },
              { title: "Cancer Treatment", desc: "Chemotherapy, radiation, and oncology care" },
              { title: "Cardiac Care", desc: "Heart surgeries and cardiovascular treatment" },
              { title: "Orthopedic Procedures", desc: "Joint replacement and bone surgeries" }
            ].map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Valid passport",
              "Medical visa application form",
              "Hospital letter/invitation",
              "Medical reports & diagnosis",
              "Doctor's recommendation letter",
              "Proof of financial capability",
              "Bank statements (6 months)",
              "Treatment cost estimate",
              "Travel insurance",
              "Passport photos",
              "Hotel/accommodation proof",
              "Return flight tickets"
            ].map((doc, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Medical Tourism Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["India", "Thailand", "Singapore", "UAE", "USA", "UK", "Germany", "Turkey"].map((country) => (
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
