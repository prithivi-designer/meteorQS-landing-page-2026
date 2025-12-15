import { client } from "@/lib/contentful";
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

export default function BlogList({ blogs }) {
  console.log("blogs", blogs);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => {
          const cover = blog.fields.coverImage?.[0]; // first image from array

          return (
            <li key={blog.sys.id} className="border p-4 rounded-lg shadow-sm">
              {/* Cover Image */}
              {cover && cover?.fields?.file?.url && (
                <div className="mb-4">
                  <Image
                    src={`https:${cover?.fields?.file?.url}`}
                    alt={cover.fields.title || blog.fields.title}
                    width={400}
                    height={250}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
              )}

              {/* Title + Description */}
              <h2 className="text-xl font-semibold">{blog.fields.title}</h2>
              <p className="text-gray-600 mb-2">{blog.fields.description}</p>

              {/* Read More Link */}
              <Link
                href={`/blog/${blog.fields.slug}`}
                className="text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
