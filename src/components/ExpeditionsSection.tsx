import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const expeditions = [
  {
    id: "01",
    title: "The Nebbiolo Passage",
    region: "Piedmont, Italy",
    duration: "5 Days",
    season: "Oct — Nov",
    description:
      "A deep immersion into the Langhe hills. Private cellar visits with fourth-generation vignerons, truffle foraging, and a vertical tasting spanning three decades.",
  },
  {
    id: "02",
    title: "Climats of Burgundy",
    region: "Côte de Nuits, France",
    duration: "4 Days",
    season: "Sep — Oct",
    description:
      "Traverse the storied vineyards of the Côte d'Or. From Romanée-Conti to Chambertin, each climat reveals a distinct voice of Pinot Noir.",
  },
  {
    id: "03",
    title: "The Sangiovese Archive",
    region: "Montalcino, Italy",
    duration: "6 Days",
    season: "May — Jun",
    description:
      "A scholarly expedition through Brunello country. Ancient cellars, biodynamic estates, and a masterclass with one of Italy's most celebrated enologists.",
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
    <section id="expeditions" className="py-[15vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div {...fadeUp} className="mb-16">
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            02 — Expeditions
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-light italic tracking-tight">
            Current Programmes
          </h2>
        </motion.div>

        <div className="space-y-0">
          {expeditions.map((exp, i) => (
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
                <h3 className="text-2xl font-light tracking-tight group-hover:text-accent transition-colors duration-300">
                  {exp.title}
                </h3>
                <div className="mt-2 flex gap-4 text-xs text-muted-foreground font-body">
                  <span>{exp.region}</span>
                  <span>·</span>
                  <span className="text-tabular">{exp.duration}</span>
                  <span>·</span>
                  <span>{exp.season}</span>
                </div>
              </div>
              <div className="col-span-12 md:col-start-7 md:col-end-11">
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {exp.description}
                </p>
              </div>
              <div className="col-span-12 md:col-start-11 md:col-end-13 flex items-center md:justify-end mt-4 md:mt-0">
                <Button variant="expedition" className="text-[10px]">
                  View Details
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpeditionsSection;
