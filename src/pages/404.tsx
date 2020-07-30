import { Link, PageProps } from 'gatsby';
import React from 'react';

import Seo from '../components/Seo';
import Wrapper from '../components/Wrapper';
import PageHeader from '../components/Layout/PageHeader';

const NotFoundPage: React.FC<PageProps<{}>> = () => {
  const blurbs = [
    'You just tried to get a page that doesn\'t actually exist...awkward...',
  ];

  return (
    <Wrapper>
      <Seo title="Page not found | Jon Deaves" />
      <PageHeader title="Not Found" blurbs={blurbs} />

      <p>Head back to the <Link to="/">Homepage</Link> and see if you can't find what you were trying to get.</p>
    </Wrapper>
  )
};

export default NotFoundPage;
