import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import wineBarrelImg from "@/assets/wine-barrel.jpg";
import roseOlivesImg from "@/assets/rose-olives.jpg";
import cafeCroissantImg from "@/assets/cafe-croissant.jpg";
import winemakingImg from "@/assets/winemaking.jpg";
import vineyardCastleImg from "@/assets/vineyard-castle.jpg";
import fitouSignImg from "@/assets/fitou-sign.jpg";
import grapeHarvestImg from "@/assets/grape-harvest.jpg";
import village2cvImg from "@/assets/village-2cv.jpg";

const experiences = [
  {
    id: "01",
    title: "Winery Visits & Tastings",
    highlight: "Meet the Makers",
    description:
      "Step behind the cellar doors of the Corbières' finest domaines. Meet the vignerons, hear their stories, taste directly from barrel and bottle — guided by someone who grew up among the vines.",
    image: wineBarrelImg,
  },
  {
    id: "02",
    title: "Gastronomic Discovery",
    highlight: "Vineyard to Table",
    description:
      "Savour the cuisine of the Languedoc — from intimate vineyard lunches paired with the estate's cuvées to curated dinners at the region's most distinguished restaurants.",
    image: roseOlivesImg,
  },
  {
    id: "03",
    title: "Terroir & Landscape",
    highlight: "The Wild Corbières",
    description:
      "Explore the dramatic landscapes of one of France's most untamed wine regions. Ancient villages, rugged garrigue, Cathar castles, and panoramas that stretch to the Pyrenees and the Mediterranean.",
    image: vineyardCastleImg,
  },
  {
    id: "04",
    title: "Hands-On Experiences",
    highlight: "Become a Vigneron",
    description:
      "Roll up your sleeves. Join a harvest, try your hand at blending, learn to prune — real winemaking, guided by a family of three generations of vine growers.",
    image: winemakingImg,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: [0.2, 0, 0, 1] },
};

const ExpeditionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

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

        {/* Tabbed experience showcase */}
        <motion.div {...fadeUp} className="mb-16">
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-border">
            {experiences.map((exp, i) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-3 text-xs uppercase tracking-[0.1em] font-body transition-colors duration-300 border-b-2 -mb-px ${
                  activeTab === i
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {exp.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden aspect-[4/3]">
              <motion.img
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
                src={experiences[activeTab].image}
                alt={experiences[activeTab].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
            <motion.div
              key={`text-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-xs text-primary font-body uppercase tracking-[0.1em]">
                {experiences[activeTab].highlight}
              </span>
              <h3 className="mt-3 text-3xl md:text-4xl font-light italic tracking-tight">
                {experiences[activeTab].title}
              </h3>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed font-body">
                {experiences[activeTab].description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Photo strip */}
        <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {[cafeCroissantImg, fitouSignImg, village2cvImg, grapeHarvestImg].map((img, i) => (
            <div key={i} className="relative overflow-hidden aspect-square group">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeUp} className="text-center">
          <Button variant="expedition" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Enquire About a Bespoke Experience
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpeditionsSection;
