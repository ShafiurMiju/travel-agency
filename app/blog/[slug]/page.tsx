import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { notFound } from "next/navigation";

// Blog data (in a real app, this would come from a CMS or database)
const blogData: { [key: string]: any } = {
  "ultimate-guide-to-dubai-visa": {
    title: "Ultimate Guide to Dubai Visa Application in 2026",
    excerpt: "Everything you need to know about applying for a Dubai tourist visa from Bangladesh. Step-by-step process, requirements, and tips.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop",
    author: "Tripbirds Team",
    date: "December 28, 2025",
    readTime: "8 min read",
    category: "Visa Guide",
    tags: ["Dubai", "Visa", "UAE", "Travel Guide"],
    content: `
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Introduction</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">Dubai has become one of the most popular tourist destinations for Bangladeshi travelers. Whether you're planning a luxury vacation, a business trip, or a quick shopping getaway, getting your Dubai visa is the first step.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Types of Dubai Visas</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">There are several types of visas available for Dubai:</p>
      <ul style="list-style-type: disc; margin-left: 2rem; margin-bottom: 1.5rem; color: #374151;">
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Tourist Visa (30 days)</strong> - Perfect for short vacations</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Tourist Visa (90 days)</strong> - For extended stays</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Transit Visa (96 hours)</strong> - For layovers</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Multiple Entry Visa</strong> - For frequent travelers</li>
      </ul>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Required Documents</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">To apply for a Dubai tourist visa from Bangladesh, you'll need:</p>
      <ol style="list-style-type: decimal; margin-left: 2rem; margin-bottom: 1.5rem; color: #374151;">
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Valid passport (minimum 6 months validity)</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Passport size photographs (recent, white background)</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Confirmed flight tickets</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Hotel booking confirmation</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Bank statement (last 3 months)</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Cover letter explaining purpose of visit</li>
      </ol>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Application Process</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">The Dubai visa application process is straightforward when you apply through a licensed travel agency like Tripbirds Travels:</p>
      <ol style="list-style-type: decimal; margin-left: 2rem; margin-bottom: 1.5rem; color: #374151;">
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Document Submission:</strong> Provide all required documents to our office</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Application Filing:</strong> We submit your application to UAE immigration</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Processing:</strong> Visa processing typically takes 3-5 working days</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Approval:</strong> Once approved, we'll send you the e-visa via email</li>
      </ol>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Processing Time & Fees</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">Standard processing time is 3-5 working days. Express processing is also available for urgent applications. Visa fees vary depending on the visa type and duration. Contact us for current pricing.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Important Tips</h2>
      <ul style="list-style-type: disc; margin-left: 2rem; margin-bottom: 1.5rem; color: #374151;">
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Apply at least 2 weeks before your travel date</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Ensure all documents are clear and readable</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Book refundable hotel reservations until visa is approved</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Keep photocopies of all documents</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Check Dubai entry requirements and COVID-19 regulations</li>
      </ul>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Why Choose Tripbirds Travels?</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">With years of experience in visa processing, Tripbirds Travels offers:</p>
      <ul style="list-style-type: disc; margin-left: 2rem; margin-bottom: 1.5rem; color: #374151;">
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Expert guidance throughout the application process</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">High visa approval rate</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Transparent pricing with no hidden charges</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Fast processing and reliable service</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">24/7 customer support</li>
      </ul>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Conclusion</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">Getting a Dubai visa doesn't have to be complicated. With proper documentation and expert assistance from Tripbirds Travels, you can get your visa quickly and start planning your dream Dubai vacation. Contact us today to begin your visa application!</p>
    `,
  },
  "top-10-destinations-2026": {
    title: "Top 10 Must-Visit Destinations in 2026",
    excerpt: "Discover the most exciting travel destinations for 2026. From hidden gems to popular hotspots, plan your dream vacation.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop",
    author: "Travel Expert",
    date: "December 25, 2025",
    readTime: "6 min read",
    category: "Travel Tips",
    tags: ["Travel", "Destinations", "2026", "Vacation"],
    content: `
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Introduction</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">As we enter 2026, the world of travel is more exciting than ever. Here are the top 10 destinations that should be on every traveler's bucket list this year.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">1. Dubai, UAE 🇦🇪</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">Dubai continues to amaze with its futuristic skyline, luxury shopping, and world-class attractions. Don't miss the Burj Khalifa, Dubai Mall, and desert safari experiences.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">2. Bangkok, Thailand 🇹🇭</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">The vibrant capital of Thailand offers incredible street food, ornate temples, and bustling markets. Perfect for both budget travelers and luxury seekers.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">3. Istanbul, Turkey 🇹🇷</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">Where East meets West, Istanbul captivates with its rich history, stunning architecture, and delicious cuisine. Explore the Blue Mosque, Hagia Sophia, and Grand Bazaar.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">4. Bali, Indonesia 🇮🇩</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">Paradise on Earth! Bali offers pristine beaches, rice terraces, ancient temples, and world-class surfing. Perfect for honeymooners and adventure seekers alike.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">5. Singapore 🇸🇬</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">A modern marvel with its futuristic architecture, Gardens by the Bay, and incredible food scene. Great for families and first-time travelers to Asia.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">6. Maldives 🇲🇻</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">The ultimate tropical paradise with crystal-clear waters, overwater villas, and pristine coral reefs. Ideal for romantic getaways and scuba diving enthusiasts.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">7. Kuala Lumpur, Malaysia 🇲🇾</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">An affordable destination offering the iconic Petronas Towers, diverse cuisine, and easy access to nearby islands and highlands.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">8. London, UK 🇬🇧</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">A timeless classic offering world-class museums, historical landmarks, and diverse cultural experiences. Perfect for history buffs and culture lovers.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">9. Kathmandu, Nepal 🇳🇵</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">Gateway to the Himalayas, offering ancient temples, mountain vistas, and trekking adventures. Budget-friendly and spiritually enriching.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">10. Paris, France 🇫🇷</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">The City of Love never goes out of style. Experience the Eiffel Tower, Louvre Museum, and world-renowned French cuisine.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Planning Your Trip</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">Each destination offers unique experiences and requires different planning considerations. Contact Tripbirds Travels for customized travel packages, visa assistance, and expert guidance for your 2026 adventure!</p>
    `,
  },
  "schengen-visa-tips-bangladeshi": {
    title: "Schengen Visa Tips for Bangladeshi Travelers",
    excerpt: "Complete guide to applying for Schengen visa. Learn about requirements, interview tips, and common mistakes to avoid.",
    image: "🇪🇺",
    author: "Visa Consultant",
    date: "December 20, 2025",
    readTime: "10 min read",
    category: "Visa Guide",
    tags: ["Schengen", "Europe", "Visa", "Travel Tips"],
    content: `
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">What is a Schengen Visa?</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">A Schengen visa allows you to travel freely within 27 European countries for up to 90 days within a 180-day period. It's one of the most sought-after visas for Bangladeshi travelers.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Schengen Countries</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">The Schengen Area includes: Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland, Liechtenstein, and Croatia.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Types of Schengen Visas</h2>
      <ul style="list-style-type: disc; margin-left: 2rem; margin-bottom: 1.5rem; color: #374151;">
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Tourist Visa:</strong> For leisure travel and sightseeing</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Business Visa:</strong> For business meetings and conferences</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Visit Visa:</strong> For visiting family or friends</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;"><strong style="color: #1f2937; font-weight: 600;">Medical Visa:</strong> For medical treatment</li>
      </ul>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Required Documents</h2>
      <ol style="list-style-type: decimal; margin-left: 2rem; margin-bottom: 1.5rem; color: #374151;">
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Valid passport (minimum 6 months validity, with at least 2 blank pages)</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Completed visa application form</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Two recent passport-size photographs</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Travel itinerary with confirmed flight bookings</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Hotel reservations for entire trip</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Travel insurance (minimum €30,000 coverage)</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Bank statements (last 6 months)</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Employment letter or business documents</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Cover letter explaining purpose of visit</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Income tax returns</li>
      </ol>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Financial Requirements</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">You must demonstrate sufficient funds for your stay. Generally, you should have at least €50-60 per day of your trip in your bank account. Maintain consistent balance for at least 3-6 months.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Interview Tips</h2>
      <ul style="list-style-type: disc; margin-left: 2rem; margin-bottom: 1.5rem; color: #374151;">
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Be honest and consistent in your answers</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Dress professionally</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Arrive 15 minutes early</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Bring all original documents</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Speak clearly and confidently</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Explain your travel plans in detail</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Show strong ties to Bangladesh (job, family, property)</li>
      </ul>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Common Mistakes to Avoid</h2>
      <ol style="list-style-type: decimal; margin-left: 2rem; margin-bottom: 1.5rem; color: #374151;">
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Incomplete or incorrect application form</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Insufficient funds or irregular bank statements</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Lack of clear travel itinerary</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Invalid or inadequate travel insurance</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Poor quality photographs</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Not showing strong ties to home country</li>
        <li style="margin-bottom: 0.5rem; line-height: 1.75;">Applying to wrong embassy (must apply to country of main destination)</li>
      </ol>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">Processing Time</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">Standard processing time is 15-30 working days. Apply at least 2 months before your planned travel date.</p>
      
      <h2 style="color: #1e40af; font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">How Tripbirds Travels Can Help</h2>
      <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">Our experienced team provides comprehensive Schengen visa assistance including document preparation, application filing, interview preparation, and follow-up. We have a high success rate and guide you through every step of the process.</p>
    `,
  },
};

