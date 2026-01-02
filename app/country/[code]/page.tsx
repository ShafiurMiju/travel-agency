import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, FileText, DollarSign, AlertCircle } from "lucide-react";

// Country data
const countryData: Record<string, any> = {
  us: {
    name: "United States",
    code: "US",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Business Visa (B-1)",
        description: "For business meetings, conferences, and negotiations",
        processingTime: "15-30 days",
        validity: "Up to 10 years",
        fee: "$160"
      },
      {
        type: "Tourist Visa (B-2)",
        description: "For tourism, vacation, and visiting family",
        processingTime: "15-30 days",
        validity: "Up to 10 years",
        fee: "$160"
      },
      {
        type: "Student Visa (F-1)",
        description: "For academic studies at accredited institutions",
        processingTime: "20-45 days",
        validity: "Duration of studies",
        fee: "$160"
      }
    ],
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Completed DS-160 form",
      "Passport-sized photographs (2 copies)",
      "Visa application fee payment receipt",
      "Interview appointment confirmation",
      "Proof of financial capability",
      "Travel itinerary",
      "Employment letter or business documents",
      "Bank statements (last 6 months)",
      "Property documents (if applicable)"
    ],
    process: [
      "Fill out DS-160 application form online",
      "Pay the visa application fee",
      "Schedule visa interview appointment",
      "Prepare required documents",
      "Attend visa interview at embassy",
      "Wait for visa processing",
      "Collect passport with visa"
    ],
    additionalInfo: [
      "Visa interview is mandatory for most applicants",
      "Biometric data (fingerprints) will be collected",
      "Processing time may vary based on embassy workload",
      "Premium processing not available for US visas"
    ]
  },
  gb: {
    name: "United Kingdom",
    code: "GB",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Business Visitor Visa",
        description: "For business meetings and conferences",
        processingTime: "10-21 days",
        validity: "Up to 6 months",
        fee: "£100"
      },
      {
        type: "Standard Visitor Visa",
        description: "For tourism and visiting family",
        processingTime: "10-21 days",
        validity: "Up to 6 months",
        fee: "£100"
      },
      {
        type: "Student Visa",
        description: "For studying at UK educational institutions",
        processingTime: "15-30 days",
        validity: "Duration of course",
        fee: "£363"
      }
    ],
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Online visa application form",
      "Passport-sized photographs",
      "Proof of accommodation in UK",
      "Travel itinerary",
      "Bank statements (last 3 months)",
      "Employment letter",
      "Proof of funds",
      "Travel insurance",
      "Return flight tickets"
    ],
    process: [
      "Complete online application form",
      "Pay visa fee and health surcharge",
      "Book biometric appointment",
      "Attend biometric appointment",
      "Submit documents",
      "Wait for decision",
      "Collect visa"
    ],
    additionalInfo: [
      "Biometric data collection is mandatory",
      "Priority service available for faster processing",
      "Multiple entry visas available",
      "Health surcharge may apply"
    ]
  },
  ca: {
    name: "Canada",
    code: "CA",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Visitor Visa",
        description: "For tourism and visiting family",
        processingTime: "20-30 days",
        validity: "Up to 10 years",
        fee: "CAD $100"
      },
      {
        type: "Business Visa",
        description: "For business activities",
        processingTime: "20-30 days",
        validity: "Up to 10 years",
        fee: "CAD $100"
      },
      {
        type: "Work Permit",
        description: "For employment in Canada",
        processingTime: "30-60 days",
        validity: "As per job offer",
        fee: "CAD $155"
      },
      {
        type: "Student Permit",
        description: "For studying in Canada",
        processingTime: "30-45 days",
        validity: "Duration of studies",
        fee: "CAD $150"
      }
    ],
    requirements: [
      "Valid passport",
      "Completed application form (IMM 5257)",
      "Passport photographs",
      "Proof of financial support",
      "Travel itinerary",
      "Letter of invitation (if applicable)",
      "Employment letter",
      "Bank statements",
      "Purpose of visit letter",
      "Biometric fee payment"
    ],
    process: [
      "Complete online or paper application",
      "Pay application and biometric fees",
      "Submit biometrics",
      "Provide supporting documents",
      "Wait for processing",
      "Submit passport if approved",
      "Receive visa"
    ],
    additionalInfo: [
      "Biometrics valid for 10 years",
      "eTA required for visa-exempt countries",
      "Medical exam may be required",
      "Police certificate might be needed"
    ]
  },
  au: {
    name: "Australia",
    code: "AU",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Visitor Visa (subclass 600)",
        description: "For tourism and visiting family",
        processingTime: "15-25 days",
        validity: "Up to 12 months",
        fee: "AUD $145"
      },
      {
        type: "Business Visitor Visa",
        description: "For business activities",
        processingTime: "15-25 days",
        validity: "Up to 3 months",
        fee: "AUD $145"
      },
      {
        type: "Work Visa",
        description: "For temporary work",
        processingTime: "30-60 days",
        validity: "Up to 4 years",
        fee: "AUD $310"
      }
    ],
    requirements: [
      "Valid passport",
      "Completed ImmiAccount application",
      "Passport photographs",
      "Financial evidence",
      "Health insurance",
      "Character documents",
      "Purpose of visit statement",
      "Sponsorship letter (if applicable)",
      "Bank statements",
      "Employment documents"
    ],
    process: [
      "Create ImmiAccount",
      "Complete online application",
      "Upload documents",
      "Pay visa fee",
      "Health examination (if required)",
      "Wait for decision",
      "Receive visa grant notification"
    ],
    additionalInfo: [
      "Visa granted electronically",
      "Health examination may be required",
      "Travel restrictions may apply",
      "Multiple entry allowed"
    ]
  },
  de: {
    name: "Germany",
    code: "DE",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Schengen Visa",
        description: "For tourism, business, and family visits",
        processingTime: "10-15 days",
        validity: "Up to 90 days",
        fee: "€80"
      },
      {
        type: "Business Visa",
        description: "For business meetings and conferences",
        processingTime: "10-15 days",
        validity: "Up to 90 days",
        fee: "€80"
      }
    ],
    requirements: [
      "Valid passport (minimum 3 months beyond stay)",
      "Schengen visa application form",
      "Passport photographs (2 copies)",
      "Travel insurance (minimum €30,000 coverage)",
      "Flight reservations",
      "Hotel bookings",
      "Bank statements (last 3 months)",
      "Employment letter",
      "Cover letter explaining purpose",
      "Visa fee payment"
    ],
    process: [
      "Complete application form",
      "Book visa appointment",
      "Prepare documents",
      "Attend appointment at consulate",
      "Submit biometrics",
      "Pay visa fee",
      "Wait for processing",
      "Collect passport"
    ],
    additionalInfo: [
      "Valid for all Schengen countries",
      "Travel insurance is mandatory",
      "Personal appearance required",
      "Processing time: 10-15 working days"
    ]
  },
  ae: {
    name: "UAE",
    code: "AE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist Visa",
        description: "For tourism and leisure",
        processingTime: "3-5 days",
        validity: "30-90 days",
        fee: "AED 350"
      },
      {
        type: "Business Visa",
        description: "For business meetings",
        processingTime: "3-5 days",
        validity: "30-90 days",
        fee: "AED 450"
      }
    ],
    requirements: [
      "Valid passport (minimum 6 months)",
      "Passport copy",
      "Passport photographs",
      "Confirmed flight tickets",
      "Hotel reservation",
      "Sponsor letter (if applicable)",
      "Bank statements",
      "Travel insurance",
      "Visa application form"
    ],
    process: [
      "Submit application online",
      "Upload required documents",
      "Pay visa fee",
      "Wait for processing",
      "Receive visa via email",
      "Print visa for travel"
    ],
    additionalInfo: [
      "E-visa available",
      "Fast processing (3-5 days)",
      "No interview required",
      "Multiple entry visas available"
    ]
  },
  sg: {
    name: "Singapore",
    code: "SG",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist Visa",
        description: "For tourism and leisure",
        processingTime: "5-7 days",
        validity: "30 days",
        fee: "SGD $30"
      },
      {
        type: "Business Visa",
        description: "For business activities",
        processingTime: "5-7 days",
        validity: "30 days",
        fee: "SGD $30"
      }
    ],
    requirements: [
      "Valid passport (minimum 6 months)",
      "Completed visa application form (Form 14A)",
      "Passport photographs",
      "Flight itinerary",
      "Hotel bookings",
      "Bank statements",
      "Employment letter",
      "Cover letter",
      "Local contact information"
    ],
    process: [
      "Complete Form 14A",
      "Gather supporting documents",
      "Submit through authorized agent",
      "Pay visa fee",
      "Wait for processing",
      "Receive visa approval",
      "Print e-visa"
    ],
    additionalInfo: [
      "E-visa available online",
      "Processing: 5-7 working days",
      "Single/multiple entry options",
      "Extension possible in Singapore"
    ]
  },
  jp: {
    name: "Japan",
    code: "JP",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist Visa",
        description: "For sightseeing and tourism",
        processingTime: "7-10 days",
        validity: "15-90 days",
        fee: "¥3,000"
      },
      {
        type: "Business Visa",
        description: "For business activities",
        processingTime: "7-10 days",
        validity: "90 days",
        fee: "¥3,000"
      }
    ],
    requirements: [
      "Valid passport",
      "Visa application form",
      "Passport photograph",
      "Travel itinerary",
      "Hotel reservations",
      "Financial documents",
      "Employment certificate",
      "Bank statements (last 6 months)",
      "Return flight tickets",
      "Purpose of visit letter"
    ],
    process: [
      "Complete application form",
      "Prepare documents",
      "Submit at embassy/consulate",
      "Pay visa fee",
      "Wait for processing",
      "Collect visa in passport"
    ],
    additionalInfo: [
      "Personal submission required",
      "Interview may be required",
      "Single/multiple entry available",
      "Processing: 5-10 working days"
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params;
  const country = countryData[code];
  if (!country) {
    return {
      title: "Country Not Found"
    };
  }
  return {
    title: `${country.name} Visa Information | Tripbirds Travels`,
    description: `Complete visa information for ${country.name}. Visa types, requirements, processing time, and application process.`
  };
}

export default async function CountryDetailsPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const country = countryData[code];

  if (!country) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={country.image} 
            alt={country.name}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/80 to-accent-700/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">{getFlagEmoji(country.code)}</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {country.name} Visa Information
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Complete guide to visa types, requirements, and application process
            </p>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Visa Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {country.visaTypes.map((visa: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{visa.type}</h3>
                <p className="text-gray-600 mb-4">{visa.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-gray-700"><strong>Processing:</strong> {visa.processingTime}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-gray-700"><strong>Validity:</strong> {visa.validity}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-gray-700"><strong>Fee:</strong> {visa.fee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Required Documents</h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {country.requirements.map((req: string, index: number) => (
                <div key={index} className="flex items-start">
                  <FileText className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Process</h2>
          <div className="space-y-4">
            {country.process.map((step: string, index: number) => (
              <div key={index} className="flex items-start bg-gray-50 p-6 rounded-lg">
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Important Information</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div className="space-y-3">
                {country.additionalInfo.map((info: string, index: number) => (
                  <p key={index} className="text-gray-700">• {info}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Apply?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our experts guide you through the visa application process
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Get Started Now
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
