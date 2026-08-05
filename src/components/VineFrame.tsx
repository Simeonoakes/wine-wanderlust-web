import { cn } from "@/lib/utils";

/**
 * Decorative vine / vine-leaf / grape corner ornament.
 * Drawn once and mirrored into the four corners of a frame.
 */
const VineCorner = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
    className={cn("h-10 w-10 md:h-12 md:w-12 text-primary", className)}
  >
    {/* main tendril */}
    <path
      d="M2 2C2 18 6 28 16 34c8 5 14 10 17 20"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      opacity="0.9"
    />
    {/* curling tendril */}
    <path
      d="M2 2c14 1 24 5 30 14 3 4.5 3.5 9-1 10.5-3.5 1.2-5.5-2.5-3-4.5 2.6-2.1 6.4-.4 8 3"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      opacity="0.65"
    />
    {/* vine leaf */}
    <path
      d="M12 8c7-1 12 2 13.5 7.5C27 21 23.5 25 18 24c-5.5-1-8.5-6-6-16Z"
      fill="currentColor"
      opacity="0.28"
    />
    <path
      d="M12 8c3 4.5 5 10.5 6 16M13.5 10.5c2.5 1 5.5 1.6 8.5 1.6M15 16c2 .8 4.4 1.4 7 1.6"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeLinecap="round"
      opacity="0.75"
    />
    {/* grape cluster */}
    <g opacity="0.85" fill="currentColor">
      <circle cx="31" cy="30" r="2.5" opacity="0.55" />
      <circle cx="37" cy="31.5" r="2.5" opacity="0.4" />
      <circle cx="34" cy="36" r="2.5" opacity="0.6" />
      <circle cx="40" cy="37" r="2.5" opacity="0.35" />
      <circle cx="37" cy="41.5" r="2.5" opacity="0.5" />
      <circle cx="43" cy="43" r="2.2" opacity="0.3" />
    </g>
  </svg>
);

interface VineFrameProps {
  children: React.ReactNode;
  className?: string;
  /** inner padding between ornamental border and content */
  inset?: string;
}

const VineFrame = ({ children, className, inset = "p-2" }: VineFrameProps) => (
  <div className={cn("relative", className)}>
    {/* double rule border */}
    <div className="absolute inset-0 border border-primary/40 pointer-events-none" />
    <div className="absolute inset-[5px] border border-primary/20 pointer-events-none" />

    {/* corner ornaments */}
    <VineCorner className="absolute -top-1 -left-1 pointer-events-none" />
    <VineCorner className="absolute -top-1 -right-1 scale-x-[-1] pointer-events-none" />
    <VineCorner className="absolute -bottom-1 -left-1 scale-y-[-1] pointer-events-none" />
    <VineCorner className="absolute -bottom-1 -right-1 scale-[-1] pointer-events-none" />

    <div className={cn("relative", inset)}>{children}</div>
  </div>
);

export default VineFrame;
