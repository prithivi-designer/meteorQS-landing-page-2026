import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    // Fetch the service detail by slug
    const resService = await client.getEntries({
      content_type: "meteoriqsServices",
      "fields.slug": slug,
    });

    // Fetch industries & all services
    const [resIndustries, resServices] = await Promise.all([
      client.getEntries({ content_type: "meteoriqsIndustries" }),
      client.getEntries({ content_type: "meteoriqsServices" }),
    ]);

    if (!resService.items.length) {
      return { notFound: true }; // Return 404 if no service found
    }

    return {
      props: {
        metServicesDetail: resService.items[0],
        industries: resIndustries.items,
        metServices: resServices.items,
      },
    };
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return {
      notFound: true,
    };
  }
}

export default function MetServicesDetail({
  metServicesDetail,
  industries,
  metServices,
}) {
  const { title, servicesContent, bannerImage } = metServicesDetail.fields;

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
            className="mb-6 w-full object-cover max-h-[30rem] object-center"
          />
        )}

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
