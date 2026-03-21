import { motion } from "framer-motion";
import grapeHarvestImg from "@/assets/grape-harvest.jpg";
import village2cvImg from "@/assets/village-2cv.jpg";
import fitouSignImg from "@/assets/fitou-sign.jpg";

const highlights = [
  {
    name: "The Vineyards",
    subtitle: "Heart of the Corbières",
    image: grapeHarvestImg,
    detail: "Ancient Vines",
    soil: "Limestone & Schist",
    character: "Bold & Elegant",
  },
  {
    name: "The Landscape",
    subtitle: "Garrigue & Mountains",
    image: vineyardCastleImg,
    detail: "Cathar Castles",
    soil: "Wild Mediterranean",
    character: "Untamed Beauty",
  },
  {
    name: "The Culture",
    subtitle: "Centuries of Savoir-Faire",
    image: village2cvImg,
    detail: "Local Artisans",
    soil: "Languedoc Cuisine",
    character: "Living Heritage",
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
    <section id="the-terroir" className="py-[15vh]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div {...fadeUp} className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-start-2 md:col-end-7">
            <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              01 — The Terroir
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light italic tracking-tight">
              The Wild Corbières
            </h2>
          </div>
          <div className="col-span-12 md:col-start-8 md:col-end-12 flex items-end">
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Nestled between the Pyrenees and the Mediterranean, the Corbières is one of France's most dramatic and unspoilt wine regions — a land of ancient vines, rugged beauty, and fiercely independent winemakers.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.article
              key={item.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={item.image}
                  alt={`${item.name} — ${item.subtitle}`}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-light tracking-tight">{item.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 font-body">{item.subtitle}</p>
                <div className="mt-4 pt-4 border-t border-border flex gap-6 text-xs text-muted-foreground font-body">
                  <span>{item.detail}</span>
                  <span>{item.soil}</span>
                  <span>{item.character}</span>
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
