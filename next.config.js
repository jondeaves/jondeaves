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
        source: "/cronitor.js",
        destination: "https://rum.cronitor.io/script.js",
      },
    ];
  },
};

module.exports = nextConfig;
