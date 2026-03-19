import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    id: "01",
    title: "Winery Visits & Tastings",
    highlight: "Meet the Makers",
    description:
      "Step behind the cellar doors of the Corbières' finest domaines. Meet the vignerons, hear their stories, taste directly from barrel and bottle — guided by someone who grew up among the vines.",
  },
  {
    id: "02",
    title: "Gastronomic Discovery",
    highlight: "Vineyard to Table",
    description:
      "Savour the cuisine of the Languedoc — from intimate vineyard lunches paired with the estate's cuvées to curated dinners at the region's most distinguished restaurants.",
  },
  {
    id: "03",
    title: "Terroir & Landscape",
    highlight: "The Wild Corbières",
    description:
      "Explore the dramatic landscapes of one of France's most untamed wine regions. Ancient villages, rugged garrigue, Cathar castles, and panoramas that stretch to the Pyrenees and the Mediterranean.",
  },
  {
    id: "04",
    title: "Hands-On Experiences",
    highlight: "Become a Vigneron",
    description:
      "Roll up your sleeves. Join a harvest, try your hand at blending, learn to prune — real winemaking, guided by a family of three generations of vine growers.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: [0.2, 0, 0, 1] },
};

const ExpeditionsSection = () => {
  return (
    <section id="experiences" className="py-[15vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div {...fadeUp} className="mb-16">
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            02 — Experiences
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-light italic tracking-tight">
            What Awaits You
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="grid grid-cols-12 gap-4 py-10 border-b border-border group cursor-pointer"
            >
              <div className="col-span-12 md:col-span-1">
                <span className="text-xs text-muted-foreground font-body text-tabular">
                  {exp.id}
                </span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-2xl font-light tracking-tight group-hover:text-primary transition-colors duration-300">
                  {exp.title}
                </h3>
                <span className="mt-2 inline-block text-xs text-primary font-body uppercase tracking-[0.1em]">
                  {exp.highlight}
                </span>
              </div>
              <div className="col-span-12 md:col-start-7 md:col-end-13">
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {exp.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-16 text-center">
          <Button variant="expedition" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Enquire About a Bespoke Experience
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpeditionsSection;
