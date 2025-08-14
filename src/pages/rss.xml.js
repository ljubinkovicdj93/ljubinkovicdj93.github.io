import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export const get = async () => {
  return rss({
    // `<title>` field in output xml
    title: "Djordje Ljubinkovic blog",
    // `<description>` field in output xml
    description: "Aspiring computer vision and machine learning engineer, sharing insights and projects.",
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // Only include blog posts, not project files
    items: await pagesGlobToRssItems(import.meta.glob("./blog/*.md")),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
};
