import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface AwardFeatureProps {
    title: string;
    description?: string;
    imageSrc: string | StaticImageData;
    imageAlt: string;
    className?: string;
    reverse?: boolean;
}

export const AwardFeature = ({
    title,
    description,
    imageSrc,
    imageAlt,
    className,
    reverse = false,
}: AwardFeatureProps) => {
    return (
        <section className={cn("py-16 md:py-24", className)}>
            <div className="container mx-auto px-4">
                <div className={cn("grid items-center gap-12 lg:grid-cols-2", reverse && "lg:grid-flow-dense")}>
                    <div className={cn("flex flex-col items-center text-center lg:items-start lg:text-left", reverse && "lg:col-start-2")}>
                        <h2 className="my-6 mt-0 text-3xl font-bold md:text-4xl lg:text-5xl text-white leading-tight">
                            {title}
                        </h2>
                        {description && (
                            <p className="mb-8 max-w-xl text-lg text-gray-300 leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>
                    <div className={cn("w-full flex justify-center lg:justify-end", reverse && "lg:col-start-1 lg:justify-start")}>
                        <div className="relative w-full max-w-md aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-8 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                            {typeof imageSrc === 'string' ? (
                                <img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="w-full h-full object-contain"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
