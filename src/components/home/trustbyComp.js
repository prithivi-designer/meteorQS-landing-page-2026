"use client";
import Image from "next/image";
import React, { forwardRef } from "react";

import trustImg1 from "@/assets/images/trustedBy/trusted-logo-01.jpg";
import trustImg2 from "@/assets/images/trustedBy/trusted-logo-02.jpg";
import trustImg3 from "@/assets/images/trustedBy/trusted-logo-03.jpg";
import trustImg4 from "@/assets/images/trustedBy/trusted-logo-04.jpg";
import trustImg5 from "@/assets/images/trustedBy/trusted-logo-05.jpg";
import trustImg6 from "@/assets/images/trustedBy/trusted-logo-06.jpg";
import trustImg7 from "@/assets/images/trustedBy/trusted-logo-07.jpg";
import trustImg8 from "@/assets/images/trustedBy/trusted-logo-08.jpg";
import trustImg9 from "@/assets/images/trustedBy/trusted-logo-09.jpg";
import trustImg10 from "@/assets/images/trustedBy/trusted-logo-10.jpg";

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
