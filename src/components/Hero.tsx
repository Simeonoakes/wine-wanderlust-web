import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import heroVideoAsset from "@/assets/hero-background.mp4.asset.json";

const Hero = () => {
  // Video is ~39s. Logo visible from start. Words appear near the end.
  const VIDEO_FADE_IN = 0.5;
  const TRULY_DELAY = 26;
  const TASTING_DELAY = 28;
  const TERROIR_DELAY = 30;
  const TAGLINE_DELAY = 32;

  const wordVariant = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: (delay: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1.8, delay, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Black overlay that fades out when video appears */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: VIDEO_FADE_IN, ease: "easeInOut" }}
        className="absolute inset-0 bg-black z-10"
      />

      {/* Background video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: VIDEO_FADE_IN, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <video
          src={heroVideoAsset.url}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center brightness-110 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/25 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center">
        {/* Logo appears instantly */}
        <div>
          <img
            src={logo}
            alt="In Vino Veritas logo"
            className="w-[26rem] h-[26rem] sm:w-[34rem] sm:h-[34rem] md:w-[42rem] md:h-[42rem] lg:w-[50rem] lg:h-[50rem] object-contain"
          />
        </div>

        {/* Words centered below logo */}
        <div className="flex gap-3 md:gap-5 -mt-16 md:-mt-24 justify-center">
          {[
            { word: "Truly", delay: TRULY_DELAY },
            { word: "Tasting", delay: TASTING_DELAY },
            { word: "Terroir", delay: TERROIR_DELAY },
          ].map(({ word, delay }) => (
            <motion.span
              key={word}
              custom={delay}
              initial="hidden"
              animate="visible"
              variants={wordVariant}
              className="font-script text-6xl md:text-8xl lg:text-9xl tracking-[0.02em] text-primary leading-none"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Tagline centered */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: TAGLINE_DELAY, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-sm md:text-lg tracking-[0.18em] italic text-foreground/70"
        >
          Bespoke wine experiences in the South of France
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
