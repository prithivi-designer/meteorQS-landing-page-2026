// app/testimonials/page.tsx
"use client";

import { forwardRef } from "react";
import { TestimonialSection } from "@/components/ui/testimonials";
import videoPoster1 from "@/assets/images/review/review1.jpg";
import testiImage from "@/assets/images/review/review1.jpg";

const testimonials = [
  {
    id: 1,
    type: "video",
    videoThumbnail: videoPoster1,
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    name: "Jane Smith",
    company: "XYZ Ltd",
  },
  {
    id: 2,
    type: "image",
    imageSrc: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?auto=format&fit=crop&q=80&w=800&h=1200",
    quote:
      "Working with this team has been a game changer for us. Their expertise and dedication have truly transformed our business!",
    name: "Seema Gopal",
    company: "Mint Tree",
  },
  {
    id: 3,
    type: "text",
    quote:
      " We thank Meteoriqs for the wonderful job in helping us develop our Mobile Application. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.",
    name: "Elumalai Munuswamy",
    company: "Founder, Fixit Group",
  },
  {
    id: 4,
    type: "video",
    videoThumbnail: videoPoster1,
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    name: "John Doe",
    company: "ABC Corp",
  },
  {
    id: 5,
    type: "image",
    imageSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800&h=1200",
    quote:
      "The user experience design they delivered was top-notch. Our conversion rates have doubled since the launch.",
    name: "Victor Hansen",
    company: "Horizone",
  },
];

const Testimonials = forwardRef(({ sectionRef }, ref) => {
  return (
    <>
      <div ref={sectionRef}></div>
      <TestimonialSection
        title="What Our Clients Say"
        subtitle="Our clients come from diverse industries, each facing unique challenges. Here’s what they say about working with us:"
        testimonials={testimonials}
      />
    </>
  );
});
export default Testimonials;
