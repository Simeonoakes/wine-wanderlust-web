import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/vineyard-castle.jpg";

const Hero = () => {
  // Animation timeline delays (seconds)
  const TRULY_DELAY = 0.6;
  const TASTING_DELAY = 1.4;
  const TERROIR_DELAY = 2.2;
  const PHOTO_DELAY = 3.2;
  const LOGO_DELAY = 3.6;
  const TAGLINE_DELAY = 4.6;

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
          className="w-full h-full object-cover opacity-50 brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />
      </motion.div>

      {/* "Truly Tasting Terroir" words appearing one by one */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="flex gap-3 md:gap-5 mb-8">
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

        {/* Logo appears after photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: LOGO_DELAY, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={logo}
            alt="In Vino Veritas logo"
            className="w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[32rem] md:h-[32rem] lg:w-[38rem] lg:h-[38rem] object-contain"
          />
        </motion.div>

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
