import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * On hash change, fades the page out, jumps instantly to the target,
 * then fades it back in. Provides a smooth crossfade between sections
 * rather than a long scroll animation.
 */
const HashScroll = () => {
  const { pathname, hash } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    const root = document.documentElement;

    const jumpTo = () => {
      if (hash) {
        const id = hash.replace("#", "");
        const tryScroll = (attempt = 0) => {
          const el = document.getElementById(id);
          if (el) {
            // disable smooth-scroll for an instant jump
            const prev = root.style.scrollBehavior;
            root.style.scrollBehavior = "auto";
            el.scrollIntoView({ behavior: "auto", block: "start" });
            root.style.scrollBehavior = prev;
          } else if (attempt < 10) {
            setTimeout(() => tryScroll(attempt + 1), 80);
          }
        };
        tryScroll();
      } else {
        const prev = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";
        window.scrollTo({ top: 0, behavior: "auto" });
        root.style.scrollBehavior = prev;
      }
    };

    if (firstRender.current) {
      firstRender.current = false;
      jumpTo();
      return;
    }

    // Fade out, jump, fade back in
    const body = document.body;
    body.style.transition = "opacity 300ms ease";
    body.style.opacity = "0";

    const t = setTimeout(() => {
      jumpTo();
      requestAnimationFrame(() => {
        body.style.opacity = "1";
      });
    }, 300);

    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
};

export default HashScroll;
