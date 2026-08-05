import { cn } from "@/lib/utils";

/** Five-lobed grape-vine leaf, drawn in a 0-100 box with the stem at (50,97). */
const LEAF_D =
  "M50 97 C50 82 45 75 35 71 C41 72 45 70 45 66 C36 68 25 65 17 57 C25 59 31 57 31 53 C21 50 11 43 6 31 C17 41 27 44 33 42 C27 35 25 25 27 15 C31 27 39 36 45 38 C45 27 49 17 55 9 C55 22 57 34 59 40 C65 38 73 30 79 18 C79 32 73 42 67 46 C73 48 83 46 93 39 C85 51 75 58 65 58 C69 62 77 64 85 64 C75 70 61 70 55 66 C52 74 51 86 50 97 Z";

const Leaf = ({ transform }: { transform: string }) => (
  <g transform={transform}>
    <path
      d={LEAF_D}
      fill="currentColor"
      fillOpacity="0.3"
      stroke="currentColor"
      strokeOpacity="0.9"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <g stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.6" strokeLinecap="round" fill="none">
      <path d="M50 95 L55 14" />
      <path d="M50 88 C46 70 36 52 12 34" />
      <path d="M50 88 C52 70 62 52 75 26" />
      <path d="M52 74 C50 68 38 62 24 60" />
      <path d="M52 74 C56 68 68 62 82 60" />
    </g>
  </g>
);

/** Corner: a woody branch turning the corner, with vine leaves, tendril and grapes. */
const VineCorner = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 72 72"
    fill="none"
    aria-hidden="true"
    className={cn("h-16 w-16 md:h-[4.5rem] md:w-[4.5rem] text-primary", className)}
  >
    {/* woody branch */}
    <path
      d="M71 8C56 7 43 10 33 17S18 35 15 48c-2 8-3 15-3 23"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      opacity="0.9"
    />
    <path
      d="M70 12C57 12 45 15 36 22s-14 16-17 28c-1.6 6.5-2.4 13-2.6 20"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      opacity="0.4"
    />
    {/* curling tendrils */}
    <path
      d="M50 11c3.6 5 3.4 10-.4 13.2-3 2.6-7.2 1.2-7.6-2.2-.4-2.8 2.6-4.6 4.6-2.8 2.4 2.1 1.2 6-2.6 7.4"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.65"
    />
    <path
      d="M14 55c-4.6 2.4-7 6-6.2 9.6.6 3 4.2 4 6 1.6 1.4-1.9 0-4.6-2.4-4-2.6.7-3.4 4-1.6 6.3"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.65"
    />
    {/* leaves */}
    <Leaf transform="translate(58 6) rotate(35) scale(0.20)" />
    <Leaf transform="translate(12 34) rotate(-62) scale(0.19)" />
    <Leaf transform="translate(34 15) rotate(8) scale(0.13)" />
    {/* grapes */}
    <g fill="currentColor">
      <circle cx="26" cy="27" r="2.3" opacity="0.5" />
      <circle cx="31" cy="29" r="2.3" opacity="0.34" />
      <circle cx="28" cy="33" r="2.3" opacity="0.55" />
      <circle cx="33" cy="34.5" r="2.1" opacity="0.3" />
      <circle cx="30" cy="38.5" r="2.1" opacity="0.45" />
    </g>
  </svg>
);

interface VineFrameProps {
  children: React.ReactNode;
  className?: string;
  /** inner padding between ornamental border and content */
  inset?: string;
}

/**
 * Ornamental frame: meandering vine-branch edges (never straight rules)
 * with vine-leaf, tendril and grape corner ornaments.
 */
const VineFrame = ({ children, className, inset = "p-2" }: VineFrameProps) => (
  <div className={cn("relative", className)}>
    {/* meandering branch edges — stretched to the frame, hairline strokes */}
    <svg
      className="absolute inset-0 w-full h-full text-primary pointer-events-none overflow-visible"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity="0.8">
        {/* top */}
        <path d="M6 0.6C18 2.4 30 -1 44 0.9s26 3 50 -0.4" strokeWidth="1.3" />
        {/* bottom */}
        <path d="M6 99.4C18 97.6 30 101 44 99.1s26 -3 50 0.4" strokeWidth="1.3" />
        {/* left */}
        <path d="M0.6 6C2.4 18 -1 30 0.9 44s3 26 -0.4 50" strokeWidth="1.3" />
        {/* right */}
        <path d="M99.4 6C97.6 18 101 30 99.1 44s-3 26 0.4 50" strokeWidth="1.3" />
      </g>
      <g stroke="currentColor" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity="0.4" strokeWidth="0.8">
        <path d="M24 1.6C34 3 44 0.4 58 1.8" />
        <path d="M24 98.4C34 97 44 99.6 58 98.2" />
        <path d="M1.6 24C3 34 0.4 44 1.8 58" />
        <path d="M98.4 24C97 34 99.6 44 98.2 58" />
      </g>
    </svg>

    {/* corner ornaments */}
    <VineCorner className="absolute -top-4 -left-4 scale-x-[-1] pointer-events-none" />
    <VineCorner className="absolute -top-4 -right-4 pointer-events-none" />
    <VineCorner className="absolute -bottom-4 -left-4 scale-[-1] pointer-events-none" />
    <VineCorner className="absolute -bottom-4 -right-4 scale-y-[-1] pointer-events-none" />

    <div className={cn("relative", inset)}>{children}</div>
  </div>
);

export default VineFrame;
