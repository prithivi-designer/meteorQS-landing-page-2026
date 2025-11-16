"use client";

import React, { useRef } from "react";
// import LandingPg from "@/components/home";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
// import ZoomImageSection from "@/component/zoom-hero";
import dynamic from "next/dynamic";
import { client } from "@/lib/contentfull";
// Import it client-only
const LandingPg = dynamic(() => import("@/components/home"), {
  ssr: false,
});
export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "meteoriqsBlog" });
  const resCasestudy = await client.getEntries({
    content_type: "meteoriqsCasestudy",
  });
  const resIndustries = await client.getEntries({
    content_type: "meteoriqsIndustries",
  });
  const resServices = await client.getEntries({
    content_type: "meteoriqsServices",
  });
  return {
    props: {
      blogs: res.items,
      casestudies: resCasestudy.items,
      industries: resIndustries.items,
      metServices: resServices.items,
    },
  };
}

export default function Home({ blogs, casestudies, industries, metServices }) {
  // console.log("metServices", metServices);
  // Add near your other useRefs

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const testimonialsRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const blogSectionRef = useRef(null);
  const faqRef = useRef(null);

  const sectionRefs = {
    home: homeSectionRef,
    about: aboutSectionRef,
    testimonials: testimonialsRef,
    caseStudies: caseStudiesRef,
    services: servicesSectionRef,
    blog: blogSectionRef,
    faq: faqRef,
  };

  const handleScrollTo = (section) => {
    console.log("sectionsection", section);
    const ref = sectionRefs[section];
    console.log("sectionsection", ref);

    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <Header onNavigate={handleScrollTo} industries={industries} />
      <LandingPg
        blogs={blogs}
        casestudies={casestudies}
        sectionRefs={sectionRefs}
      />
      <Footer onNavigate={handleScrollTo} metServices={metServices} />
    </>
  );
}
