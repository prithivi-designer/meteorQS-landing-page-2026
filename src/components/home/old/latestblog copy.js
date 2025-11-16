// app/latest-posts/page.tsx
"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";
import image1 from "@/assets/images/LatestPosts/image1.jpg";
import image2 from "@/assets/images/LatestPosts/image2.jpg";
import image3 from "@/assets/images/LatestPosts/image3.jpg";

const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    date: "April 24, 2022",
    readTime: "5 min read",
    description:
      "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
    image: image1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    date: "April 03, 2022",
    readTime: "4 min read",
    description:
      "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
    image: image2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    date: "March 12, 2022",
    readTime: "6 min read",
    description:
      "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
    image: image3,
  },
];

export default function LatestPosts() {
  return (
    <div className="bg-[#0A142F] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest Posts
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="latestBlog rounded-2xl overflow-hidden bg-[#0c1b3a] border border-gray-700"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <CardHeader className="flex flex-col items-center text-center px-4 pt-4">
                <h3 className="text-lg text-[#F8FAFC] font-semibold">
                  {post.title}
                </h3>
                <span className="text-sm text-gray-400">
                  {post.date} • {post.readTime}
                </span>
              </CardHeader>

              <CardBody className="px-4 pb-4">
                <p className="text-sm text-[#ffffff] text-center">
                  {post.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
