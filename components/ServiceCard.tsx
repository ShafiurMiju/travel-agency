import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  href: string;
  gradient?: string;
  image?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features = [],
  href,
  gradient = "from-primary-500 to-primary-600",
  image,
}: ServiceCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col h-full">
      {/* Header with Image or Gradient */}
      <div className="relative h-44 overflow-hidden">
        {image ? (
          <>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
          </>
        ) : (
          <div className={`bg-gradient-to-br ${gradient} w-full h-full`}></div>
        )}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <svg
                  className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <Link
          href={href}
          className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors mt-auto"
        >
          Learn More
          <svg
            className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-2xl transition-colors pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;
