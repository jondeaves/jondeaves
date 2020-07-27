import React from 'react';

import config from '../config';

import Seo from '../components/Seo';
import Wrapper from '../components/Wrapper';
import ArticleList from '../components/ArticleList';
import PageHeader from '../components/Layout/PageHeader';

const NewPage = () => {
  const title = 'Jon Deaves';
  const preTitle = 'Hello from';
  const blurbs = [
    config.meta.description,
    'This space on the internet exists primarily for two reasons; it allows me to experiment without any real fear of ruining anyone\'s day and it can serve as an archive of things I have done.'
  ];

  const activeArticles: any = [{
    title: 'Now as in nownownow. This is me within a point in time',
    href: '/now',
  }, {
    title: 'Side projects, technologies and other new things',
    href: '/new-stuff',
  }, {
    title: 'Portfolio tech write-up for 2020',
    href: '/portfolio-2020',
  }, {
    title: 'Global Game Jamming, a decade later',
    href: '/ggj-10',
  }];

  const activeArticlesDescription = `I'm not much of a writer but if there is something noteworthy that
  I've done then you can find it here.`;

  const oldArticles: any = [{
    title: 'A collection of sites I built while working for an agency',
    href: '/agency-work',
  }];

  const oldArticlesDescription = `Anything you find below is purely here for historic reasons. That
  means it could either be out of date, irrelevant or similar.`;

  return (
    <Wrapper>
      <Seo title={config.meta.author} description={config.meta.description} />

      <PageHeader home={true} title={title} preTitle={preTitle} blurbs={blurbs} />
      <ArticleList title="Active reading" description={activeArticlesDescription} articles={activeArticles} />
      <ArticleList title="Old reading" description={oldArticlesDescription} articles={oldArticles} />
    </Wrapper>
  )
};

export default NewPage;
