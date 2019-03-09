const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const config = require('./src/config');

function generatePages(graphql, createPage) {
  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/post.tsx');

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
          path: `${config.postPathPrefix}${post.node.slug}`,
          component: blogPost,
          context: {
            fullPath: `${config.postPathPrefix}${post.node.slug}`,
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
      toPath: '/posts',
      isPermanent: true,
      redirectInBrowser: true,
    });

    createRedirect({
      fromPath: '/project',
      toPath: '/posts',
      isPermanent: true,
      redirectInBrowser: true,
    });

    createRedirect({
      fromPath: '/projects.html',
      toPath: '/posts',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project-rogues-with-benefits.html',
      toPath: '/posts/rogues-with-benefits',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project-save-the-bakon.html',
      toPath: '/posts/save-the-bakon',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project-for-the-impire.html',
      toPath: '/posts/for-the-impire',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project/rogues-with-benefits',
      toPath: '/posts/rogues-with-benefits',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project/save-the-bakon',
      toPath: '/posts/save-the-bakon',
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: '/project/for-the-impire',
      toPath: '/posts/for-the-impire',
      isPermanent: true,
      redirectInBrowser: true,
    });
  });
};
