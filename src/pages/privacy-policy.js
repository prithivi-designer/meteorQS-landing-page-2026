"use client";

import React, { useRef } from "react";
// import LandingPg from "@/components/home";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
// import ZoomImageSection from "@/component/zoom-hero";
import dynamic from "next/dynamic";
import { client } from "@/lib/contentful";

export async function getStaticProps() {
  const resIndustries = await client.getEntries({
    content_type: "meteoriqsIndustries",
  });
  const resServices = await client.getEntries({
    content_type: "meteoriqsServices",
  });
  return {
    props: {
      industries: resIndustries.items,
      metServices: resServices.items,
    },
    revalidate: 60, // ISR: regenerate the page at most every 60 seconds
  };
}

export default function Home({ industries, metServices }) {
  // console.log("metServices", metServices);

  const handleScrollTo = (section) => {
    const ref = sectionRefs[section];

    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <Header onNavigate={handleScrollTo} industries={industries} />
      <main className="pt-[4.5rem] ">
        <section className="flex min-h-screen flex-col px-[2rem] py-[3rem]">
          <h4 className="text-[2.25rem] font-[800] mb-[1.5rem]">
            {" "}
            Privacy policy
          </h4>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            This Privacy Policy represents the assurance from meteoriQs
            Technologies Private Limited, (here in after referred to as
            meteoriQs) a company registered under the Indian Companies Act 2003,
            with its registered office situated at MeteoriQs Towers, 1B, Ground
            Floor Business Center, SheshadhriNagar, Nedungundram, New
            Perungalathur, Chennai -127, India which owns this website
            www.meteoriqs.com and applies to the visitors of this website.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            This policy was last revised on the date mentioned above and
            confirms to the best industry practices and the laws applicable in
            India.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            meteoriQs values the right to privacy of individuals whose personal
            information is collected, generated, processed, transmitted or
            otherwise accessed by meteoriQs as a part of any of our activities
            including maintaining this website.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            meteoriQs recognizes that this website may be accessible on the
            Internet to residents and citizens of persons outside India who may
            have different perceptions and rights of Privacy as is relevant to
            their place of residence and citizenship. meteoriQs adopts the
            generally accepted principles of Privacy recognized as essential in
            the privacy laws across the globe, but operates within the legal
            jurisdiction of India. Hence in the event of any conflict of
            jurisdiction, any interpretation would be strictly under the laws
            applicable in India.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            In particular, meteoriQs has put in place reasonable managerial,
            operational, technical, legal, behavioural control measures to
            comply with the provisions of the Privacy and Security obligations
            under Information Technology Act 2000 and the obligations
            recommended under EU GDPR.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            No Personal information is either used or disclosed by meteoriQs
            except as required or as permitted or as authorized and this policy
            captures and presents the collection and use of personal information
            from the visitors of this website.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            This website is accessible to any person connected to the Internet
            using a browser software either on a computer or a mobile, through
            one or more internet service providers. The intermediary internet
            service providers may have their own policies for collection and use
            of your personal information on which meteoriQs has no knowledge or
            control and hence such use is not within the scope of this policy.
          </p>
          <h2 className="text-xl font-semibold text-[#FFFFFF] mb-3">
            What Information is Collected
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            meteoriQs does not collect any personal information identifiable
            with any individual when they visit the website, view the pages and
            exit.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            However, the webserver does collect the IP address from which the
            connection is established. The website does not use any “Persistent
            Cookies” which track the user’s identity and behaviour after he
            exists from the website. Your browser may however keep a track of
            the websites visited as a part of its memory.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            When you visit a website, the server may recognize some technical
            information about the “referral site” from which you entered the
            website, the browser and operating system you may be using and the
            browser settings. These are essential for the management of the
            browsing session and to enhance the usability of the website. For
            the purpose of such monitoring of your activity without
            identification and only during the time you are browsing the
            website, the server may use “Session Cookies” which get
            automatically deleted after you exit from the website.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            When you register yourself specifically for any service on the
            website or contact the company for any service enquiry or for
            employment or for any other purpose, you may share your contact
            information which is information that you provide voluntarily
            seeking the relevant information or service. The contact information
            provided by you for seeking any business services is considered as
            “Business Contact information” and not classified as “Personal
            Information”. In such instances, you are advised to use only such
            contact information that you consider as “Business related” and not
            share your personal e-mail or mobile or phone number or residential
            address unless you consider them as “Business Information”.
          </p>

          <h2 className="text-xl font-semibold text-[#FFFFFF] mb-3">
            How the Information is Used
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            The contact information collected during your visit to the website
            which may be considered as “Personal Information” would be used for
            the specific purpose for which the information was provided by you.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            The technical information automatically collected by the web server
            such as the type of browser or operating system used by you or the
            entry and exit pages and other technical information if any
            including the IP address are used for statistical purpose and to
            improve the usability of the website.
          </p>

          <h2 className="text-xl font-semibold text-[#FFFFFF] mb-3">
            How Long the Information is Retained
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            The statistical information collected during your visit does not
            possess identity of the visitor and may be used as such for creating
            reports on the usability of the website and to improve the user
            experience. Such information may be retained as long as the
            statistical information remains relevant.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            The session cookies get automatically deleted when you exit the
            website.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            The service specific information collected will be retained as long
            as the purpose for which the collection was made remains relevant
            and there is a legitimate interest of meteoriQs to retain the
            information.
          </p>

          <h2 className="text-xl font-semibold text-[#FFFFFF] mb-3">
            Clarifications and Grievances
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            For any clarification on any aspects of this policy and to raise any
            grievances, you may contact through e-mail: info@meteoriqs.com.
          </p>
        </section>
      </main>
      <Footer onNavigate={handleScrollTo} metServices={metServices} />
    </>
  );
}
