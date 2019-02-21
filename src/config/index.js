module.exports = {
  meta: {
    author: 'Jon Deaves',
    description: 'Web Developer in Glasgow, Scotland',
    title: 'Jon Deaves',
  },

  // Prefixes all links
  pathPrefix: '/',

  rss: {
    // Path to RSS feed, appended to siteUrl
    path: '/rss.xml',
  },

  // The FQDN of the site; deployed or local
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : 'https://jondeaves.me',
};
