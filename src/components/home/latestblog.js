// app/latest-posts/page.tsx
"use client";

import { forwardRef } from "react";
import { BlogGallery } from "@/components/ui/blog-gallery";

const LatestPosts = forwardRef(({ sectionRef, blogs = [] }, ref) => {
  // Map Contentful data to GalleryItem format
  const galleryItems = blogs.map((blog) => {
    const cover = blog?.fields?.coverImage;
    const imageUrl = cover?.fields?.file?.url ? `https:${cover.fields.file.url}` : "";

    return {
      id: blog?.sys?.id,
      title: blog?.fields?.title || "Untitled Post",
      summary: blog?.fields?.description || "",
      url: `/blogs/${blog?.fields?.slug}`,
      image: imageUrl || "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80", // Fallback
    };
  });

  return (
    <>
      <div ref={sectionRef}></div>
      <div className="bg-[#0A142F]">
        <BlogGallery
          heading="Latest Insights"
          items={galleryItems}
          demoUrl="/blogs"
        />
      </div>
    </>
  );
});

export default LatestPosts;
