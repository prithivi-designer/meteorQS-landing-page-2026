const { createClient } = require("contentful");
require("dotenv").config({ path: ".env.local" });

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function fetchIndustries() {
    try {
        const res = await client.getEntries({
            content_type: "meteoriqsIndustries",
        });

        console.log("--- Contentful Industries ---");
        res.items.forEach((item) => {
            console.log(`Title: "${item.fields.title}", Slug: "${item.fields.slug}"`);
        });
        console.log("-----------------------------");
    } catch (error) {
        console.error("Error fetching industries:", error);
    }
}

fetchIndustries();
