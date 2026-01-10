import React, { useEffect, useState } from "react";

import SEO from "@/components/helpers/seo";
import { HeroUIProvider } from "@heroui/react";
import { initLenis } from "@/util/lenis";
import AOS from "aos";
import { useRouter } from "next/router";
import PageLoader from "@/components/helpers/page-loader-anim";
import { useIsomorphicLayoutEffect } from "@/util/useIsomorphicLayoutEffect";
import "aos/dist/aos.css";
import "@/styles/scss/styles.scss";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  useIsomorphicLayoutEffect(() => {
    /**
     * Default options
     */
    let options = {
      offset: 120,
      delay: 0,
      easing: "ease",
      // duration: 400,
      disable: false,
      // once: false,
      startEvent: "DOMContentLoaded",
      throttleDelay: 99,
      debounceDelay: 50,
      disableMutationObserver: false,
    };
    const lenis = initLenis();

    AOS.init({
      // options,
      duration: 800,
      once: false,
    });
  }, []);

  // Initial page load
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000); // Fake delay for effect
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // On route change
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setTimeout(() => setLoading(false), 2000); // Delay to show animation
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return (
    <>
      <HeroUIProvider>
        <SEO title={"Meteoriqs"} description={"Meteoriqs"} />

        {loading && <PageLoader onComplete={handleLoaderComplete} />}
        {/* Hide content until loading is complete to prevent "flash" of previous page or unstyled content */}
        <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.3s ease-in-out" }}>
          <Component {...pageProps} />
        </div>
      </HeroUIProvider>
    </>
  );
}
