import React from 'react';
import { ThemeProvider } from 'react-fela';

import baseTheme from './base';

export const BaseTheme: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
);
