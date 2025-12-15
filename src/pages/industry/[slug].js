import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import ClientMapping from "@/components/home/client-mapping";
import LatestPosts from "@/components/home/latestblog";
import CaseStudies from "@/components/home/casestudy";

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const [
      resIndustry,
      resIndustries,
      resBlog,
      resCasestudy,
      resServices,
    ] = await Promise.all([
      client.getEntries({
        content_type: "meteoriqsIndustries",
        "fields.slug": slug,
      }),
      client.getEntries({ content_type: "meteoriqsIndustries" }),
      client.getEntries({ content_type: "meteoriqsBlog" }),
      client.getEntries({ content_type: "meteoriqsCasestudy" }),
      client.getEntries({ content_type: "meteoriqsServices" }),
    ]);

    if (!resIndustry.items.length) {
      return { notFound: true }; // 404 if industry deleted
    }

    return {
      props: {
        industry: resIndustry.items[0],
        industries: resIndustries.items,
        blogs: resBlog.items,
        casestudies: resCasestudy.items,
        metServices: resServices.items,
      },
    };
  } catch (error) {
    console.error("Contentful fetch error:", error);
    return { notFound: true };
  }
}

export default function IndustryDetail({
  industry,
  industries,
  blogs,
  casestudies,
  metServices,
}) {
  const { title, industriesContent, bannerImage } = industry.fields;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        return (
          <img
            src={`https:${file.url}`}
            alt={title}
            className="my-6 rounded-lg"
          />
        );
      },
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const { file, title } = node.data.target.fields;
        return (
          <a
            href={`https:${file.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {children || title}
          </a>
        );
      },
    },
  };

  return (
    <>
      <Header industries={industries} />

      <section className="py-[4rem] px-[0rem] mx-auto">
        {bannerImage?.fields?.file?.url && (
          <img
            src={`https:${bannerImage.fields.file.url}`}
            alt={bannerImage.fields.title}
            className="mb-6 w-full object-cover max-h-[30rem]"
          />
        )}

        <h1 className="lg:text-[3.5rem] md:text-[2.5rem] text-[2rem] font-bold mb-4 text-center">
          {title}
        </h1>

        <div className="prose max-w-[60rem] mx-auto text-center">
          {documentToReactComponents(industriesContent, options)}
        </div>
      </section>

      <LatestPosts blogs={blogs} />
      <ClientMapping />
      <CaseStudies casestudies={casestudies} />
      <Footer metServices={metServices} />
    </>
  );
}
