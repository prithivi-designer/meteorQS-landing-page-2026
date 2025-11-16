"use client";
import Image from "next/image";
import React, { forwardRef } from "react";
import brief from "@/assets/images/behindBuild/brief.png";
import reseach from "@/assets/images/behindBuild/reseach.png";
import process from "@/assets/images/behindBuild/process.png";
import support from "@/assets/images/behindBuild/support.png";
const buildData = [
  {
    id: 1,
    title: "Understanding Brief",
    description:
      "We begin by understanding the client’s brief through an online meeting or chat, clarifying goals, requirements, and constraints to set the project direction.",
    image: brief,
  },
  {
    id: 2,
    title: "Brandstorming & Research",
    description:
      "Next, we plan and structure the project based on insights from the discovery phase, conducting research and brainstorming to define the design strategy.",
    image: reseach,
  },
  {
    id: 3,
    title: "Design Process",
    description:
      "We create low-fidelity wireframes to establish structure and flow. Once approved, we move to high-fidelity designs for final visuals and interactions.",
    image: process,
  },
  {
    id: 4,
    title: "Deploy & Support",
    description:
      "Once approved, we deliver the design files and help with deployment, offering post-deployment support for smooth implementation and any necessary adjustments.",
    image: support,
  },
];
const BehindTheBuild = forwardRef(({ sectionRef }, ref) => {
  return (
    <>
      <div ref={sectionRef}></div>
      <section className="px-[1.5rem] py-[2.5rem] relative w-full flex flex-col gap-[1rem] justify-center items-center bg-[#0A142F]">
        <div className="sec-header flex flex-col justify-center items-center">
          <h1 className="text-[1.5rem] md:text-[2.5rem] font-[600] text-[#ffffff] leading-[1.3] mb-[0.5rem]">
            Behind the Build
          </h1>
          <p className="text-[1rem] leading-[1.3] font-[400] max-w-[40rem]">
            From first sketch to final launch, this is the engine behind every
            build.
          </p>
        </div>

        <div className="flex flex-wrap gap-[0.5rem]">
          {buildData?.map((item) => {
            return (
              <div
                key={item?.id}
                className="behindBuild w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.5rem)] bg-[#0B1D3E] rounded-[1rem] p-[0.5rem]"
              >
                <div className="group w-full h-[10rem] flex justify-center items-center bg-[#112A4E] rounded-[1rem] overflow-hidden transition-all duration-300">
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    className="w-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <h5 className="text-[#F8FAFC] text-[1.25rem] font-[600] mt-[1rem] mb-[0.5rem]">
                  {item?.title}
                </h5>
                <p className="text-[#9CA3AF] text-[0.95rem] font-[400] max-w-[16rem]">
                  {item?.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* <Image
        src={clientGlobe}
        alt="clientGlobe"
        className="w-full  "
      /> */}
      </section>
    </>
  );
});

export default BehindTheBuild;
