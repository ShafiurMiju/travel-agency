import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Flag from "@/components/Flag";
import type { Destination } from "@/data/destinations";

interface DestinationGridProps {
  title: string;
  description?: string;
  destinations: Destination[];
}

/**
 * Grid of destination cards linking to each country's visa guide.
 * Shared by the visa service pages so their lists cannot drift apart.
 */
const DestinationGrid = ({
  title,
  description,
  destinations,
}: DestinationGridProps) => {
  // Five across suits a full list of ten; fewer look better in a four-up row.
  const columns = destinations.length > 8 ? "md:grid-cols-5" : "md:grid-cols-4";

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
          {title}
        </h2>
        {description && (
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}

        <div className={`grid grid-cols-2 sm:grid-cols-3 ${columns} gap-4`}>
          {destinations.map((country) => (
            <Link
              key={country.code}
              href={`/country/${country.code}`}
              className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all border border-gray-200 group"
            >
              <Flag
                code={country.code}
                alt={`${country.name} flag`}
                className="w-10 h-7 rounded-sm shadow-sm ring-1 ring-black/10 mx-auto mb-3"
              />
              <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                {country.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{country.processing}</p>
              <ArrowRight className="h-4 w-4 mx-auto mt-2 text-primary-600 opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/visa-information"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
          >
            See full visa information for every destination
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;
