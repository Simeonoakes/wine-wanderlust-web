import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";
import roseOlivesImg from "@/assets/rose-olives.jpg";
import wineTastingTableImg from "@/assets/wine-tasting-table.jpg";
import cellarPortraitImg from "@/assets/cellar-portrait.jpg";

const offerings = [
  {
    title: "Food & Wine Pairing Meals",
    description:
      "Curated multi-course dining experiences that marry local cuisine with exceptional wines, tailored for your team or clients.",
    image: roseOlivesImg,
  },
  {
    title: "Tasting Masterclasses",
    description:
      "Led by an experienced guide, these sessions sharpen palates and deepen appreciation — from introductory to advanced levels.",
    image: cellarPortraitImg,
  },
  {
    title: "Corporate Events",
    description:
      "In the heart of the Corbières or brought to you worldwide — unforgettable wine-centred events for team-building, client entertainment, or product launches.",
    image: wineTastingTableImg,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

const CorporateSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="corporate-and-consulting" className="py-[15vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div {...fadeUp} className="mb-10">
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            04 — Corporate & Consulting
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-light italic tracking-tight">
            For Business & Beyond
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <p className="text-sm text-muted-foreground leading-relaxed font-body">
            Whether you're looking for an unforgettable team-building experience in the vineyards, an exclusive corporate event to impress clients, or expert bespoke consulting services tailored to your business — we bring the world of wine to your doorstep. From intimate private tastings to large-scale events, every detail is crafted to inspire, connect, and leave a lasting impression.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="border border-border overflow-hidden"
            >
              <div className="w-full aspect-[3/2] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-light italic tracking-tight">{item.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center mt-12">
          <Button
            onClick={() => setBookingOpen(true)}
            variant="expedition"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Enquire About Corporate Services
          </Button>
        </motion.div>
      </div>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} journeyType="Corporate Experience" />
    </section>
  );
};

export default CorporateSection;
