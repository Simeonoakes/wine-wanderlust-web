import { useState } from "react";
import { MEDIA } from "@/config/media";
import BookingDialog from "@/components/BookingDialog";
const logoAsset = MEDIA.logo;

const Footer = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-4 flex flex-col items-center">
          <img src={logoAsset} alt="In Vino Veritas" className="w-80 h-80 object-contain mb-0.5 -mt-16" />
          <p className="text-lg text-muted-foreground font-body leading-relaxed whitespace-nowrap">
            Bespoke wine experiences in the South of France
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 md:col-start-8">
          <h4 className="text-xs uppercase tracking-[0.12em] text-muted-foreground mb-4">Navigate</h4>
          <ul className="space-y-3 text-sm font-body">
            <li><a href="#experiences" className="hover:text-primary transition-colors">Experiences</a></li>
            <li><a href="#the-terroir" className="hover:text-primary transition-colors">The Terroir</a></li>
            <li><a href="#your-guide" className="hover:text-primary transition-colors">Your Guide</a></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.12em] text-muted-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm font-body text-muted-foreground">
            <li>contact@invinoveritasexperiences.com</li>
            <li>+33 766678973</li>
            <li><button onClick={() => setBookingOpen(true)} className="text-primary hover:text-primary/80 transition-colors">Book Now</button></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-2 md:col-start-11 flex flex-col items-end justify-end self-end space-y-1">
          <p className="text-xs text-muted-foreground font-body whitespace-nowrap">
            Drone footage credit: Aymeric Alibert
          </p>
          <p className="text-xs text-muted-foreground font-body text-tabular">
            © 2026 In Vino Veritas
          </p>
        </div>
      </div>
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </footer>
  );
};

export default Footer;
