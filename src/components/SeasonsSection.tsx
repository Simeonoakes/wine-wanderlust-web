import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import vineyardCastleImg from "@/assets/vineyard-castle.jpg";
import landscapeGarrigueImg from "@/assets/landscape-garrigue.jpg";
import cellarPortraitImg from "@/assets/cellar-portrait.jpg";
import autumnLandscapeImg from "@/assets/autumn-landscape-new.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

const seasons = [
  {
    season: "Spring",
    title: "Almond Blossom & Pruning",
    image: vineyardCastleImg,
    text: "As the first warmth returns, hillsides explode in clouds of white and pink almond blossom. In the vineyards, the vignerons are bent low, shaping the year's growth with deft secateurs. A season of new beginnings: quiet, hopeful and intensely beautiful.",
    cta: "Get a Taste of Spring",
  },
  {
    season: "Summer",
    title: "Poppy Fields & Pest Control",
    image: landscapeGarrigueImg,
    text: "Crimson poppies set the fields ablaze under a relentless southern sun. In the rows, the winemakers walk every day, watching, listening, balancing the vine's vigour and warding off unwanted visitors. The garrigue hums; the cicadas have not yet taken over.",
    cta: "Get a Taste of Summer",
  },
  {
    season: "Late Summer",
    title: "Cicadas & Bottling",
    image: cellarPortraitImg,
    text: "The cicadas are deafening, the air shimmers and the vines hang heavy with ripening fruit. Inside the cool of the cellar, last year's wines are being bottled: a moment of stillness before the storm of harvest.",
    cta: "Get a Taste of Summer",
  },
  {
    season: "Autumn",
    title: "Autumn Glory & Harvesting",
    image: autumnLandscapeImg,
    text: "The vineyards turn gold, russet and burgundy, the air sharpens and the whole region holds its breath. Pickers move through the rows from dawn, baskets fill, and the winery hums day and night with juice, song and the heady scent of fermenting grapes.",
    cta: "Get a Taste of Autumn",
  },
];

const SeasonsSection = () => {
  return (
    <section id="seasons" className="py-[15vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            04 / The Seasons
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-primary tracking-tight">
            Come and Go with the Seasons
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <p className="text-sm text-muted-foreground leading-relaxed font-body">
            Every season in the Corbières tells its own story. The landscape changes colour, the vines change rhythm, and life in the winery follows its own ancient calendar. Choose when to visit and you choose what to live: the quiet promise of spring, the heady abundance of summer, the focused frenzy of harvest or the deep, contemplative rest of winter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {seasons.map((s, i) => (
            <motion.article
              key={s.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="mt-6 flex-1 flex flex-col">
                <span className="text-xs uppercase tracking-[0.18em] text-primary font-body">
                  {s.season}
                </span>
                <h3 className="mt-2 text-2xl md:text-3xl font-display tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-body flex-1">
                  {s.text}
                </p>
                <div className="mt-6">
                  <Link
                    to="/#experiences"
                    className="inline-block border border-primary text-primary px-6 py-3 text-xs uppercase tracking-[0.15em] font-body hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {s.cta}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonsSection;
