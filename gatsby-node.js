const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');

function generatePages(graphql, createPage) {
  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.jsx');

    const graphqlQuery = `{
      allContentfulPost(
        sort: { fields: [publishedDate], order: DESC },
        limit: 1000
      ) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }`;

    graphql(graphqlQuery).then(result => {
      if (result.errors) {
        console.error(result.errors);
        reject(result.errors);
      }

      if (result.data.allContentfulPost === null) {
        console.info(`No blogs to load`);
        return;
      }

      // Create blog posts pages.
      const posts = result.data.allContentfulPost.edges;

      _.each(posts, (post, index) => {
        const previous =
          index === posts.length - 1 ? {} : posts[index + 1].node;
        const next = index === 0 ? {} : posts[index - 1].node;

        createPage({
          path: `/blog/${post.node.slug}`,
          component: blogPost,
          context: {
            fullPath: `/blog/${post.node.slug}`,
            slug: post.node.slug,
            previous,
            next,
          },
        });
      });

      resolve();
    });
  });
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  generatePages(graphql, createPage).then(() => {
    // Setup redirects
    createRedirect({
      fromPath: '/about.html',
      toPath: '/about',
      isPermanent: true,
      redirectInBrowser: true,
    });

    createRedirect({
      fromPath: '/skills.html',
      toPath: '/about#skills',
      isPermanent: true,
      redirectInBrowser: true,
    });

    createRedirect({
      fromPath: '/blog',
      toPath: '/blogs',
      isPermanent: true,
      redirectInBrowser: true,
    });

    createRedirect({
      fromPath: '/project',
      toPath: '/blogs',
      isPermanent: true,
      redirectInBrowser: true,
    });

    createRedirect({
      fromPath: '/projects.html',
      toPath: '/blogs',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project-rogues-with-benefits.html',
      toPath: '/blogs/rogues-with-benefits',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project-save-the-bakon.html',
      toPath: '/blogs/save-the-bakon',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project-for-the-impire.html',
      toPath: '/blogs/for-the-impire',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project/rogues-with-benefits',
      toPath: '/blogs/rogues-with-benefits',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project/save-the-bakon',
      toPath: '/blogs/save-the-bakon',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project/for-the-impire',
      toPath: '/blogs/for-the-impire',
      isPermanent: true,
      redirectInBrowser: true,
    });
  });
};
