import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vineyard.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden">
      {/* Parallax Image */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: imageY }}>
        <img
          src={heroImage}
          alt="Vineyard rows stretching across misty hills at golden hour"
          className="w-full h-[110%] object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 pb-[15vh] pt-32 w-full grid grid-cols-12 gap-4">
        <motion.div
          className="col-span-12 md:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1], delay: 0.2 }}
        >
          <h1 className="text-primary-foreground text-[clamp(2.5rem,8vw,5rem)] font-light leading-[0.95] tracking-tight">
            The architecture
            <br />
            <em>of the vine.</em>
          </h1>
          <p className="mt-8 text-primary-foreground/80 font-body text-base md:text-lg max-w-md leading-relaxed">
            Sommelier-led expeditions through Europe's most revered terroirs. 
            Private tastings, curated itineraries, and the quiet luxury of time well spent.
          </p>
          <div className="mt-10">
            <Button variant="expedition" className="border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              Request Expedition
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="hidden md:flex col-start-12 col-end-13 flex-col items-center justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="text-primary-foreground/60 text-xs uppercase tracking-[0.15em] [writing-mode:vertical-lr]">
            Scroll
          </span>
          <div className="mt-3 w-px h-12 bg-primary-foreground/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
