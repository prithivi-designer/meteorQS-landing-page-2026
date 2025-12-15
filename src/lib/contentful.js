// import { createClient } from "contentful";

// export const client = createClient({
//   space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
// });

import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID | "0j1vh9j4mlnb";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN | "jdVQvfIp3PnCyS6mXyMPLWr68kaZr5oGcTG0IN91AXc";

if (!space || !accessToken) {
  throw new Error("Contentful environment variables are missing");
}

export const client = createClient({
  space,
  accessToken,
});
