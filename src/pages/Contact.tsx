import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1, ease: [0.2, 0, 0, 1] },
};

const Contact = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
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
          <p className="mt-8 text-xl text-muted-foreground font-body leading-relaxed max-w-xl mx-auto">
            Whether you're planning a journey, organising a corporate event, or simply curious about our experiences, we'd love to hear from you.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <a
            href="mailto:contact@invinoveritasexperiences.com"
            className="group flex flex-col items-center text-center p-8 border border-border hover:border-primary transition-colors w-full max-w-[3200px]"
          >
            <Mail className="h-5 w-5 text-primary mb-3" strokeWidth={1.2} />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-body mb-2">
              Email
            </span>
            <span className="text-lg font-body group-hover:text-primary transition-colors break-all">
              contact@invinoveritasexperiences.com
            </span>
          </a>

          <div className="flex flex-col items-center text-center p-8 border border-border w-full max-w-[3200px]">
            <Phone className="h-5 w-5 text-primary mb-3" strokeWidth={1.2} />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-body mb-2">
              Phone / Whatsapp
            </span>
            <a href="tel:+33766678973" className="text-xl font-body hover:text-primary transition-colors">
              +33 766678973
            </a>
          </div>

          <a
            href="https://www.instagram.com/invinoveritasexperiences/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-8 border border-border hover:border-primary transition-colors w-full max-w-[3200px]"
          >
            <Instagram className="h-5 w-5 text-primary mb-3" strokeWidth={1.2} />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-body mb-2">
              Instagram
            </span>
            <span className="text-xl font-body group-hover:text-primary transition-colors">
              @invinoveritasexperiences
            </span>
          </a>
        </motion.div>

        <motion.div {...fadeUp} className="mt-12 text-center">
          <button
            onClick={() => setBookingOpen(true)}
            className="inline-block px-8 py-3 border border-primary text-primary font-display text-sm uppercase tracking-[0.15em] hover:bg-primary hover:text-background transition-colors"
          >
            Book Here
          </button>
        </motion.div>

        <motion.p {...fadeUp} className="mt-20 text-center font-script text-3xl text-burgundy-light leading-tight">
          We look forward to welcoming you to the Corbières.
        </motion.p>
      </div>
    </main>
    <Footer />
    <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
  </div>
  );
};

export default Contact;
