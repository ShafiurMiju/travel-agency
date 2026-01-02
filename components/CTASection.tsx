import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  gradient?: string;
}

const CTASection = ({
  title = "Ready to Start Your Journey?",
  description = "Get expert assistance with your visa application. Our team is ready to help you achieve your travel goals.",
  primaryButton = {
    text: "Get Started Now",
    href: "/contact"
  },
  secondaryButton,
  gradient = "from-primary-600 via-primary-700 to-primary-800",
}: CTASectionProps) => {
  return (
    <section className={`relative bg-gradient-to-r ${gradient} py-20 overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in animation-delay-100">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-200">
          <Link
            href={primaryButton.href}
            className="inline-flex items-center bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105 group"
          >
            {primaryButton.text}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white/10 transition-all"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
