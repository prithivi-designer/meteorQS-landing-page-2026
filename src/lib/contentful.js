import { createClient } from "contentful";

export const client = createClient({
  space: "0j1vh9j4mlnb",
  accessToken: "jdVQvfIp3PnCyS6mXyMPLWr68kaZr5oGcTG0IN91AXc",
});

// import { createClient } from "contentful";

// const space = "0j1vh9j4mlnb";
// const accessToken = "jdVQvfIp3PnCyS6mXyMPLWr68kaZr5oGcTG0IN91AXc";

// if (!space || !accessToken) {
//   throw new Error("Contentful environment variables are missing");
// }

// export const client = createClient({
//   space,
//   accessToken,
// });
