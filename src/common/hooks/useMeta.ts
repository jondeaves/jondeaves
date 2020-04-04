import { graphql, useStaticQuery } from 'gatsby';

import { IMeta, IMetaQuery } from '../types/IMeta';

export default (): IMeta => {
  const {
    site: { siteMetadata },
  }: IMetaQuery = useStaticQuery(
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
