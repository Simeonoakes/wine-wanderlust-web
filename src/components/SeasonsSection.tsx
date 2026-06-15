import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import almondBlossomAsset from "@/assets/almond-blossom.jpg.asset.json";
import poppiesAsset from "@/assets/poppies.jpg.asset.json";
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
    season: "Winter",
    title: "Almond Blossom & Pruning",
    image: almondBlossomAsset.url,
    text: "Surprisingly chilly but also breathtakingly beautiful. Frosts and, if you're lucky, a sprinkling of snow on the summit of Mont Tauch. The painstakingly precise art of pruning and some ploughing set the pace. From January to February, the surrounding garrigue awakens well before the vines do: white and pink tufts of almond blossom appear across the landscape and have the bees swarming. Next comes the vibrant yellow of the mimosa and the blend of intoxicating scents is heavenly; a beacon to the promise of spring.",
    cta: "Get a Taste of Winter",
  },
  {
    season: "Spring",
    title: "Poppies & Pest Control",
    image: poppiesAsset.url,
    text: "Crimson poppies set the fields ablaze and combine with the iridescent yellow and intoxicating scent of the scotch broom and the vibrant greens of fresh shoots on the vines to paint a picture of paradise under the endless blue skies. The vignerons tend the vines with care every day, weeding, ploughing and warding off unwanted visitors.",
    cta: "Get a Taste of Spring",
  },
  {
    season: "Summer",
    title: "Cicadas & Bottling",
    image: cellarPortraitImg,
    text: "The cicadas are deafening, the air shimmers and the vines hang heavy with ripening fruit. Inside the cool of the cellar, last year's wines are being bottled: a moment of stillness before the storm of harvest.",
    cta: "Get a Taste of Summer",
  },
  {
    season: "Autumn",
    title: "Autumn Glory & Harvesting",
    image: autumnLandscapeImg,
    text: "From late summer to early autumn, a year's work reaches its pinnacle: les vendanges, harvest is here at last. The air sharpens and the whole region holds its breath. Pickers move through the rows from dawn, buckets then hods then trailers filled, and the winery hums day and night with juice, song and the heady scent of fermenting grapes. Then the vineyards turn gold, russet and burgundy, the whole landscape ablaze with iridescent glory as the temperature and the light soften and carve shapes and shades sublime.",
    cta: "Get a Taste of Autumn",
  },
];

const SeasonsSection = () => {
  return (
    <section id="seasons" className="py-[15vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div {...fadeUp} className="mb-12">
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            04 / When to Visit
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-primary tracking-tight">
            Come and Go with the Seasons
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <p className="text-sm text-muted-foreground leading-relaxed font-body">
            Every season in the Corbières tells its own story. The landscape changes colour, the vines change rhythm, and life in the winery follows its own ancient calendar. Choose when to visit and you choose what to live: the quiet promise of winter, the riot of colour and renewal in spring, the heady abundance of summer or the focused frenzy and golden glow of autumn harvest.
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
