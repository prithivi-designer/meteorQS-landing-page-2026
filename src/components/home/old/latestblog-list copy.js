// app/latest-posts/page.tsx
"use client";

import { client } from "@/lib/contentfull";
import { Card, CardHeader, CardBody } from "@heroui/react";

import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "meteoriqsBlog" });

  return {
    props: {
      blogs: res.items,
    },
  };
}

export default function BlogList() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {/* {blogs.map((blog) => {
        const cover = blog.fields.coverImage?.[0];
        <Card
          key={blog?.sys?.id}
          className="latestBlog rounded-2xl overflow-hidden bg-[#0c1b3a] border border-gray-700"
        >
          {cover && cover?.fields?.file?.url && (
            <div className="relative w-full h-48">
              <Image
                src={`https:${cover?.fields?.file?.url}`}
                alt={cover.fields.title || blog.fields.title}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
          )}
          <CardHeader className="flex flex-col items-center text-center px-4 pt-4">
            <h3 className="text-lg text-[#F8FAFC] font-semibold">
              {blog.fields.title}
            </h3>
            <span className="text-sm text-gray-400">{blog.fields.date}</span>
          </CardHeader>

          <CardBody className="px-4 pb-4">
            <p className="text-sm text-[#ffffff] text-center">
              {blog.fields.description}
            </p>
          </CardBody>
        </Card>
      })} */}
    </div>
  );
}
