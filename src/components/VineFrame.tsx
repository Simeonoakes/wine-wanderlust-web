import { cn } from "@/lib/utils";

interface VineFrameProps {
  children: React.ReactNode;
  className?: string;
  /** inner padding between border and content */
  inset?: string;
}

/** Discreet, embossed double gold rule frame. */
const VineFrame = ({ children, className, inset = "p-2" }: VineFrameProps) => (
  <div
    className={cn("relative border border-primary/25", className)}
    style={{
      boxShadow:
        "inset 0 1px 0 hsl(var(--primary) / 0.18), inset 0 -1px 0 hsl(0 0% 0% / 0.45), 0 1px 2px hsl(0 0% 0% / 0.35)",
    }}
  >
    <div
      className="absolute inset-[5px] border border-primary/15 pointer-events-none"
      style={{
        boxShadow:
          "inset 0 -1px 0 hsl(var(--primary) / 0.12), 0 1px 0 hsl(0 0% 0% / 0.35)",
      }}
    />
    <div className={cn("relative", inset)}>{children}</div>
  </div>
);


export default VineFrame;
