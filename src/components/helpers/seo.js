// components/SEO.js
import Head from "next/head";

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title || "Meteoriqs"}</title>
      <meta name="description" content={description || "Meteoriqs"} />
    </Head>
  );
}
