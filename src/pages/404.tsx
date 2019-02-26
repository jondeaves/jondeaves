import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';

import INotFoundPageProps from '../types/pages/INotFoundPageProps';

import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Main from '../components/shared/Main';
import Section from '../components/shared/Section';

export const NotFoundPage: React.FunctionComponent<INotFoundPageProps> = ({
  data: { allFooterLinks, allHeaderLinks, pageContent, site },
}) => {
  const { title: pageTitle, description } = site.siteMetadata;
  const {
    title,
    metaTitle,
    metaDescription,
    featuredImage,
    body: {
      childMarkdownRemark: { html },
    },
  } = pageContent;

  return (
    <React.Fragment>
      <Header links={allHeaderLinks} isHomepage={false} />
      <Main>
        <Helmet>
          <title>{metaTitle || pageTitle}</title>
          <meta name="description" content={metaDescription || description} />
        </Helmet>

        <Section maxWidth={720} palette="dark">
          <h1>{title}</h1>

          <div dangerouslySetInnerHTML={{ __html: html }} />

          {featuredImage && (
            <div>
              <br />
              <Img alt={featuredImage.title} fluid={featuredImage.fluid} />
            </div>
          )}
        </Section>
      </Main>

      <Footer links={allFooterLinks} />
    </React.Fragment>
  );
};

export default NotFoundPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
      }
    }

    pageContent: contentfulPage(slug: { eq: "not-found" }) {
      title
      metaTitle
      metaDescription

      body {
        childMarkdownRemark {
          html
        }
      }

      featuredImage {
        title
        fluid(maxWidth: 720) {
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
  }
`;
