import { LucideIcon } from "lucide-react";

interface CountryCardProps {
  name: string;
  code: string;
  visaTypes: string[];
  processingTime: string;
  popular?: boolean;
}

// Country images mapping
const countryImages: Record<string, string> = {
  US: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop",
  GB: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
  CA: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=300&fit=crop",
  AU: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop",
  DE: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
  FR: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop",
  AE: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
  SG: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop",
  JP: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&h=300&fit=crop",
  KR: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop",
  CH: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=400&h=300&fit=crop",
  NL: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop",
  IT: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&h=300&fit=crop",
  ES: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&h=300&fit=crop",
  NZ: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=300&fit=crop",
};

const CountryCard = ({
  name,
  code,
  visaTypes,
  processingTime,
  popular = false,
}: CountryCardProps) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:-translate-y-1 flex flex-col h-full">
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        </div>
      )}

      {/* Flag Emoji/Code */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={countryImages[code.toUpperCase()] || `https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-4xl mb-1">{getFlagEmoji(code)}</div>
          <h3 className="font-bold text-xl text-white drop-shadow-lg">{name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="space-y-3 flex-1">
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
              Visa Types
            </p>
            <div className="flex flex-wrap gap-2">
              {visaTypes.map((type) => (
                <span
                  key={type}
                  className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
              Processing Time
            </p>
            <p className="text-sm font-medium text-gray-900">
              {processingTime}
            </p>
          </div>
        </div>

        <a 
          href={`/country/${code.toLowerCase()}`}
          className="mt-4 w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors group-hover:shadow-lg text-center block"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

// Helper function to get flag emoji from country code
function getFlagEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default CountryCard;
