import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import grapeHarvestImg from "@/assets/grape-harvest.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

const TheVineyards = () => (
  <div className="min-h-screen">
    <Navbar />
    {/* Banner */}
    <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <img src={grapeHarvestImg} alt="Ancient Vines" className="w-full h-full object-cover object-center" />
    </div>

    <div className="max-w-4xl mx-auto px-8 py-20">
      <motion.div {...fadeUp}>
        <Link to="/#the-terroir" className="text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-primary transition-colors font-body">
          ← Back to The Terroir
        </Link>
        <h1 className="mt-8 text-4xl md:text-5xl font-light italic tracking-tight">
          Ancient Vines
        </h1>
      </motion.div>

      <motion.div {...fadeUp} className="mt-10 space-y-6 text-sm text-muted-foreground leading-relaxed font-body">
        <p>
          The vineyards of the Corbières are among the oldest in France, with some plots boasting century-old vines that have weathered droughts, late frosts, and the relentless march of climate change. These gnarled, resilient survivors dig deep into soils that shift dramatically from one plot to the next — limestone here, schist there, clay and sandstone a stone's throw away.
        </p>
        <p>
          This astonishing diversity of terroirs, packed into a relatively compact area, has nothing to envy from Burgundy's celebrated <span className="font-display italic text-foreground">climats</span>. Each parcel tells a different geological story, producing wines of startling individuality — bold yet elegant, rugged yet refined.
        </p>
        <p>
          Unlike the vast, sweeping estates of the New World or even Bordeaux, the Corbières is a land of small, morcelled properties — intimate plots carved into hillsides and valleys, often tended by a single family across generations. This human scale is precisely what makes the wines so personal, so rooted in place.
        </p>
        <p>
          The topography itself is a masterclass in viticultural drama: rugged ridges, sun-baked slopes, sheltered hollows where cool air pools at night. The vines here don't simply grow — they struggle, they endure, they concentrate. And it is this very struggle, this dialogue between vine and earth, that forges wines of extraordinary depth and character.
        </p>
        <p>
          Walking among these ancient vines, you feel the weight of centuries. They have seen wars and revolutions, booms and busts, the rise and fall of cooperatives. And still they stand — twisted, proud, producing some of the most soulful wines in all of France.
        </p>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default TheVineyards;
