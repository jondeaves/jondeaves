import React from 'react';
import { PageProps } from 'gatsby';

import Seo from '../components/Seo';
import Wrapper from '../components/Wrapper';
import PageHeader from '../components/Layout/PageHeader';

const AgencyWork: React.FC<PageProps<{}>> = () => {
  const title = 'A collection of sites I built while working for an agency';

  return (
    <Wrapper header={<PageHeader title={title} />}>
      <Seo title={title} />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus justo sed nulla vehicula, ut iaculis libero bibendum. Vestibulum diam neque, facilisis nec tellus ac, semper sodales augue.</p>
    </Wrapper>
  )
};

export default AgencyWork;