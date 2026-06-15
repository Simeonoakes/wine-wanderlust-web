import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";
import menuPaperImg from "@/assets/menu-paper.jpg";
import wineBarrelImg from "@/assets/wine-barrel.jpg";
import roseOlivesImg from "@/assets/rose-olives.jpg";
import handsOnImg from "@/assets/hands-on-winemaking.jpg";
import landscapeGarrigueImg from "@/assets/landscape-garrigue.jpg";
import wineTastingTableImg from "@/assets/wine-tasting-table.jpg";
import cellarPortraitImg from "@/assets/cellar-portrait.jpg";
import tractorSelfieImg from "@/assets/tractor-selfie.jpg";
import vineyardHarvestImg from "@/assets/vineyard-harvest.jpg";
import extraSceneImg from "@/assets/extra-scene.jpg";
import cafeCroissantImg from "@/assets/cafe-croissant-v2.jpg";
import grapeHarvestImg from "@/assets/grape-harvest.jpg";
import whiteGrapesAsset from "@/assets/white-grapes.jpg.asset.json";

const experiences = [
  {
    id: "01",
    title: "Winery Visits & Tastings",
    highlight: "Where the Magic Happens",
    description:
      "Step behind the cellar doors of the region's finest hand-picked domaines. Meet the magic makers whose hands and hearts forge the precious nectar. Hear their stories first hand, taste directly from barrel and bottle, as always, guided by someone who grew up among the vines.",
    image: wineBarrelImg,
  },
  {
    id: "02",
    title: "Gastronomic Discovery",
    highlight: "Vineyard to Table",
    description:
      "From intimate vineyard lunches with the estate's cuvées to 4 course meals in the best local restaurant as well as traditional rustic barbecues cooked on old vine wood with aromatic herbs in the very vineyard they come from.",
    image: roseOlivesImg,
  },
  {
    id: "03",
    title: "Terroir, Landscape & History",
    highlight: "The Wild Corbières",
    description:
      "Picturesque villages, rugged garrigue, Cathar castles, medieval abbeys and fortified towns set in dramatic panoramas nestled between the snow-capped Pyrenees and the glistening Mediterranean.",
    image: landscapeGarrigueImg,
  },
  {
    id: "04",
    title: "Hands-On Experiences",
    highlight: "Become a Vigneron",
    description:
      "Guided by the vinegrowers themselves, in the wine cellar or in the vineyards. Watch, listen and take part in the beauty of the process at every stage, depending on the season.",
    image: handsOnImg,
  },
  {
    id: "05",
    title: "Accommodation",
    highlight: "Stay at the Heart of It All",
    description:
      "Your accommodation is completely taken care of and we will ensure you stay in one of our prime locations in the village of Paziols or a stone's throw away. Typical old stone buildings stylishly renovated, offering the perfect blend of traditional charm with all modern comfort and amenities.\n\nFor the 2-day intensive or the 1 week full immersion experiences, you can arrive the day before or leave the day after or both! It's up to you.",
    image: extraSceneImg,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

/* ── Menu-style day renderer on parchment ── */
interface DayData {
  day: string;
  courses: { course: string; items: string[] }[];
}

const MenuDay = ({ day, footnote }: { day: DayData; footnote?: string }) => (
  <div
    className="menu-paper relative px-8 py-12 md:px-16 md:py-16 mx-auto max-w-3xl"
    style={{
      backgroundImage: `url(${menuPaperImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Subtle inner shadow + tint for paper depth */}
    <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 60px rgba(180,150,100,0.08)" }} />
    <div className="relative z-10">
      <h4 className="font-menu text-burgundy text-6xl md:text-7xl text-center leading-none mb-8" style={{ color: "hsl(350 60% 30%)" }}>
        {day.day}
      </h4>
      <div className="flex items-center justify-center gap-3 mb-12">
        <span className="block w-12 h-px" style={{ background: "hsl(350 50% 30% / 0.4)" }} />
        <span className="text-[10px] tracking-[0.4em]" style={{ color: "hsl(350 50% 30% / 0.6)" }}>✦</span>
        <span className="block w-12 h-px" style={{ background: "hsl(350 50% 30% / 0.4)" }} />
      </div>
      <div className="space-y-10">
        {day.courses.map((course) => (
          <div key={course.course} className="text-center">
            <span className="font-caption text-xs uppercase tracking-[0.35em] block mb-5" style={{ color: "hsl(350 60% 30%)" }}>
              {course.course}
            </span>
            <div className="w-8 h-px mx-auto mb-5" style={{ background: "hsl(40 50% 30% / 0.4)" }} />
            {course.items.map((item, i) => (
              <p key={i} className="font-serif italic text-base leading-relaxed mb-3 max-w-xl mx-auto" style={{ color: "hsl(30 30% 20%)" }}>
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
      {footnote && (
        <p className="mt-12 text-center text-xs italic font-serif" style={{ color: "hsl(30 30% 30% / 0.75)" }}>
          {footnote}
        </p>
      )}
    </div>
  </div>
);

const OneDayContent = ({ onBook }: { onBook: () => void }) => (
  <div className="space-y-8">
    <div className="w-full overflow-hidden">
      <img src={cafeCroissantImg} alt="A day in the Corbières" className="w-full h-[35vh] md:h-[50vh] object-cover object-center" loading="lazy" />
    </div>

    <div className="text-center space-y-2">
      <p className="text-sm text-muted-foreground leading-relaxed font-body italic max-w-2xl mx-auto">
        A curated introduction : perfect for curious travellers passing through the region, or as an exclusive activity to include into your holiday in the area.
      </p>
    </div>

    <MenuDay day={{
      day: "Your Day",
      courses: [
        { course: "Morning", items: [
          "Start with French breakfast in the vineyards, drink in the stunning views while sipping on coffee and a croissant from the local boulangerie.",
          "Visit 1 winery including a tasting and a tour of the winery or part of the estate."
        ]},
        { course: "Midday", items: [
          "Lunch at a local restaurant."
        ]},
        { course: "Afternoon", items: [
          "Visit another two wineries offering different products in order to showcase the rich palette and variety of wines and winemaking techniques of the area."
        ]},
        { course: "Evening", items: [
          "End with an aperitif at the local bar."
        ]},
      ]
    }} />

    <div className="text-center pt-4 space-y-3">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-body">
        At every stage you will be encouraged to use as much or as little French as you know or fancy!
      </p>
    </div>

    <div className="text-center pt-4">
      <Button onClick={onBook} variant="expedition" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm px-10 py-5">
        Book Your Taster Journey
      </Button>
    </div>
  </div>
);

const TwoDayContent = ({ onBook }: { onBook: () => void }) => (
  <div className="space-y-8">
    <div className="w-full overflow-hidden">
      <img src={roseOlivesImg} alt="Two days in the Corbières" className="w-full h-[35vh] md:h-[50vh] object-cover object-center" loading="lazy" />
    </div>

    <div className="text-center space-y-2">
      <p className="text-sm text-muted-foreground leading-relaxed font-body italic max-w-2xl mx-auto">
        A deeper dive into the terroir.
      </p>
      <p className="text-sm text-primary leading-relaxed font-body">
        Includes accommodation for either 2 or 3 nights
      </p>
    </div>

    {[
      { day: "Day 1", courses: [
        { course: "Morning", items: [
          "Meet for French breakfast in your accommodation : local patisseries and delicacies.",
          "Visit 1 winery including a tasting and a tour of the winery or part of the estate."
        ]},
        { course: "Midday", items: [
          "Luxury picnic lunch in the heart of the landscape. Breathtaking views, the sounds and scents of the garrigue, local, curated food paired with a local wine."
        ]},
        { course: "Afternoon", items: [
          "Visit a winery with tasting focusing on the appellations of the area."
        ]},
        { course: "Evening", items: [
          "Dinner at a local restaurant."
        ]},
      ]},
      { day: "Day 2", courses: [
        { course: "Morning", items: [
          "Breakfast in the vineyard overlooking the stunning Corbières landscapes. Drink in the views while sipping on coffee and a croissant from the local boulangerie.",
          "Meet the producer: try your hand at pruning, harvesting or blending depending on the season (and the weather)."
        ]},
        { course: "Midday", items: [
          "Visit another winery offering different products in order to showcase the rich palette and variety of wines and winemaking techniques of the area.",
          "Lunch at a local restaurant."
        ]},
        { course: "Afternoon", items: [
          "Guided tour of a Cathar Castle : immerse yourself in the rich history of the Corbières."
        ]},
        { course: "Evening", items: [
          "Take an aperitif in the vineyards. Sip on a chilled rosé, a crisp dry white or a local sweet wine with speciality bites.",
          "Food and wine pairing supper in your accommodation."
        ]},
      ]},
    ].map((day, idx, arr) => (
      <MenuDay
        key={day.day}
        day={day}
        footnote={idx === arr.length - 1 ? "* Vegetarian and vegan alternatives available on request" : undefined}
      />
    ))}

    <div className="text-center space-y-3 pt-4">
      <p className="text-sm text-muted-foreground font-body italic">
        All is included, all is taken care of. All you need to do is book your transport to and from the area and we will take it from there.
      </p>
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-body">
        At every stage you will be encouraged to use as much or as little French as you know or fancy!
      </p>
    </div>

    <div className="text-center pt-4">
      <Button onClick={onBook} variant="expedition" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm px-10 py-5">
        Book Your Intensive Journey
      </Button>
    </div>
  </div>
);

const WeekContent = ({ onBook }: { onBook: () => void }) => (
  <div className="space-y-8">
    <div className="w-full overflow-hidden">
      <img src={landscapeGarrigueImg} alt="A week in the Corbières" className="w-full h-[35vh] md:h-[50vh] object-cover object-center" loading="lazy" />
    </div>

    <div className="text-center space-y-2">
      <p className="text-sm text-muted-foreground leading-relaxed font-body italic max-w-2xl mx-auto">
        Live the Corbières to its fullest. 5 days of total immersion : you'll leave practically as a local.
      </p>
      <p className="text-sm text-primary leading-relaxed font-body">
        Includes all meals and accommodation for either 4 or 5 nights
      </p>
    </div>

    {[
      { day: "Day 1", courses: [
        { course: "Morning", items: [
          "Meet for French breakfast in your accommodation : local patisseries and delicacies.",
          "Visit 1 winery including a tasting and a tour of the winery or part of the estate."
        ]},
        { course: "Midday", items: [
          "Luxury picnic lunch in the heart of the landscape. Breathtaking views, the sounds and scents of the garrigue, local, curated food paired with a local wine."
        ]},
        { course: "Afternoon", items: ["Visit a winery with tasting focusing on the appellations of the area."]},
        { course: "Evening", items: ["Dinner at a local restaurant."]},
      ]},
      { day: "Day 2", courses: [
        { course: "Morning", items: [
          "Breakfast in the vineyard overlooking the stunning Corbières landscapes. Drink in the views while sipping on coffee and a croissant from the local boulangerie.",
          "Meet the vigneron: try your hand at pruning, harvesting, ploughing or any other specific job in the vineyards depending on the season."
        ]},
        { course: "Midday", items: [
          "Visit another winery offering different products in order to showcase the rich palette and variety of wines and winemaking techniques of the area.",
          "Lunch at a local restaurant."
        ]},
        { course: "Afternoon", items: ["Guided tour of a Cathar Castle : immerse yourself in the rich history of the Corbières."]},
        { course: "Evening", items: ["Cook your own local supper! With the guiding hand of a local expert."]},
      ]},
      { day: "Day 3", courses: [
        { course: "Morning", items: [
          "Vigneron breakfast : do it as the vignerons do: pâté*, saucisson*, fresh bread and, if you're up for it, a glass of red!",
          "Guided walk through the garrigue punctuated with botanical, historical and cultural anecdotes."
        ]},
        { course: "Midday", items: [
          "Barbecue in the vineyard, fresh produce, grilled on old vine clippings, seasoned with the thyme and rosemary you picked on the walk."
        ]},
        { course: "Afternoon", items: ["Visit a new winery : back to business with yet more delicious and original local wines."]},
        { course: "Evening", items: [
          "Enjoy an aperitif in the local café, chill in the sun with a glass of muscat or something a little more risqué.",
          "Supper at a local restaurant."
        ]},
      ]},
      { day: "Day 4", courses: [
        { course: "Morning", items: [
          "Visit a historical site slightly further afield (the Unesco Heritage site of Carcassonne, Fontfroide Abbey or the medieval town of Lagrasse) and grab breakfast on the way."
        ]},
        { course: "Midday", items: ["Lunch in a restaurant on site."]},
        { course: "Afternoon", items: ["Visit a winery near Limoux, the place where Champagne was invented, long before it was ever called Champagne…"]},
        { course: "Evening", items: ["Food and wine pairing supper in your accommodation."]},
      ]},
      { day: "Day 5", courses: [
        { course: "Morning", items: [
          "Breakfast in your accommodation.",
          "Meet a winemaker directly in the winery, who will guide you through a winemaking technique, depending on the season."
        ]},
        { course: "Midday", items: ["Lunch in a local restaurant."]},
        { course: "Afternoon", items: ["Visit your final winery, taste more exceptional wines and visit the winery or part of the estate."]},
        { course: "Evening", items: [
          "Take an aperitif in the vineyards. Sip on a chilled rosé, a crisp dry white or a local sweet wine with speciality bites.",
          "Supper at a local restaurant."
        ]},
      ]},
    ].map((day, idx, arr) => (
      <MenuDay
        key={day.day}
        day={day}
        footnote={idx === arr.length - 1 ? "* Vegetarian and vegan alternatives available on request" : undefined}
      />
    ))}

    <div className="text-center space-y-3 pt-4">
      <p className="text-sm text-muted-foreground font-body italic">
        All is included, all is taken care of. All you need to do is book your transport to and from the area and we will take it from there.
      </p>
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-body">
        At every stage you will be encouraged to use as much or as little French as you know or fancy!
      </p>
    </div>

    <div className="text-center pt-4">
      <Button onClick={onBook} variant="expedition" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm px-10 py-5">
        Book Your Full Immersion Journey
      </Button>
    </div>
  </div>
);

const ExpeditionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeDuration, setActiveDuration] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [journeyType, setJourneyType] = useState("");

  const openBooking = (type: string) => {
    setJourneyType(type);
    setBookingOpen(true);
  };

  const durations = [
    { label: "1 Day Taster", content: <OneDayContent onBook={() => openBooking("Taster Journey")} /> },
    { label: "2-Day Intensive", content: <TwoDayContent onBook={() => openBooking("Intensive Journey")} /> },
    { label: "1 Week Full Immersion", content: <WeekContent onBook={() => openBooking("Full Immersion Journey")} /> },
  ];

  return (
    <section id="experiences" className="py-[15vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div {...fadeUp} className="mb-16">
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            03 / Experiences
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-primary tracking-tight">
            What Awaits You
          </h2>
        </motion.div>

        {/* Tabbed experience showcase */}
        <motion.div {...fadeUp} className="mb-16">
          <div className="flex flex-wrap gap-2 mb-8">
            {experiences.map((exp, i) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3 text-xs uppercase tracking-[0.1em] font-body transition-colors duration-300 whitespace-nowrap flex-shrink-0 border ${
                  activeTab === i
                    ? "bg-burgundy text-primary border-burgundy"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {exp.title}
              </button>
            ))}
          </div>

          <div>
            <div className="w-full overflow-hidden">
              <motion.img
                key={activeTab}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
                src={experiences[activeTab].image}
                alt={experiences[activeTab].title}
                className="w-full h-[40vh] md:h-[55vh] object-cover object-center"
              />
            </div>
            <motion.div
              key={`text-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 max-w-3xl"
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

        {/* Duration sub-tabs */}
        <motion.div {...fadeUp} className="mb-16">
          <div className="flex flex-wrap gap-2 mb-8">
            {durations.map((dur, i) => (
              <button
                key={dur.label}
                onClick={() => setActiveDuration(i)}
                className={`px-5 py-3 text-xs uppercase tracking-[0.1em] font-body transition-colors duration-300 whitespace-nowrap border ${
                  activeDuration === i
                    ? "bg-burgundy text-primary border-burgundy"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {dur.label}
              </button>
            ))}
          </div>
          <motion.div
            key={activeDuration}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {durations[activeDuration].content}
          </motion.div>
        </motion.div>

        {/* Photo strip */}
        <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-16">
          {[wineTastingTableImg, cellarPortraitImg, tractorSelfieImg, vineyardHarvestImg, extraSceneImg].map((img, i) => (
            <div key={i} className="relative overflow-hidden aspect-square group">
              <img
                src={img}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeUp} className="text-center">
          <Button
            onClick={() => openBooking("Bespoke Experience")}
            variant="expedition"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Enquire About a Bespoke Experience
          </Button>
        </motion.div>
      </div>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} journeyType={journeyType} />
    </section>
  );
};

export default ExpeditionsSection;
