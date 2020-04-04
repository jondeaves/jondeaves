import { Link } from 'gatsby';
import React from 'react';

import Seo from '../components/Seo';
import Wrapper from '../components/Wrapper';

const IndexPage = () => (
  <Wrapper>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Wrapper>
);

export default IndexPage;
