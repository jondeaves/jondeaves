import React from 'react';

import Footer from '../Footer';

interface ContainerProps {
  header?: React.ReactNode
}

export const Container: React.FunctionComponent<ContainerProps> = ({ children, header }) => {
  return <React.Fragment>
    {header}
    <main id="main">{children}</main>
    <Footer />
  </React.Fragment>;
};

export default Container;
