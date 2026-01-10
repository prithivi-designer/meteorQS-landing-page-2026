"use client";

import { motion } from "framer-motion";
import { Quote, Play, Pause, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export interface Testimonial {
    id: number | string;
    type?: "video" | "image" | "text";
    quote?: string;
    name: string;
    role?: string;
    company?: string;
    imageSrc?: string | any;
    videoThumbnail?: string | any;
    videoUrl?: string;
}

interface TestimonialSectionProps {
    title: string;
    subtitle?: string;
    testimonials: Testimonial[];
}

export const TestimonialSection = ({
    title,
    subtitle,
    testimonials,
}: TestimonialSectionProps) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    // Video state management
    const [playingVideo, setPlayingVideo] = useState<number | string | null>(null);
    const videoRefs = useRef<{ [key: string | number]: HTMLVideoElement | null }>({});

    // Track if video was started by hover (to stop it on leave) vs click (persistent)
    const [hoverPlaying, setHoverPlaying] = useState<number | string | null>(null);

    const handleVideoHover = (id: number | string, isHovering: boolean) => {
        const video = videoRefs.current[id];
        if (!video) return;

        if (isHovering) {
            // Only play if not already playing persistently via click
            if (playingVideo !== id) {
                video.muted = true; // Mute for hover preview
                video.play().catch(e => console.log("Autoplay prevented", e));
                setHoverPlaying(id);
            }
        } else {
            // Mouse leave
            if (playingVideo !== id) {
                // If it was just a hover preview, stop it
                if (hoverPlaying === id) {
                    video.pause();
                    video.currentTime = 0;
                    setHoverPlaying(null);
                }
            }
        }
    };

    const handleVideoClick = (id: number | string) => {
        const video = videoRefs.current[id];
        if (!video) return;

        if (playingVideo === id) {
            // Toggle pause if clicked again
            video.pause();
            setPlayingVideo(null);
        } else {
            // Stop any other running video (hover or click)
            Object.values(videoRefs.current).forEach(v => {
                if (v && v !== video) {
                    v.pause();
                    v.currentTime = 0;
                }
            });

            // Unmute and play
            video.muted = false;
            video.play();
            setPlayingVideo(id);
            setHoverPlaying(null); // Clear hover state since it's now click-active
        }
    };

    return (
        <section className="w-full bg-[#0c1b3a] py-16 sm:py-24 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-4">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-lg text-gray-300">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* Custom Navigation */}
                    <div className="flex gap-2 hidden md:flex">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
                            onClick={() => api?.scrollPrev()}
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
                            onClick={() => api?.scrollNext()}
                        >
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: false, // User requested horizontal scroll, loop optional but standard is fine
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial) => {
                            const type = testimonial.type || (testimonial.videoUrl ? "video" : testimonial.imageSrc ? "image" : "text");
                            const isVideo = type === "video";
                            const isPlaying = playingVideo === testimonial.id;

                            return (
                                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <motion.div
                                        className="relative overflow-hidden rounded-2xl bg-[#0E1E45] shadow-xl border border-blue-500/20 aspect-[2/3] group cursor-pointer"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                        onMouseEnter={() => isVideo && handleVideoHover(testimonial.id, true)}
                                        onMouseLeave={() => isVideo && handleVideoHover(testimonial.id, false)}
                                        onClick={() => isVideo && handleVideoClick(testimonial.id)}
                                    >
                                        {/* === VIDEO CARD === */}
                                        {type === "video" && (
                                            <div className="relative w-full h-full">
                                                <video
                                                    ref={(el) => { if (el) videoRefs.current[testimonial.id] = el; }}
                                                    src={testimonial.videoUrl}
                                                    className="w-full h-full object-cover"
                                                    playsInline
                                                    controls={false} // Custom controls
                                                    muted // Default muted (unmuted on click)
                                                />

                                                {/* Thumbnail / Filter */}
                                                <div className={`absolute inset-0 transition-opacity duration-300 ${isPlaying || hoverPlaying === testimonial.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                                    {testimonial.videoThumbnail && (
                                                        <Image
                                                            src={testimonial.videoThumbnail}
                                                            alt={testimonial.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    )}
                                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                            <Play className="w-6 h-6 fill-white text-white ml-1" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Play State Indicator (Click) */}
                                                {isPlaying && (
                                                    <div className="absolute top-4 right-4 z-20">
                                                        <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center animate-pulse">
                                                            <div className="w-2 h-2 rounded-full bg-red-500" />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Info Overlay */}
                                                <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                                                    <p className="font-bold text-lg text-white">{testimonial.name}</p>
                                                    <p className="text-sm text-blue-200">{testimonial.role || testimonial.company}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* === IMAGE CARD === */}
                                        {type === "image" && (
                                            <div className="relative w-full h-full">
                                                {testimonial.imageSrc && (
                                                    <Image
                                                        src={testimonial.imageSrc}
                                                        alt={testimonial.name}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <Quote className="mb-3 h-6 w-6 text-blue-400" />
                                                    <p className="text-white font-medium leading-relaxed mb-4 line-clamp-6">
                                                        "{testimonial.quote}"
                                                    </p>
                                                    <div>
                                                        <p className="font-bold text-white">{testimonial.name}</p>
                                                        <p className="text-sm text-blue-200">{testimonial.role || testimonial.company}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* === TEXT CARD === */}
                                        {type === "text" && (
                                            <div className="h-full flex flex-col justify-between p-8 bg-[#112242] group-hover:bg-[#15274d] transition-colors relative">
                                                <Quote className="absolute top-8 right-8 h-20 w-20 text-blue-500/10 rotate-12" />

                                                <div className="relative z-10 mt-4">
                                                    <Quote className="h-8 w-8 text-blue-500 mb-4" />
                                                    <p className="text-lg leading-relaxed text-gray-200 font-medium">
                                                        "{testimonial.quote}"
                                                    </p>
                                                </div>

                                                <div className="relative z-10 pt-6 border-t border-white/10 mt-6">
                                                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                                                    <p className="text-blue-300">{testimonial.role || testimonial.company}</p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>

                {/* Mobile Navigation */}
                <div className="flex justify-center gap-2 mt-8 md:hidden">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
                        onClick={() => api?.scrollPrev()}
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
                        onClick={() => api?.scrollNext()}
                    >
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
