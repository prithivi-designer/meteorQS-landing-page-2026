"use client";

import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { client } from "@/lib/contentful";

export async function getStaticProps() {
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
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return {
      props: {
        industries: [],
        metServices: [],
      },
      revalidate: 60,
    };
  }
}

export default function Terms({ industries, metServices }) {
  const handleScrollTo = (section) => {
    const ref = sectionRefs[section];

    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header onNavigate={handleScrollTo} industries={industries} />
      <main className="pt-[4.5rem]">
        <section className="flex min-h-screen flex-col px-[2rem] py-[3rem]">
          <h2 className="text-[2.25rem] font-[800] mb-[1.5rem]">
            Terms and Conditions
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            The Terms and Conditions (“Terms”) set forth hereunder apply to every person who accesses the website https://www.meteoriqs.com/ (“Website”) or any part thereof. You are requested to read the Terms carefully before proceeding. By using this Website, it shall be deemed that you have understood, complied with, and accepted all the Terms mentioned herein.
          </p>

          <h2 className="text-lg font-semibold text-[#FFFFFF] mb-3">
            1. Scope of Term of Use
          </h2>
          <ul className="list-disc pl-6 text-base leading-relaxed text-[#FFFFFF99] mb-4">
            <li className="mb-2">
              The Terms govern the use of the Website and all applications, products, software, and services (“Material”) available via the Website, except to the extent that such Services are the subject of a separate agreement. If you do not agree with any of these Terms, you are prohibited from using or accessing the Website.
            </li>
            <li>
              You confirm that you are above 18 years of age and undertake to use the Website for lawful purposes and in accordance with applicable laws.
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-[#FFFFFF] mb-3">
            2. License and Ownership
          </h2>
          <ul className="list-disc pl-6 text-base leading-relaxed text-[#FFFFFF99] mb-4">
            <li className="mb-2">
              meteoriQs Technologies Private Limited (“meteoriQs”) owns this Website. All content present on this Website is the exclusive property of meteoriQs.
            </li>
            <li className="mb-2">
              The content may be used exclusively for non-commercial and informational purposes. Although we attempt to provide accurate information, meteoriQs assumes no responsibility for the accuracy of any information on the Website.
            </li>
            <li className="mb-2">
              No Material from this Website may be copied, modified, reproduced, republished, uploaded, transmitted, posted, or distributed in any form without prior written permission from meteoriQs.
            </li>
            <li className="mb-2">
              meteoriQs reserves the right, at its sole discretion, to modify, change, add, or remove portions of these Terms at any time without notice. meteoriQs will not be liable for any consequences arising from such changes.
            </li>
            <li>
              The meteoriQs name and logos belong to and are owned by meteoriQs. Users may not use them in any manner without prior written consent.
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-[#FFFFFF] mb-3">
            3. Privacy Policy
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            meteoriQs Privacy Policy applies to the use of this Website regarding any personal information.
          </p>

          <h2 className="text-lg font-semibold text-[#FFFFFF] mb-3">
            4. Disclaimer
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            The information and material on the Website are provided on an “as is” basis. meteoriQs makes no warranties, express or implied, statutory or otherwise, including but not limited to implied warranties of merchantability, satisfactory quality, title, non-infringement, or fitness for a particular purpose.
          </p>

          <h2 className="text-lg font-semibold text-[#FFFFFF] mb-3">
            5. Limitation of Liability
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            meteoriQs, its directors, and employees shall not be liable for any indirect, consequential, exemplary, special, pecuniary, or punitive damages, including loss of profit, production, anticipated savings, goodwill, or business opportunities arising out of the use or inability to use the Website or any information provided on the Website.
          </p>

          <h2 className="text-lg font-semibold text-[#FFFFFF] mb-3">
            6. Indemnification
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            Users agree to indemnify, defend, and hold meteoriQs harmless from and against all losses, expenses, damages, and costs, including reasonable attorneys’ fees, arising out of or related to misuse of the content and services provided on the Website.
          </p>

          <h2 className="text-lg font-semibold text-[#FFFFFF] mb-3">
            7. Governing Law
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            Any claims relating to the meteoriQs Website shall be governed by and construed in accordance with the laws of India and shall be subject to the exclusive jurisdiction of the courts of Chennai.
          </p>

          <h2 className="text-lg font-semibold text-[#FFFFFF] mb-3">
            8. Miscellaneous
          </h2>
          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            These Terms constitute the entire agreement between meteoriQs and the user with respect to the Website. If any provision of these Terms is found to be invalid by a court of competent jurisdiction, the invalidity of that provision shall not affect the validity of the remaining provisions, which shall remain in full force and effect. These Terms shall not be interpreted to confer any rights or remedies on any user or third party.
          </p>

          <p className="text-base leading-relaxed text-[#FFFFFF99] mb-4">
            If users have any questions or comments about meteoriQs Terms, they may contact us at: info@meteoriqs.com.
          </p>
        </section>
      </main>
      <Footer onNavigate={handleScrollTo} metServices={metServices} />
    </>
  );
}
