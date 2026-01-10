"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { FaRegFileAlt, FaUserTie, FaUsers, FaHandshake } from "react-icons/fa";

// --- Sub-components (Content) ---

const Clock = ({ city, timeZone }) => {
    const [time, setTime] = useState(() => new Date()); // Lazy init

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const getRotation = (date, timezone) => {
        const localTime = new Date(date.toLocaleString("en-US", { timeZone: timezone }));
        const seconds = localTime.getSeconds();
        const minutes = localTime.getMinutes();
        const hours = localTime.getHours();

        return {
            second: seconds * 6,
            minute: minutes * 6 + seconds * 0.1,
            hour: (hours % 12) * 30 + minutes * 0.5,
        };
    };

    const { second, minute, hour } = getRotation(time, timeZone);

    // Adjusted sizes for larger clock
    // Size w-24 (96px) -> Radius 48px

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full border-[3px] border-slate-500 bg-[#0A142F]/80 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] flex justify-center items-center backdrop-blur-sm">
                {/* Clock Face Markers */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-0.5 h-1.5 bg-slate-400"
                        style={{
                            top: '4px',
                            left: '50%',
                            transformOrigin: '0 calc(40px - 4px)', // Fallback for mobile
                            // For sm:w-28 (112px) -> radius 56px.
                            // We can use responsive style CSS variables or just hardcode for the larger size since desktop is priority
                            transform: `translateX(-50%) rotate(${i * 30}deg)`
                        }}
                    >
                        {/* Dynamic transform origin adjustment via inline style logic is tricky without calc or state, 
                            so we'll use a slightly different approach for markers or just stick to one size mostly. 
                            Let's use a simpler proportional approach or simple absolutely positioned markers.
                        */}
                    </div>
                ))}

                {/* Re-implement markers for 28 (112px total, 56px radius) */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-2 bg-slate-500/50"
                        style={{
                            top: '5px',
                            left: '50%',
                            transformOrigin: '0 51px', // 56 - 5
                            transform: `translateX(-50%) rotate(${i * 30}deg)`
                        }}
                    />
                ))}

                {/* Center Dot */}
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full z-10 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>

                {/* Hands */}
                <div className="absolute w-1.5 bg-white rounded-full origin-bottom shadow-sm" style={{ height: "28%", bottom: "50%", transform: `rotate(${hour}deg)` }}></div>
                <div className="absolute w-1 bg-slate-300 rounded-full origin-bottom shadow-sm" style={{ height: "38%", bottom: "50%", transform: `rotate(${minute}deg)` }}></div>
                <div className="absolute w-0.5 bg-blue-400 rounded-full origin-bottom shadow-sm" style={{ height: "45%", bottom: "50%", transform: `rotate(${second}deg)` }}></div>
            </div>
            <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{city}</span>
        </div>
    );
};

