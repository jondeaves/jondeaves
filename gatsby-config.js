const urljoin = require('url-join');

// Must come first to ensure it's loaded before site config
require('dotenv').config();

const config = require('./src/config');

const fqdn = urljoin(config.siteUrl, config.pathPrefix);

module.exports = {
  siteMetadata: {
    ...config.meta,
    rssMetadata: {
      ...config.meta,
      site_url: fqdn,
      feed_url: urljoin(fqdn, config.rss.path),
      image_url: `${urljoin(fqdn, 'favicons', 'firefox_app_512x512.png')}`,
      copyright: config.copyright,
    },
    siteUrl: config.siteUrl,
  },
  pathPrefix: config.pathPrefix,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/favicon.png', // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             author
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allContentfulPost } }) => {
    //           return allContentfulPost.edges.map(edge => {
    //             return Object.assign({}, edge.node, {
    //               description: edge.node.tagLine,
    //               url: `${site.siteMetadata.siteUrl}/${edge.node.category}/${
    //                 edge.node.slug
    //               }`,
    //               guid: `${site.siteMetadata.siteUrl}/${edge.node.category}/${
    //                 edge.node.slug
    //               }`,

    //               custom_elements: [
    //                 { language: 'en-GB' },
    //                 { author: 'hello@jondeaves.me' },
    //                 { pubDate: edge.node.publishedDate },
    //               ],
    //             });
    //           });
    //         },
    //         query: `
    //           {
    //             allContentfulPost(
    //               limit: 1000,
    //               sort: { order: DESC, fields: [publishedDate] }
    //             ) {
    //               edges {
    //                 node {
    //                   title
    //                   slug
    //                   category
    //                   publishedDate
    //                   tags
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //       },
    //     ],
    //   },
    // },
  ],
};
