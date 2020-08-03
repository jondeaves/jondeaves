import React from 'react';
import { PageProps, Link } from 'gatsby';

import Seo from '../components/Seo';
import Wrapper from '../components/Wrapper';
import PageHeader from '../components/Layout/PageHeader';
import Disclaimer from '../components/Disclaimer';

const AgencyWork: React.FC<PageProps<{}>> = () => {
  const title = 'Agency Work';

  return (
    <Wrapper header={<PageHeader title={title} />}>
      <Seo title={title} />

      <Disclaimer>
        This page is categorised as <strong>Old reading</strong> as these websites were made by me a few years ago and
        likely look different now from when I implemented them.
      </Disclaimer>

      <p>A collection of sites I built while working for a web design agency.</p>

      <p>
        While the pace of work was often more intense than I would have preferred, I'll always look back fondly on my
        time working on these sites as it was the point where my work on Front-end got some much-needed attention.
      </p>

      <ul>
        <li><Link to="/agency/soar">SOAR Running</Link></li>
        <li><Link to="/agency/cmf">Celtic Media Festival</Link></li>
        <li><Link to="/agency/vas">Visual Arts Scotland</Link></li>
      </ul>
    </Wrapper>
  )
};

export default AgencyWork;
