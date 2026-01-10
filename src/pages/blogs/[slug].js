import LatestPosts from "@/components/home/latestblog";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import dayjs from "dayjs";

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    // Fetch blog detail
    const res = await client.getEntries({
      content_type: "meteoriqsBlog",
      "fields.slug": slug,
      limit: 1,
    });

    if (!res.items.length) {
      return { notFound: true }; // Blog deleted or invalid slug
    }

    // Fetch latest blogs for sidebar / latest posts
    const [resBlogs, resMeteoriqsServices, resIndustries] = await Promise.all([
      client.getEntries({
        content_type: "meteoriqsBlog",
        order: "-fields.date",
      }),
      client.getEntries({ content_type: "meteoriqsServices" }),
      client.getEntries({ content_type: "meteoriqsIndustries" }),
    ]);

    return {
      props: {
        blog: res.items[0],
        blogs: resBlogs.items.filter((b) => b.fields?.slug),
        metServices: resMeteoriqsServices.items,
        industries: resIndustries.items || [],
      },
    };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { notFound: true };
  }
}

export default function BlogDetail({ blog, blogs, metServices, industries }) {
  const { title, content, date, coverImage, section } = blog.fields;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        return (
          <img
            src={`https:${file.url}`}
            alt={title}
            className="my-6 rounded-lg w-full"
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

      <div className="py-[8rem] px-[1rem] max-w-[60rem] mx-auto">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {date && (
          <p className="text-gray-500 mb-6">
            {dayjs(date).format("MM-DD-YYYY")}
          </p>
        )}

        {coverImage?.fields?.file?.url && (
          <img
            src={`https:${coverImage.fields.file.url}`}
            alt={coverImage.fields.title || title}
            className="mb-6 rounded-lg w-full"
          />
        )}

        <div className="prose max-w-none">
          {content && documentToReactComponents(content, options)}
        </div>

        {section?.map((sectionItem, index) => {
          const { layoutType, sectionImage, sectionContent } =
            sectionItem.fields;

          if (!sectionContent) return null;

          const imageUrl = sectionImage?.[0]?.fields?.file?.url;
          const imageAlt = sectionImage?.[0]?.fields?.title || "";

          if (layoutType === "left-image") {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 my-8"
              >
                {imageUrl && (
                  <img
                    src={`https:${imageUrl}`}
                    alt={imageAlt}
                    className="w-full md:w-1/2 rounded-lg"
                  />
                )}
                <div className="w-full md:w-1/2 prose">
                  {documentToReactComponents(sectionContent, options)}
                </div>
              </div>
            );
          }

          if (layoutType === "right-image") {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row-reverse gap-4 my-8"
              >
                {imageUrl && (
                  <img
                    src={`https:${imageUrl}`}
                    alt={imageAlt}
                    className="w-full md:w-1/2 rounded-lg"
                  />
                )}
                <div className="w-full md:w-1/2 prose">
                  {documentToReactComponents(sectionContent, options)}
                </div>
              </div>
            );
          }

          if (layoutType === "full-width") {
            return (
              <div key={index} className="my-8 prose">
                {documentToReactComponents(sectionContent, options)}
              </div>
            );
          }

          return null;
        })}
      </div>

      {blogs?.length > 0 && <LatestPosts blogs={blogs} />}

      <Footer metServices={metServices} />
    </>
  );
}
