import { cn } from "@/lib/utils";

/* A realistic five-lobed grape-vine leaf, stem at the bottom centre. */
const VineLeaf = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg viewBox="0 0 100 100" aria-hidden="true" className={className} style={style}>
    <path
      d="M50 97 C50 82 45 75 35 71 C41 72 45 70 45 66 C36 68 25 65 17 57 C25 59 31 57 31 53 C21 50 11 43 6 31 C17 41 27 44 33 42 C27 35 25 25 27 15 C31 27 39 36 45 38 C45 27 49 17 55 9 C55 22 57 34 59 40 C65 38 73 30 79 18 C79 32 73 42 67 46 C73 48 83 46 93 39 C85 51 75 58 65 58 C69 62 77 64 85 64 C75 70 61 70 55 66 C52 74 51 86 50 97 Z"
      fill="currentColor"
      fillOpacity="0.32"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeOpacity="0.85"
    />
    {/* veins */}
    <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" strokeLinecap="round" fill="none">
      <path d="M50 95 L55 12" />
      <path d="M50 88 C46 70 36 50 10 33" />
      <path d="M50 88 C52 70 62 50 76 24" />
      <path d="M52 74 C50 68 38 62 22 60" />
      <path d="M52 74 C56 68 68 62 84 60" />
    </g>
  </svg>
);

/* Corner ornament: a woody branch that turns the corner, carrying a leaf,
   a curling tendril and a small cluster of grapes. */
const VineCorner = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 90 90"
    fill="none"
    aria-hidden="true"
    className={cn("h-16 w-16 md:h-20 md:w-20 text-primary", className)}
  >
    {/* woody branch turning the corner */}
    <path
      d="M88 6c-14-1-26 .5-36 5S34 23 29 33c-4 8-7 19-8 32-.4 8-.6 16-.6 23"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      opacity="0.9"
    />
    <path
      d="M86 11c-13 0-24 2-32 6.5S39 30 34 40c-4 8-6.5 20-7.5 33"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.45"
    />
    {/* curling tendril */}
    <path
      d="M56 12c4 6 4 12 0 16-3.2 3.2-8 2-8.6-2-.5-3.2 2.8-5.4 5.2-3.4 2.8 2.3 1.6 7-2.6 8.6"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      opacity="0.7"
    />
    {/* second tendril */}
    <path
      d="M23 52c-5 3-8 7-7.4 11.4.5 3.6 4.8 5 7 2.2 1.8-2.2.2-5.4-2.6-4.8-3 .7-4 4.6-2 7.4"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      opacity="0.7"
    />
    {/* leaves growing off the branch */}
    <g className="text-primary">
      <VineLeaf
        className="text-primary"
        style={{ transform: "translate(50px,4px) rotate(28deg) scale(0.30)", transformOrigin: "0 0" }}
      />
      <VineLeaf
        className="text-primary"
        style={{ transform: "translate(6px,38px) rotate(-58deg) scale(0.26)", transformOrigin: "0 0" }}
      />
    </g>
    {/* grape cluster */}
    <g fill="currentColor">
      <circle cx="34" cy="18" r="2.6" opacity="0.5" />
      <circle cx="40" cy="20" r="2.6" opacity="0.35" />
      <circle cx="37" cy="24.5" r="2.6" opacity="0.55" />
      <circle cx="43" cy="26" r="2.4" opacity="0.3" />
      <circle cx="40" cy="30.5" r="2.4" opacity="0.45" />
    </g>
  </svg>
);

/* Edge: a thin, gently meandering branch with small tendril hooks.
   Stretched horizontally; strokes stay hairline via non-scaling-stroke. */
const VineEdge = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 400 14"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
    className={cn("text-primary", className)}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    >
      <path
        d="M0 7c30-5 60 5 92 1s52-8 84-3 58 8 92 2 76-6 132-1"
        strokeWidth="1.4"
        opacity="0.85"
      />
      <path d="M96 8c4 4 9 4 12 1" strokeWidth="1" opacity="0.5" />
      <path d="M200 5c4-4 9-4 12-1" strokeWidth="1" opacity="0.5" />
      <path d="M300 8c4 4 9 4 12 1" strokeWidth="1" opacity="0.5" />
    </g>
  </svg>
);

/* Vertical variant of the branch edge. */
const VineEdgeV = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 14 400"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
    className={cn("text-primary", className)}
  >
    <g stroke="currentColor" strokeLinecap="round" vectorEffect="non-scaling-stroke">
      <path
        d="M7 0c-5 30 5 60 1 92s-8 52-3 84 8 58 2 92-6 76-1 132"
        strokeWidth="1.4"
        opacity="0.85"
      />
      <path d="M8 96c4 4 4 9 1 12" strokeWidth="1" opacity="0.5" />
      <path d="M5 200c-4 4-4 9-1 12" strokeWidth="1" opacity="0.5" />
      <path d="M8 300c4 4 4 9 1 12" strokeWidth="1" opacity="0.5" />
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
    {/* branch edges */}
    <VineEdge className="absolute -top-[7px] left-8 right-8 h-[14px] pointer-events-none" />
    <VineEdge className="absolute -bottom-[7px] left-8 right-8 h-[14px] scale-y-[-1] pointer-events-none" />
    <VineEdgeV className="absolute -left-[7px] top-8 bottom-8 w-[14px] pointer-events-none" />
    <VineEdgeV className="absolute -right-[7px] top-8 bottom-8 w-[14px] scale-x-[-1] pointer-events-none" />


    {/* corner ornaments */}
    <VineCorner className="absolute -top-3 -left-3 scale-x-[-1] pointer-events-none" />
    <VineCorner className="absolute -top-3 -right-3 pointer-events-none" />
    <VineCorner className="absolute -bottom-3 -left-3 scale-[-1] pointer-events-none" />
    <VineCorner className="absolute -bottom-3 -right-3 scale-y-[-1] pointer-events-none" />

    <div className={cn("relative", inset)}>{children}</div>
  </div>
);

export default VineFrame;
