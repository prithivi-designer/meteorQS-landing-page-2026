import { client } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter } from "@heroui/react";
import { GoArrowRight } from "react-icons/go";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export async function getServerSideProps() {
  try {
    const [resStudies, resIndustries, resServices] = await Promise.all([
      client.getEntries({
        content_type: "meteoriqsCasestudy",
        order: "-sys.createdAt",
      }),
      client.getEntries({ content_type: "meteoriqsIndustries" }),
      client.getEntries({ content_type: "meteoriqsServices" }),
    ]);

    const casestudies = resStudies.items.filter((item) => item.fields?.slug);

    return {
      props: {
        casestudies,
        industries: resIndustries.items || [],
        metServices: resServices.items || [],
      },
    };
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return {
      props: {
        casestudies: [],
        industries: [],
        metServices: [],
      },
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

export default function CaseStudiesList({ casestudies, industries, metServices }) {
  return (
    <>
      <Header industries={industries} />
      <div className="min-h-screen bg-[#0A142F] text-white pt-32 pb-20">
        {/* Page Hero */}
        <div className="container mx-auto px-6 mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
          >
            Customer Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Discover how we help transformative brands navigate the digital landscape and achieve measurable growth.
          </motion.p>
        </div>

        <div className="container mx-auto px-6">
          {(!casestudies || casestudies.length === 0) ? (
            <div className="text-center text-gray-500 py-20">
              <p className="text-xl">No case studies available at the moment.</p>
            </div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {casestudies.map((study) => {
                const cover = study.fields.coverImage?.[0] || study.fields.coverImage;
                const imageUrl = cover?.fields?.file?.url;

                return (
                  <motion.div key={study.sys.id} variants={item}>
                    <Link href={`/causestudies/${study.fields.slug}`} className="group h-full block">
                      <Card className="h-full bg-[#112240] border-0 hover:bg-[#1a2e52] transition-colors duration-300">
                        <CardBody className="p-0 overflow-hidden flex flex-col md:flex-row">
                          {imageUrl ? (
                            <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                              <Image
                                src={`https:${imageUrl}`}
                                alt={cover.fields.title || study.fields.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                          ) : (
                            <div className="w-full md:w-2/5 h-64 bg-gray-800 flex items-center justify-center">
                              <span className="text-gray-500">No Image</span>
                            </div>
                          )}
                          <div className="p-8 md:w-3/5 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                              {study.fields.title}
                            </h2>
                            <p className="text-gray-400 line-clamp-3 leading-relaxed mb-6">
                              {study.fields.description || "No description available."}
                            </p>
                            <span className="text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                              View Case Study <GoArrowRight />
                            </span>
                          </div>
                        </CardBody>
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
