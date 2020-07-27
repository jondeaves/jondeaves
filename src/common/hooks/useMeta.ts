import { graphql, useStaticQuery } from 'gatsby';

import { Meta, MetaQuery } from '../types/Meta';

export default (): Meta => {
  const {
    site: { siteMetadata },
  }: MetaQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  return siteMetadata;
};
