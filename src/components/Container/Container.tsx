import React from 'react';

import Footer from '../Footer';

export const Container: React.FunctionComponent = ({ children }) => {
  return <React.Fragment>
    <main>{children}</main>
    <Footer />
  </React.Fragment>;
};

export default Container;
