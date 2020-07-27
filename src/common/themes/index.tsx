import React from 'react';
import { TreatProvider } from 'react-treat';

import theme from './theme.treat';

export const BaseTheme: React.FunctionComponent = ({ children }) => (
  <TreatProvider theme={theme}>{children}</TreatProvider>
);
