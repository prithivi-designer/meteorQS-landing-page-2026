"use client";
import React, { forwardRef } from "react";
import { Gallery4 } from "@/components/ui/gallery4";

const GlobalClients = forwardRef(({ sectionRef, metServices }, ref) => {
  console.log("metServices", metServices);

  // Map the external API data (metServices) to the format required by Gallery4
  const galleryItems = metServices?.map((cs) => {
    const cover = cs?.fields.bannerImage;
    const imageUrl = cover?.fields?.file?.url ? `https:${cover.fields.file.url}` : "";

    return {
      id: cs?.sys?.id,
      title: cs.fields.title,
      description: cs.fields.description,
      href: `/services/${cs.fields.slug}`,
      image: imageUrl
    };
  }) || [];

  return (
    <>
      <div ref={sectionRef}></div>
      <section className="bg-[#0A142F]">
        <Gallery4
          title="Professional Web Design for Global Clients"
          description="Discover how we leverage modern web technologies to build exceptional digital experiences for our global clients."
          items={galleryItems}
        />
      </section>
    </>
  );
});

export default GlobalClients;

