import React from 'react';

import Header from '../components/shared/Header';
import Main from '../components/shared/Main';

export const Home: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <Header />
    <Main>Hello, World</Main>
  </React.Fragment>
);

export default Home;
