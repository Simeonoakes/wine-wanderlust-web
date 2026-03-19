const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <span className="font-display text-xl tracking-tight">Terroir & Vine</span>
          <p className="mt-4 text-xs text-muted-foreground font-body leading-relaxed max-w-xs">
            Curated vineyard expeditions across Europe's most revered appellations.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 md:col-start-7">
          <h4 className="text-xs uppercase tracking-[0.12em] text-muted-foreground mb-4">Navigate</h4>
          <ul className="space-y-3 text-sm font-body">
            <li><a href="#expeditions" className="hover:text-accent transition-colors">Expeditions</a></li>
            <li><a href="#regions" className="hover:text-accent transition-colors">Regions</a></li>
            <li><a href="#the-journal" className="hover:text-accent transition-colors">The Journal</a></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.12em] text-muted-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm font-body text-muted-foreground">
            <li>concierge@terroirvine.com</li>
            <li>+39 011 123 4567</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-2 flex items-end">
          <p className="text-xs text-muted-foreground font-body text-tabular">
            © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
