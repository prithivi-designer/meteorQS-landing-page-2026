"use client";

import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { client } from "@/lib/contentful";

export async function getServerSideProps() {
  try {
    const [resIndustries, resServices] = await Promise.all([
      client.getEntries({ content_type: "meteoriqsIndustries" }),
      client.getEntries({ content_type: "meteoriqsServices" }),
    ]);

    return {
      props: {
        industries: resIndustries.items,
        metServices: resServices.items,
      },
    };
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return {
      props: {
        industries: [],
        metServices: [],
      },
    };
  }
}

export default function PrivacyPolicy({ industries, metServices }) {
  const handleScrollTo = (section) => {
    const ref = sectionRefs?.[section];

    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header onNavigate={handleScrollTo} industries={industries} />
      <main className="pt-[4.5rem]">
        <section className="flex min-h-screen flex-col px-[2rem] py-[3rem]">
          <h4 className="text-[2.25rem] font-[800] mb-[1.5rem]">
            Privacy Policy
          </h4>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            This Privacy Policy represents the assurance from meteoriQs Technologies Private Limited, (here in after referred to as meteoriQs) a company registered under the Indian Companies Act 2003, with its registered office situated at MeteoriQs Towers, 1B, Ground Floor Business Center, SheshadhriNagar, Nedungundram, New Perungalathur, Chennai -127, India which owns this website www.meteoriqs.com and applies to the visitors of this website.
          </p>

          {/* ...rest of your content here... */}

          <h2 className="text-xl font-semibold text-[#FFFFFF] mb-3">
            Clarifications and Grievances
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            For any clarification on any aspects of this policy and to raise any grievances, you may contact through e-mail: info@meteoriqs.com.
          </p>
        </section>
      </main>
      <Footer onNavigate={handleScrollTo} metServices={metServices} />
    </>
  );
}
