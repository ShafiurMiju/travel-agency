import { Metadata } from "next";
import { GraduationCap, CheckCircle, Clock, FileText } from "lucide-react";
import CTASection from "@/components/CTASection";
import DestinationGrid from "@/components/DestinationGrid";
import { destinations } from "@/data/destinations";
import PageHeaderBackdrop from "@/components/PageHeaderBackdrop";

export const metadata: Metadata = {
  title: "Student Visa Services | Tripbirds Travels",
  description: "Student visa processing for international education. Complete guidance from university admission to visa approval."
};

export default function StudentVisaPage() {
  return (
    <div className="flex flex-col">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-700 overflow-hidden">
        <PageHeaderBackdrop gradient="from-purple-900 via-purple-800 to-indigo-700" />

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
              { title: "China Student Visa (X1)", desc: "For degree programmes and other courses longer than 180 days, issued against the JW202 form and admission letter" },
              { title: "China Student Visa (X2)", desc: "For short courses, exchange and training programmes of 180 days or less" },
              { title: "Malaysia Student Pass", desc: "For full-time study at approved institutions, applied through EMGS before you travel" },
              { title: "India Student Visa", desc: "For undergraduate, postgraduate and research programmes at recognised Indian institutions" },
              { title: "Japan Student Visa", desc: "For Japanese language schools and universities, issued against a Certificate of Eligibility from your school" },
              { title: "Singapore Student Pass", desc: "For full-time courses at approved institutions, registered with ICA before arrival" },
              { title: "Egypt Student Visa", desc: "For Al-Azhar and other Egyptian universities, including scholarship admissions" }
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
              "Admission form for the destination - JW202 for China, Certificate of Eligibility for Japan, EMGS approval for Malaysia",
              "Academic transcripts",
              "Language proficiency results where the institution asks for them (IELTS, TOEFL or HSK)",
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

      <DestinationGrid
        title="Top Study Destinations"
        description="The destinations we handle student visas for - tap any country for its requirements, fees and processing time."
        destinations={destinations}
      />

      <CTASection />
    </div>
  );
}
