import LatestPosts from "@/components/home/latestblog";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { client } from "@/lib/contentfull";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import dayjs from "dayjs";

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "meteoriqsCasestudy" });

  const paths = res.items.map((casestudy) => ({
    params: { slug: casestudy.fields.slug },
  }));
  console.log("paths", paths);
  return {
    paths,
    fallback: false, // can also use "blocking"
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "meteoriqsCasestudy",
    "fields.slug": params.slug,
  });

  return {
    props: {
      casestudy: res.items[0],
    },
  };
}

export default function BlogDetail({ casestudy }) {
  const { title, content, date, coverImage, section } = casestudy.fields;

  const options = {
    renderNode: {
      // Embedded Asset (image inside the content)
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
      <Header />
      <div className="py-[8rem] px-[1rem] max-w-[60rem] mx-auto">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {date ? (
          <p className="text-gray-500 mb-6">
            {dayjs(date).format(" MM-DD-YYYY")}
          </p>
        ) : (
          ""
        )}

        {/* Render cover image */}
        {coverImage && coverImage?.fields?.file?.url && (
          <img
            src={`https:${coverImage.fields.file.url}`}
            alt={coverImage.fields.title}
            className="mb-6 rounded-lg"
          />
        )}

        {/* Render rich text content */}
        <div className="prose max-w-none">
          {documentToReactComponents(content, options)}
        </div>
        {section?.map((sectionItem, index) => {
          const { layoutType, sectionImage, sectionContent } =
            sectionItem.fields;

          if (layoutType === "left-image") {
            return (
              <div key={index} className="flex gap-4 my-8">
                {sectionImage && (
                  <img
                    src={`https:${sectionImage[0]?.fields?.file?.url}`}
                    alt={sectionImage[0]?.fields?.title}
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
                {sectionImage && (
                  <img
                    src={`https:${sectionImage[0].fields.file.url}`}
                    alt={sectionImage[0]?.fields?.title}
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
              <div key={index} className="my-8">
                <div className="prose mt-4">
                  {documentToReactComponents(sectionContent, options)}
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>

      <Footer />
    </>
  );
}
