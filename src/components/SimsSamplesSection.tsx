import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, X, Instagram } from "lucide-react";
import cellarPortraitImg from "@/assets/cellar-portrait.jpg";
import handsOnImg from "@/assets/hands-on-winemaking.jpg";
import pruningThumb from "@/assets/pruning-thumb.jpg";
import newGrowthThumbAsset from "@/assets/new-growth-thumb.jpg";
import { MEDIA } from "@/config/media";

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
  { title: "March 2026 – Pruning", image: pruningThumb, video: MEDIA.pruningVideo },
  { title: "April 2026 – First Stages of Growth", image: newGrowthThumbAsset, video: MEDIA.newGrowthVideo },
  { title: "The Darling Buds of May", image: cellarPortraitImg, video: MEDIA.darlingBudsVideo },
  { title: "Terroir Taster", image: handsOnImg, video: MEDIA.tasterVideo },
];

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.84 4.84 0 0 1-1.84-.21z" />
  </svg>
);

const SimsSamplesSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="sims-samples" className="py-[15vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div {...fadeUp} className="mb-10">
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            06 / Sim's Samples
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-primary tracking-tight italic">
            Sim's Samples
            <span className="block mt-2 text-xl md:text-2xl not-italic font-body tracking-[0.15em] uppercase text-muted-foreground">
              As seen on{" "}
              <a
                href="https://www.instagram.com/invinoveritas.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>{" "}
              and{" "}
              <a
                href="https://www.tiktok.com/@invinoveritas.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary"
              >
                <TikTokIcon className="h-4 w-4" /> TikTok
              </a>
            </span>
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="max-w-3xl mb-16 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed font-body">
            Delve into the vineyards <em>almost</em> for real with Simeon. Through a series of short videos, samples, dare I say: tasters of the life of a vine itself and the different processes it takes to bring a vine to fruition and ensure a harvest year after year.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed font-body">
            Walk through vineyards and wineries with me from the comfort of your home and meet the men and women who help to make the magic happen.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed font-body">
            That is, of course, until you are able to tread these soils yourself, here in person.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <PlayCircle className="h-16 w-16 text-primary/90" strokeWidth={1} />
              </div>
              <div className="p-6 text-center bg-background">
                <h3 className="text-lg font-display tracking-tight text-foreground">
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
            className="absolute top-6 right-6 text-primary"
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
