import { useRef, useState } from "react";
import { motion } from "framer-motion";
import logoAsset from "@/assets/logo-new.png.asset.json";
import heroVideoAsset from "@/assets/hero-background-v2.mp4.asset.json";

// Video is ~31s. The logo fades in at 20s over the moving footage
// (as it did before), and the handwritten phrase is written letter by
// letter just after, slowly enough to breathe.
const LOGO_DELAY = 20;
const WRITE_START = 24;
const WRITE_PER_LETTER = 0.16; // slower handwriting
const TAGLINE_DELAY = 28;

const phrase = "Truly Tasting Terroir";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // After the first loop, switch the handwritten phrase to black so it
  // stays legible against the bright opening frames of the next pass.
  const [hasLooped, setHasLooped] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={heroVideoAsset.url}
          autoPlay
          muted
          loop
          playsInline
          onTimeUpdate={(e) => {
            // Detect loop wrap (current time jumps back to near 0)
            const v = e.currentTarget;
            if (!hasLooped && v.currentTime < 1 && (v as any)._prev > 5) {
              setHasLooped(true);
            }
            (v as any)._prev = v.currentTime;
          }}
          className="w-full h-full object-cover object-center"
          style={{
            filter:
              "contrast(1.12) saturate(1.18) brightness(1.05) sepia(0.08) hue-rotate(-6deg)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.35) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center pointer-events-none">
        {/* Logo: fades in at 20s over the video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.2, delay: LOGO_DELAY, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={logoAsset.url}
            alt="In Vino Veritas logo"
            className="w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        {/* Handwritten phrase, tighter to logo so both stay above the fold */}
        <div className="-mt-16 md:-mt-24 lg:-mt-28 flex flex-wrap justify-center max-w-[90vw]">
          {phrase.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.55,
                delay: WRITE_START + i * WRITE_PER_LETTER,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`font-signature text-6xl md:text-8xl lg:text-9xl leading-none ${
                hasLooped ? "text-black/90" : "text-primary"
              }`}
              style={{
                whiteSpace: ch === " " ? "pre" : undefined,
                textShadow: hasLooped
                  ? "0 1px 2px rgba(255,255,255,0.35)"
                  : "0 2px 12px rgba(0,0,0,0.45)",
              }}
            >
              {ch}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: TAGLINE_DELAY, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-sm md:text-lg tracking-[0.18em] italic text-foreground/80"
        >
          Bespoke wine experiences in the South of France
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
