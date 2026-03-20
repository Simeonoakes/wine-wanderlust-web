import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/vineyard-castle.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Faded background photo */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center"
      >
        <img
          src={logo}
          alt="In Vino Veritas logo"
          className="w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className="relative mt-10 text-center max-w-xl px-8"
      >
        <p className="font-display text-2xl md:text-3xl tracking-wide text-primary">
          Truly Tasting Terroir
        </p>
        <p className="mt-4 font-body text-sm md:text-base tracking-[0.08em] uppercase text-foreground/50">
          Bespoke wine experiences in the South of France
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-foreground/30 text-xs uppercase tracking-[0.15em]">
          Scroll
        </span>
        <div className="mt-3 w-px h-12 bg-foreground/15" />
      </motion.div>
    </section>
  );
};

export default Hero;
