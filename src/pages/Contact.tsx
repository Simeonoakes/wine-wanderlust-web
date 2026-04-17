import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

const Contact = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-8">
        <motion.div {...fadeUp} className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body">
            Get in touch
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-display text-primary tracking-tight">
            Contact
          </h1>
          <p className="mt-8 text-base text-muted-foreground font-body leading-relaxed max-w-xl mx-auto">
            Whether you're planning a journey, organising a corporate event, or simply curious about our experiences, we'd love to hear from you.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <a
            href="mailto:info@invinoveritas.fr"
            className="group flex flex-col items-center text-center p-8 border border-border hover:border-primary transition-colors"
          >
            <Mail className="h-7 w-7 text-primary mb-5" strokeWidth={1.2} />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body mb-3">
              Email
            </span>
            <span className="text-sm font-body group-hover:text-primary transition-colors break-all">
              info@invinoveritas.fr
            </span>
          </a>

          <div className="flex flex-col items-center text-center p-8 border border-border">
            <Phone className="h-7 w-7 text-primary mb-5" strokeWidth={1.2} />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body mb-3">
              Phone
            </span>
            <a href="tel:+33600000000" className="text-sm font-body hover:text-primary transition-colors">
              <span className="block text-xs text-muted-foreground/70 mb-1">France</span>
              +33 6 00 00 00 00
            </a>
            <a href="tel:+447000000000" className="mt-3 text-sm font-body hover:text-primary transition-colors">
              <span className="block text-xs text-muted-foreground/70 mb-1">United Kingdom</span>
              +44 7000 000 000
            </a>
          </div>

          <a
            href="https://instagram.com/invinoveritas"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-8 border border-border hover:border-primary transition-colors"
          >
            <Instagram className="h-7 w-7 text-primary mb-5" strokeWidth={1.2} />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body mb-3">
              Instagram
            </span>
            <span className="text-sm font-body group-hover:text-primary transition-colors">
              @invinoveritas
            </span>
          </a>
        </motion.div>

        <motion.p {...fadeUp} className="mt-20 text-center font-script text-3xl text-burgundy-light leading-tight">
          We look forward to welcoming you to the Corbières.
        </motion.p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
