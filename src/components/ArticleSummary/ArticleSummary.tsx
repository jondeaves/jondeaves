import { Link } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';

import * as styleRefs from './ArticleSummary.treat';

export interface ArticleSummaryProps {
  href: string;
  title: string;
}

export const ArticleSummary: React.FunctionComponent<ArticleSummaryProps> = ({ href, title }) => {
  const { ArticleSummaryTitle, ArticleSummaryLink } = useStyles(styleRefs);

  return (
    <article>
      <h3 className={ArticleSummaryTitle}>
        <Link to={href} className={ArticleSummaryLink}>{title}</Link>
      </h3>
    </article>
  );
};

export default ArticleSummary;
