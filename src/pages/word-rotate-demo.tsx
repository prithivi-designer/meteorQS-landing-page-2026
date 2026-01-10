import { WordRotate } from "@/components/ui/word-rotate";

export default function WordRotateDemo() {
    return (
        <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                    Word Rotate Demo
                </h2>
                <div className="flex items-center justify-center gap-2 text-4xl font-bold text-black dark:text-white">
                    <span>We build</span>
                    <WordRotate
                        className="text-4xl font-bold text-black dark:text-white"
                        words={["Fast", "Secure", "Scalable", "Beautiful"]}
                    />
                    <span>Apps</span>
                </div>
            </div>
        </div>
    );
}
