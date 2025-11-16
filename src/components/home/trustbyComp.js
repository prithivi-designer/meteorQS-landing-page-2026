"use client";
import Image from "next/image";
import React, { forwardRef } from "react";

import trustImg1 from "@/assets/images/trustedBy/asgardia.png";
import trustImg2 from "@/assets/images/trustedBy/kanba.png";
import trustImg3 from "@/assets/images/trustedBy/nirastate.png";
import trustImg4 from "@/assets/images/trustedBy/utosia.png";
import trustImg5 from "@/assets/images/trustedBy/velocity9.png";

const TrustBy = forwardRef(({ trustedBySection }, ref) => {
  return (
    <section
      ref={trustedBySection}
      className="px-[1.5rem] py-[2.5rem] relative w-full flex flex-col lg:flex-row gap-[1rem] justify-center items-center bg-[#0A142F]"
    >
      <div className="flex items-center justify-center">
        <h2 className="text-[#D6D6FF] text-[1.2rem] whitespace-nowrap">
          Trusted by
        </h2>
      </div>
      <div className="overflow-hidden w-full py-4">
        <div className="flex animate-marquee gap-[2rem]">
          {[trustImg1, trustImg2, trustImg3, trustImg4, trustImg5].map(
            (img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`trustImg${idx + 1}`}
                className="sm:h-[3.75rem] h-[2.75rem] w-auto trustedBY"
              />
            )
          )}
          {/* Duplicate for seamless loop */}
          {[trustImg1, trustImg2, trustImg3, trustImg4, trustImg5].map(
            (img, idx) => (
              <Image
                key={`dup-${idx}`}
                src={img}
                alt={`trustImg${idx + 1}`}
                className="sm:h-[3.75rem] h-[2.75rem] w-auto trustedBY"
              />
            )
          )}
        </div>
      </div>
      {/* <div className="flex flex-wrap items-center justify-evenly gap-[1rem] w-[calc(100%-5rem)]">
        <Image
          src={trustImg1}
          alt="trustImg1"
          className="sm:h-[3.75rem] h-[2.75rem] w-auto trustedBY"
        />
        <Image
          src={trustImg2}
          alt="trustImg2"
          className="sm:h-[3.75rem] h-[2.75rem] w-auto trustedBY"
        />
        <Image
          src={trustImg3}
          alt="trustImg3"
          className="sm:h-[3.75rem] h-[2.75rem] w-auto trustedBY"
        />
        <Image
          src={trustImg4}
          alt="trustImg4"
          className="sm:h-[3.75rem] h-[2.75rem] w-auto trustedBY"
        />
        <Image
          src={trustImg5}
          alt="trustImg5"
          className="sm:h-[3.75rem] h-[2.75rem] w-auto trustedBY"
        />
      </div> */}
    </section>
  );
});

export default TrustBy;
