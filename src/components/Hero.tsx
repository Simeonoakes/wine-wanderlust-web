import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/vineyard-castle.jpg";

const Hero = () => {
  const LOGO_DELAY = 0.4;
  const TRULY_DELAY = 2.0;
  const TASTING_DELAY = 2.8;
  const TERROIR_DELAY = 3.6;
  const PHOTO_DELAY = 4.4;
  const TAGLINE_DELAY = 5.6;

  const wordVariant = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Black overlay that fades out when photo appears */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, delay: PHOTO_DELAY, ease: "easeInOut" }}
        className="absolute inset-0 bg-black z-10"
      />

      {/* Background photo fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: PHOTO_DELAY, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-50 brightness-110 scale-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Logo appears first */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: LOGO_DELAY, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={logo}
            alt="In Vino Veritas logo"
            className="w-[22rem] h-[22rem] sm:w-[30rem] sm:h-[30rem] md:w-[36rem] md:h-[36rem] lg:w-[42rem] lg:h-[42rem] object-contain"
          />
        </motion.div>

        {/* Words appear below logo */}
        <div className="flex gap-3 md:gap-5 mt-2">
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
              className="font-display text-3xl md:text-5xl lg:text-6xl tracking-wide text-primary italic"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Tagline appears last */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: TAGLINE_DELAY, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-sm md:text-lg tracking-[0.14em] italic text-foreground/70"
        >
          Bespoke wine experiences in the South of France
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
