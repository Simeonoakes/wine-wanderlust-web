import { cn } from "@/lib/utils";

/** Five-lobed grape-vine leaf, drawn in a 0-100 box with the stem at (50,98). */
const LEAF_D =
  "M50 98 C50 87 48 79 44 72 C36 77 25 77 19 72 C26 72 30 68 30 64 C20 64 10 58 5 48 C14 55 24 57 32 54 C25 46 23 35 27 25 C31 36 38 44 45 47 C43 36 45 23 51 13 C56 23 57 36 56 47 C63 44 70 36 74 25 C77 36 75 46 69 54 C77 57 87 55 95 48 C90 58 80 64 70 64 C70 68 74 72 81 72 C75 77 64 77 56 72 C52 79 50 87 50 98 Z";

const Leaf = ({ transform }: { transform: string }) => (
  <g transform={transform}>
    <path
      d={LEAF_D}
      fill="currentColor"
      fillOpacity="0.32"
      stroke="currentColor"
      strokeOpacity="0.9"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <g stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.55" strokeLinecap="round" fill="none">
      <path d="M50 96 L51 20" />
      <path d="M50 84 C47 70 38 60 16 52" />
      <path d="M50 84 C53 70 62 60 84 52" />
      <path d="M50 70 C46 60 40 48 30 34" />
      <path d="M50 70 C54 60 60 48 70 34" />
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
