import { motion } from "framer-motion";
import burgundyImg from "@/assets/region-burgundy.jpg";
import tuscanyImg from "@/assets/region-tuscany.jpg";
import piedmontImg from "@/assets/region-piedmont.jpg";

const regions = [
  {
    name: "Piedmont",
    subtitle: "Barolo & Barbaresco",
    image: piedmontImg,
    elevation: "450m",
    soil: "Calcareous Marl",
    yield: "45 hl/ha",
  },
  {
    name: "Burgundy",
    subtitle: "Côte de Nuits",
    image: burgundyImg,
    elevation: "280m",
    soil: "Limestone & Clay",
    yield: "35 hl/ha",
  },
  {
    name: "Tuscany",
    subtitle: "Brunello di Montalcino",
    image: tuscanyImg,
    elevation: "350m",
    soil: "Galestro & Albarese",
    yield: "52 hl/ha",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: [0.2, 0, 0, 1] },
};

const RegionsSection = () => {
  return (
    <section id="regions" className="py-[15vh]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div {...fadeUp} className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-start-2 md:col-end-7">
            <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              01 — Regions
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light italic tracking-tight">
              The Terroirs
            </h2>
          </div>
          <div className="col-span-12 md:col-start-8 md:col-end-12 flex items-end">
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Each expedition is rooted in a specific appellation—its geology, microclimate, and winemaking philosophy.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region, i) => (
            <motion.article
              key={region.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={region.image}
                  alt={`${region.name} vineyard landscape`}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500" />
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-light tracking-tight">{region.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 font-body">{region.subtitle}</p>
                <div className="mt-4 pt-4 border-t border-border flex gap-6 text-xs text-muted-foreground font-body text-tabular">
                  <span>Elev. {region.elevation}</span>
                  <span>{region.soil}</span>
                  <span>{region.yield}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
