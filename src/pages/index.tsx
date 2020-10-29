import React from 'react';
import { PageProps } from 'gatsby';

import config from '../config';

import Seo from '../components/Seo';
import Wrapper from '../components/Wrapper';
import ArticleList from '../components/ArticleList';
import PageHeader from '../components/Layout/PageHeader';
import { ArticleSummaryProps } from '../components/ArticleSummary/ArticleSummary';

const IndexPage: React.FC<PageProps> = () => {
  const title = 'Jon Deaves';
  const preTitle = 'Hello from';

  const activeArticles: ArticleSummaryProps[] = [
    {
      title: 'Now now now',
      href: '/now',
    },
    {
      title: 'Website tech write-up for 2020',
      href: '/website-2020',
    },
  ];

  const activeArticlesDescription = `I'm not much of a writer but if there is something noteworthy that
  I've done then you can find it here.`;

  const oldArticles: ArticleSummaryProps[] = [
    {
      title: 'A collection of sites I built while working for an agency',
      href: '/agency-work',
    },
  ];

  const oldArticlesDescription = `Anything you find below is purely here for historic reasons. That
  means it could either be out of date, irrelevant or similar.`;

  const header = <PageHeader home={true} title={title} preTitle={preTitle} />;

  return (
    <Wrapper header={header}>
      <Seo title={config.meta.author} description={config.meta.description} />

      <p>{config.meta.description}</p>
      <p>
        This space on the internet exists primarily for two reasons; it allows me to experiment without any real fear of
        ruining anyone's day and it can serve as an archive of things I have done.
      </p>

      <ArticleList title="Active reading" description={activeArticlesDescription} articles={activeArticles} />
      <ArticleList title="Old reading" description={oldArticlesDescription} articles={oldArticles} />
    </Wrapper>
  );
};

export default IndexPage;
