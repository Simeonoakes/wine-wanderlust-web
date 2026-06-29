import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import garlicAsset from "@/assets/garlic.jpg";
import cafeCroissantImg from "@/assets/cafe-croissant-v2.jpg";
import img5447Asset from "@/assets/img-5447.jpg";
import img7904Asset from "@/assets/img-7904.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

const TheCulture = () => (
  <div className="min-h-screen">
    <Navbar />
    {/* Banner: zoomed slightly, lifted so only full cloves of garlic are visible */}
    <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <img
        src={garlicAsset}
        alt="The Culture"
        className="w-full h-full object-cover"
        style={{ transform: "scale(1.15)", transformOrigin: "center 35%", objectPosition: "center 30%" }}
      />
    </div>

    <div className="max-w-4xl mx-auto px-8 py-20">
      <motion.div {...fadeUp}>
        <Link to="/#the-terroir" className="text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-primary transition-colors font-body">
          ← Back to The Terroir
        </Link>
        <h1 className="mt-8 text-5xl md:text-6xl font-script text-primary tracking-tight leading-none">
          Language, Cuisine and Character
        </h1>
      </motion.div>

      <motion.div {...fadeUp} className="mt-10 space-y-6 text-sm text-muted-foreground leading-relaxed font-body">
        <p>
          The culture of the Corbières is woven from the threads of resilience, passion, and a fierce love of the land. This is a place where weekly markets are sacred rituals: small stalls packed with local goat's cheese, saucisson studded with wild herbs, thyme and rosemary honey harvested from hives perched among the garrigue, and fruits and vegetables grown minutes away in the sun-drenched soil.
        </p>
        <p>
          The people here are as rugged and characterful as the landscape itself. There is a determination, more than a hint of stubbornness, that runs through the blood of the Corbières. These are communities that have endured centuries of upheaval. Situated perilously close to the historic Spanish border, a frontier that shifted back and forth through wars and treaties, the people of this land developed a resilience born of necessity and a fiercely independent spirit.
        </p>
        <p>
          The Cathar legacy looms large: a reminder of the brutal Albigensian Crusade that devastated this region in the 13th century. The ruins of Cathar castles are not just tourist attractions; they are monuments to a people who chose death over submission, and their spirit of defiance still echoes in the character of those who live here today. Occitan, a living representation of this spirit, the language named after the word "yes", has always been used to say "no" when the time comes to oppose injustice and iniquity.
        </p>
        <p>
          Cuisine here is not a performance; it is a way of life. Recipes are fiercely kept secrets, a heritage handed down from generation to generation. Meals are long, communal, and deeply connected to the seasons and the soil. A Sunday lunch can last all afternoon. A barbecue in the vineyards is seasoned with herbs you've just picked from the hillside; the sausage is made by the hunters (truly rustic characters in their own right) with the wild boar they hunted themselves for hours through the garrigue that surrounds you. The wine on the table was made by your neighbour, from grapes grown a hundred metres away.
        </p>
        <p>
          And beneath it all, there is the warmth: the open doors, the handshake that turns into an aperitif that turns into dinner, the vigneron who insists you try one more barrel because "this one is special"; the village fêtes which for centuries have brought people together around food, music and wine and have forged friendships and marriages alike.
        </p>
        <p>
          The Corbières doesn't reveal itself to those who rush through. It opens up to those who sit down, share a glass, and listen to the stories.
        </p>

        <Link to="/#experiences" className="block pt-6 text-center font-script text-3xl md:text-4xl text-burgundy-light not-italic leading-tight hover:text-primary transition-colors">
          Dance to these beats, relish this pace, feast on these joys.
        </Link>
      </motion.div>

      {/* Photo strip — 3 photos */}
      <motion.div {...fadeUp} className="grid grid-cols-3 gap-3 mt-20">
        {[cafeCroissantImg, img5447Asset, img7904Asset].map((src, i) => (
          <div key={i} className="relative overflow-hidden aspect-square group">
            <img src={src} alt="" loading="lazy" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
            
          </div>
        ))}
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default TheCulture;
