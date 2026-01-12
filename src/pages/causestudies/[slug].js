import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import dayjs from "dayjs";

export async function getStaticPaths() {
  try {
    const res = await client.getEntries({
      content_type: "meteoriqsCasestudy",
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
    console.error("Error fetching case study paths:", error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const res = await client.getEntries({
      content_type: "meteoriqsCasestudy",
      "fields.slug": slug,
    });

    if (!res.items.length) {
      return { notFound: true }; // 404 if deleted
    }

    const [resIndustries, resServices] = await Promise.all([
      client.getEntries({ content_type: "meteoriqsIndustries" }),
      client.getEntries({ content_type: "meteoriqsServices" }),
    ]);

    return {
      props: {
        casestudy: res.items[0],
        industries: resIndustries.items || [],
        metServices: resServices.items || [],
      },
    };
  } catch (error) {
    console.error("Contentful error:", error);
    return { notFound: true };
  }
}

export default function CaseStudyDetail({ casestudy, industries, metServices }) {
  const { title, content, date, coverImage, section } = casestudy.fields;

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
            alt={coverImage.fields.title}
            className="mb-6 rounded-lg"
          />
        )}

        <div className="prose max-w-none">
          {documentToReactComponents(content, options)}
        </div>

        {section?.map((sectionItem, index) => {
          const { layoutType, sectionImage, sectionContent } =
            sectionItem.fields;

          if (layoutType === "left-image") {
            return (
              <div key={index} className="flex gap-4 my-8">
                {sectionImage?.[0]?.fields?.file?.url && (
                  <img
                    src={`https:${sectionImage[0].fields.file.url}`}
                    alt={sectionImage[0].fields.title}
                    className="w-1/2 rounded-lg"
                  />
                )}
                <div className="w-1/2 prose">
                  {documentToReactComponents(sectionContent, options)}
                </div>
              </div>
            );
          }

          if (layoutType === "right-image") {
            return (
              <div key={index} className="flex flex-row-reverse gap-4 my-8">
                {sectionImage?.[0]?.fields?.file?.url && (
                  <img
                    src={`https:${sectionImage[0].fields.file.url}`}
                    alt={sectionImage[0].fields.title}
                    className="w-1/2 rounded-lg"
                  />
                )}
                <div className="w-1/2 prose">
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

      <Footer metServices={metServices} />
    </>
  );
}
