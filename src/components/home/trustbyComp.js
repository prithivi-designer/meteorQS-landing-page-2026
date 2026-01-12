"use client";
import Image from "next/image";
import React, { forwardRef } from "react";

import trustImg1 from "@/assets/images/trustedBy/trusted-logo-01.png";
import trustImg2 from "@/assets/images/trustedBy/trusted-logo-02.png";
import trustImg3 from "@/assets/images/trustedBy/trusted-logo-03.png";
import trustImg4 from "@/assets/images/trustedBy/trusted-logo-04.png";
import trustImg5 from "@/assets/images/trustedBy/trusted-logo-05.png";
import trustImg6 from "@/assets/images/trustedBy/trusted-logo-06.png";
import trustImg7 from "@/assets/images/trustedBy/trusted-logo-07.png";
import trustImg8 from "@/assets/images/trustedBy/trusted-logo-08.png";
import trustImg9 from "@/assets/images/trustedBy/trusted-logo-09.png";
import trustImg10 from "@/assets/images/trustedBy/trusted-logo-10.png";
import trustImg11 from "@/assets/images/trustedBy/trusted-logo-11.png";
import trustImg12 from "@/assets/images/trustedBy/trusted-logo-12.png";

const trustedLogos = [
  trustImg1,
  trustImg2,
  trustImg3,
  trustImg4,
  trustImg5,
  trustImg6,
  trustImg7,
  trustImg8,
  trustImg9,
  trustImg10,
  trustImg11,
  trustImg12,
];

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
          {/* Original List */}
          {trustedLogos.map((img, idx) => (
            <Image
              key={`orig-${idx}`}
              src={img}
              alt={`Trusted Client ${idx + 1}`}
              className="sm:h-[3.75rem] h-[2.75rem] w-auto trustedBY object-contain"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {trustedLogos.map((img, idx) => (
            <Image
              key={`dup-${idx}`}
              src={img}
              alt={`Trusted Client ${idx + 1}`}
              className="sm:h-[3.75rem] h-[2.75rem] w-auto trustedBY object-contain"
            />
          ))}
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