const ProcessStep = ({ icon: Icon, title, step }) => (
    <div className="flex flex-col items-center text-center relative z-10 group">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-blue-500/30 bg-[#0A142F] flex justify-center items-center mb-4 group-hover:border-blue-500 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/20 group-hover:scale-105">
            <Icon className="text-3xl sm:text-4xl text-blue-400 group-hover:text-white transition-colors" />
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 border-[3px] border-[#0A142F] text-white text-base sm:text-lg font-bold flex justify-center items-center shadow-lg z-20">
                {step}
            </div>
        </div>
        <span className="text-base font-medium text-slate-200 max-w-[140px] leading-snug group-hover:text-white transition-colors">{title}</span>
    </div>
);

// --- Content Definitions ---

const OffshoreContent = () => (
    <div className="w-full h-full flex flex-col">
        <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-white/5 py-6 rounded-t-3xl border-b border-white/10 backdrop-blur-md">
            Build Your Offshore <span className="text-blue-400">Development Team</span>
        </h3>
        <div className="flex-1 px-8 pb-10 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-y-12 gap-x-16 relative w-full max-w-2xl">
                {/* Connection Lines */}
                <div className="hidden sm:block absolute top-[3rem] left-[20%] right-[20%] h-[3px] border-t-2 border-dashed border-blue-500/30 -z-0"></div>
                <div className="hidden sm:block absolute top-[3rem] bottom-[3rem] left-[50%] w-[1px] border-l-2 border-dashed border-blue-500/30 -z-0"></div>

                <ProcessStep step="1" title="Share Requirements" icon={FaRegFileAlt} />
                <ProcessStep step="2" title="Get Vetted Profiles" icon={FaUserTie} />
                <ProcessStep step="3" title="Conduct Interviews" icon={FaUsers} />
                <ProcessStep step="4" title="Hire & Get Started" icon={FaHandshake} />
            </div>
        </div>
    </div>
);

const AgileContent = () => (
    <div className="w-full h-full flex flex-col">
        <div className="bg-white/5 py-6 px-8 rounded-t-3xl border-b border-white/10 text-center backdrop-blur-md">
            <h3 className="text-3xl sm:text-4xl font-bold">
                Build-To-Scale <span className="text-blue-400">Agile Teams</span>
            </h3>
        </div>

        <div className="flex-1 px-8 py-10 flex flex-col items-center justify-center">
            <p className="text-slate-300 mb-12 leading-relaxed text-lg text-center max-w-2xl">
                Fully managed agile teams that scale with your needs. Self-organizing and cross-functional for rapid delivery.
            </p>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <div className="absolute inset-0 border-[3px] border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-6 border-[3px] border-dashed border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                    <span className="font-bold text-2xl sm:text-3xl text-white tracking-widest">AGILE</span>
                    <span className="text-sm sm:text-base text-blue-400 font-semibold tracking-wider">SQUADS</span>
                </div>
                {/* Satellites */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-[#0A142F] px-4 py-1.5 text-xs font-bold text-blue-300 border border-blue-500/50 rounded-full shadow-lg shadow-blue-500/20">Scrum Master</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-[#0A142F] px-4 py-1.5 text-xs font-bold text-purple-300 border border-purple-500/50 rounded-full shadow-lg shadow-purple-500/20">DevOps</div>
                <div className="absolute left-0 top-1/2 -translate-x-5 -translate-y-1/2 bg-[#0A142F] px-4 py-1.5 text-xs font-bold text-green-300 border border-green-500/50 rounded-full shadow-lg shadow-green-500/20">QA</div>
                <div className="absolute right-0 top-1/2 translate-x-5 -translate-y-1/2 bg-[#0A142F] px-4 py-1.5 text-xs font-bold text-yellow-300 border border-yellow-500/50 rounded-full shadow-lg shadow-yellow-500/20">Devs</div>
            </div>
        </div>
    </div>
);

const StaffAugContent = () => (
    <div className="w-full h-full flex flex-col">
        <div className="bg-white/5 py-6 px-8 rounded-t-3xl border-b border-white/10 text-center backdrop-blur-md">
            <h3 className="text-3xl sm:text-4xl font-bold">
                Staff <span className="text-blue-400">Augmentation</span>
            </h3>
        </div>
        <div className="flex-1 px-8 py-10 flex flex-col items-center justify-center">
            <p className="text-slate-300 mb-12 leading-relaxed text-lg text-center max-w-2xl">
                Extended remote teams in your time zone. Seamless communication and overlapping hours ensuring continuous progress.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 sm:gap-12 justify-items-center w-full max-w-3xl">
                <Clock city="UAE" timeZone="Asia/Dubai" />
                <Clock city="USA" timeZone="America/New_York" />
                <Clock city="UK" timeZone="Europe/London" />
                <Clock city="Singapore" timeZone="Asia/Singapore" />
                <Clock city="Australia" timeZone="Australia/Sydney" />
            </div>
        </div>
    </div>
);

const cardsData = [
    { id: 1, content: <OffshoreContent /> },
    { id: 2, content: <AgileContent /> },
    { id: 3, content: <StaffAugContent /> },
];

// --- Animation Components ---

const StickyCard = ({ i, content, progress, range, targetScale }) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="sticky top-0 h-screen flex items-center justify-center">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`, // Stacking offset
                }}
                className="relative -top-[10%] flex h-[650px] w-full max-w-[1100px] origin-top flex-col rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden"
            >
                {/* Gradient Background & Content */}
                <div className="h-full w-full bg-gradient-to-br from-[#1B3B6F] via-[#0A142F] to-[#050A19] text-white relative">
                    {/* Subtle Glow Effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none"></div>
                    {content}
                </div>
            </motion.div>
        </div>
    );
};

const TechOfferings = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <ReactLenis root>
            <section className="bg-[#0A142F] text-white" ref={container}>
                {/* Introduction Header - Scroll normally before cards */}
                <div className="pt-24 pb-12 px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Our Tech Offerings
                    </h2>
                    <p className="text-blue-400 text-xl md:text-2xl font-light">
                        Tailored to Your Time Zone and Business Needs
                    </p>
                </div>

                {/* Cards Container */}
                <div className="relative pb-[10vh]"> {/* Reduced padding */}
                    {cardsData.map((card, i) => {
                        // Logic for scaling: Previous cards shrink slightly as new ones come in
                        const targetScale = 1 - ((cardsData.length - 1 - i) * 0.05);
                        return (
                            <StickyCard
                                key={card.id}
                                i={i}
                                content={card.content}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </section>
        </ReactLenis>
    );
};

export default TechOfferings;
