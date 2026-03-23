import { motion } from "framer-motion";
import WineStainFrame from "@/components/WineStainFrame";
import guidePortraitImg from "@/assets/guide-portrait.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: [0.2, 0, 0, 1] },
};

const PhilosophySection = () => {
  return (
    <section id="your-guide" className="py-[20vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8">
        <motion.div
          {...fadeUp}
          className="col-span-12 md:col-span-5 md:col-start-2 flex justify-center items-center"
        >
          <WineStainFrame
            src={guidePortraitImg}
            alt="Your guide — In Vino Veritas"
            className="w-72 h-72 md:w-96 md:h-96"
          />
        </motion.div>

        <div className="col-span-12 md:col-span-5 md:col-start-7 flex flex-col justify-center">
          <motion.div {...fadeUp}>
            <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              03 — Your Guide
            </span>
            <blockquote className="mt-8">
              <p className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-light italic leading-[1.4] tracking-tight">
                "The very first thing one should ask oneself when tasting a wine is: 
                do I like it, or not? Forget the fancy words — 
                focus purely on enjoyment."
              </p>
            </blockquote>
          </motion.div>

          <motion.div {...fadeUp} className="mt-10">
            <p className="text-sm text-muted-foreground leading-relaxed font-body">
              At least to begin with… If, however, you do want to try out some of the tasting techniques, have help giving mouth to your tastebuds and vocabulary to your nose's perceptions, leave that up to me. Sit back, unwind, drink it all in and retain or forget as much as you fancy.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed font-body mt-4">
              Practically raised among the vines of Paziols, son of a self-taught vine grower, 
              I honed my skills quite literally in the field — lending a hand at every stage of the 
              vine-growing season. From sales at the local cooperative to communication and events 
              at a boutique winery, I've lived every facet of this world.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed font-body mt-4">
              With the helping hand of my retired vine-growing father and my vigneron brother, 
              let me take you on a sensorial journey of discovery here in the wild Corbières.
            </p>
            <p className="mt-8 font-signature text-3xl md:text-4xl text-primary/80 tracking-wide">
              Simeon
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
