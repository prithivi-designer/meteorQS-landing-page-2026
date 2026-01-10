
export default async function handler(req, res) {
    // 1. Validate the secret to prevent unauthorized revalidations
    if (req.query.secret !== process.env.REVALIDATE_SECRET) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    try {
        // 2. Parse the payload from Contentful
        // Contentful Webhooks send the entity in the body
        const { sys, fields } = req.body || {};

        // If we just want to revalidate a specific path manually via query param
        if (req.query.path) {
            await res.revalidate(req.query.path);
            return res.json({ revalidated: true, path: req.query.path });
        }

        if (!sys || !fields) {
            return res.status(400).json({ message: 'Invalid payload. expected Contentful entry.' });
        }

        const contentType = sys.contentType?.sys?.id;

        // Helper to get slug value regardless of locale structure (simplified)
        // Contentful usually sends { "en-US": "slug-value" } or just "slug-value" depending on settings
        const getSlug = (slugField) => {
            if (typeof slugField === 'string') return slugField;
            if (typeof slugField === 'object') {
                const values = Object.values(slugField);
                return values.length > 0 ? values[0] : null;
            }
            return null;
        };

        const slug = getSlug(fields.slug);

        let paths = [];

        // 3. Determine paths to revalidate
        // Always revalidate the homepage as it lists most recent contents
        paths.push('/');

        if (contentType === 'meteoriqsIndustries' && slug) {
            paths.push(`/industry/${slug}`);
        } else if (contentType === 'meteoriqsServices' && slug) {
            paths.push(`/services/${slug}`);
        } else if (contentType === 'meteoriqsBlog' && slug) {
            paths.push(`/blogs/${slug}`);
            paths.push('/blogs'); // If there is a blog listing page
        } else if (contentType === 'meteoriqsCasestudy' && slug) {
            paths.push(`/causestudies/${slug}`);
            paths.push('/causestudies'); // If there is a case study listing page
        }

        // 4. Trigger revalidation
        await Promise.all(paths.map(async (path) => {
            try {
                await res.revalidate(path);
                console.log(`Revalidated: ${path}`);
            } catch (err) {
                console.error(`Failed to revalidate ${path}`, err);
                // Continue revalidating others even if one fails (e.g. route doesn't exist)
            }
        }));

        return res.json({ revalidated: true, paths });
    } catch (err) {
        console.error('Revalidation Error:', err);
        return res.status(500).json({ message: 'Error revalidating', error: err.message });
    }
}
