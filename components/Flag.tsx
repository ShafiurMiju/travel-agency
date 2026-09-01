interface FlagProps {
  /** ISO 3166-1 alpha-2 country code, e.g. "BD", "us" */
  code: string;
  /** Tailwind classes for the flag box (size plus any border/shadow styling) */
  className?: string;
  alt?: string;
}

/**
 * Renders a country flag as an image instead of an emoji.
 *
 * Flag emojis (regional indicator pairs) have no font support on Windows, where
 * Chrome/Edge fall back to rendering the bare letters ("CN", "IN", ...). Images
 * from flagcdn.com look identical on every platform.
 */
const Flag = ({
  code,
  className = "w-12 h-9 rounded-sm shadow-sm ring-1 ring-black/10",
  alt,
}: FlagProps) => {
  const cc = code.toLowerCase();

  return (
    <img
      src={`https://flagcdn.com/${cc}.svg`}
      alt={alt ?? `${code.toUpperCase()} flag`}
      loading="lazy"
      className={`inline-block object-cover ${className}`}
    />
  );
};

export default Flag;
