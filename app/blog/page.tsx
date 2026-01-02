import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Blog - Tips, Guides & News | Tripbirds Travels",
  description:
    "Read our latest travel guides, visa tips, destination insights, and travel news. Expert advice for your next journey.",
};

// Blog data (in a real app, this would come from a CMS or database)
const blogs = [
  {
    id: 1,
    slug: "ultimate-guide-to-dubai-visa",
    title: "Ultimate Guide to Dubai Visa Application in 2026",
    excerpt:
      "Everything you need to know about applying for a Dubai tourist visa from Bangladesh. Step-by-step process, requirements, and tips.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    author: "Tripbirds Team",
    date: "December 28, 2025",
    readTime: "8 min read",
    category: "Visa Guide",
    featured: true,
  },
  {
    id: 2,
    slug: "top-10-destinations-2026",
    title: "Top 10 Must-Visit Destinations in 2026",
    excerpt:
      "Discover the most exciting travel destinations for 2026. From hidden gems to popular hotspots, plan your dream vacation.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    author: "Travel Expert",
    date: "December 25, 2025",
    readTime: "6 min read",
    category: "Travel Tips",
    featured: true,
  },
  {
    id: 3,
    slug: "schengen-visa-tips-bangladeshi",
    title: "Schengen Visa Tips for Bangladeshi Travelers",
    excerpt:
      "Complete guide to applying for Schengen visa. Learn about requirements, interview tips, and common mistakes to avoid.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
    author: "Visa Consultant",
    date: "December 20, 2025",
    readTime: "10 min read",
    category: "Visa Guide",
    featured: false,
  },
  {
    id: 4,
    slug: "budget-travel-thailand",
    title: "Budget Travel Guide to Thailand",
    excerpt:
      "Explore Thailand without breaking the bank. Best budget hotels, street food, and activities for an affordable vacation.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    author: "Budget Traveler",
    date: "December 18, 2025",
    readTime: "7 min read",
    category: "Travel Tips",
    featured: false,
  },
  {
    id: 5,
    slug: "business-visa-vs-tourist-visa",
    title: "Business Visa vs Tourist Visa: Which One Do You Need?",
    excerpt:
      "Understanding the differences between business and tourist visas. Learn which one is right for your travel purpose.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    author: "Tripbirds Team",
    date: "December 15, 2025",
    readTime: "5 min read",
    category: "Visa Guide",
    featured: false,
  },
  {
    id: 6,
    slug: "packing-tips-international-travel",
    title: "Essential Packing Tips for International Travel",
    excerpt:
      "What to pack and what to leave behind. Smart packing strategies for stress-free international travel.",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&h=600&fit=crop",
    author: "Travel Expert",
    date: "December 12, 2025",
    readTime: "6 min read",
    category: "Travel Tips",
    featured: false,
  },
  {
    id: 7,
    slug: "malaysia-travel-guide-2026",
    title: "Malaysia Travel Guide: Best Places to Visit in 2026",
    excerpt:
      "From Kuala Lumpur to Penang, discover the best destinations, food, and experiences in Malaysia.",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop",
    author: "Asia Travel Expert",
    date: "December 10, 2025",
    readTime: "9 min read",
    category: "Destination Guide",
    featured: false,
  },
  {
    id: 8,
    slug: "student-visa-application-tips",
    title: "Student Visa Application: Complete Checklist",
    excerpt:
      "Everything students need to know about applying for study abroad visas. Documents, process, and timeline.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    author: "Education Consultant",
    date: "December 8, 2025",
    readTime: "8 min read",
    category: "Visa Guide",
    featured: false,
  },
];

export default function Blog() {
  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const regularBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Travel Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in animation-delay-100">
            Expert travel tips, visa guides, and destination insights to help
            you plan your perfect journey
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredBlogs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {featuredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
                >
                  {/* Image */}
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                    <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <span className="px-2.5 sm:px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                        {blog.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
                      <div className="flex items-center flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          <span className="hidden sm:inline">{blog.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          <span className="hidden sm:inline">{blog.date}</span>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="text-primary-600 font-semibold text-xs sm:text-sm hover:text-primary-700 inline-flex items-center group-hover:gap-2 transition-all"
                      >
                        Read
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regularBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all group overflow-hidden flex flex-col h-full"
              >
                {/* Image */}
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <div className="flex items-center flex-wrap gap-2 mb-3">
                    <span className="px-2 sm:px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                      {blog.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                    <div className="text-xs text-gray-500">
                      {blog.date}
                    </div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-primary-600 font-semibold text-xs sm:text-sm hover:text-primary-700 inline-flex items-center"
                    >
                      Read
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
