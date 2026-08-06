import { cn } from "@/lib/utils";

interface VineFrameProps {
  children: React.ReactNode;
  className?: string;
  /** inner padding between border and content */
  inset?: string;
}

/** Simple, classy double gold rule frame. */
const VineFrame = ({ children, className, inset = "p-2" }: VineFrameProps) => (
  <div className={cn("relative border border-primary/70", className)}>
    <div className="absolute inset-[5px] border border-primary/35 pointer-events-none" />
    <div className={cn("relative", inset)}>{children}</div>
  </div>
);

export default VineFrame;
