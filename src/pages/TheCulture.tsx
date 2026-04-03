import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import village2cvImg from "@/assets/village-2cv.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

const TheCulture = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <img src={village2cvImg} alt="The Culture" className="w-full h-full object-cover object-center" />
    </div>

    <div className="max-w-4xl mx-auto px-8 py-20">
      <motion.div {...fadeUp}>
        <Link to="/#the-terroir" className="text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-primary transition-colors font-body">
          ← Back to The Terroir
        </Link>
        <h1 className="mt-8 text-4xl md:text-5xl font-light italic tracking-tight">
          The Culture
        </h1>
      </motion.div>

      <motion.div {...fadeUp} className="mt-10 space-y-6 text-sm text-muted-foreground leading-relaxed font-body">
        <p>
          The culture of the Corbières is woven from the threads of resilience, passion, and a fierce love of the land. This is a place where weekly markets are sacred rituals — stalls overflowing with local goat's cheese aged in caves, saucisson studded with wild herbs, honey harvested from hives perched among the garrigue, and fruits and vegetables that taste the way they're supposed to taste, because they've grown in this sun-drenched soil and nowhere else.
        </p>
        <p>
          The people here are as rugged and characterful as the landscape itself. There is a determination — more than a hint of stubbornness — that runs through the blood of the Corbières. These are communities that have endured centuries of upheaval. Situated perilously close to the historic Spanish border, a frontier that shifted back and forth through wars and treaties, the people of this land developed a resilience born of necessity and a fiercely independent spirit.
        </p>
        <p>
          The Cathar legacy looms large — a reminder of the brutal Albigensian Crusade that devastated this region in the 13th century. The ruins of Cathar castles are not just tourist attractions; they are monuments to a people who chose death over submission, and their spirit of defiance still echoes in the character of those who live here today.
        </p>
        <p>
          Cuisine here is not a performance; it is a way of life. Meals are long, communal, and deeply connected to the seasons and the soil. A Sunday lunch can last four hours. A barbecue in the vineyards is seasoned with herbs you've just picked from the hillside. The wine on the table was made by your neighbour, from grapes grown a hundred metres away.
        </p>
        <p>
          And beneath it all, there is the warmth — the open doors, the handshake that turns into an invitation to dinner, the vigneron who insists you try one more barrel because "this one is special." The Corbières doesn't reveal itself to those who rush through. It opens up to those who sit down, share a glass, and listen to the stories.
        </p>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default TheCulture;
