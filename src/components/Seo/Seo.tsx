import React from 'react';
import Helmet from 'react-helmet';

import useMeta from '../../common/hooks/useMeta';
import SiteConfig from '../../config';

import { ISeoProps } from './Seo.types';

export const Seo: React.FunctionComponent<ISeoProps> = (props) => {
  const { author, description, keywords = [], lang, meta = [] } = props;
  let { template, title } = props;

  const siteMetadata = useMeta();

  const metaDescription = description || siteMetadata.description;

  title = title ? title : `${siteMetadata.title} ${siteMetadata.description}`;
  template = template
    ? template
    : `%s | ${siteMetadata.title} ${siteMetadata.description}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={template}
      meta={[
        {
          content: author,
          name: 'author',
        },
        {
          content: metaDescription,
          name: 'description',
        },
        {
          content: title,
          property: 'og:title',
        },
        {
          content: metaDescription,
          property: 'og:description',
        },
        {
          content: 'website',
          property: 'og:type',
        },
        {
          content: 'summary',
          name: 'twitter:card',
        },
        {
          content: siteMetadata.author,
          name: 'twitter:creator',
        },
        {
          content: title,
          name: 'twitter:title',
        },
        {
          content: metaDescription,
          name: 'twitter:description',
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                content: keywords.join(', '),
                name: 'keywords',
              }
            : [],
        )
        .concat(meta)}
    />
  );
};

Seo.defaultProps = {
  author: SiteConfig.meta.author,
  description: SiteConfig.meta.description,
  keywords: SiteConfig.meta.keywords,
  lang: 'en',
  meta: [],
};

export default Seo;
