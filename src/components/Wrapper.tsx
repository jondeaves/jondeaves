import React from 'react';

import { BaseTheme } from '../common/themes';

import Container from './Container';

interface WrapperProps {
  header?: React.ReactNode
}

export const Wrapper: React.FunctionComponent<WrapperProps> = ({ children, header }) => (
  <BaseTheme>
    <Container header={header}>{children}</Container>
  </BaseTheme>
);

export default Wrapper;
