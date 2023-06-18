// This file contains the site configuration for the theme.

// Metadata, SEO, and Social
export const SITE_TITLE = "Astro Van Info";
export const SITE_DESCRIPTION =
  "A site about buying, owning, and maintaining Astro Vans";
export const SITE_URL = "https://astrovan.info";
export const SITE_DEFAULT_OG_IMAGE = "/assets/og-image.png";

// Docs Sidebar
// Define the left sidebar items here.
// The path should match the folder name in src/content/docs/
export const SIDEBAR_ITEMS = {
  "Get Started": [
    "/docs/get-started/introduction",
    "/docs/get-started/installation",
  ],
  Tutorials: ["/docs/tutorials/build-x"],
  Guides: [
    "/docs/guides/door-locks",
    "/docs/guides/led-bumper-install",
    "/docs/guides/transmission-filter",
    "/docs/guides/windshield-wipers",
    "/docs/guides/wheels",
  ],
  Reviews: ["/docs/reviews/led-bumper", "/docs/reviews/skid-plate"],
};
