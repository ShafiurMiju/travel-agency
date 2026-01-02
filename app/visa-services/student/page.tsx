import { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, CheckCircle, Clock, FileText, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Student Visa Services | Tripbirds Travels",
  description: "Student visa processing for international education. Complete guidance from university admission to visa approval."
};

export default function StudentVisaPage() {
  return (
    <div className="flex flex-col">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
            alt="Student Education"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/80 to-indigo-700/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-6 rounded-full">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Student Visa Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Complete student visa solutions for international education and academic programs worldwide
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Gateway to International Education
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive student visa services from university selection to visa approval, ensuring a smooth journey to your educational dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-8 rounded-xl">
              <Clock className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Timely Processing</h3>
              <p className="text-gray-600">Ensure your visa is ready before the academic session starts</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl">
              <FileText className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Documentation</h3>
              <p className="text-gray-600">Assistance with admission letters, financial proofs, and applications</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl">
              <CheckCircle className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interview Preparation</h3>
              <p className="text-gray-600">Mock interviews and guidance for visa interview success</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Study Visa Types</h2>
          <div className="space-y-6">
            {[
              { title: "F-1 Student Visa (USA)", desc: "For full-time academic studies at accredited institutions" },
              { title: "Tier 4 Student Visa (UK)", desc: "For degree courses at UK universities and colleges" },
              { title: "Study Permit (Canada)", desc: "For studying at designated learning institutions" },
              { title: "Subclass 500 (Australia)", desc: "For full-time study at Australian institutions" },
              { title: "Student Visa (Schengen)", desc: "For studying in European countries" },
              { title: "Student Pass (Singapore)", desc: "For full-time courses at approved institutions" }
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Valid passport",
              "University admission letter",
              "I-20/CAS/LOA (as applicable)",
              "Academic transcripts",
              "Language proficiency test results (IELTS/TOEFL)",
              "Financial proof/bank statements",
              "Sponsor documents",
              "Statement of Purpose (SOP)",
              "CV/Resume",
              "Passport photographs",
              "Medical examination reports",
              "Police clearance certificate"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Study Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["USA", "UK", "Canada", "Australia", "Germany", "New Zealand", "Singapore", "Ireland"].map((country) => (
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
