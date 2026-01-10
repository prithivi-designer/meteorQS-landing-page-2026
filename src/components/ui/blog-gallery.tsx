"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export interface GalleryItem {
    id: string;
    title: string;
    summary: string;
    url: string;
    image: string;
}

interface BlogGalleryProps {
    heading?: string;
    demoUrl?: string; // e.g. "View All" link
    items?: GalleryItem[];
}

export const BlogGallery = ({
    heading = "Latest Posts",
    demoUrl,
    items = [],
}: BlogGalleryProps) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
                    <div>
                        <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-white">
                            {heading}
                        </h2>
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg text-blue-400 hover:text-blue-300"
                            >
                                View all posts
                                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        )}
                    </div>
                    <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto bg-transparent border-white/20 text-white hover:bg-white/10"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto bg-transparent border-white/20 text-white hover:bg-white/10"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>

                {/* Carousel nested inside container for alignment */}
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        align: "start",
                        breakpoints: {
                            "(max-width: 768px)": {
                                dragFree: true,
                            },
                        },
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {items.map((item) => (
                            <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <a
                                    href={item.url}
                                    className="group flex flex-col justify-between h-full"
                                >
                                    <div className="flex flex-col gap-4">
                                        <div className="flex aspect-[3/2] overflow-hidden rounded-xl bg-gray-800 border border-white/10">
                                            <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="text-lg font-medium md:text-xl text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                                                {item.title}
                                            </div>
                                            <div className="line-clamp-2 text-sm text-gray-400 leading-relaxed">
                                                {item.summary}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center text-sm text-blue-400 font-semibold">
                                        Read article{" "}
                                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};
