/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-GB"],
    defaultLocale: "en-GB",
  },
  rewrites: async () => {
    return [
      {
        source: "/bear.js",
        destination: "https://cdn.panelbear.com/analytics.js",
      },
    ];
  },
};

module.exports = nextConfig;
