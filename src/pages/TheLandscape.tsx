import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fontfroideAsset from "@/assets/fontfroide.jpg.asset.json";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

const TheLandscape = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <img src={fontfroideAsset.url} alt="Garrigue, Mountains & Ancient Stones" className="w-full h-full object-cover object-center" />
    </div>

    <div className="max-w-4xl mx-auto px-8 py-20">
      <motion.div {...fadeUp}>
        <Link to="/#the-terroir" className="text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-primary transition-colors font-body">
          ← Back to The Terroir
        </Link>
        <h1 className="mt-8 text-5xl md:text-6xl font-script text-primary tracking-tight leading-none">
          Garrigue, Mountains &amp; Ancient Stones
        </h1>
      </motion.div>

      <motion.div {...fadeUp} className="mt-10 space-y-6 text-sm text-muted-foreground leading-relaxed font-body">
        <p>
          The Corbières landscape is one of raw, untamed beauty: a patchwork of wild garrigue, dramatic mountain ridges and ancient stones that whisper of centuries passed. The air is thick with the scent of thyme, rosemary and cistus, and the horizon is punctuated by the silhouettes of ruined Cathar castles perched impossibly on craggy peaks.
        </p>
        <p>
          Among the jewels of this landscape is <span className="text-foreground font-medium">Fontfroide Abbey</span>, a breathtaking Cistercian monastery nestled in a secluded valley, surrounded by cypress trees and vineyards. Its serene cloisters and rose gardens offer a window into a thousand years of monastic life and winemaking tradition.
        </p>
        <p>
          Then there is <span className="text-foreground font-medium">Carcassonne</span>, the UNESCO World Heritage fortified city, its double-walled ramparts rising like a medieval dream above the Aude valley. A living monument to the turbulent history of this borderland, where cultures, languages and empires collided for centuries.
        </p>
        <p>
          The medieval village of <span className="text-foreground font-medium">Lagrasse</span>, officially one of the most beautiful villages in France, straddles the Orbieu river with its stone bridges, cobbled streets and the magnificent Benedictine abbey that has stood watch since the 8th and which a congregation of monks still call home today.
        </p>
        <p>
          Beyond these landmarks, the landscape itself is the attraction: rolling hills covered in low shrubland called <span className="italic">garrigue</span> giving way to dramatic gorges and hidden valleys. Rocky outcrops catch the golden light of sunset, turning the entire terrain into a canvas of amber, ochre and olive. Every season reshapes and reinvents the landscape and illuminates this glorious natural canvas with the full palette of colours from liquid gold to turquoise via scarlet, vibrant yellow and iridescent green.
        </p>
        <p>
          It is a place where you can walk for hours and encounter nothing but the sound of the wind through the pines and the distant call of a buzzard, or the timeless intoxicating sound of cicadas in the summer months.
        </p>
        <p>
          This is land that has been shaped by the elements and by history in equal measure: a landscape of extraordinary beauty that reveals itself slowly, rewarding those who take the time to look, to listen, and to breathe it all in.
        </p>

        <Link to="/#experiences" className="block pt-6 text-center font-script text-3xl md:text-4xl text-burgundy-light not-italic leading-tight hover:text-primary transition-colors">
          Walk these paths, hear these stones, drink in these scents.
        </Link>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default TheLandscape;
