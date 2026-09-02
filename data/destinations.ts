/**
 * The destinations we process visas for.
 *
 * Single source of truth for the destination grids on the visa service pages.
 * Kept in step with the directory on /visa-information and the country detail
 * pages under /country/[code] - every `code` here must have an entry there.
 *
 * `categories` reflects the visa types written up on each country page, so a
 * page can list only the destinations relevant to it.
 */

export type VisaCategory = "tourist" | "business" | "medical";

export interface Destination {
  name: string;
  /** ISO 3166-1 alpha-2, matching the /country/[code] route and the flag CDN. */
  code: string;
  processing: string;
  categories: VisaCategory[];
}

export const destinations: Destination[] = [
  { name: "China", code: "cn", processing: "10+ working days", categories: ["tourist", "business", "medical"] },
  { name: "India", code: "in", processing: "4-7 working days", categories: ["tourist", "medical"] },
  { name: "Malaysia", code: "my", processing: "7+ working days", categories: ["tourist"] },
  { name: "Thailand", code: "th", processing: "15+ working days", categories: ["tourist", "medical"] },
  { name: "Singapore", code: "sg", processing: "7+ working days", categories: ["tourist"] },
  { name: "Hong Kong", code: "hk", processing: "30+ working days", categories: ["tourist"] },
  { name: "Japan", code: "jp", processing: "5-10 working days", categories: ["tourist"] },
  { name: "Indonesia", code: "id", processing: "15+ working days", categories: ["tourist"] },
  { name: "Philippines", code: "ph", processing: "15+ working days", categories: ["tourist"] },
  { name: "Egypt", code: "eg", processing: "40+ working days", categories: ["tourist"] },
];

export const destinationsFor = (category: VisaCategory): Destination[] =>
  destinations.filter((d) => d.categories.includes(category));
