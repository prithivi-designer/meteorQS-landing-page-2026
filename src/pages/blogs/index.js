import { client } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter } from "@heroui/react";
import { GoArrowRight } from "react-icons/go";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export async function getStaticProps() {
  try {
    const [resBlogs, resIndustries, resServices] = await Promise.all([
      client.getEntries({
        content_type: "meteoriqsBlog",
        order: "-fields.date",
      }),
      client.getEntries({ content_type: "meteoriqsIndustries" }),
      client.getEntries({ content_type: "meteoriqsServices" }),
    ]);

    const blogs = resBlogs.items.filter((blog) => blog.fields?.slug);

    return {
      props: {
        blogs,
        industries: resIndustries.items || [],
        metServices: resServices.items || [],
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      props: {
        blogs: [],
        industries: [],
        metServices: [],
      },
      revalidate: 60,
    };
  }
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function BlogList({ blogs, industries, metServices }) {
  return (
    <>
      <Header industries={industries} />
      <div className="min-h-screen bg-[#0A142F] text-white pt-32 pb-20">
        {/* Page Hero */}
        <div className="container mx-auto px-6 mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Insights & Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Explore our latest thoughts on technology, innovation, and digital transformation.
          </motion.p>
        </div>

        <div className="container mx-auto px-6">
          {(!blogs || blogs.length === 0) ? (
            <div className="text-center text-gray-500 py-20">
              <p className="text-xl">No insights available at the moment.</p>
            </div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogs.map((blog) => {
                const cover = blog.fields.coverImage?.[0] || blog.fields.coverImage;
                // Handle both Array (if many) or Object (if single) to be safe.
                // Assuming standard single asset field often returns object in API response unless 'Many'.
                // But previous code suggested Array. 
                const imageUrl = cover?.fields?.file?.url;

                return (
                  <motion.div key={blog.sys.id} variants={item}>
                    <Link href={`/blogs/${blog.fields.slug}`} className="group h-full block">
                      <Card className="h-full bg-[#112240] border-0 hover:bg-[#1a2e52] transition-colors duration-300">
                        <CardBody className="p-0 overflow-hidden">
                          {imageUrl ? (
                            <div className="relative w-full h-64 overflow-hidden">
                              <Image
                                src={`https:${imageUrl}`}
                                alt={cover.fields.title || blog.fields.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                          ) : (
                            <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
                              <span className="text-gray-500">No Image</span>
                            </div>
                          )}
                          <div className="p-6">
                            <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                              {blog.fields.title}
                            </h2>
                            <p className="text-gray-400 line-clamp-3 leading-relaxed">
                              {blog.fields.description || "No description available."}
                            </p>
                          </div>
                        </CardBody>
                        <CardFooter className="px-6 pb-6 pt-0">
                          <span className="text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                            Read Article <GoArrowRight />
                          </span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
      <Footer metServices={metServices} />
    </>
  );
}
