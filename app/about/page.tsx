import type { Metadata } from "next";
import {
  Target,
  Eye,
  Award,
  Users,
  Globe,
  Clock,
  Shield,
  TrendingUp,
  Heart,
} from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us - Your Trusted Travel Partner",
  description:
    "Learn about Tripbirds Travels. Our mission, values, and commitment to making your travel dreams come true.",
};

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/80 to-accent-700/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in animation-delay-100">
            Your trusted partner in making global travel accessible, easy, and
            memorable for everyone.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded with a vision to simplify international travel, Global
                  Visa & Travel Services has been helping thousands of travelers
                  realize their dreams of exploring the world.
                </p>
                <p>
                  What started as a small visa consultancy has grown into a
                  full-service travel agency offering comprehensive solutions
                  including visa processing, flight bookings, hotel reservations,
                  and travel consultation.
                </p>
                <p>
                  Our team of experienced travel consultants and visa experts work
                  tirelessly to ensure that every journey begins smoothly. We take
                  pride in our high success rate, personalized service, and
                  commitment to customer satisfaction.
                </p>
                <p>
                  Today, we serve corporate clients, families, students, and
                  individual travelers, providing tailored solutions for every
                  travel need. Our global network and industry partnerships enable
                  us to offer the best rates and fastest processing times in the
                  market.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, value: "50,000+", label: "Happy Clients" },
                { icon: Globe, value: "150+", label: "Countries" },
                { icon: Award, value: "98%", label: "Success Rate" },
                { icon: Clock, value: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg text-center border border-primary-100"
                >
                  <stat.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To make international travel accessible and hassle-free for
                everyone by providing expert visa services, competitive travel
                bookings, and exceptional customer support.
              </p>
              <ul className="space-y-3">
                {[
                  "Simplify the visa application process",
                  "Provide transparent and fair pricing",
                  "Deliver excellent customer service",
                  "Maintain the highest success rates",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mt-0.5 mr-3">
                      <Award className="h-4 w-4 text-primary-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be the world's most trusted and preferred travel services
                provider, recognized for excellence, innovation, and
                customer-centric solutions.
              </p>
              <ul className="space-y-3">
                {[
                  "Global leader in visa services",
                  "Pioneer in travel technology",
                  "First choice for travelers worldwide",
                  "Benchmark for service excellence",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-accent-100 rounded-full p-1 mt-0.5 mr-3">
                      <TrendingUp className="h-4 w-4 text-accent-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Integrity",
                description:
                  "We maintain the highest standards of honesty and transparency in all our dealings.",
                color: "blue",
              },
              {
                icon: Users,
                title: "Customer First",
                description:
                  "Your satisfaction is our priority. We go the extra mile to ensure your travel success.",
                color: "green",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for perfection in every service we provide, never settling for mediocrity.",
                color: "purple",
              },
              {
                icon: Heart,
                title: "Passion",
                description:
                  "We love what we do and it shows in our dedication to making your travel dreams reality.",
                color: "red",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description:
                  "We continuously improve our services and adopt new technologies for better experiences.",
                color: "orange",
              },
              {
                icon: Globe,
                title: "Global Mindset",
                description:
                  "We embrace diversity and maintain a global perspective in serving our clients.",
                color: "indigo",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Travelers Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Experienced visa consultants and travel experts with in-depth knowledge of global travel requirements.",
              },
              {
                title: "Proven Track Record",
                description:
                  "98% visa approval rate and thousands of satisfied customers across the globe.",
              },
              {
                title: "Personalized Service",
                description:
                  "Individual attention to each client's unique needs and travel goals.",
              },
              {
                title: "Fast Processing",
                description:
                  "Streamlined processes and strong embassy relationships for quick turnaround times.",
              },
              {
                title: "Transparent Pricing",
                description:
                  "No hidden fees or surprise charges. What you see is what you pay.",
              },
              {
                title: "Complete Support",
                description:
                  "End-to-end assistance from application to post-visa travel support.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the team driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                description:
                  "15+ years in international travel and visa consultancy",
              },
              {
                name: "Michael Chen",
                role: "Head of Operations",
                description: "Expert in visa processing with global embassy network",
              },
              {
                name: "Priya Patel",
                role: "Customer Success Director",
                description:
                  "Passionate about delivering exceptional customer experiences",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg text-center border border-primary-100"
              >
                <div className="bg-primary-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Journey With Us?"
        description="Join thousands of satisfied travelers who trusted us with their visa and travel needs."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
        }}
        secondaryButton={{
          text: "View Services",
          href: "/",
        }}
        gradient="from-primary-600 via-primary-700 to-accent-600"
      />
    </div>
  );
}
