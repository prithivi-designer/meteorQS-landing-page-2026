// ✅ OK for Next.js project (ES Modules)
import Lenis from "lenis";

let lenis;

export const initLenis = () => {
  if (!lenis) {
    lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      lerp: 0.08,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }

  return lenis;
};

export const getLenisInstance = () => lenis;
