import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';

import MainStyles from './Main.styles';
import { IOwnProps, IProps, IStyles } from './Main.types';

export const Main: React.FunctionComponent<IProps> = ({
  children,
  styles,
}: IProps) => (
  <main role="main" className={styles.container}>
    {children}
  </main>
);

export default connect<IOwnProps, IStyles, ITheme>(MainStyles as any)(Main);
