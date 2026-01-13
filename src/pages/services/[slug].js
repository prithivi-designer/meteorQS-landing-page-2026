import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import LatestPosts from "@/components/home/latestblog";
import ClientAcrossGlobe from "@/components/home/client-acros-globe";
import ContactSection from "@/components/home/contact-section";

export async function getStaticPaths() {
  try {
    const res = await client.getEntries({
      content_type: "meteoriqsServices",
      select: "fields.slug",
    });

    const paths = res.items
      .filter((item) => item.fields.slug)
      .map((item) => ({
        params: { slug: item.fields.slug },
      }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching service paths:", error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    // Fetch the service detail by slug
    const resService = await client.getEntries({
      content_type: "meteoriqsServices",
      "fields.slug": slug,
      include: 2,
    });

    // Fetch industries, all services, & blogs
    const [resIndustries, resServices, resBlogs] = await Promise.all([
      client.getEntries({ content_type: "meteoriqsIndustries" }),
      client.getEntries({ content_type: "meteoriqsServices" }),
      client.getEntries({ content_type: "meteoriqsBlog" }),
    ]);

    if (!resService.items.length) {
      return { notFound: true }; // Return 404 if no service found
    }

    return {
      props: {
        metServicesDetail: resService.items[0],
        industries: resIndustries.items,
        metServices: resServices.items,
        blogs: resBlogs.items,
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
  blogs,
}) {
  const { title, servicesContent, bannerImage } = metServicesDetail.fields;

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl font-bold mt-6 mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-xl font-bold mt-4 mb-3">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4 leading-relaxed opacity-90">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc ml-5 mb-4 space-y-2">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal ml-5 mb-4 space-y-2">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="pl-1">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic bg-white/5 rounded-r">
          {children}
        </blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const fields = node.data.target?.fields;
        if (!fields?.file?.url) {
          return null;
        }
        const { file, title } = fields;
        return (
          <img
            src={`https:${file.url}`}
            alt={title}
            className="my-6 rounded-lg"
          />
        );
      },
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const fields = node.data.target?.fields;
        if (!fields?.file?.url) {
          return <span>{children}</span>;
        }
        const { file, title } = fields;
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
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 underline transition-colors"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <>
      <Header industries={industries} services={metServices} />
      <section className="py-[4rem] px-[0rem] mx-auto bg-[#0A142F] min-h-screen text-white">
        {bannerImage?.fields?.file?.url && (
          <div className="relative w-full h-[50dvh] mb-8">
            <img
              src={`https:${bannerImage.fields.file.url}`}
              alt={bannerImage.fields.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}

        <div className="container mx-auto px-6">
          <h1 className="text-white lg:text-[3.5rem] md:text-[2.5rem] text-[2rem] font-bold mb-8 text-center">
            {title}
          </h1>

          <div className="prose prose-invert prose-lg max-w-[60rem] mx-auto text-gray-300 text-center">
            {servicesContent && documentToReactComponents(servicesContent, options)}
          </div>
        </div>
      </section>

      <LatestPosts blogs={blogs} />
      <ClientAcrossGlobe />
      <ContactSection />
      <Footer metServices={metServices} />
    </>
  );
}
