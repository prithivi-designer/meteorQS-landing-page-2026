"use client";

import React, { useRef } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import dynamic from "next/dynamic";
import { client } from "@/lib/contentful";

// LandingPg imported client-side only
const LandingPg = dynamic(() => import("@/components/home"), {
  ssr: false,
});

export async function getServerSideProps() {
  try {
    const [resBlogs, resCasestudy, resIndustries, resServices] =
      await Promise.all([
        client.getEntries({ content_type: "meteoriqsBlog" }),
        client.getEntries({ content_type: "meteoriqsCasestudy" }),
        client.getEntries({ content_type: "meteoriqsIndustries" }),
        client.getEntries({ content_type: "meteoriqsServices" }),
      ]);

    return {
      props: {
        blogs: resBlogs.items.filter((b) => b.fields.slug),
        casestudies: resCasestudy.items,
        industries: resIndustries.items,
        metServices: resServices.items,
      },
    };
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return {
      props: {
        blogs: [],
        casestudies: [],
        industries: [],
        metServices: [],
      },
    };
  }
}

export default function Home({ blogs, casestudies, industries, metServices }) {
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
    const ref = sectionRefs[section];
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
        metServices={metServices}
        sectionRefs={sectionRefs}
      />
      <Footer onNavigate={handleScrollTo} metServices={metServices} />
    </>
  );
}
