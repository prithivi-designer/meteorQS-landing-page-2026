import { client } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps({ res }) {
  try {
    // 🚫 Disable all caching (Vercel + CDN + browser)
    res.setHeader(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const response = await client.getEntries({
      content_type: "meteoriqsBlog",
      order: "-fields.date",
      limit: 100,          // safety limit
      include: 2,          // resolve linked assets
    });

    return {
      props: {
        blogs: response.items || [],
      },
    };
  } catch (error) {
    console.error("❌ Contentful SSR Error:", error);

    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default function BlogList({ blogs }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      {blogs.length === 0 ? (
        <p className="text-gray-500">No blogs available.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => {
            const cover = blog.fields.coverImage?.[0];

            return (
              <li
                key={blog.sys.id}
                className="border p-4 rounded-lg shadow-sm"
              >
                {cover?.fields?.file?.url && (
                  <div className="mb-4">
                    <Image
                      src={`https:${cover.fields.file.url}`}
                      alt={cover.fields.title || blog.fields.title}
                      width={400}
                      height={250}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                )}

                <h2 className="text-xl font-semibold">
                  {blog.fields.title}
                </h2>

                <p className="text-gray-600 mb-2">
                  {blog.fields.description}
                </p>

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
      )}
    </div>
  );
}