// Generate recent posts
const recentPosts = [
  {
    slug: "ultimate-guide-to-dubai-visa",
    title: "Ultimate Guide to Dubai Visa Application in 2026",
    date: "Dec 28, 2025",
  },
  {
    slug: "top-10-destinations-2026",
    title: "Top 10 Must-Visit Destinations in 2026",
    date: "Dec 25, 2025",
  },
  {
    slug: "schengen-visa-tips-bangladeshi",
    title: "Schengen Visa Tips for Bangladeshi Travelers",
    date: "Dec 20, 2025",
  },
];

// Generate popular posts
const popularPosts = [
  {
    slug: "ultimate-guide-to-dubai-visa",
    title: "Ultimate Guide to Dubai Visa Application in 2026",
    views: "2.5K",
  },
  {
    slug: "schengen-visa-tips-bangladeshi",
    title: "Schengen Visa Tips for Bangladeshi Travelers",
    views: "1.8K",
  },
  {
    slug: "top-10-destinations-2026",
    title: "Top 10 Must-Visit Destinations in 2026",
    views: "1.5K",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Tripbirds Travels Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-10 md:pb-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/90 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4">
              <span className="px-2.5 sm:px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold">
                {blog.category}
              </span>
              <div className="flex items-center text-white/80 text-xs sm:text-sm">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {blog.readTime}
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              {blog.title}
            </h1>

            <div className="flex items-center flex-wrap gap-3 sm:gap-6 text-white/90 text-sm sm:text-base">
              <div className="flex items-center">
                <User className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                {blog.date}
              </div>
              <button className="flex items-center hover:text-white transition-colors">
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Main Content */}
            <article className="lg:col-span-8">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
                {/* Featured Image */}
                <div className="mb-6 sm:mb-8 h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg sm:rounded-xl">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {blog.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Blog Content */}
                <div
                  className="prose prose-sm sm:prose-base md:prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* CTA Section */}
                <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg sm:rounded-xl border border-primary-100">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Need Help with Your Travel Plans?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                    Our expert team is ready to assist you with visa applications,
                    flight bookings, and travel packages.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-primary-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-700 transition-all hover:shadow-lg"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
              {/* About Widget */}
              <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  About Tripbirds Travels
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Your trusted partner for visa processing, air ticket booking,
                  and travel packages. Expert guidance for all your travel needs.
                </p>
                <Link
                  href="/about"
                  className="text-primary-600 font-semibold text-xs sm:text-sm hover:text-primary-700"
                >
                  Learn More →
                </Link>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block group"
                    >
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-xs sm:text-sm mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Popular Posts
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {popularPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block group"
                    >
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-xs sm:text-sm mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">{post.views} views</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  <Link
                    href="/blog"
                    className="block text-gray-700 hover:text-primary-600 transition-colors text-xs sm:text-sm py-2 border-b border-gray-100"
                  >
                    Visa Guides
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-gray-700 hover:text-primary-600 transition-colors text-xs sm:text-sm py-2 border-b border-gray-100"
                  >
                    Travel Tips
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-gray-700 hover:text-primary-600 transition-colors text-xs sm:text-sm py-2 border-b border-gray-100"
                  >
                    Destination Guides
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-gray-700 hover:text-primary-600 transition-colors text-xs sm:text-sm py-2"
                  >
                    Travel News
                  </Link>
                </div>
              </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
