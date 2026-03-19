import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vineyard.jpg";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Image */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: imageY }}>
        <img
          src={heroImage}
          alt="Sun-drenched vineyards of the wild Corbières"
          className="w-full h-[110%] object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
        >
          <img
            src={logo}
            alt="In Vino Veritas logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1], delay: 0.4 }}
          className="mt-8 max-w-2xl"
        >
          <p className="text-foreground/80 font-body text-base md:text-lg leading-relaxed">
            Bespoke wine experiences in the wild Corbières. Visit prestigious wineries,
            savour local cuisine, meet passionate winemakers, and lose yourself
            in one of France's most breathtaking terroirs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="expedition" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Discover Our Experiences
            </Button>
            <Button variant="expedition" className="border-foreground/30 text-foreground/70 hover:bg-foreground/10 hover:text-foreground">
              Meet Your Guide
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-foreground/40 text-xs uppercase tracking-[0.15em]">
            Scroll
          </span>
          <div className="mt-3 w-px h-12 bg-foreground/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
