import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: [0.2, 0, 0, 1] },
};

const PhilosophySection = () => {
  return (
    <section id="your-guide" className="py-[20vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-4">
        <motion.div
          {...fadeUp}
          className="col-span-12 md:col-start-2 md:col-end-11"
        >
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            03 — Your Guide
          </span>
          <blockquote className="mt-8">
            <p className="text-[clamp(1.3rem,3.5vw,2.5rem)] font-light italic leading-[1.3] tracking-tight">
              "The very first thing one should ask oneself when tasting a wine is: 
              do I like it, or not? Forget the fancy words, and frankly bizarre analogies — 
              focus purely on enjoyment."
            </p>
          </blockquote>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="col-span-12 md:col-start-2 md:col-end-8 mt-12"
        >
          <p className="text-sm text-muted-foreground leading-relaxed font-body">
            Practically raised among the vines of Paziols, son of a self-taught vine grower, 
            I honed my skills quite literally in the field — lending a hand at every stage of the 
            vine-growing season. From sales at the local cooperative to communication and events 
            at a boutique winery, I've lived every facet of this world.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed font-body mt-4">
            Travelling the globe, I've sought out wine regions far and wide — from rare nuggets 
            to the great names. Dozens of fairs, specialised books, and countless bottles later, 
            I'm currently training for my WSET Level 3. With the helping hand of my retired 
            vine-growing father and my vigneron brother, let me take you on a sensorial journey 
            of discovery here in the wild Corbières.
          </p>
          <p className="text-sm text-primary font-body mt-6 uppercase tracking-[0.1em]">
            Wine Education · Tourism · Events
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
