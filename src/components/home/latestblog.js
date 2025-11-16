// app/latest-posts/page.tsx
import { forwardRef } from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

// export default function LatestPosts({ blogs }) {
const LatestPosts = forwardRef(({ sectionRef, blogs }, ref) => {
  return (
    <>
      <div ref={sectionRef}></div>
      <div className="bg-[#0A142F] text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Latest Posts
          </h2>

          {/* Cards Grid */}
          {blogs?.map((blog) => {
            const cover = blog.fields.coverImage;
            return (
              <div
                className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
                key={blog?.sys?.id}
              >
                <Link href={`/blogs/${blog.fields.slug}`}>
                  <Card
                    key={blog?.sys?.id}
                    className="latestBlog rounded-2xl overflow-hidden bg-[#0c1b3a] border border-gray-700"
                  >
                    {/* Image */}

                    {cover && cover?.fields?.file?.url && (
                      <div className="relative w-full h-48">
                        <Image
                          src={`https:${cover?.fields?.file?.url}`}
                          alt={cover.fields.title || blog.fields.title}
                          className="rounded-lg object-cover w-full h-48"
                          width={400}
                          height={250}
                        />
                      </div>
                    )}
                    {/* </div> */}

                    {/* Card Content */}
                    <CardHeader className="flex flex-col items-center text-center px-4 pt-4">
                      <h3 className="text-lg text-[#F8FAFC] font-semibold">
                        {blog.fields.title}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {blog.fields.date}
                      </span>
                    </CardHeader>

                    <CardBody className="px-4 pb-4">
                      <p className="text-sm text-[#ffffff] text-center">
                        {blog.fields.description}
                      </p>
                    </CardBody>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});
export default LatestPosts;
