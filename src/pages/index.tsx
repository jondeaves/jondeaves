import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import IHomeProps from '../types/pages/Home';

import Bio from '../components/shared/Bio';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Main from '../components/shared/Main';

export const Home: React.FunctionComponent<IHomeProps> = ({
  data: {
    allFooterLinks,
    allHeaderLinks,
    featuredBlogPosts,
    pageContent,
    site,
  },
}) => {
  console.log(featuredBlogPosts);
  const { title: pageTitle, description } = site.siteMetadata;
  const {
    metaTitle,
    metaDescription,
    featuredImage,
    body: {
      childMarkdownRemark: { html },
    },
  } = pageContent;

  return (
    <React.Fragment>
      <Header links={allHeaderLinks} />
      <Main>
        <Helmet>
          <title>{metaTitle || pageTitle}</title>
          <meta name="description" content={metaDescription || description} />
        </Helmet>

        <Bio html={html} image={featuredImage} />

        {/* <BlogList entries={featuredBlogPosts} /> */}
      </Main>

      <Footer links={allFooterLinks} />
    </React.Fragment>
  );
};

export default Home;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
      }
    }

    pageContent: contentfulPage(slug: { eq: "home" }) {
      metaTitle
      metaDescription

      body {
        childMarkdownRemark {
          html
        }
      }

      featuredImage {
        title
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }

    allHeaderLinks: allContentfulNavLink(
      filter: { location: { eq: "header" } }
      sort: { fields: [order], order: ASC }
    ) {
      edges {
        node {
          title
          uri
          external
        }
      }
    }

    allFooterLinks: allContentfulNavLink(
      filter: { location: { eq: "footer" } }
      sort: { fields: [order], order: ASC }
    ) {
      edges {
        node {
          title
          uri
          external
        }
      }
    }

    featuredBlogPosts: allContentfulPost(
      filter: { featured: { eq: true } }
      sort: { fields: [publishedDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          category

          cover {
            title
            fixed(width: 390, height: 300) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`;
