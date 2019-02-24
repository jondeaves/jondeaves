import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import IHomeProps from '../types/pages/Home';

import Bio from '../components/shared/Bio';
import Header from '../components/shared/Header';
import Main from '../components/shared/Main';

export const Home: React.FunctionComponent<IHomeProps> = ({
  data: { site, pageContent },
}) => {
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
      <Header />
      <Main>
        <Helmet>
          <title>{metaTitle || pageTitle}</title>
          <meta name="description" content={metaDescription || description} />
        </Helmet>

        <Bio html={html} image={featuredImage} />

        {/* <BlogList uiLanguage={uiLanguage} entries={edges} /> */}
      </Main>
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
  }
`;
