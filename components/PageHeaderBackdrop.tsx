import { Plane } from "lucide-react";
import WorldMapBackdrop from "@/components/WorldMapBackdrop";

interface PageHeaderBackdropProps {
  /** Tailwind gradient stops, e.g. "from-primary-900 via-primary-800 to-accent-700". */
  gradient?: string;
  /** Show the dotted world map layer. Turn off for short headers. */
  showMap?: boolean;
  /** Accent colour for the map's routes and pins. White suits most gradients. */
  accentClassName?: string;
}

/**
 * Shared decorative backdrop for page headers: gradient, aurora glows,
 * a dotted world map and drifting planes. Purely decorative — no text,
 * no photography, nothing to load.
 */
const PageHeaderBackdrop = ({
  gradient = "from-primary-900 via-primary-800 to-accent-700",
  showMap = true,
  accentClassName = "text-white",
}: PageHeaderBackdropProps) => {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Aurora glows */}
      <div className="absolute -top-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="absolute -bottom-52 right-0 h-[30rem] w-[30rem] rounded-full bg-white/[0.07] blur-3xl animate-float animation-delay-300" />

      {showMap && (
        <div className="absolute inset-0 opacity-60">
          <WorldMapBackdrop accentClassName={accentClassName} />
        </div>
      )}

      {/* Drifting plane silhouettes */}
      <Plane className="absolute top-[22%] left-[7%] h-9 w-9 text-white/20 rotate-[22deg] animate-float" />
      <Plane className="absolute bottom-[18%] right-[8%] h-12 w-12 text-white/15 -rotate-12 animate-float animation-delay-300" />

      {/* Scrim behind the copy, then an edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_48%_55%_at_50%_50%,rgba(9,18,54,0.55),transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(9,18,54,0.5)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </div>
  );
};

export default PageHeaderBackdrop;
