import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, FileText, DollarSign, AlertCircle, Phone, MessageCircle } from "lucide-react";

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
  },
  cn: {
    name: "China",
    code: "CN",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist Visa (L)",
        description: "For tourism, sightseeing and visiting friends or family in China",
        processingTime: "10+ working days",
        validity: "As per embassy decision",
        fee: "From BDT 10,000"
      },
      {
        type: "Business Visa (M)",
        description: "For trade fairs such as the Canton Fair, business meetings and negotiations",
        processingTime: "10+ working days",
        validity: "Single entry",
        fee: "From BDT 11,000"
      }
    ],
    pricing: {
      title: "China Visa Cost from Bangladesh",
      note: "Packages below are all-inclusive (embassy fee + our service charge). The final quote depends on your passport profile and travel history, so please confirm with our team before you apply.",
      groups: [
        {
          title: "Tourist Visa (L) - Package Price",
          columns: ["Visa Category", "Applicant Profile", "Package Price"],
          rows: [
            ["3 Months Single Entry", "Previous China visits after 2024", "BDT 10,000"],
            ["3 Months Single Entry", "Malaysia or first-world country visited", "BDT 11,000"],
            ["3 Months Single Entry", "1-2 countries visited", "BDT 12,000"],
            ["3 Months Single Entry", "Fresh passport, no travel history", "BDT 13,000"],
            ["6 Months Double Entry", "Recent China visited after 2024", "BDT 12,000"],
            ["1-2 Years Multiple Entry", "Two recent China visits after 2024, subject to eligibility", "BDT 18,000"]
          ]
        },
        {
          title: "Business Visa (M) - Package Price",
          columns: ["Applicant Profile", "Service Included", "Total Cost"],
          rows: [
            ["Recent travel to China, Malaysia, Singapore or a first-world country visited", "Processing charge + Embassy fee", "BDT 11,000"],
            ["Fresh passport", "Processing charge + Embassy fee", "BDT 13,000"]
          ]
        }
      ],
      footnotes: [
        "Package prices include both our processing charge and the embassy visa fee.",
        "Interview at the China Visa Application Centre may be required at the embassy's discretion.",
        "If the application is refused after the interview, BDT 2,500 of the service charge is non-refundable; the balance is returned.",
        "Fees are revised by the embassy from time to time - call our hotline for today's rate."
      ]
    },
    requirements: [
      "All passports",
      "Bank solvency certificate and bank statement of the last 6 months, with a last balance of minimum 3,00,000 Taka (per person)",
      "Recent photo (33 x 48 size)",
      "Updated trade license, company pad and visiting card (business person)",
      "NOC, office ID and visiting card (job holder)",
      "Confirmed air ticket",
      "Interview (if required)",
      "Personal information"
    ],
    process: [
      "Free consultation - tell us your travel plan and passport history, and we confirm your visa category and exact package price",
      "Hand over the required documents at our Gulshan office, or send scanned copies over WhatsApp",
      "Our team checks your file, points out anything missing and fills in the online application for you",
      "We pay the embassy fee and book your appointment at the China Visa Application Centre",
      "You attend the centre for biometrics, and the interview if the embassy asks for one",
      "The embassy processes your application while we track the status and keep you updated",
      "Collect your passport with the visa - 10+ working days"
    ],
    additionalInfo: [
      "Tripbirds Travels is a Government approved travel agency for China visa processing",
      "Minimum bank balance of BDT 3,00,000 per person is mandatory",
      "Interview may be required at the discretion of the visa center",
      "Business, student and work visa categories are also processed - call us for details",
      "Hotline: 01640-481621, 01603-898001 | ask.tripbirds@gmail.com",
      "Office: Confidence Center (Building-2), House# Kha-9, Flat# 15-E (Lift-15), Shahjadpur, Gulshan-2, Dhaka-1212"
    ]
  },
  hk: {
    name: "Hong Kong",
    code: "HK",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Visit Visa",
        description: "For tourism and visiting family or friends",
        processingTime: "7-14 days",
        validity: "Up to 90 days",
        fee: "HKD $230"
      },
      {
        type: "Business Visa",
        description: "For business meetings, trade fairs and negotiations",
        processingTime: "7-14 days",
        validity: "Up to 90 days",
        fee: "HKD $230"
      },
      {
        type: "Student Visa",
        description: "For studying at Hong Kong institutions",
        processingTime: "6-8 weeks",
        validity: "Duration of course",
        fee: "HKD $230"
      }
    ],
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Completed form ID 991A (visit) or ID 992A (business)",
      "Recent passport-sized photographs",
      "Confirmed return flight ticket",
      "Hotel booking confirmation",
      "Bank statements (last 6 months)",
      "Employment or business documents",
      "Sponsorship form ID 991B from Hong Kong sponsor",
      "Copy of sponsor's HKID card",
      "Travel itinerary"
    ],
    process: [
      "Arrange a local sponsor in Hong Kong",
      "Complete the application and sponsorship forms",
      "Collect all supporting documents",
      "Submit application to Hong Kong Immigration Department",
      "Pay the visa fee after approval-in-principle",
      "Receive the visa label",
      "Affix label to passport before travel"
    ],
    additionalInfo: [
      "A local sponsor is required for most applications",
      "Applications are processed directly by HK Immigration",
      "Pre-arrival registration required for Indian nationals",
      "Visa label must be collected within 3 months"
    ]
  },
  th: {
    name: "Thailand",
    code: "TH",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist Visa (TR)",
        description: "For tourism and leisure travel",
        processingTime: "5-10 days",
        validity: "60 days per entry",
        fee: "THB 2,000"
      },
      {
        type: "Business Visa (Non-B)",
        description: "For business meetings and trade activities",
        processingTime: "7-10 days",
        validity: "90 days",
        fee: "THB 3,000"
      },
      {
        type: "Medical Treatment Visa",
        description: "For treatment at Thai hospitals",
        processingTime: "5-7 days",
        validity: "60-90 days",
        fee: "THB 2,000"
      }
    ],
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Completed e-Visa application",
      "Recent passport-sized photograph",
      "Confirmed round-trip air ticket",
      "Hotel booking for entire stay",
      "Bank statement showing minimum THB 20,000 equivalent",
      "Employment certificate or trade license",
      "Invitation letter (for business visa)",
      "Hospital appointment letter (for medical visa)",
      "Proof of accommodation address in Thailand"
    ],
    process: [
      "Register on the Thailand e-Visa portal",
      "Fill in the online application and upload documents",
      "Pay the visa fee online",
      "Wait for document verification",
      "Attend interview if requested by the embassy",
      "Receive e-Visa approval by email",
      "Print e-Visa and carry it while travelling"
    ],
    additionalInfo: [
      "Thailand now issues e-Visas only - no sticker visa",
      "Visa on arrival available for selected nationalities",
      "Extension of 30 days possible inside Thailand",
      "Proof of sufficient funds may be checked at immigration"
    ]
  },
  my: {
    name: "Malaysia",
    code: "MY",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "eVISA (Tourist)",
        description: "For tourism and family visits",
        processingTime: "5-7 days",
        validity: "30 days per entry",
        fee: "MYR 100"
      },
      {
        type: "eVISA (Business)",
        description: "For business meetings and conferences",
        processingTime: "5-7 days",
        validity: "30 days per entry",
        fee: "MYR 100"
      },
      {
        type: "Medical Visa",
        description: "For treatment at Malaysian hospitals",
        processingTime: "5-7 days",
        validity: "30-90 days",
        fee: "MYR 100"
      }
    ],
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Completed eVISA online application",
      "Recent passport-sized photograph (white background)",
      "Confirmed return flight ticket",
      "Hotel booking confirmation",
      "Bank statements (last 3-6 months)",
      "Employment letter or business documents",
      "Invitation letter from Malaysian company (for business)",
      "Hospital appointment letter (for medical visa)",
      "Proof of sufficient funds"
    ],
    process: [
      "Create an account on the Malaysia eVISA portal",
      "Complete the application form online",
      "Upload scanned documents and photograph",
      "Pay the eVISA processing fee",
      "Wait for approval notification",
      "Download and print the eVISA",
      "Present eVISA at the port of entry"
    ],
    additionalInfo: [
      "eVISA is issued fully online - no embassy visit needed",
      "Single and multiple entry options available",
      "Malaysia Digital Arrival Card (MDAC) required before arrival",
      "eVISA must be used within 3 months of issue"
    ]
  },
  ph: {
    name: "Philippines",
    code: "PH",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Temporary Visitor Visa (9A)",
        description: "For tourism and visiting family",
        processingTime: "7-15 days",
        validity: "59 days",
        fee: "$40"
      },
      {
        type: "Business Visa (9A)",
        description: "For business meetings and conferences",
        processingTime: "7-15 days",
        validity: "59 days",
        fee: "$40"
      },
      {
        type: "Student Visa (9F)",
        description: "For studying at Philippine institutions",
        processingTime: "20-30 days",
        validity: "Duration of course",
        fee: "$60"
      }
    ],
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Completed visa application form (duly notarised)",
      "Passport-sized photographs (2 copies)",
      "Confirmed round-trip flight booking",
      "Hotel reservation for entire stay",
      "Bank statements (last 6 months)",
      "Employment certificate or business documents",
      "Invitation letter from Philippine host or company",
      "Police clearance certificate",
      "Proof of sufficient financial capacity"
    ],
    process: [
      "Download and complete the visa application form",
      "Have the form notarised",
      "Book an appointment at the Philippine Embassy",
      "Submit documents in person",
      "Pay the visa fee",
      "Attend interview if required",
      "Collect passport with visa"
    ],
    additionalInfo: [
      "Personal appearance may be required at the embassy",
      "Single, multiple and 6-month entry options available",
      "eTravel registration required before arrival",
      "Stay can be extended at Bureau of Immigration offices"
    ]
  },
  in: {
    name: "India",
    code: "IN",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist Visa",
        description: "For tourism and sightseeing",
        processingTime: "3-5 days",
        validity: "30 days to 1 year",
        fee: "$25"
      },
      {
        type: "Medical Visa",
        description: "For treatment at Indian hospitals",
        processingTime: "3-5 days",
        validity: "60 days (triple entry)",
        fee: "$25"
      },
      {
        type: "Business Visa",
        description: "For trade, meetings and business activities",
        processingTime: "5-7 days",
        validity: "Up to 1 year",
        fee: "$40"
      },
      {
        type: "Student Visa",
        description: "For studying at Indian institutions",
        processingTime: "7-15 days",
        validity: "Duration of course",
        fee: "$50"
      }
    ],
    requirements: [
      "Valid passport (minimum 6 months validity, 2 blank pages)",
      "Completed online visa application form",
      "Recent passport-sized photograph (2x2 inch, white background)",
      "National ID card copy",
      "Bank statement or dollar endorsement",
      "Utility bill as proof of address",
      "Employment certificate or trade license",
      "Confirmed travel plan",
      "Hospital appointment letter (for medical visa)",
      "Invitation letter from Indian company (for business visa)"
    ],
    process: [
      "Fill the online application at the Indian Visa portal",
      "Book an appointment at IVAC",
      "Print application and attach documents",
      "Submit documents and biometrics at IVAC",
      "Pay the visa fee",
      "Track application status online",
      "Collect passport with visa"
    ],
    additionalInfo: [
      "Port of entry must be selected during application",
      "e-Visa available for selected nationalities",
      "Medical attendant visa available for accompanying family",
      "Photograph specifications are strictly enforced"
    ]
  },
  id: {
    name: "Indonesia",
    code: "ID",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "e-Visa on Arrival (B1)",
        description: "For tourism and short visits",
        processingTime: "2-5 days",
        validity: "30 days (extendable)",
        fee: "$50"
      },
      {
        type: "Tourist Visa (C1)",
        description: "For tourism and family visits",
        processingTime: "5-7 days",
        validity: "60 days",
        fee: "$100"
      },
      {
        type: "Business Visa (C2)",
        description: "For business meetings and negotiations",
        processingTime: "5-10 days",
        validity: "60 days to 1 year",
        fee: "$150"
      }
    ],
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Completed e-Visa online application",
      "Recent passport-sized photograph",
      "Confirmed return or onward flight ticket",
      "Hotel booking confirmation",
      "Bank statement with minimum $2,000 balance",
      "Employment certificate or business documents",
      "Sponsorship letter from Indonesian guarantor (for business)",
      "Travel itinerary",
      "Health insurance covering the stay"
    ],
    process: [
      "Register on the Indonesian e-Visa (molina) portal",
      "Complete the application and upload documents",
      "Pay the visa fee online",
      "Wait for approval by immigration",
      "Receive e-Visa by email",
      "Fill the electronic customs declaration before arrival",
      "Present e-Visa at the port of entry"
    ],
    additionalInfo: [
      "e-VOA can be extended once for another 30 days",
      "Guarantor required for business and work visas",
      "All visas are now issued electronically",
      "Bali levy payable separately on arrival in Bali"
    ]
  },
  eg: {
    name: "Egypt",
    code: "EG",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist Visa",
        description: "For tourism and sightseeing",
        processingTime: "7-15 days",
        validity: "30 days",
        fee: "$25"
      },
      {
        type: "Business Visa",
        description: "For business meetings and trade activities",
        processingTime: "10-15 days",
        validity: "30-90 days",
        fee: "$60"
      },
      {
        type: "e-Visa",
        description: "Online visa for eligible nationalities",
        processingTime: "5-7 days",
        validity: "30 days",
        fee: "$25"
      }
    ],
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Completed visa application form",
      "Passport-sized photographs (2 copies)",
      "Confirmed round-trip flight booking",
      "Hotel reservation for entire stay",
      "Bank statements (last 6 months)",
      "Employment certificate or trade license",
      "Invitation letter from Egyptian company (for business)",
      "Travel itinerary",
      "Proof of sufficient funds"
    ],
    process: [
      "Choose between e-Visa and embassy application",
      "Complete the application form",
      "Gather and attach supporting documents",
      "Submit application and pay the fee",
      "Wait for processing and verification",
      "Receive e-Visa by email or collect passport",
      "Present the visa at the port of entry"
    ],
    additionalInfo: [
      "Visa on arrival available for many nationalities",
      "Single and multiple entry options available",
      "Separate permit needed for Sinai-only travel",
      "e-Visa must be printed and carried while travelling"
    ]
  },
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
      {/* Hero Section */}
      <section className="relative pt-28 pb-14 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/85 to-accent-700/85"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <div className="text-7xl md:text-8xl mb-4 md:mb-0 leading-none">
              {getFlagEmoji(country.code)}
            </div>
            <div className="flex-1">
              <p className="text-white/70 text-sm font-semibold tracking-wide uppercase mb-2">
                Visa Guide for Bangladeshi Passport Holders
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {country.name} Visa
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Everything you need in one place - who qualifies, what it costs,
                which papers to bring, and how long it takes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="https://wa.me/8801603898001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-primary-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Ask on WhatsApp
                </a>
                <a
                  href="tel:+8801603898001"
                  className="inline-flex items-center bg-white/10 text-white border border-white/30 px-5 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +880 1603-898001
                </a>
              </div>
            </div>
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

      {/* Pricing Section */}
      {country.pricing && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{country.pricing.title}</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">{country.pricing.note}</p>

            <div className="space-y-8">
              {country.pricing.groups.map((group: any, groupIndex: number) => (
                <div key={groupIndex} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="px-6 py-4 bg-primary-600">
                    <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-primary-50">
                        <tr>
                          {group.columns.map((column: string, columnIndex: number) => (
                            <th
                              key={columnIndex}
                              className={`px-6 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap ${
                                columnIndex === group.columns.length - 1 ? "text-right" : ""
                              }`}
                            >
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {group.rows.map((row: string[], rowIndex: number) => (
                          <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                            {row.map((cell: string, cellIndex: number) => (
                              <td
                                key={cellIndex}
                                className={`px-6 py-4 text-sm ${
                                  cellIndex === row.length - 1
                                    ? "text-right font-bold text-primary-700 whitespace-nowrap"
                                    : "text-gray-700"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                <ul className="space-y-2">
                  {country.pricing.footnotes.map((footnote: string, index: number) => (
                    <li key={index} className="text-sm text-gray-700">{footnote}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Required Documents</h2>
              <p className="text-gray-600">
                Bring these {country.requirements.length} items to our office and we handle the rest of the application for you.
              </p>
            </div>
            <div className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2.5 rounded-lg border border-primary-100 self-start sm:self-auto">
              <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="text-sm font-semibold whitespace-nowrap">
                {country.visaTypes[0]?.processingTime ?? "Varies"}
              </span>
            </div>
          </div>
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

      {/* Additional Information */}
      <section className="py-16 bg-white">
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
