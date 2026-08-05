import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VineFrame from "@/components/VineFrame";

const img7983Asset = "https://res.cloudinary.com/dhnssest7/image/upload/v1783251611/IMG_7466_zamvox.jpg";
import autumnOfAutumnAsset from "@/assets/autumn-of-autumn.jpg";
import blueCarBwImg from "@/assets/blue-car-v2.jpg";

const highlights = [
  {
    name: "Ancient Vines",
    image: img7983Asset,
    link: "/the-vineyards",
  },
  {
    name: "The Landscape",
    image: autumnOfAutumnAsset,
    link: "/the-landscape",
  },
  {
    name: "The Culture",
    image: blueCarBwImg,
    link: "/the-culture",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

const RegionsSection = () => {
  return (
    <section id="the-terroir" className="py-[15vh]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Terroir description text – comes FIRST */}
        <motion.div {...fadeUp} className="max-w-4xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            01 / The Terroir
          </span>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-body">
            Wonderfully untranslatable, the word <span className="font-script text-primary text-3xl md:text-4xl leading-none align-middle">terroir</span> is as rich and complex as the concept it illustrates.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-body mt-4">
            Almost exclusively used in viticulture, it reflects all the naturally occurring external factors (climate, elements, soil type, flora) that come into action to intrinsically affect, nurture and forge a vine, its grapes and therefore, ultimately, the wine.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-body mt-4">
            Naturally, the human who guides, tends and transforms at every stage from the first seed to the final glass, is indissociable from the science and the magic.
          </p>
        </motion.div>

        {/* Wild Corbières title + Nestled paragraph (same column as other body copy) */}
        <motion.div {...fadeUp} className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-primary tracking-tight">
            The Wild Corbières
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-body">
            Nestled between the Pyrenees and the Mediterranean, the Corbières is one of France's most dramatic and unspoilt wine regions: a land of ancient vines, rugged beauty, and fiercely independent winemakers.
          </p>
        </motion.div>

        {/* Transition tagline – same script font as detail-page taglines */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="font-script text-3xl md:text-4xl text-burgundy-light leading-tight">
            This is what awaits you on your journey of discovery: where the story begins and never ends.
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
              <Link to={item.link} className="w-full">
                <VineFrame className="w-full" inset="p-[10px]">
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={item.name === "The Landscape" ? { objectPosition: "center 15%" } : undefined}
                    />
                  </div>
                </VineFrame>

                <div className="mt-6">
                  <h3 className="text-3xl md:text-4xl font-script text-primary group-hover:text-burgundy-light transition-colors leading-tight">
                    {item.name}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
