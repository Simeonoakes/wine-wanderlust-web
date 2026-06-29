import logoAsset from "@/assets/logo-new.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <img src={logoAsset} alt="In Vino Veritas" className="w-16 h-16 object-contain mb-4" />
          <span className="font-signature text-5xl tracking-tight text-primary leading-none"><span className="text-[1.15em]">I</span>n <span className="text-[1.15em]">V</span>ino <span className="text-[1.15em]">V</span>eritas</span>
          <p className="mt-4 text-xs text-muted-foreground font-body leading-relaxed max-w-xs">
            Bespoke wine education, tourism and events in the heart of the Corbières, Languedoc.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 md:col-start-7">
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
            <li>info@invinoveritas.fr</li>
            <li>Corbières, France</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-2 flex items-end">
          <p className="text-xs text-muted-foreground font-body text-tabular">
            © 2026 In Vino Veritas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
