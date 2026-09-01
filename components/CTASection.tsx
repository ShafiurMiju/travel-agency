import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";

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
      {/* Decorative background: depth glows, dot grid and flight routes.
          Kept to white/black alphas so it works over any `gradient` passed in. */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Depth: light from the top-left, shadow into the bottom-right */}
        <div className="absolute -top-1/2 -left-24 h-[36rem] w-[36rem] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-2/3 right-0 h-[34rem] w-[34rem] rounded-full bg-slate-950/25 blur-3xl" />

        {/* Fine dot grid */}
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:26px_26px]" />

        {/* Flight routes */}
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full text-white"
          fill="none"
        >
          <g
            stroke="currentColor"
            strokeOpacity="0.32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="7 10"
          >
            {/* Routed along the top and bottom edges so nothing crosses the copy */}
            <path d="M-60 56 Q 320 6 700 34 T 1500 14" className="animate-dash" />
            <path
              d="M-60 358 Q 420 316 840 348 T 1500 322"
              className="animate-dash"
              style={{ animationDelay: "3s" }}
            />
            <path
              d="M-60 250 Q 60 150 210 96 T 430 34"
              className="animate-dash"
              style={{ animationDelay: "5s" }}
            />
            <path
              d="M1500 170 Q 1360 108 1230 78 T 1030 34"
              className="animate-dash"
              style={{ animationDelay: "7s" }}
            />
          </g>
          <g fill="currentColor">
            <circle cx="210" cy="96" r="4" fillOpacity="0.6" />
            <circle cx="1230" cy="78" r="3" fillOpacity="0.5" />
            <circle cx="700" cy="34" r="3" fillOpacity="0.5" />
            <circle cx="840" cy="348" r="3" fillOpacity="0.45" />
            <circle cx="330" cy="342" r="3" fillOpacity="0.4" />
          </g>
          <circle
            cx="210"
            cy="96"
            r="11"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            className="animate-ping-slow"
          />
        </svg>

        {/* Drifting plane silhouettes */}
        <Plane className="absolute top-[18%] left-[8%] h-9 w-9 text-white/20 rotate-[20deg] animate-float" />
        <Plane className="absolute bottom-[16%] right-[9%] h-12 w-12 text-white/15 -rotate-[10deg] animate-float animation-delay-300" />

        {/* Scrim behind the copy, then edge vignette + hairline rules */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_58%_at_50%_50%,rgba(2,6,23,0.4),transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,transparent_40%,rgba(2,6,23,0.32)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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
            className="inline-flex items-center bg-white text-primary-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-slate-950/25 hover:bg-gray-100 transition-all hover:shadow-2xl hover:-translate-y-0.5 group"
          >
            {primaryButton.text}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="inline-flex items-center bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/50 hover:bg-white/15 hover:border-white transition-all hover:-translate-y-0.5"
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
