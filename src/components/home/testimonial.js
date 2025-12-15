// app/testimonials/page.tsx
"use client";

import { Card } from "@heroui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useRef, forwardRef } from "react";
import videoPoster1 from "@/assets/images/review/review1.jpg";
import testiImage from "@/assets/images/review/review1.jpg";

const testimonials = [
  {
    type: "video",
    videoThumbnail: videoPoster1,
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    name: "Jane Smith",
    company: "XYZ Ltd",
  },
  {
    type: "image",
    image: testiImage,
    quote:
      "Working with this team has been a game changer for us. Their expertise and dedication have truly transformed our business!",
    name: "Seema Gopal",
    company: "Mint Tree",
  },
  {
    type: "text",
    quote:
      " We thank Meteoriqs for the wonderful job in helping us develop our Mobile Application. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.",
    name: "Elumalai Munuswamy",
    company: "Founder, Fixit Group",
  },
  {
    type: "video",
    videoThumbnail: videoPoster1,
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    name: "John Doe",
    company: "ABC Corp",
  },
];

const Testimonials = forwardRef(({ sectionRef }, ref) => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef([]);

  const handleVideoToggle = (idx) => {
    const currentVideo = videoRefs.current[idx];
    const previousVideo =
      playingVideo !== null ? videoRefs.current[playingVideo] : null;

    // 🔹 If same video clicked → stop it
    if (playingVideo === idx) {
      if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
      }
      setPlayingVideo(null);
      return;
    }

    // 🔹 Stop previous video if playing
    if (previousVideo) {
      previousVideo.pause();
      previousVideo.currentTime = 0;
    }

    // 🔹 Play new video
    if (currentVideo) {
      currentVideo.play();
      setPlayingVideo(idx);

      // Reset when video ends
      currentVideo.onended = () => {
        setPlayingVideo(null);
      };
    }
  };

  return (
    <>
      <div ref={sectionRef}></div>
      <div className="bg-[#0c1b3a] text-white px-0 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our clients come from diverse industries, each facing unique
            challenges. Here’s what they say about working with us:
          </h2>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <Card className="rounded-2xl overflow-hidden bg-white/10 h-full flex flex-col justify-center items-center">
                  {/* VIDEO TESTIMONIAL */}
                  {t.type === "video" && (
                    <div className="relative w-full h-72">
                      <video
                        controlsList="nodownload"
                        disablePictureInPicture
                        ref={(el) => (videoRefs.current[idx] = el)}
                        src={t.videoUrl}
                        className="w-full h-full object-cover"
                        controls={playingVideo === idx}
                        onEnded={() => setPlayingVideo(null)} // reset on end
                        onClick={() => {
                          const currentVideo = videoRefs.current[idx];
                          if (currentVideo) {
                            currentVideo.pause();
                            currentVideo.currentTime = 0; // reset to start
                          }
                          setPlayingVideo(null); // switch back to play button overlay
                        }}
                      />

                      {/* Show play button if not playing */}
                      {playingVideo !== idx && (
                        <>
                          <Image
                            src={t.videoThumbnail}
                            alt={t.name}
                            fill
                            className="object-cover absolute inset-0"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button
                              onClick={() => handleVideoToggle(idx)}
                              className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition text-2xl"
                            >
                              ▶
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* IMAGE BACKGROUND TESTIMONIAL */}
                  {t.type === "image" && (
                    <div className="relative w-full h-72">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                        <p className="text-white font-medium mb-2">
                          "{t.quote}"
                        </p>
                        <span className="text-sm text-gray-200">
                          {t.name} - {t.company}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* TEXT TESTIMONIAL */}
                  {t.type === "text" && (
                    <div className="p-6 h-72 flex flex-col justify-between text-left">
                      <p className="text-lg font-medium mb-4">"{t.quote}"</p>
                      <span className="text-sm text-gray-300">
                        {t.name} - {t.company}
                      </span>
                    </div>
                  )}
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
});
export default Testimonials;
