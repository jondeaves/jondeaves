import React from 'react';
import { PageProps } from 'gatsby';

import Seo from '../components/Seo';
import Wrapper from '../components/Wrapper';
import PageHeader from '../components/Layout/PageHeader';

const Portfolio2020: React.FC<PageProps<{}>> = () => {
  const title = 'Portfolio tech write-up for 2020';

  return (
    <Wrapper header={<PageHeader title={title} />}>
      <Seo title={title} />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus justo sed nulla vehicula, ut iaculis libero bibendum. Vestibulum diam neque, facilisis nec tellus ac, semper sodales augue.</p>
    </Wrapper>
  )
};

export default Portfolio2020;
