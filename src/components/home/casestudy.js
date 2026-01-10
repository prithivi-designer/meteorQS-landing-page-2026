// app/case-studies/page.tsx
"use client";

import { forwardRef } from "react";
import { BlogPosts } from "@/components/ui/blog-posts";

const CaseStudies = forwardRef(({ sectionRef, casestudies = [] }, ref) => {
  // Map Contentful data to BlogPosts format
  // We utilize only the first 3 items to fit the "Bento" style grid layout perfectly (1 large, 2 small)
  const posts = casestudies.slice(0, 3).map((cs, idx) => {
    const cover = cs?.fields?.coverImage;
    const imageUrl = cover?.fields?.file?.url ? `https:${cover.fields.file.url}` : "";

    return {
      id: cs?.sys?.id || idx,
      title: cs?.fields?.title || "Untitled Case Study",
      category: "Case Study",
      imageUrl: imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80", // Fallback
      href: `/causestudies/${cs?.fields?.slug}`, // Preserving existing URL structure
      views: 1200 + (idx * 340), // Mock data for visual needs
      readTime: cs?.fields?.readTime || 5,
      rating: 5
    };
  });

  return (
    <>
      <div ref={sectionRef}></div>
      <div className="bg-[#0c1b3a] w-full">
        <BlogPosts
          title="Featured Case Studies"
          description="Explore how we've helped global brands transform their digital presence and achieve measurable success."
          backgroundLabel="WORK"
          posts={posts}
        />
      </div>
    </>
  );
});

export default CaseStudies;
