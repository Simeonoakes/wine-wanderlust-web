import { useRef, useState } from "react";
import { motion } from "framer-motion";
import logoAsset from "@/assets/logo-new.png";
import { MEDIA } from "@/config/media";

// Timing: logo fades in over the moving footage, then a short breath,
// then the handwritten phrase is written letter by letter.
const LOGO_DELAY = 20;
const WRITE_START = 24;
const WRITE_PER_LETTER = 0.14;
const TAGLINE_DELAY = 29;

const phrase = "Truly Tasting Terroir";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // After the first loop, switch the handwritten phrase to white so it
  // stays legible against the bright opening frames of the next pass.
  const [hasLooped, setHasLooped] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={MEDIA.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          onTimeUpdate={(e) => {
            const v = e.currentTarget;
            if (!hasLooped && v.currentTime < 1 && (v as any)._prev > 5) {
              setHasLooped(true);
            }
            (v as any)._prev = v.currentTime;
          }}
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.3) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center pointer-events-none">
        {/* Logo: fades in over the video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.2, delay: LOGO_DELAY, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={logoAsset}
            alt="In Vino Veritas logo"
            className="w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem] object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        {/* Handwritten phrase, with a clear gap below the logo */}
        <div className="mt-4 md:mt-6 flex flex-wrap justify-center max-w-[90vw]">
          {phrase.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: WRITE_START + i * WRITE_PER_LETTER,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`font-signature text-5xl md:text-7xl lg:text-8xl leading-none ${
                hasLooped ? "text-white" : "text-primary"
              }`}
              style={{
                whiteSpace: ch === " " ? "pre" : undefined,
                textShadow: "0 2px 14px rgba(0,0,0,0.55)",
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
