import { motion } from "framer-motion";
import grapeHarvestImg from "@/assets/grape-harvest.jpg";
import village2cvImg from "@/assets/village-2cv.jpg";
import landscapeGarrigueImg from "@/assets/landscape-garrigue.jpg";

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
    image: landscapeGarrigueImg,
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

        {/* Terroir description text */}
        <motion.div {...fadeUp} className="max-w-4xl mx-auto mb-16">
          <p className="text-sm text-muted-foreground leading-relaxed font-body">
            Wonderfully untranslatable, the word <span className="font-display italic text-foreground text-base">terroir</span> is as rich and complex as the concept it illustrates.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed font-body mt-4">
            Almost exclusively used in viticulture, it reflects all the naturally occurring external factors (climate, elements, soil type, flora) that come into action to intrinsically affect, nurture and forge a vine, its grapes and therefore, ultimately the wine.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed font-body mt-4">
            Naturally, the human who guides, tends and transforms at every stage from the first seed to the final glass, is indissociable from the science and the magic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((item, i) => (
            <motion.article
              key={item.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="group cursor-pointer flex flex-col items-center text-center"
            >
              <div className="w-full aspect-[3/2] overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} — ${item.subtitle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-light tracking-tight">{item.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 font-body">{item.subtitle}</p>
                <div className="mt-4 pt-4 border-t border-border flex justify-center gap-6 text-xs text-muted-foreground font-body">
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
