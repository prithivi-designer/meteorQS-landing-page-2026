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
import React, { forwardRef, useEffect, useState, useRef } from "react";
import { GoArrowRight } from "react-icons/go";

const videos = [
  "/videos/hero-bg-vid.webm",
  "/videos/industry-logistics.webm", // Placeholder for future upload
  "/videos/industry-finance.webm",   // Placeholder for future upload
  "/videos/industry-health.webm",    // Placeholder for future upload
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
    const containerRef = useRef(null);

    const handleVideoEnd = () => {
      const nextIndex = (currentVideo + 1) % videos.length;
      setCurrentVideo(nextIndex);

      if (containerRef.current) {
        const container = containerRef.current;
        const targetX = nextIndex * container.clientWidth;

        // Unlock overflow to allow scrolling
        container.style.overflowX = 'auto';

        container.scrollTo({
          left: targetX,
          behavior: 'smooth',
        });

        // We re-lock overflow-x in the onPlay event of the next video
        // or we could set a timeout, but onPlay is safer/cleaner 
        // as it signifies the transition is effectively "done" for the user thinking
      }
    };

    return (
      <>
        <div ref={sectionRef}></div>
        <section
          ref={opncirHeroSec}
          className="px-[1.5rem] relative w-full min-h-[100dvh] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0A142FC7] before:z-10 overflow-hidden flex flex-col justify-center items-center md:justify-end md:items-start"
        >
          {/* Background Video Slider */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <div
              ref={containerRef}
              className="flex w-full h-full overflow-x-hidden snap-x snap-mandatory scroll-smooth will-change-transform transform-gpu"
              style={{
                scrollbarWidth: "none", // Hide scrollbar for Firefox
                msOverflowStyle: "none", // Hide scrollbar for IE/Edge
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none; /* Hide scrollbar for Chrome/Safari/Opera */
                }
              `}</style>
              {videos.map((src, idx) => (
                <div
                  key={idx}
                  className="w-full h-full relative flex-shrink-0 snap-center"
                >
                  <video
                    className="w-full h-full object-cover"
                    muted
                    autoPlay={idx === 0}
                    onEnded={handleVideoEnd}
                    onPlay={() => {
                      // When a video starts playing, ensure we are locked
                      if (containerRef.current) {
                        containerRef.current.style.overflowX = 'hidden';
                      }
                    }}
                    ref={(el) => {
                      if (el && currentVideo === idx) {
                        el.play().catch((e) =>
                          console.log("Autoplay prevented", e)
                        );
                      } else if (el) {
                        el.pause();
                        el.currentTime = 0;
                      }
                    }}
                    playsInline
                    src={src}
                    type="video/webm"
                    controlsList="nodownload"
                    disablePictureInPicture
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col pb-[6rem] md:pb-[8rem] relative z-20 items-center md:items-start justify-center md:justify-end w-full px-0 md:px-20">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-[1rem] w-full max-w-[90rem] mx-auto md:mx-0">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8 w-full justify-center md:justify-start">

                {/* Headline Group */}
                <h1
                  className="text-white text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] font-bold tracking-tight text-center md:text-left"
                  ref={opncirHeroHeading}
                >
                  Where vision <br />
                  <span className="font-serif italic font-light">meets precision.</span>
                </h1>

                {/* Trust Badge (Mobile: Below, Desktop: Beside/Integrated) */}
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mt-2 md:mb-4">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full border-2 border-[#0A142F] bg-gray-300 relative overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=1" alt="Client" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#0A142F] bg-gray-300 relative overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=5" alt="Client" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#0A142F] bg-gray-300 relative overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=8" alt="Client" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm leading-none">120+</span>
                    <span className="text-gray-300 text-[10px] leading-none">Satisfied Clients</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full max-w-[64rem]">
                <p
                  className="text-gray-300 text-[1rem] sm:text-[1.15rem] leading-[1.5] font-[400] max-w-[32rem] text-center md:text-left"
                  ref={opncirHeroDescription}
                >
                  We craft seamless digital ecosystems that merge aesthetic brilliance with robust engineering. Elevate your brand with meteoriQs.
                </p>

                <Button
                  as={Link}
                  color="default"
                  href="/?scrollTo=contact"
                  className="bg-white text-black px-8 py-6 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors"
                  ref={opncirHeroButton}
                >
                  Start Your Journey <GoArrowRight className="text-xl" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
);

export default HeroContent;
