import React, { useRef } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import ClientMapping from "@/components/home/client-mapping";
import LatestPosts from "@/components/home/latestblog";
import CaseStudies from "@/components/home/casestudy";

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "meteoriqsServices" });

  const paths = res.items.map((industry) => ({
    params: { slug: industry.fields.slug },
  }));
  console.log("paths", paths);
  return {
    paths,
    fallback: false, // can also use "blocking"
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "meteoriqsServices",
    "fields.slug": params.slug,
  });
  const resIndustries = await client.getEntries({
    content_type: "meteoriqsIndustries",
  });
  const resServices = await client.getEntries({
    content_type: "meteoriqsServices",
  });

  return {
    props: {
      metServicesDetail: res.items[0],
      industries: resIndustries.items,
      metServices: resServices.items,
    },
    revalidate: 60, // ISR: regenerate the page at most every 60 seconds
  };
}
export default function MetServicesDetail({
  metServicesDetail,
  industries,
  metServices,
}) {
  const { title, servicesContent, bannerImage } = metServicesDetail.fields;

  const options = {
    renderNode: {
      // Embedded Asset (image inside the industriesContent)
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

      // Hyperlinked asset (image with a link in text)
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
      <section className="py-[4rem] px-[0rem]  mx-auto">
        {/* Render cover image */}
        {bannerImage && bannerImage?.fields?.file?.url && (
          <img
            src={`https:${bannerImage.fields.file.url}`}
            alt={bannerImage.fields.title}
            className="mb-6 w-full object-cover max-h-[30rem] object-center"
          />
        )}

        {/* Render rich text industriesContent */}
        <h1 className="lg:text-[3.5rem] md:text-[2.5rem] text-[2rem] font-bold mb-4 text-center">
          {title}
        </h1>

        <div className="prose max-w-[60rem] mx-auto text-center">
          {documentToReactComponents(servicesContent, options)}
        </div>
      </section>

      <Footer metServices={metServices} />
    </>
  );
}
