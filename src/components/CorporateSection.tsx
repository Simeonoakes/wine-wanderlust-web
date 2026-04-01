import { motion } from "framer-motion";

const offerings = [
  {
    title: "Food & Wine Pairing Meals",
    description:
      "Curated multi-course dining experiences that marry local cuisine with exceptional wines, tailored for your team or clients.",
  },
  {
    title: "Tasting Masterclasses",
    description:
      "Led by an experienced guide, these sessions sharpen palates and deepen appreciation — from introductory to advanced levels.",
  },
  {
    title: "Corporate Events",
    description:
      "In the heart of the Corbières or brought to you worldwide — unforgettable wine-centred events for team-building, client entertainment, or product launches.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.8, ease: [0.2, 0, 0, 1] },
};

const CorporateSection = () => {
  return (
    <section id="corporate-and-consulting" className="py-[15vh] border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div {...fadeUp} className="mb-16">
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            04 — Corporate & Consulting
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-light italic tracking-tight">
            For Business & Beyond
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="border border-border p-8"
            >
              <h3 className="text-xl font-light italic tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
