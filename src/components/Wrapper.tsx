import React from 'react';

import { BaseTheme } from '../common/themes';

import Container from './Container';

export const Wrapper: React.FunctionComponent = ({ children }) => (
  <BaseTheme>
    <Container>{children}</Container>
  </BaseTheme>
);

export default Wrapper;
