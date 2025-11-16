// // app/case-studies/page.tsx
"use client";

import { useState } from "react";
import { Card } from "@heroui/react";
import Image from "next/image";
import casestudy1 from "@/assets/images/CaseStudies/image1.jpg";
import casestudy2 from "@/assets/images/CaseStudies/image2.jpg";
import casestudy3 from "@/assets/images/CaseStudies/image3.jpg";
import casestudy4 from "@/assets/images/CaseStudies/image4.jpg";
import { CgArrowTopRightO } from "react-icons/cg";

const caseStudies = [
  {
    id: 1,
    title: "Nunc Est Semper Erim, No Semper Erim",
    description:
      "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio et enim. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio et enim.",
    image: casestudy1,
  },
  {
    id: 2,
    title: "Nunc Est Semper Erim, No Semper Erim",
    description:
      "Short description about case study 2 with essential highlights only.",
    image: casestudy2,
  },
  {
    id: 3,
    title: "Nunc Est Semper Erim, No Semper Erim",
    description:
      "Short description about case study 3 with essential highlights only.",
    image: casestudy3,
  },
  {
    id: 4,
    title: "Nunc Est Semper Erim, No Semper Erim",
    description:
      "Short description about case study 4 with essential highlights only.",
    image: casestudy4,
  },
];

export default function CaseStudies() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="bg-[#0c1b3a] text-white px-[1.5rem] py-[3rem]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
        <div className="flex justify-center gap-4">
          {/* {caseStudies.map((cs) => (
            <Card
              key={cs.id}
              isPressable
              onMouseEnter={() => setActiveId(cs.id)}
              className={`overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer ${
                activeId === cs.id
                  ? "col-span-2 md:col-span-2 bg-white text-black"
                  : "bg-[#0B1D3E] hover:bg-[#0B1D3E]"
              }`}
            >
              <div
                className={`flex flex-col h-full ${
                  activeId === cs.id ? "p-4 bg-[#0B1D3E]" : "p-3"
                }`}
              >
                {activeId === cs.id ? (
                  <>
                    <div className="flex">
                      <div className="text-left">
                        <h3 className="font-semibold text-sm md:text-[0.9rem] mb-2 line-clamp-2 text-[#FFFFFF]">
                          {cs.title}
                        </h3>
                        <p className="text-sm text-[#FFFFFF99] mb-4">
                          {cs.description}
                        </p>
                      </div>
                      <div className="relative">
                        <Image
                          src={cs.image}
                          alt={cs.title}
                          width={400}
                          height={200}
                          className={`rounded-lg object-cover transition-all duration-500 ${
                            activeId === cs.id
                              ? "min-h-40 min-w-40 mb-0"
                              : "min-h-24 mb-0"
                          }`}
                        />
                        <CgArrowTopRightO className="absolute bottom-[1rem] right-[1rem] text-[#ffffff]" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold text-[0.75rem] md:text-[0.8rem] mb-2 line-clamp-2 text-left">
                      {cs.title}
                    </h3>
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      width={400}
                      height={200}
                      className={`rounded-lg object-cover transition-all duration-500 ${
                        activeId === cs.id ? "h-40 mb-4" : "h-24 mb-2"
                      }`}
                    />
                  </>
                )}
              </div>
            </Card>
          ))} */}
          <ul className="case_study_lst">
            {caseStudies.map((cs) => (
              // <Card
              //   key={cs.id}
              //   isPressable
              //   onMouseEnter={() => setActiveId(cs.id)}
              //   className={`overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer ${
              //     activeId === cs.id
              //       ? "col-span-2 md:col-span-2 bg-white text-black"
              //       : "bg-[#0B1D3E] hover:bg-[#0B1D3E]"
              //   }`}
              // >
              //   <div
              //     className={`flex flex-col h-full ${
              //       activeId === cs.id ? "p-4 bg-[#0B1D3E]" : "p-3"
              //     }`}
              //   > </div></Card>
              // <div
              //   className="group flex bg-cover transition-all duration-300 w-[7rem] h-[12rem] hover:w-full hover:max-w-[20rem] rounded-lg p-4 cursor-pointer"
              //   style={{ backgroundImage: `url(${cs.image.src})` }}
              // >
              //   <div className="text-left">
              //     <h3 className="font-semibold text-sm md:text-[0.9rem] mb-2 line-clamp-2 text-[#FFFFFF] transition-all duration-300 ">
              //       {cs.title}
              //     </h3>
              //     <p className="text-sm text-[#FFFFFF99] mb-4 invisible group-hover:visible transition-all duration-300 ">
              //       {cs.description}
              //     </p>
              //   </div>

              // </div>
              <li
                className={`case_study_bx ${
                  activeId === cs.id ? "active" : ""
                }`}
                onMouseEnter={() => setActiveId(cs.id)}
              >
                <figure>
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    // width={400}
                    // height={200}
                    // className={`rounded-lg object-cover transition-all duration-500 ${
                    //   activeId === cs.id
                    //     ? "min-h-40 min-w-40 mb-0"
                    //     : "min-h-24 mb-0"
                    // }`}
                  />
                </figure>
                <h3>{cs.title}</h3>
                <div className="case_study_cntnt">
                  <h3>{cs.title}</h3>
                  <p>{cs.description}</p>
                </div>
                <a href="/ai-development-company/" target="_blank"></a>
              </li>
            ))}
          </ul>

          {/* 
          
          <Card
              key={cs.id}
              isPressable
              onMouseEnter={() => setActiveId(cs.id)}
              className={`overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer ${
                activeId === cs.id
                  ? "col-span-2 md:col-span-2 bg-white text-black"
                  : "bg-[#0B1D3E] hover:bg-[#0B1D3E]"
              }`}
            >
              <div
                className={`flex flex-col h-full ${
                  activeId === cs.id ? "p-4 bg-[#0B1D3E]" : "p-3"
                }`}
              >
                {activeId === cs.id ? (
                  <>
                    <div className="flex">
                      <div className="text-left">
                        <h3 className="font-semibold text-sm md:text-[0.9rem] mb-2 line-clamp-2 text-[#FFFFFF]">
                          {cs.title}
                        </h3>
                        <p className="text-sm text-[#FFFFFF99] mb-4">
                          {cs.description}
                        </p>
                      </div>
                      <div className="relative">
                        <Image
                          src={cs.image}
                          alt={cs.title}
                          width={400}
                          height={200}
                          className={`rounded-lg object-cover transition-all duration-500 ${
                            activeId === cs.id
                              ? "min-h-40 min-w-40 mb-0"
                              : "min-h-24 mb-0"
                          }`}
                        />
                        <CgArrowTopRightO className="absolute bottom-[1rem] right-[1rem] text-[#ffffff]" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold text-[0.75rem] md:text-[0.8rem] mb-2 line-clamp-2 text-left">
                      {cs.title}
                    </h3>
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      width={400}
                      height={200}
                      className={`rounded-lg object-cover transition-all duration-500 ${
                        activeId === cs.id ? "h-40 mb-4" : "h-24 mb-2"
                      }`}
                    />
                  </>
                )}
              </div>
            </Card>
            */}
        </div>
      </div>
    </div>
  );
}

