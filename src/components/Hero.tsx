import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/vineyard-castle.jpg";

const Hero = () => {
  const TRULY_DELAY = 1.2;
  const TASTING_DELAY = 2.4;
  const TERROIR_DELAY = 3.6;
  const PHOTO_DELAY = 4.8;
  const TAGLINE_DELAY = 6.4;

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
          className="w-full h-full object-cover object-[center_60%] brightness-[1.15] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />
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
              className="font-display text-3xl md:text-5xl lg:text-6xl tracking-[0.06em] italic text-primary"
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
          className="mt-6 font-display text-sm md:text-lg tracking-[0.14em] italic text-foreground/70"
        >
          Bespoke wine experiences in the South of France
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
