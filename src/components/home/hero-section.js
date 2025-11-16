// "use client";
// import { Button, Link } from "@heroui/react";
// import React, { forwardRef } from "react";
// import { GoArrowRight } from "react-icons/go";

// const HeroContent = forwardRef(
//   (
//     {
//       opncirHeroSec,
//       opncirHeroHeading,
//       opncirHeroDescription,
//       opncirHeroButton,
//     },
//     ref
//   ) => {
//     return (
//       <section
//         ref={opncirHeroSec}
//         className="px-[1.5rem] relative w-full min-h-[100dvh] before before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0A142FC7] before:z-10 overflow-hidden flex justify-center items-center"
//       >
//         <video
//           className="absolute h-full w-full object-cover top-0 left-0"
//           loop
//           muted
//           autoPlay
//           src={"/videos/hero-bg-vid.mp4"}
//           playsInline
//           type="video/mp4"
//         ></video>
//         <div className="flex flex-col md:py-[8rem] md:pt-[10rem] pt-[6rem] py-[4rem] relative z-20">
//           <div className="flex flex-col items-center text-center gap-[1rem] max-w-[54rem] mx-auto relative z-10">
//             <h1
//               className="text-[#1093FF] text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.1] font-[700]"
//               ref={opncirHeroHeading}
//             >
//               Agile Minds{" "}
//               <span className="flex text-[#ffffff]">Smarter Solutions</span>
//             </h1>

//             <p
//               className="text-[#D6D6FF] text-[1rem] sm:text-[1.15rem] leading-[1.4] font-[500] mb-[1.25rem]"
//               ref={opncirHeroDescription}
//             >
//               We specialize in innovative solutions designed for various
//               industries, addressing present challenges while anticipating
//               future needs to enhance growth and efficiency for our clients.
//             </p>
//             <Button
//               as={Link}
//               color="default"
//               href="/"
//               className="text-[#052460] bg-[#FFFFFF] px-[2rem] py-[0.75rem] h-auto text-[1rem] font-[400]"
//               ref={opncirHeroButton}
//             >
//               Let’s Talk <GoArrowRight className="text-[1.2rem]" />
//             </Button>
//           </div>
//         </div>
//       </section>
//     );
//   }
// );

// export default HeroContent;

"use client";
import { Button, Link } from "@heroui/react";
import React, { forwardRef, useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";

const videos = [
  "/videos/hero-bg-vid.mp4",
  "/videos/hero-bg-vid.mp4",
  "/videos/hero-bg-vid.mp4",
];

const HeroContent = forwardRef(
  (
    {
      sectionRef,
      opncirHeroSec,
      opncirHeroHeading,
      opncirHeroDescription,
      opncirHeroButton,
    },
    ref
  ) => {
    const [currentVideo, setCurrentVideo] = useState(0);

    // Auto-change videos every 10 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      }, 10000);
      return () => clearInterval(interval);
    }, []);

    return (
      <>
        <div ref={sectionRef}></div>
        <section
          ref={opncirHeroSec}
          className="px-[1.5rem] relative w-full min-h-[100dvh] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0A142FC7] before:z-10 overflow-hidden flex justify-center items-center"
        >
          {/* Background videos with fade effect */}
          {videos.map((src, idx) => (
            <video
              key={idx}
              className={`absolute h-full w-full object-cover top-0 left-0 transition-opacity duration-1000 ${
                currentVideo === idx ? "opacity-100" : "opacity-0"
              }`}
              loop
              muted
              autoPlay={currentVideo === idx}
              playsInline
              src={src}
              type="video/mp4"
              controlsList="nodownload"
              disablePictureInPicture
            />
          ))}

          {/* Hero Content */}
          <div className="flex flex-col md:py-[8rem] md:pt-[10rem] pt-[6rem] py-[4rem] relative z-20">
            <div className="flex flex-col items-center text-center gap-[1rem] max-w-[64rem] mx-auto">
              <h1
                className="text-[#1093FF] text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.1] font-[700]"
                ref={opncirHeroHeading}
              >
                Empowering Business{" "}
                <span className="flex text-[#ffffff]">
                  Transformation through Strategic Innovation
                </span>
              </h1>

              <p
                className="text-[#D6D6FF] text-[1rem] sm:text-[1.15rem] leading-[1.4] font-[500] mb-[1.25rem]"
                ref={opncirHeroDescription}
              >
                At meteoriQs, we leverage advanced strategies and cutting-edge
                technologies to help businesses navigate challenges, seize new
                opportunities, and outperform competitors in a fast-evolving
                digital landscape.
              </p>

              <Button
                as={Link}
                color="default"
                href="/"
                className="text-[#052460] bg-[#FFFFFF] px-[2rem] py-[0.75rem] h-auto text-[1rem] font-[400]"
                ref={opncirHeroButton}
              >
                Let’s Talk <GoArrowRight className="text-[1.2rem]" />
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }
);

export default HeroContent;
