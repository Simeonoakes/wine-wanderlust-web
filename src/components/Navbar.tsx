import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logoAsset from "@/assets/logo-new.png.asset.json";

const links: { label: string; href: string }[] = [
  { label: "The Terroir", href: "/#the-terroir" },
  { label: "Your Guide", href: "/#your-guide" },
  { label: "Experiences", href: "/#experiences" },
  { label: "When to Visit", href: "/#seasons" },
  { label: "Corporate", href: "/#corporate-and-consulting" },
  { label: "Sim's Samples", href: "/#sims-samples" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 whitespace-nowrap">
          <img src={logoAsset.url} alt="" className="h-16 w-16 object-contain" />
          <span className="font-signature text-4xl tracking-tight text-primary leading-none">
            in vino veritas
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-5 ml-auto">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-xs uppercase tracking-[0.1em] text-primary whitespace-nowrap"
            >
              {link.label}
            </Link>
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
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-[0.1em] text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
