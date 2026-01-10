"use client";

import { cn } from "@/lib/utils";
import { MoveRight, Star } from "lucide-react";

export interface BlogPost {
    id: number | string;
    title: string;
    category: string;
    imageUrl: string;
    href: string;
    views: number;
    readTime?: number;
    rating?: number;
    className?: string;
}

interface GridSectionProps {
    title: string;
    description: string;
    backgroundLabel?: string;
    backgroundPosition?: "left" | "right";
    posts?: BlogPost[];
    className?: string;
    onPostClick?: (post: BlogPost) => void;
}

export const BlogPosts = ({
    title,
    description,
    backgroundLabel,
    backgroundPosition = "left",
    posts = [],
    className,
    onPostClick,
}: GridSectionProps) => {

    return (
        <section className={cn(
            "container relative my-20 py-10 mx-auto px-4",
            className
        )}>
            <h2 className="text-center text-4xl font-semibold capitalize !leading-[1.4] md:text-5xl lg:text-6xl mb-2 text-white">
                {title}
            </h2>

            {backgroundLabel && (
                <span
                    className={cn(
                        "absolute -top-10 -z-50 select-none text-[120px] font-extrabold leading-[1] text-white/[0.03] md:text-[200px] lg:text-[300px]",
                        backgroundPosition === "left" ? "-left-[18%]" : "-right-[28%]"
                    )}
                >
                    {backgroundLabel}
                </span>
            )}

            <p className="mx-auto max-w-[800px] text-center text-xl !leading-[2] text-white/60 md:text-2xl mb-12">
                {description}
            </p>

            <div className="grid h-auto grid-cols-1 gap-5 md:h-[650px] md:grid-cols-2 lg:grid-cols-[1fr_0.5fr]">
                {posts.map((post, index) => {
                    const {
                        id,
                        title: postTitle,
                        category,
                        imageUrl,
                        views,
                        readTime,
                        rating = 5,
                        className: postClassName
                    } = post;

                    // First item takes larger space
                    const isPrimary = index === 0;

                    return (
                        <div
                            key={id || index}
                            style={{ backgroundImage: `url(${imageUrl})` }}
                            className={cn(
                                "group relative row-span-1 flex size-full cursor-pointer flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat p-5 text-white max-md:h-[300px] transition-all duration-300 hover:scale-[0.98] hover:rotate-[0.3deg] shadow-2xl",
                                isPrimary && "col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-1",
                                postClassName
                            )}
                            onClick={() => onPostClick ? onPostClick(post) : (window.location.href = post.href)}
                        >
                            <div className="absolute inset-0 -z-0 h-[130%] w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:h-full" />

                            <article className="relative z-0 flex items-end w-full">
                                <div className="flex flex-1 flex-col gap-3">
                                    <h3 className={cn("font-semibold leading-tight", isPrimary ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl")}>
                                        {postTitle}
                                    </h3>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-xs uppercase tracking-wider py-1 px-2 rounded-md bg-blue-600/80 w-fit text-white backdrop-blur-md font-bold">
                                            {category}
                                        </span>

                                        <div className="flex items-center gap-3 text-sm text-gray-300">
                                            <div className="flex items-center gap-0.5">
                                                {Array.from({ length: 5 }).map((_, idx) => (
                                                    <Star
                                                        width={14}
                                                        height={14}
                                                        key={idx}
                                                        className={idx < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-500 text-gray-500"}
                                                    />
                                                ))}
                                            </div>
                                            <span className="font-light">
                                                {views.toLocaleString()} Views
                                            </span>
                                            {readTime && (
                                                <>
                                                    <span>•</span>
                                                    <span className="font-semibold">{readTime} min read</span>
                                                </>
                                            )}
                                        </div>

                                    </div>
                                </div>
                                <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-blue-600 transition-colors">
                                    <MoveRight
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                        color="white"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
        </section>);
};
