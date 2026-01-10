"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import clientMapping from "@/assets/images/clientGlobe-BG.jpg";

const stats = [
    { id: 1, value: 35, suffix: "+", label: "Industry Excellence" },
    { id: 2, value: 2500, suffix: "+", label: "Empowered Clients" },
    { id: 3, value: 25, suffix: "+", label: "Countries Served" },
    { id: 4, value: 2000, suffix: "+", label: "Projects Delivered" },
];



const AboutUs = ({ sectionRef }) => {
    const containerRef = useRef(null);
    const numberRefs = useRef([]);
    const cardRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        // 1. Animate Cards Fade Up
        tl.fromTo(cardRefs.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            }
        );

        // 2. Animate Numbers (Linear Count Up)
        numberRefs.current.forEach((el, index) => {
            if (!el) return;
            const targetValue = stats[index].value;
            const suffix = stats[index].suffix;

            gsap.fromTo(el,
                { innerText: 0 },
                {
                    innerText: targetValue,
                    duration: 2, // Consistent duration for "rapid fire" feel
                    ease: "none", // Linear easing as observed on Apptunix
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        el.innerText = Math.ceil(this.targets()[0].innerText) + suffix;
                    },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });

    }, []);

    return (
        <>
            <div ref={sectionRef} id="about-us"></div>
            <section
                ref={containerRef}
                className="px-[1.5rem] py-[4rem] relative w-full bg-[#0A142F] text-white overflow-hidden"
            >
                <div className="max-w-[70rem] mx-auto">
                    {/* Top Content */}
                    <div className="flex flex-col lg:flex-row gap-[3rem] mb-[4rem]">
                        <div className="flex-1">
                            <h2 className="text-[1.5rem] sm:text-[2rem] font-[600] leading-[1.2] mb-[1.5rem] text-white">
                                What Makes meteoriQs
                                <span className="inline-block ml-3 text-[2rem] md:text-[3rem] font-[700] bg-gradient-to-r from-[#1093FF] to-[#052460] bg-clip-text text-transparent leading-[1.2]">
                                    Exceptional?
                                </span>
                            </h2>
                            <div className="text-[#D6D6FF] text-[1.1rem] leading-[1.6] space-y-4">
                                <p>
                                    Our name symbolizes speed and impact—and we live by it. meteoriQs brings together a global team of experts dedicated to delivering high-performance, scalable, and secure solutions across a wide spectrum of technologies.
                                </p>
                                <p>
                                    Our clients trust us for our ability to maintain business continuity with 24/7 operational support across time zones, ensuring their digital ecosystems perform seamlessly—always.
                                </p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1 h-[25rem] relative rounded-[1.5rem] overflow-hidden bg-[#112A4E]">
                            <Image src={clientMapping} alt="Meteoriqs Global Presence" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Running Numbers */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[1rem] w-full">
                        {stats.map((stat, idx) => (
                            <div
                                key={stat.id}
                                ref={el => cardRefs.current[idx] = el}
                                className="bg-gradient-to-b from-[#1093FF]/0 to-[#0A142F] p-[2rem] rounded-[1.5rem] text-center border border-[#1E3A8A]/50 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 backdrop-blur-sm shadow-xl"
                            >
                                <h3
                                    ref={(el) => (numberRefs.current[idx] = el)}
                                    className="text-[2.5rem] font-[700] mb-[0.5rem] text-white"
                                >
                                    0+
                                </h3>
                                <p className="text-[#D6D6FF] text-[1rem] font-[500] uppercase tracking-wide">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
