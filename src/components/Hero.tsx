import { motion } from "framer-motion";
import logoAsset from "@/assets/logo-new.png.asset.json";
import heroVideoAsset from "@/assets/hero-background.mp4.asset.json";

// Video is ~39s. The camera pulls away from the church in the final seconds and
// slows to a near-still frame around 36s before fading to black. The logo
// fades in precisely on that slow-down; "Truly Tasting Terroir" is then
// written by hand, letter-by-letter, as the footage fades to black.
const LOGO_DELAY = 36;
const WRITE_START = 38;
const WRITE_PER_LETTER = 0.09; // seconds per character
const TAGLINE_DELAY = 42;

const phrase = "Truly Tasting Terroir";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background video — visible from the very first frame, no fade-in */}
      <div className="absolute inset-0">
        <video
          src={heroVideoAsset.url}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
          style={{
            // Cinematic grading: slight teal/orange split-tone with rich contrast
            filter:
              "contrast(1.12) saturate(1.18) brightness(1.05) sepia(0.08) hue-rotate(-6deg)",
          }}
        />
        {/* Soft cinematic vignette on the sides only (no bottom darkening) */}
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
        {/* Logo: fades in precisely as the video slows on its last frames */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.2, delay: LOGO_DELAY, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={logoAsset.url}
            alt="In Vino Veritas logo"
            className="w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem] object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        {/* Handwritten phrase: each letter appears in sequence */}
        <div className="-mt-6 md:-mt-10 flex flex-wrap justify-center max-w-[90vw]">
          {phrase.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.35,
                delay: WRITE_START + i * WRITE_PER_LETTER,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-signature text-6xl md:text-8xl lg:text-9xl text-primary leading-none"
              style={{ whiteSpace: ch === " " ? "pre" : undefined }}
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