// app/case-studies/page.tsx
// app/case-studies/page.tsx
// "use client";

// import { Card } from "@heroui/react";
// import Image from "next/image";
// import { CgArrowTopRightO } from "react-icons/cg";

// import casestudy1 from "@/assets/images/CaseStudies/image1.jpg";
// import casestudy2 from "@/assets/images/CaseStudies/image2.jpg";
// import casestudy3 from "@/assets/images/CaseStudies/image3.jpg";
// import casestudy4 from "@/assets/images/CaseStudies/image4.jpg";

// const caseStudies = [
//   {
//     id: 1,
//     title: "Nunc Est Semper Erim, No Semper Erim",
//     description:
//       "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio et enim. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio et enim.",
//     image: casestudy1,
//   },
//   {
//     id: 2,
//     title: "Nunc Est Semper Erim, No Semper Erim",
//     description:
//       "Short description about case study 2 with essential highlights only.",
//     image: casestudy2,
//   },
//   {
//     id: 3,
//     title: "Nunc Est Semper Erim, No Semper Erim",
//     description:
//       "Short description about case study 3 with essential highlights only.",
//     image: casestudy3,
//   },
//   {
//     id: 4,
//     title: "Nunc Est Semper Erim, No Semper Erim",
//     description:
//       "Short description about case study 4 with essential highlights only.",
//     image: casestudy4,
//   },
// ];

// export default function CaseStudies() {
//   return (
//     <div className="bg-[#0c1b3a] text-white px-[1.5rem] py-[3rem]">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>

//         <div className="grid md:grid-cols-5 gap-4">
//           {caseStudies.map((cs) => (
//             <Card
//               key={cs.id}
//               className="overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer bg-[#0B1D3E] group hover:col-span-2"
//             >
//               <div className="flex flex-col h-full p-3 transition-all duration-500 group-hover:p-4">
//                 {/* Title always visible */}
//                 <h3 className="font-semibold text-[0.75rem] md:text-[0.9rem] mb-2 line-clamp-2 text-left transition-colors duration-300 group-hover:text-white">
//                   {cs.title}
//                 </h3>

//                 {/* Image */}
//                 <Image
//                   src={cs.image}
//                   alt={cs.title}
//                   width={400}
//                   height={200}
//                   className="rounded-lg object-cover transition-all duration-500 h-24 mb-2 group-hover:h-40"
//                 />

//                 {/* Details (animate in on hover) */}
//                 <div className="opacity-0 translate-y-4 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-60">
//                   <p className="text-sm text-[#FFFFFF99] mb-4">
//                     {cs.description}
//                   </p>
//                   <div className="relative">
//                     <CgArrowTopRightO className="absolute bottom-[-0.5rem] right-[1rem] text-white text-xl" />
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
