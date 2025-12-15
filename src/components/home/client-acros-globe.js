"use client";
import Image from "next/image";
import React, { forwardRef } from "react";
import clientMapping from "@/assets/images/clientGlobe-BG.jpg";

// const ClientAcrossGlobe = ({ globeSec, globeHeading, globeParas }) => {
const ClientAcrossGlobe = forwardRef(
  ({ sectionRef, globeSec, globeHeading, globeParas }, ref) => {
    return (
      <>
        <div ref={sectionRef}></div>
        <section
          ref={globeSec}
          className=" py-[2.5rem] px-[1.5rem] relative w-full  flex flex-col lg:flex-row gap-[1rem] justify-center items-center bg-[#0A142F] "
        >
          <div className="img-box w-full lg:max-w-[calc(100%-35rem)] relative bg-cover bg-center rounded-[2rem] flex items-center justify-center">
            {/* // bg-[url('/images/clientGlobe-BG.jpg')] */}
            <div className="max-w-[50rem] p-[1rem] py-[2rem] flex flex-col justify-center items-start text-left gap-[1.5rem] ">
              <h1
                ref={globeHeading}
                className="text-[1.6rem] md:text-[2rem] font-[500] text-[#ffffff] leading-[1.2]"
              >
                What Makes
                <span className=" text-[2rem] md:text-[3rem] font-[700] flex bg-gradient-to-r from-[#1093FF] to-[#052460] bg-clip-text text-transparent">
                  meteoriQs Exceptional?
                </span>
              </h1>
              {[
                "Our name symbolizes speed and impact—and we live by it. meteoriQs brings together a global team of experts dedicated to delivering high-performance, scalable, and secure solutions across a wide spectrum of technologies.",
                "Our clients trust us for our ability to maintain business continuity with 24/7 operational support across time zones, ensuring their digital ecosystems perform seamlessly—always.",
              ].map((text, i) => (
                <p
                  key={i}
                  ref={(el) => {
                    if (globeParas.current) globeParas.current[i] = el;
                  }}
                  className="text-[1rem] leading-[1.3] font-[500]"
                >
                  {text}
                </p>
              ))}
              <ul className="text-[1rem] leading-[1.3] font-[500] list-none mt-[1rem]">
                <li className="mb-[0.5rem] flex">
                  <span className="w-[4rem] block">GSTIN:</span> 33AAQCM7329B1ZH
                </li>
                <li className="mb-[0.5rem] flex">
                  <span className="w-[4rem] block">CIN:</span>{" "}
                  U62020TN2023PTC159459
                </li>
                <li className="mb-[0.5rem] flex">
                  <span className="w-[4rem] block">TAN:</span> CHEM27420B
                </li>
              </ul>
            </div>
          </div>
          <Image
            src={clientMapping}
            alt="clientMapping"
            className="w-full lg:max-w-[35rem] rounded-[1.875rem] backdrop-blur-sm"
          />
        </section>
      </>
    );
  }
);

export default ClientAcrossGlobe;
