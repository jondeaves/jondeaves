import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Container.styles';

export const Container: React.FunctionComponent = (props) => {
  const { children } = props;
  const { css } = useFela<ITheme, {}>(props);

  return <div className={css(styles.main)}>{children}</div>;
};

export default Container;
