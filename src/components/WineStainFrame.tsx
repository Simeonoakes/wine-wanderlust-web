import wineStainRing from "@/assets/wine-stain-ring.png";

interface WineStainFrameProps {
  src: string;
  alt: string;
  className?: string;
}

const WineStainFrame = ({ src, alt, className = "" }: WineStainFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Wine stain ring frame */}
      <img
        src={wineStainRing}
        alt=""
        className="absolute inset-[-8%] w-[116%] h-[116%] object-contain z-10 pointer-events-none"
      />
      {/* Circular photo clipped inside */}
      <div className="w-full h-full rounded-full overflow-hidden p-[12%]">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default WineStainFrame;
