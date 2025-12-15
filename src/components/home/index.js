import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/util/useIsomorphicLayoutEffect";
import HeroSection from "./hero-section";
import TrustBy from "./trustbyComp";
import ClientAcrossGlobe from "./client-acros-globe";
import BehindTheBuild from "./behind-the-build";
import GlobalClients from "./global-client";
import TechStack from "./techstack";
import FAQPage from "./faq";
import CaseStudies from "./casestudy";
import Testimonials from "./testimonial";
import LatestPosts from "./latestblog";
import ClientMapping from "./client-mapping";
import HappyCustomers from "./happy-employee";

export default function LandingPg({
  blogs,
  casestudies,
  metServices,
  sectionRefs,
}) {
  // console.log("sectionRefssectionRefssectionRefssectionRefs", sectionRefs);
  gsap.registerPlugin(ScrollTrigger);
  // Hero section animation
  const opncirHeroSec = useRef(null);
  const opncirHeroHeading = useRef(null);
  const opncirHeroDescription = useRef(null);
  const opncirHeroButton = useRef(null);
  const trustedBySection = useRef(null);

  // ClientAcrossGlobe refs
  const globeSec = useRef(null);
  const globeHeading = useRef(null);
  const globeParas = useRef([]);

  // Happy Employees refs
  const happyEmpSec = useRef(null);
  const happyEmpHeading = useRef(null);
  const happyEmpParas = useRef([]);

  const mm = ScrollTrigger.matchMedia();

  useIsomorphicLayoutEffect(() => {
    const mm = ScrollTrigger.matchMedia();

    const ctx = gsap.context(() => {
      // On-load animations

      gsap.fromTo(
        opncirHeroHeading.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1.2, delay: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        [opncirHeroDescription.current, opncirHeroButton.current],
        { opacity: 0, scale: 1.1, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: 1,
          ease: "power3.out",
        }
      );

      // Scroll animations (desktop only)
      mm.add("(min-width: 768px)", () => {
        // Hero section animation

        gsap.fromTo(
          opncirHeroHeading.current,
          { opacity: 1, scale: 1 },
          {
            opacity: 0.2,
            scale: 0.8,
            scrollTrigger: {
              trigger: opncirHeroSec.current,
              start: "top top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          opncirHeroDescription.current,
          { opacity: 1, scale: 1 },
          {
            opacity: 0.2,
            scale: 0.8,
            scrollTrigger: {
              trigger: opncirHeroSec.current,
              start: "top top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          [opncirHeroDescription.current, opncirHeroButton.current],
          { opacity: 1, scale: 1 },
          {
            opacity: 0.2,
            scale: 0.8,
            scrollTrigger: {
              trigger: opncirHeroSec.current,
              start: "top top",
              scrub: true,
            },
          }
        );
        gsap.fromTo(
          ".trustedBY",
          { opacity: 0.05, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 2.5,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".trustedBY",
              start: "top 100%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );

        // === CLIENT ACROSS GLOBE ===
        gsap.fromTo(
          globeHeading.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: globeSec.current,
              start: "top 75%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          globeParas.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: globeSec.current,
              start: "top 70%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
          ".behindBuild",
          { opacity: 0.05, y: -100 },
          {
            opacity: 1,
            y: 0,
            duration: 2.5,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".behindBuild",
              start: "top 100%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
          ".globalClient",
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 2.5,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".globalClient",
              start: "top 100%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
          ".latestBlog",
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 2.5,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".latestBlog",
              start: "top 100%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );

        // === Happy Employee ===
        gsap.fromTo(
          happyEmpHeading.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: happyEmpHeading.current,
              start: "top 100%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          happyEmpParas.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: happyEmpParas.current,
              start: "top 70%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
        // happyEmpImage
        gsap.fromTo(
          ".happyEmpImage",
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 2.5,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".happyEmpImage",
              start: "top 100%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
          ".ClientMapImage",
          { opacity: 0, y: 0, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".ClientMapImage",
              start: "top 100%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    // Ensure recalculation so triggers fire immediately
    setTimeout(() => ScrollTrigger.refresh(), 50);

    return () => {
      ctx.revert();
      mm.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main>
      <HeroSection
        sectionRef={sectionRefs?.home}
        opncirHeroSec={opncirHeroSec}
        opncirHeroHeading={opncirHeroHeading}
        opncirHeroDescription={opncirHeroDescription}
        opncirHeroButton={opncirHeroButton}
      />
      <TrustBy trustedBySection={trustedBySection} />
      <ClientAcrossGlobe
        sectionRef={sectionRefs?.about}
        globeSec={globeSec}
        globeHeading={globeHeading}
        globeParas={globeParas}
      />
      <BehindTheBuild />
      <GlobalClients
        sectionRef={sectionRefs?.services}
        metServices={metServices}
      />
      <Testimonials sectionRef={sectionRefs?.testimonials} />
      <TechStack />
      <LatestPosts sectionRef={sectionRefs?.blog} blogs={blogs} />
      <HappyCustomers
        happyEmpSec={happyEmpSec}
        happyEmpHeading={happyEmpHeading}
        happyEmpParas={happyEmpParas}
      />
      <ClientMapping happyEmpSec={happyEmpSec} />
      <CaseStudies
        sectionRef={sectionRefs?.caseStudies}
        casestudies={casestudies}
      />
      <FAQPage sectionRef={sectionRefs?.faq} />
    </main>
  );
}
