import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: [0.2, 0, 0, 1] },
};

const PhilosophySection = () => {
  return (
    <section className="py-[20vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-4">
        <motion.blockquote
          {...fadeUp}
          className="col-span-12 md:col-start-2 md:col-end-11"
        >
          <p className="text-[clamp(1.5rem,4vw,3rem)] font-light italic leading-[1.2] tracking-tight">
            "We do not sell wine tours. We provide passage into landscapes 
            that have shaped civilization for millennia."
          </p>
          <footer className="mt-8 text-xs uppercase tracking-[0.12em] text-muted-foreground font-body">
            — Estate Philosophy
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default PhilosophySection;
