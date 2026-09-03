import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Clock, FileText, DollarSign, AlertCircle, Phone, MessageCircle } from "lucide-react";
import BackButton from "@/components/BackButton";
import Flag from "@/components/Flag";

// Country data
const countryData: Record<string, any> = {
  sg: {
    name: "Singapore",
    code: "SG",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Visit Visa (Form 14A)",
        description: "For tourism and visiting family or friends in Singapore",
        processingTime: "7+ working days",
        validity: "Up to 30 days stay",
        fee: "About BDT 2,900 + agent"
      },
      {
        type: "Visit Visa with Letter of Introduction",
        description: "Supported by a Singapore based sponsor or company",
        processingTime: "7+ working days",
        validity: "Up to 30 days stay",
        fee: "About BDT 2,900 + agent"
      }
    ],
    pricing: {
      title: "Singapore Visa Cost from Bangladesh",
      note: "The High Commission charges about BDT 2,900 per applicant, but applications must be lodged through an authorised visa agent in Dhaka, so the agent charge is added on top.",
      groups: [
        {
          title: "Visit Visa - Cost from Bangladesh",
          columns: ["Visa Category", "What is Included", "Cost"],
          rows: [
            ["Visit Visa (Form 14A)", "High Commission fee + authorised agent filing", "BDT 4,300 - 5,150"],
            ["Visit Visa with Letter of Introduction", "High Commission fee + authorised agent filing", "BDT 4,300 - 5,150"]
          ]
        }
      ],
      footnotes: [
        "Taka amounts are based on the August 2026 exchange rate and can change - please confirm today's rate with us before you pay.",
        "You cannot apply directly at the High Commission - Singapore only accepts applications through its authorised agents in Dhaka.",
        "The visa fee is non-refundable even if the application is refused.",
        "Tripbirds Travels service charge is quoted separately after we review your passport and profile - call our hotline for today's rate.",
        "Fees are revised from time to time, so please confirm with us before you pay."
      ]
    },
    requirements: [
      "All passports",
      "Bank solvency certificate and bank statement of the last 6 months, with a last balance of minimum 2,00,000 Taka (per person)",
      "Recent 2 copy photo (35 x 45 size, mat paper print)",
      "Updated trade license (with English notary), pad and visiting card (business person)",
      "NOC, salary certificate or payslip and office ID card (job holder)",
      "Bar council certificate and professional ID card (advocate)",
      "Marriage certificate and nikahnama with English notary (husband and wife)",
      "TIN copy and updated tax return certificate copy",
      "Student ID card copy (student)",
      "NID or birth certificate"
    ],
    process: [
      "Free consultation - we confirm your documents and timeline",
      "We complete Form 14A and prepare your file",
      "We lodge the application through an authorised agent in Dhaka",
      "The High Commission assesses the application",
      "We receive the outcome and inform you straight away",
      "Collect your passport with the visa sticker",
      "Carry your hotel booking and return ticket for immigration in Singapore"
    ],
    additionalInfo: [
      "If a passport has been lost, a GD copy with English notarisation must be provided",
      "Ordinary Bangladeshi passport holders must have a visa before arrival in Singapore",
      "A Letter of Introduction from a Singapore resident or company strengthens the application",
      "Processing takes 7+ working days from the day after submission",
      "Singapore immigration may still ask for proof of funds and onward travel at the airport"
    ]
  },
  jp: {
    name: "Japan",
    code: "JP",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Short Stay Tourist Visa",
        description: "For sightseeing and holidays in Japan",
        processingTime: "5-10 working days",
        validity: "Up to 90 days",
        fee: "Visa fee waived"
      },
      {
        type: "Visiting Relatives or Friends",
        description: "For visiting family or friends living in Japan",
        processingTime: "5-10 working days",
        validity: "Up to 90 days",
        fee: "Visa fee waived"
      }
    ],
    pricing: {
      title: "Japan Visa Cost from Bangladesh",
      note: "Japan waives the consular visa fee for Bangladeshi nationals on short stay visas, so you normally pay only the visa centre service charge.",
      groups: [
        {
          title: "Tourist Visa - Cost from Bangladesh",
          columns: ["Visa Category", "What is Included", "Cost"],
          rows: [
            ["Short Stay Tourist Visa", "Consular fee waived; JVAC service charge, form filling and itinerary preparation", "About BDT 2,090"],
            ["Visiting Relatives or Friends", "Consular fee waived; JVAC service charge, form filling and itinerary preparation", "About BDT 2,090"]
          ]
        }
      ],
      footnotes: [
        "All Japan visa applications from Bangladesh go through VFS Global in Dhaka - the Embassy of Japan does not accept walk-ins.",
        "The service charge is payable whether or not the visa is granted.",
        "Tripbirds Travels service charge is quoted separately after we review your passport and profile - call our hotline for today's rate.",
        "Fees are revised from time to time, so please confirm with us before you pay."
      ]
    },
    requirements: [
      "All passports (current and all previous passports)",
      "Completed Japan visa application form",
      "Recent photograph (45mm x 45mm, white background)",
      "Bank solvency certificate and bank statement of the last 6 months",
      "Income tax return and TIN certificate",
      "Updated trade license, company pad and visiting card (business person)",
      "NOC, office ID and salary certificate (job holder)",
      "Day by day travel schedule for the whole trip",
      "Confirmed air ticket booking and hotel reservation",
      "Invitation letter and guarantor documents (for family visits)"
    ],
    process: [
      "Free consultation - we confirm the right short stay category",
      "We complete the application form and build your file",
      "We prepare the day by day itinerary Japan asks for",
      "Submit the application at VFS Global (JVAC) Dhaka",
      "The embassy reviews the application",
      "We track the file and update you",
      "Collect your passport with the visa"
    ],
    additionalInfo: [
      "Japan requires a detailed day by day schedule - a vague itinerary is a common reason for refusal",
      "A guarantor in Japan strengthens family visit applications",
      "The consular fee is waived for Bangladeshi short stay applicants",
      "Applications are lodged through VFS Global Dhaka only",
      "Japan does not issue visa on arrival to Bangladeshi passport holders"
    ]
  },
  cn: {
    name: "China",
    code: "CN",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist Visa (L)",
        description: "For tourism, sightseeing and visiting friends or family in China. Issued as a sticker visa in your passport, in single, double or multiple entry form",
        processingTime: "10+ working days",
        validity: "Usually 3 months from date of issue",
        fee: "From BDT 10,500"
      },
      {
        type: "Business Visa (M)",
        description: "For trade fairs such as the Canton Fair, business meetings and negotiations",
        processingTime: "10+ working days",
        validity: "As per embassy decision",
        fee: "From BDT 11,000"
      },
      {
        type: "Medical Visa",
        description: "For treatment at Chinese hospitals, with an attendant visa for one companion",
        processingTime: "10+ working days",
        validity: "As per treatment schedule",
        fee: "Quoted on request"
      }
    ],
    pricing: {
      title: "China Visa Cost from Bangladesh",
      note: "Packages below are all-inclusive (embassy fee + our service charge). The final quote depends on your passport profile and travel history, so please confirm with our team before you apply.",
      groups: [
        {
          title: "Tourist Visa (L) - Package Price",
          columns: ["Visa Category", "Eligibility", "Fee (BDT)"],
          badges: ["Most Chosen", null, null, null],
          rows: [
            ["Single Entry", "Applicants with prior travel to Thailand, Malaysia, Singapore or other sticker-visa countries.", "BDT 10,000"],
            ["Double Entry", "Eligible applicants meeting embassy conditions.", "BDT 11,500"],
            ["1 Year Multiple Entry", "Subject to embassy approval.", "BDT 14,500"],
            ["2 Year Multiple Entry", "Subject to embassy approval.", "BDT 15,500"]
          ]
        },
        {
          title: "Business Visa (M) - Package Price",
          columns: ["Visa Category", "Eligibility", "Fee (BDT)"],
          badges: ["Most Chosen", null, null, null],
          rows: [
            ["Single Entry", "Applicants with recent travel to China, Malaysia, Singapore or a first-world country.", "BDT 10,000"],
            ["Double Entry", "Eligible applicants meeting embassy conditions.", "BDT 12,000"],
            ["1 Year Multiple Entry", "Subject to embassy approval.", "BDT 15,000"],
            ["2 Year Multiple Entry", "Subject to embassy approval.", "BDT 16,000"]
          ]
        },
        {
          title: "Medical Visa - Package Price",
          columns: ["Visa Category", "Service Included", "Total Cost"],
          rows: [
            ["Medical Visa", "Processing charge + Embassy fee", "Quoted on request"],
            ["Attendant Visa - one companion", "Processing charge + Embassy fee", "Quoted on request"]
          ]
        }
      ],
      footnotes: [
        "Package prices include both our processing charge and the embassy visa fee.",
        "Processing time is approximately 10 working days and may vary depending on embassy workload.",
        "Interview at the China Embassy Visa Application Centre may be required at the embassy's discretion.",
        "If the application is refused after the interview, BDT 2,500 of the service charge is non-refundable; the balance is returned.",
        "Fees are revised by the embassy from time to time - call our hotline for today's rate."
      ]
    },
    requirements: [
      "Original passport with minimum 7 months validity, plus all previous passports",
      "Bank solvency certificate and bank statement of the last 6 months, with a last balance of minimum 3,00,000 Taka (per person)",
      "Two recent photos (33 x 48 size, white background)",
      "National ID card copy",
      "Confirmed air ticket - mandatory for a China visa application",
      "Updated trade license, incorporation documents, company pad and visiting card (business person)",
      "NOC or salary certificate, last 6 months payslips, office ID and visiting card (job holder)",
      "Student ID card copy (student)",
      "Retirement certificate and pension documents (retired applicant)",
      "BMDC registration certificate (doctor)",
      "Bar Council certificate and professional ID card (advocate)",
      "Supporting professional documents for freelancers, artists and sportspeople",
      "Birth certificate in English (for children)",
      "Marriage certificate or nikahnama with English translation (if applicable)",
      "Biometrics at the visa centre, and interview if required"
    ],
    process: [
      "Free consultation - tell us your travel plan and passport history, and we confirm your visa category and exact package price",
      "Hand over the required documents at our Gulshan office, or send scanned copies over WhatsApp",
      "Our team checks your file, points out anything missing and completes the COVA online application form for you",
      "We pay the embassy fee and book your appointment at the China Visa Application Service Centre (CVASC) in Dhaka",
      "You attend CVASC in person for fingerprints and biometrics, and the interview if the embassy asks for one",
      "The embassy processes your application while we track the status and keep you updated",
      "Collect your passport with the visa - 10+ working days"
    ],
    additionalInfo: [
      "Medical visa applicants also need a hospital appointment letter from the Chinese hospital, and an attendant visa can be arranged for one companion",
      "Tripbirds Travels is a Government approved travel agency for China visa processing",
      "Minimum bank balance of BDT 3,00,000 per person is mandatory",
      "Interview may be required at the discretion of the visa center",
      "Biometrics are collected in person at CVASC Dhaka - the applicant must attend, this cannot be done by an agent",
      "Applications are filed through the COVA online system and lodged at CVASC Dhaka; the embassy does not accept walk-in applications",
      "Fresh passport holders with no travel history are usually asked for extra supporting documents",
      "The visa fee is not refundable once the interview has taken place or the embassy has decided",
      "The final decision rests entirely with the Embassy of China - no agency can guarantee approval",
      "Business, student and work visa categories are also processed - call us for details",
      "Hotline: 01640-481621, 01603-898001 | ask.tripbirds@gmail.com",
      "Offices: Confidence Center (Building-2), House# Kha-9, Flat# 15-E (Lift-15), Shahjadpur, Gulshan-2, Dhaka-1212 | Day Night Siraj Tower (Ground Floor), House No: Ta-114, Middle Badda, Gulshan Badda Link Road, Dhaka-1212"
    ]
  },
  hk: {
    name: "Hong Kong",
    code: "HK",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Visit Visa",
        description: "For tourism and visiting family or friends in Hong Kong",
        processingTime: "30+ working days",
        validity: "Up to 90 days",
        fee: "About BDT 3,600"
      }
    ],
    pricing: {
      title: "Hong Kong Visa Cost from Bangladesh",
      note: "Hong Kong visas are applied for online with the Immigration Department. There is no Hong Kong visa centre in Dhaka, and the fee is paid only after the application is approved in principle.",
      groups: [
        {
          title: "Visit Visa - Cost from Bangladesh",
          columns: ["Visa Category", "What is Included", "Cost"],
          rows: [
            ["Visit Visa", "Immigration Department fee + online filing and sponsor coordination", "About BDT 3,600"]
          ]
        }
      ],
      footnotes: [
        "Taka amounts are based on the August 2026 exchange rate and can change - please confirm today's rate with us before you pay.",
        "The visa fee is paid only after approval in principle, so a refused application costs no government fee.",
        "The approved e-Visa is emailed to you and must be printed and carried while travelling.",
        "A local sponsor in Hong Kong is required for most visit applications.",
        "Tripbirds Travels service charge is quoted separately after we review your passport and profile - call our hotline for today's rate."
      ]
    },
    requirements: [
      "All passport, visa and seal scan copy",
      "Bank solvency certificate and bank statement of the last 6 months (last balance minimum 5,00,000 Taka)",
      "Recent photo (35 x 45 size)",
      "Updated trade license (with English notary), company pad, visiting card, business deed copy, business receipt copy or invoice, and photos at the workplace with the company signboard (business person)",
      "NOC, salary certificate or payslip, office ID or visiting card, employment contract, and photos at the workplace with the company signboard (job holder)",
      "Marriage certificate and nikahnama with English notary (husband and wife)",
      "TIN copy and updated tax return certificate copy (last 3 years)",
      "Photos of your previous visits to other countries"
    ],
    process: [
      "Free consultation - we confirm whether you need a local sponsor",
      "We complete the online application on the ImmD portal",
      "Your Hong Kong sponsor submits the sponsorship form",
      "Immigration assesses the application",
      "Approval in principle is issued and the fee is paid",
      "The e-Visa is emailed to you",
      "Print the e-Visa and carry it with your passport"
    ],
    additionalInfo: [
      "Photos of your workplace with the company signboard, and of your previous trips abroad, are part of the required file",
      "Hong Kong tourist visas are processed online by the Immigration Department - no visa centre visit in Dhaka",
      "A local sponsor is required for most visit applications",
      "The e-Visa notification slip must be printed and shown on arrival",
      "Processing usually takes 30+ working days, so apply well ahead",
      "The visa label or e-Visa must be used within three months of issue"
    ]
  },
  th: {
    name: "Thailand",
    code: "TH",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist e-Visa (TR)",
        description: "For tourism and holidays in Thailand",
        processingTime: "15+ working days",
        validity: "60 days per entry",
        fee: "From BDT 5,500"
      },
      {
        type: "Medical Treatment Visa",
        description: "For treatment at Bumrungrad, Bangkok Hospital and other Thai hospitals",
        processingTime: "15+ working days",
        validity: "60-90 days",
        fee: "Quoted on request"
      }
    ],
    pricing: {
      title: "Thailand Visa Cost from Bangladesh",
      note: "Thailand now issues e-Visas only. The cost is the embassy fee plus the VFS Global service charge, and applications are submitted through the Thai e-Visa portal.",
      groups: [
        {
          title: "Tourist Visa - Cost from Bangladesh",
          columns: ["Visa Category", "What is Included", "Cost"],
          rows: [
            ["Tourist e-Visa (TR) - single entry", "Embassy fee + VFS charge and e-Visa filing", "BDT 5,500 - 6,500"],
            ["Medical Treatment Visa", "Embassy fee + VFS charge and e-Visa filing", "Quoted on request"]
          ]
        }
      ],
      footnotes: [
        "Bank statement must show a last balance of minimum 2,00,000 Taka per person.",
        "Documents in Bangla must be translated into English and notarised.",
        "Applications are submitted through VFS Global centres in Dhaka, Chattogram and Sylhet.",
        "The embassy fee is non-refundable even if the visa is refused.",
        "Tripbirds Travels service charge is quoted separately after we review your passport and profile - call our hotline for today's rate."
      ]
    },
    requirements: [
      "Passport information page and all visa and seal scan copy",
      "Bank solvency certificate and bank statement of the last 6 months, with a last balance of minimum 2,00,000 Taka (per person)",
      "Recent clear photo (35 x 45, white background)",
      "Updated trade license (with English notary), company pad and visiting card (business person)",
      "NOC, salary certificate or payslip, office ID card and visiting card (job holder)",
      "Marriage certificate and nikahnama with English notary (husband and wife)",
      "Student ID card copy (student)",
      "TIN copy and updated tax return certificate copy",
      "Birth certificate (child)"
    ],
    process: [
      "Free consultation - we confirm the right visa category and your timeline",
      "We register you on the Thailand e-Visa portal and complete the form",
      "We upload the document set and pay the fee online",
      "The embassy verifies your documents",
      "Attend an interview only if the embassy asks for one",
      "The approved e-Visa is emailed to you",
      "Print the e-Visa and carry it while travelling"
    ],
    additionalInfo: [
      "Medical treatment applicants also need an appointment letter from the Thai hospital",
      "Thailand issues e-Visas only - there is no sticker visa any more",
      "Bangladeshi passport holders are not eligible for visa on arrival",
      "A 30 day extension is usually possible from inside Thailand",
      "Immigration may check proof of funds and onward travel on arrival",
      "Apply at least four weeks before travel to allow for extra document requests"
    ]
  },
  my: {
    name: "Malaysia",
    code: "MY",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "eVisa Single Entry (Tourist)",
        description: "For tourism and holidays in Malaysia",
        processingTime: "7+ working days",
        validity: "30 days stay, valid 6 months",
        fee: "About BDT 3,800"
      }
    ],
    pricing: {
      title: "Malaysia Visa Cost from Bangladesh",
      note: "Malaysia issues an eVisa to Bangladeshi nationals. The cost below is the immigration visa fee plus the online processing fee.",
      groups: [
        {
          title: "Tourist Visa - Cost from Bangladesh",
          columns: ["Visa Category", "What is Included", "Cost"],
          rows: [
            ["eVisa Single Entry (Tourist)", "Immigration visa fee + online processing fee and filing", "About BDT 3,800"]
          ]
        }
      ],
      footnotes: [
        "Taka amounts are based on the August 2026 exchange rate and can change - please confirm today's rate with us before you pay.",
        "The Single Entry eVisa is valid for 6 months from issue and allows a 30 day stay with no extension.",
        "Your passport must have at least 6 months validity and 2 blank pages.",
        "Processing takes longer if immigration asks for extra documents or calls you for an interview.",
        "Tripbirds Travels service charge is quoted separately after we review your passport and profile - call our hotline for today's rate."
      ]
    },
    requirements: [
      "Current passport and old passport information page scan copy, plus all visa and seal scan copy",
      "Bank statement of the last 6 months and bank solvency certificate, with a last balance of minimum 1,00,000 Taka (per person)",
      "Recent photo (35 x 50 size)",
      "Updated trade license (with English notary), company pad and visiting card (business person)",
      "NOC, salary certificate or payslip, office ID or visiting card (job holder)",
      "Student ID card copy (student)",
      "TIN copy and updated tax return certificate copy",
      "NID or birth certificate copy"
    ],
    process: [
      "Free consultation - we confirm your eligibility and timeline",
      "Send us your passport scan, photograph and supporting documents",
      "We complete the eVisa application on the Malaysian immigration portal",
      "We upload the documents and pay the fee online",
      "Immigration reviews the application",
      "The approved eVisa is emailed to you",
      "Print the eVisa and carry it while travelling"
    ],
    additionalInfo: [
      "Malaysia issues an eVisa - there is no embassy visit or sticker in your passport",
      "Immigration assesses genuine tourism intent, sufficient funds and your ties to Bangladesh",
      "The Single Entry eVisa permits a 30 day stay with no extension",
      "Bangladeshi passport holders are not eligible for visa on arrival in Malaysia",
      "Keep your hotel booking and return ticket handy for immigration at KLIA"
    ]
  },
  ph: {
    name: "Philippines",
    code: "PH",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Temporary Visitor Visa 9(a)",
        description: "For tourism and visiting family or friends in the Philippines",
        processingTime: "15+ working days",
        validity: "Up to 59 days stay",
        fee: "From BDT 3,500"
      }
    ],
    pricing: {
      title: "Philippines Visa Cost from Bangladesh",
      note: "The Embassy of the Philippines in Dhaka processes applications mainly through accredited agencies. The embassy fee is paid at submission and the agency service charge is added on top.",
      groups: [
        {
          title: "Tourist Visa - Cost from Bangladesh",
          columns: ["Visa Category", "What is Included", "Cost"],
          rows: [
            ["Temporary Visitor Visa 9(a)", "Embassy fee + application filing", "BDT 3,500 - 5,000"]
          ]
        }
      ],
      footnotes: [
        "Bangladeshi passport holders are not eligible for visa-free entry or visa on arrival in the Philippines.",
        "Apply at least four weeks before travel to leave room for extra document requests.",
        "The embassy fee is non-refundable even if the visa is refused.",
        "Tripbirds Travels service charge is quoted separately after we review your passport and profile - call our hotline for today's rate."
      ]
    },
    requirements: [
      "Passport information page scan copy, plus all visa and immigration arrival or departure seal scan copy",
      "Bank statement of the last 6 months and bank solvency certificate, with a last balance of minimum 2,50,000 Taka (per person)",
      "Recent photo (35 x 50 size)",
      "Updated trade license (with English notary), company pad and visiting card (business person)",
      "NOC, salary certificate or payslip, office ID or visiting card (job holder)",
      "Student ID card copy (student)",
      "TIN copy and updated tax return certificate copy",
      "NID or birth certificate copy",
      "Utility bill copy (present address)"
    ],
    process: [
      "Free consultation - we confirm the right 9(a) category for your trip",
      "We complete the application form and prepare your document file",
      "We submit the application to the Embassy of the Philippines in Dhaka",
      "The embassy reviews the file and may ask for extra papers",
      "Attend an interview if the embassy requests one",
      "We collect the outcome and inform you",
      "Collect your passport with the visa sticker"
    ],
    additionalInfo: [
      "The Philippine Embassy in Dhaka works largely through accredited agencies",
      "Bangladeshi passport holders must hold a visa before boarding",
      "Processing usually takes 15+ working days depending on the embassy workload",
      "A stay of up to 59 days is normally granted on a 9(a) visa",
      "Extensions are possible from inside the Philippines through the Bureau of Immigration"
    ]
  },
  in: {
    name: "India",
    code: "IN",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist Visa",
        description: "For tourism, sightseeing and visiting friends or family in India",
        processingTime: "4-7 working days",
        validity: "As per embassy decision",
        fee: "BDT 1,500"
      },
      {
        type: "Medical Visa",
        description: "For treatment at Indian hospitals, with an attendant visa for one companion",
        processingTime: "4-7 working days",
        validity: "As per treatment schedule",
        fee: "BDT 1,500"
      }
    ],
    pricing: {
      title: "India Visa Cost from Bangladesh",
      note: "The Government of India does not charge a visa fee to Bangladeshi nationals. You pay only the IVAC processing fee, which is all inclusive.",
      groups: [
        {
          title: "Tourist Visa - Cost from Bangladesh",
          columns: ["Visa Category", "What is Included", "Cost"],
          rows: [
            ["Tourist Visa", "No Indian visa fee; IVAC processing fee, online filing and appointment booking", "BDT 1,500"],
            ["Medical Visa", "No Indian visa fee; IVAC processing fee, online filing and appointment booking", "BDT 1,500"]
          ]
        }
      ],
      footnotes: [
        "The Indian visa itself remains free of charge for all Bangladeshi nationals - only the IVAC processing fee applies.",
        "Bangladeshi passport holders are not eligible for the Indian e-Tourist Visa or visa on arrival, so a sticker visa is mandatory before travel.",
        "Applications are accepted at IVAC centres in Dhaka, Chattogram, Sylhet, Rajshahi and Khulna.",
        "Tripbirds Travels service charge is quoted separately after we review your passport and profile - call our hotline for today's rate."
      ]
    },
    requirements: [
      "Original passport with at least 6 months validity and 2 blank pages",
      "Online application printout from indianvisa-bangladesh.nic.in, signed at all marked places",
      "Photocopy of the passport biodata page",
      "Recent photograph (50mm x 50mm, white background)",
      "Bank solvency certificate and bank statement of the last 6 months, or an encashment certificate of USD 150",
      "Utility bill copy showing your present address",
      "Updated trade license, company pad and visiting card (business person)",
      "NOC, office ID and salary certificate (job holder)",
      "Hospital appointment letter from the Indian hospital (for medical visa)",
      "National ID card or birth certificate copy"
    ],
    process: [
      "Free consultation - we confirm the right visa category for your trip",
      "We complete the online application on the Indian visa portal",
      "We book your IVAC appointment slot",
      "We check your document file before submission",
      "You submit the file and give biometrics at IVAC",
      "The High Commission processes the application",
      "Collect your passport with the visa from IVAC"
    ],
    additionalInfo: [
      "The Indian visa is free of charge for Bangladeshi nationals - only the IVAC processing fee is payable",
      "Bangladeshi passport holders cannot use the e-Tourist Visa or visa on arrival",
      "The port of entry and exit is fixed on the visa, so choose air, rail or land carefully",
      "Medical visa applicants can also get an attendant visa for one companion",
      "IVAC appointment slots fill up quickly - book as early as you can"
    ]
  },
  id: {
    name: "Indonesia",
    code: "ID",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist Visa",
        description: "For tourism and holidays in Bali, Jakarta and the rest of Indonesia",
        processingTime: "15+ working days",
        validity: "Up to 60 days",
        fee: "BDT 8,000"
      }
    ],
    pricing: {
      title: "Indonesia Visa Cost from Bangladesh",
      note: "Indonesian visas for Bangladeshi nationals are arranged through the Embassy of Indonesia in Dhaka, with the fee payable in Taka at submission.",
      groups: [
        {
          title: "Tourist Visa - Cost from Bangladesh",
          columns: ["Visa Category", "What is Included", "Cost"],
          rows: [
            ["Tourist Visa", "Embassy fee + application filing and appointment booking", "BDT 8,000"]
          ]
        }
      ],
      footnotes: [
        "Bangladeshi passport holders are not eligible for Indonesia's visa-free or visa on arrival schemes.",
        "The embassy fee is non-refundable even if the visa is refused.",
        "Processing starts only after the complete document set has been submitted.",
        "Tripbirds Travels service charge is quoted separately after we review your passport and profile - call our hotline for today's rate."
      ]
    },
    requirements: [
      "All passports",
      "Bank solvency certificate and bank statement of the last 6 months (last balance minimum 2,50,000 Taka per person)",
      "Recent passport size photo (2 copy)",
      "Updated trade license (with English notary), pad and visiting card (business person)",
      "NOC, salary certificate, office ID card and visiting card (job holder)",
      "Bar council certificate and professional ID card (advocate)",
      "Student ID card copy (student)",
      "Marriage certificate and nikahnama with English notary (husband and wife)",
      "TIN copy and updated tax return certificate copy",
      "Health insurance",
      "Blank bank cheque page (original copy)"
    ],
    process: [
      "Free consultation - we confirm the right visa category and cost",
      "We complete the application form and prepare your document file",
      "We book your appointment at the Embassy of Indonesia in Dhaka",
      "You submit the file and pay the embassy fee",
      "The embassy reviews the application",
      "We track the file and update you on the outcome",
      "Collect your passport with the visa"
    ],
    additionalInfo: [
      "The applicant must come to the Indonesian Embassy in person to submit the passport and documents",
      "Bangladeshi passport holders need a visa before travelling to Indonesia",
      "Bali, Jakarta and Lombok are all covered by the same tourist visa",
      "Processing takes 15+ working days from complete submission",
      "Immigration may check your return ticket and proof of funds on arrival"
    ]
  },
  eg: {
    name: "Egypt",
    code: "EG",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=400&fit=crop",
    visaTypes: [
      {
        type: "Tourist Visa",
        description: "For sightseeing at the Pyramids, Nile cruises and holidays in Egypt",
        processingTime: "40+ working days",
        validity: "Up to 30 days",
        fee: "From BDT 6,000"
      },
      {
        type: "Umrah or Transit Visa",
        description: "For travellers routing through Egypt",
        processingTime: "40+ working days",
        validity: "As per itinerary",
        fee: "Quoted on request"
      }
    ],
    pricing: {
      title: "Egypt Visa Cost from Bangladesh",
      note: "Egyptian visas for Bangladeshi nationals are issued by the Embassy of Egypt in Dhaka. The short term visa fee is payable at submission.",
      groups: [
        {
          title: "Tourist Visa - Cost from Bangladesh",
          columns: ["Visa Category", "What is Included", "Cost"],
          rows: [
            ["Tourist Visa - short term single entry", "Embassy fee + application filing", "From BDT 6,000"],
            ["Umrah or Transit Visa", "Embassy fee + application filing", "Quoted on request"]
          ]
        }
      ],
      footnotes: [
        "Bangladeshi passport holders are not eligible for Egypt's visa on arrival scheme.",
        "The embassy fee is non-refundable even if the visa is refused.",
        "An invitation or a confirmed tour package strengthens the application considerably.",
        "Tripbirds Travels service charge is quoted separately after we review your passport and profile - call our hotline for today's rate."
      ]
    },
    requirements: [
      "All passports",
      "Bank statement of the last 6 months and bank solvency certificate, with a last balance of minimum 5,00,000 Taka",
      "Recent photo (2 copy, passport size)",
      "Updated trade license (with English notary), company pad and visiting card (business person)",
      "NOC, salary certificate, office ID card and visiting card (job holder)",
      "TIN certificate copy and updated tax return certificate copy",
      "NID or birth certificate copy"
    ],
    process: [
      "Free consultation - we confirm your visa category and timeline",
      "We complete the application form and prepare your document file",
      "We arrange your tour package or hotel confirmation if needed",
      "We submit the application to the Embassy of Egypt in Dhaka",
      "The embassy reviews the file and may call for an interview",
      "We track the application and update you",
      "Collect your passport with the visa"
    ],
    additionalInfo: [
      "Bangladeshi passport holders must obtain the visa before travelling to Egypt",
      "A confirmed tour package or hotel booking is expected with the application",
      "A separate permit is needed for Sinai-only travel",
      "Processing takes 40+ working days from submission",
      "Apply at least a month before travel, especially in the winter tourist season"
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

          {/* Flag watermark: right-hand side, fading out to the left so it never
              sits behind the headline. Static - nothing here reacts to hover. */}
          <div className="hidden md:block absolute inset-y-0 right-0 w-3/4 overflow-hidden">
            <Flag
              code={country.code}
              alt=""
              className="w-full h-full opacity-75 [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_38%,rgba(0,0,0,0.85)_75%,#000_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_38%,rgba(0,0,0,0.85)_75%,#000_100%)]"
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <BackButton className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-8 transition-colors" />

          <div className="flex flex-col">
            {/* On mobile the watermark is hidden, so show a flag chip instead */}
            <div className="mb-4 md:hidden">
              <Flag
                code={country.code}
                alt={`${country.name} flag`}
                className="w-24 h-16 rounded-lg shadow-lg ring-1 ring-white/30"
              />
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
                                {cellIndex === 0 && group.badges?.[rowIndex] && (
                                  <span className="ml-2 inline-block rounded-full bg-primary-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary-700 align-middle">
                                    {group.badges[rowIndex]}
                                  </span>
                                )}
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
