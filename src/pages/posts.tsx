import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import IPostsPageProps from '../types/pages/PostsPage';

import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Main from '../components/shared/Main';
import Posts from '../components/shared/Posts';
import Section from '../components/shared/Section';

export const PostsPage: React.FunctionComponent<IPostsPageProps> = ({
  data: { allFooterLinks, allHeaderLinks, posts, pageContent, site },
}) => {
  const { title: pageTitle, description } = site.siteMetadata;

  const { html } = pageContent.body.childMarkdownRemark;
  const { title, metaTitle, metaDescription } = pageContent;

  return (
    <React.Fragment>
      <Header links={allHeaderLinks} />

      <Main>
        <Helmet>
          <title>{metaTitle || pageTitle}</title>
          <meta name="description" content={metaDescription || description} />
        </Helmet>

        <Section maxWidth={1170} palette="dark" title={title} isPrimary={true}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Section>

        <Posts posts={posts} />
      </Main>

      <Footer links={allFooterLinks} />
    </React.Fragment>
  );
};

export default PostsPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
      }
    }

    pageContent: contentfulPage(slug: { eq: "posts" }) {
      title
      metaTitle
      metaDescription

      body {
        childMarkdownRemark {
          html
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

    posts: allContentfulPost(sort: { fields: [publishedDate], order: DESC }) {
      edges {
        node {
          title
          slug
          category
          tags

          cover {
            title
            fluid(maxWidth: 390, maxHeight: 300) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
