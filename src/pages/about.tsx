import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import IAboutPageProps from '../types/pages/IAboutPageProps';

import About from '../components/shared/About';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Main from '../components/shared/Main';

export const AboutPage: React.FunctionComponent<IAboutPageProps> = ({
  data: { allFooterLinks, allHeaderLinks, experienceList, pageContent, site },
}) => {
  const { title: pageTitle, description } = site.siteMetadata;
  const {
    featuredImage,
    fragmentData: { skills, microdata },
    metaTitle,
    metaDescription,
    body: {
      childMarkdownRemark: { html },
    },
  } = pageContent;

  return (
    <React.Fragment>
      <Header links={allHeaderLinks} isHomepage={false} />
      <Main>
        <Helmet>
          <title>{metaTitle || `Personal resume for ${pageTitle}`}</title>
          <meta name="description" content={metaDescription || description} />
        </Helmet>

        <About
          experienceList={experienceList}
          skills={skills}
          featuredImage={featuredImage}
          microdata={microdata}
          summary={html}
        />
      </Main>

      <Footer links={allFooterLinks} />
    </React.Fragment>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
      }
    }

    pageContent: contentfulPage(slug: { eq: "about" }) {
      metaTitle
      metaDescription

      body {
        childMarkdownRemark {
          html
        }
      }

      featuredImage {
        title
        fixed(width: 210, height: 240) {
          ...GatsbyContentfulFixed_withWebp
        }
      }

      fragmentData {
        skills
        microdata {
          title
          givenName
          familyName

          address {
            locality
            region
          }
          contact {
            email
            site {
              title
              href
            }
            social {
              github
              linkedin
              twitter
            }
          }
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

    experienceList: allContentfulExperience(
      sort: { fields: [endDate], order: DESC }
    ) {
      edges {
        node {
          jobTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          companyName
          companyUri
          startDate
          endDate
          isCurrent
        }
      }
    }
  }
`;
