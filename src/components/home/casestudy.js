// // app/case-studies/page.tsx
"use client";

import { useState, forwardRef } from "react";
import Image from "next/image";
import { CgArrowTopRightO } from "react-icons/cg";
import Link from "next/link";

const CaseStudies = forwardRef(({ sectionRef, casestudies }, ref) => {
  const [activeId, setActiveId] = useState(1);
  return (
    <>
      <div ref={sectionRef}></div>
      <div className="bg-[#0c1b3a] text-white px-[1.5rem] py-[3rem]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
          <div className="flex justify-center gap-4">
            <ul className="case_study_lst">
              {casestudies.map((cs) => {
                const cover = cs?.fields.coverImage;
                return (
                  <li
                    className={`case_study_bx ${
                      activeId === cs?.sys?.id ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveId(cs?.sys?.id)}
                    key={cs?.sys?.id}
                  >
                    {cover && cover?.fields?.file?.url && (
                      <figure>
                        <Image
                          src={`https:${cover?.fields?.file?.url}`}
                          alt={cover.fields.title || cs.fields.title}
                          width={400}
                          height={250}
                        />
                      </figure>
                    )}
                    <h3>{cs.fields.title}</h3>
                    <div className="case_study_cntnt">
                      <h3>{cs.fields.title}</h3>
                      <p>{cs.fields.description}</p>
                    </div>

                    <Link href={`/causestudies/${cs?.fields.slug}`}>
                      <CgArrowTopRightO />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});
export default CaseStudies;
