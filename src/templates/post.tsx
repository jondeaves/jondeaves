import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';

import Footer from '../components/shared/Footer';
import Gallery from '../components/shared/Gallery/Gallery';
import Header from '../components/shared/Header';
import Link from '../components/shared/Link';
import Main from '../components/shared/Main';
import PostBody from '../components/shared/Posts/Post/PostBody';
import PostSummary from '../components/shared/Posts/Post/PostSummary';
import Section from '../components/shared/Section';

import IPostTemplateProps from './PostTemplate.types';

export const PostTemplate: React.FunctionComponent<IPostTemplateProps> = ({
  data: { allFooterLinks, allHeaderLinks, contentfulPost, site },
}) => {
  const { title: pageTitle, description } = site.siteMetadata;

  const {
    title: postTitle,
    tagLine,
    body: postBody,
    banner,
    gallery,
    publishedDate,
  } = contentfulPost;

  const { name: authorName } = contentfulPost.author;

  return (
    <React.Fragment>
      <Header links={allHeaderLinks} isHomepage={true} />
      <Main>
        <Helmet>
          <title>{postTitle || pageTitle}</title>
          <meta name="description" content={tagLine || description} />
        </Helmet>

        <article>
          <PostSummary
            author={authorName}
            date={publishedDate}
            tagLine={tagLine}
            title={postTitle}
          />

          <PostBody banner={banner} html={postBody.childMarkdownRemark.html} />

          <Gallery images={gallery} />

          <Section padded={false}>
            <Link to="/posts" label="View more posts" />
          </Section>
        </article>
      </Main>

      <Footer links={allFooterLinks} />
    </React.Fragment>
  );
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
        description
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

    contentfulPost(slug: { eq: $slug }) {
      title
      tagLine
      featured

      author {
        name
      }
      publishedDate(formatString: "MMM Do, YYYY")

      banner {
        title
        fluid(maxWidth: 720) {
          ...GatsbyContentfulFluid_withWebp
        }
      }

      gallery {
        title
        fixed {
          ...GatsbyContentfulFixed_withWebp
        }
      }

      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
