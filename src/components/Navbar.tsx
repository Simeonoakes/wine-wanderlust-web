import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links: { label: string; href: string }[] = [
  { label: "Experiences", href: "/#experiences" },
  { label: "The Terroir", href: "/#the-terroir" },
  { label: "Your Guide", href: "/#your-guide" },
  { label: "Corporate & Consulting", href: "/#corporate-and-consulting" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
        <a href="/" className="font-display text-xl tracking-tight text-primary">
          In Vino Veritas
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s&\s/g, "-and-").replace(/\s/g, "-")}`}
              className="text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d={mobileOpen ? "M1 1L19 13M1 13L19 1" : "M0 1h20M0 7h20M0 13h20"} stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="md:hidden overflow-hidden border-b border-border bg-background"
          >
            <div className="px-8 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s&\s/g, "-and-").replace(/\s/g, "-")}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-[0.1em] text-muted-foreground"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
