"use client";
import Image from "next/image";
import React, { forwardRef } from "react";

// const ClientAcrossGlobe = ({ globeSec, globeHeading, globeParas }) => {
const ClientAcrossGlobe = forwardRef(
  ({ globeSec, globeHeading, globeParas }, ref) => {
    return (
      <section
        ref={globeSec}
        className=" py-[2.5rem] relative w-full flex gap-[1rem] justify-center items-center bg-[#0A142F] "
      >
        <div className="img-box bg-[url('/images/clientGlobe-BG.jpg')] min-h-[40rem] w-full relative bg-cover bg-center rounded-[2rem] flex items-center justify-center">
          <div className="max-w-[50rem] p-[1rem] py-[2rem] flex flex-col justify-center items-center text-center gap-[1.5rem] bg-[#0A0A0AA8] rounded-[1.875rem] backdrop-blur-sm">
            <h1
              ref={globeHeading}
              className="text-[2rem] md:text-[3rem] font-[500] text-[#ffffff] leading-[1.2]"
            >
              <span className="font-[700] flex">
                Delivering Satisfaction to
              </span>
              Clients Across the Globe
            </h1>
            {[
              "To be the global leader in innovative technology solutions, transforming businesses and shaping the digital future across all industries.",
              "We accelerate business growth through cutting-edge AI, blockchain, and software solutions, delivering exceptional value and driving digital transformation.",
              "To establish lasting partnerships with 500+ businesses globally by 2025, while maintaining our commitment to innovation, quality, and client success.",
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
            {/* <p className="text-[1rem] leading-[1.3] font-[500]">
            To be the global leader in innovative technology solutions,
            transforming businesses and shaping the digital future across all
            industries.
          </p>
          <p className="text-[1rem] leading-[1.3] font-[500]">
            We accelerate business growth through cutting-edge AI, blockchain,
            and software solutions, delivering exceptional value and driving
            digital transformation.
          </p>
          <p className="text-[1rem] leading-[1.3] font-[500]">
            To establish lasting partnerships with 500+ businesses globally by
            2025, while maintaining our commitment to innovation, quality, and
            client success.
          </p> */}
          </div>
        </div>
        {/* <Image
        src={clientGlobe}
        alt="clientGlobe"
        className="w-full  "
      /> */}
      </section>
    );
  }
);

export default ClientAcrossGlobe;
