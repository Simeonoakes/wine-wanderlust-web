import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, X } from "lucide-react";
import vineyardHarvestImg from "@/assets/vineyard-harvest.jpg";
import cellarPortraitImg from "@/assets/cellar-portrait.jpg";
import handsOnImg from "@/assets/hands-on-winemaking.jpg";
import pruningVideoAsset from "@/assets/pruning-march-2026.mp4.asset.json";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

interface Sample {
  title: string;
  image: string;
  video?: string;
}

const samples: Sample[] = [
  { title: "Pruning - March 2026", image: vineyardHarvestImg, video: pruningVideoAsset.url },
  { title: "Inside the Winery", image: cellarPortraitImg },
  { title: "Meet the Makers", image: handsOnImg },
];

const SimsSamplesSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="sims-samples" className="py-[15vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div {...fadeUp} className="mb-10">
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            05 / Sim's Samples
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-primary tracking-tight italic">
            Sim's Samples Videos
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <p className="text-sm text-muted-foreground leading-relaxed font-body">
            Delve into the vineyards <em>almost</em> for real with Simeon. Through a series of short videos, samples, dare I say tasters of the life of a vine itself and the different processes it takes to bring a vine to fruition and ensure a harvest year after year. Walk through vineyards and wineries with me from the comfort of your home and meet the men and women who help the magic to happen, until you are able to do so yourself, here in person.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {samples.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="group relative overflow-hidden border border-border cursor-pointer"
              onClick={() => s.video && setActiveVideo(s.video)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500 flex items-center justify-center">
                <PlayCircle className="h-16 w-16 text-primary/90 group-hover:text-burgundy-light transition-colors" strokeWidth={1} />
              </div>
              <div className="p-6 text-center bg-background">
                <h3 className="text-lg font-display tracking-tight text-foreground group-hover:text-burgundy-light transition-colors">
                  {s.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp} className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mt-12 font-body italic">
          More videos coming soon, stay tuned.
        </motion.p>
      </div>

      {/* Video lightbox */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary hover:text-burgundy-light"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
          >
            <X className="h-8 w-8" />
          </button>
          <video
            src={activeVideo}
            controls
            autoPlay
            className="max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default SimsSamplesSection;
