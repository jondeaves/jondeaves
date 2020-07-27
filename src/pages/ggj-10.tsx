import React from 'react';

import Seo from '../components/Seo';
import Wrapper from '../components/Wrapper';
import PageHeader from '../components/Layout/PageHeader';

const GGJ10 = () => {
  const title = 'Global Game Jamming, a decade later';
  const blurbs = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus justo sed nulla vehicula, ut iaculis libero bibendum. Vestibulum diam neque, facilisis nec tellus ac, semper sodales augue.'];

  return (
    <Wrapper>
      <Seo title={title} />
      <PageHeader title={title} blurbs={blurbs} />
    </Wrapper>
  )
};

export default GGJ10;
