import { motion } from "framer-motion";
import guidePortraitImg from "@/assets/guide-portrait.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

const PhilosophySection = () => {
  return (
    <section id="your-guide" className="py-[20vh] border-t border-border">
      {/* Full-width banner image */}
      <motion.div {...fadeUp} className="w-full aspect-[3/1] overflow-hidden mb-16">
        <img
          src={guidePortraitImg}
          alt="Your guide, In Vino Veritas"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 md:col-start-3 flex flex-col justify-center">
            <motion.div {...fadeUp}>
              <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                02 / Your Guide
              </span>
              <blockquote className="mt-8">
                <p className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-display italic leading-[1.4] tracking-tight text-foreground">
                  "The very first thing one should ask oneself when tasting a wine is: 
                  do I like it, or not? Forget the fancy words, 
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
                I honed my skills quite literally in the field, lending a hand at every stage of the 
                vine-growing season. From sales at the local cooperative to communication and events 
                at a boutique winery, I've lived every facet of this world.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-body mt-4">
                With the helping hand of my retired vine-growing father and my vigneron brother, 
                let me take you on a sensorial journey of discovery here in the wild Corbières.
              </p>
              <p className="mt-8 font-signature text-5xl md:text-6xl text-primary">
                Simeon
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
