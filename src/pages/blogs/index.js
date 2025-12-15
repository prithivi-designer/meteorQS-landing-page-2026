import { client } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps() {
  try {
    const res = await client.getEntries({
      content_type: "meteoriqsBlog",
      order: "-fields.date", // optional: newest first
    });

    // Only include blogs that have slugs
    const blogs = res.items.filter((blog) => blog.fields?.slug);

    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default function BlogList({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <p>No blogs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => {
          const cover = blog.fields.coverImage?.[0];

          return (
            <li
              key={blog.sys.id}
              className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {/* Cover Image */}
              {cover?.fields?.file?.url ? (
                <div className="mb-4">
                  <Image
                    src={`https:${cover.fields.file.url}`}
                    alt={cover.fields.title || blog.fields.title}
                    width={400}
                    height={250}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
              ) : (
                <div className="mb-4 w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}

              <h2 className="text-xl font-semibold">
                {blog.fields.title}
              </h2>

              <p className="text-gray-600 mb-2">
                {blog.fields.description || "No description available."}
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
    </div>
  );
}
