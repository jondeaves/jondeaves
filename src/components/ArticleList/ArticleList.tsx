import React from 'react';
import { useStyles } from 'react-treat';

import ArticleSummary from '../ArticleSummary';
import { ArticleSummaryProps } from '../ArticleSummary/ArticleSummary';

import * as styleRefs from './ArticleList.treat';

interface ArticleListProps {
  title: string;
  description: string;
  articles: ArticleSummaryProps[];
}

export const ArticleList: React.FunctionComponent<ArticleListProps> = ({ title, description, articles }) => {
  const { ArticleListSectionBlurb } = useStyles(styleRefs);

  return (
    <section>
      <h2 id={title.split(' ')[0].toLowerCase()}>{title}</h2>
      <p className={ArticleListSectionBlurb} dangerouslySetInnerHTML={{ __html: description }} />

      {articles.map((article, idx) => (<ArticleSummary key={idx} title={article.title} href={article.href} />))}
    </section>
  );
};

export default ArticleList;
