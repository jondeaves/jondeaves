import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../../Theme';

import Link from '../../Link';

import HeaderLinkStyles from './HeaderLink.styles';
import { IOwnProps, IProps, IStyles } from './HeaderLink.types';

export const HeaderLink: React.FunctionComponent<IProps> = ({
  isPrimary,
  level,
  uri,
  styles,
  title,
}: IProps) => {
  return React.createElement(
    `h${level}`,
    { className: isPrimary ? styles.primary : styles.secondary },
    <Link to={uri} label={title} className={styles.link}>
      {title}
    </Link>,
  );
};

HeaderLink.defaultProps = {
  isPrimary: true,
  level: 1,
};

export default connect<IOwnProps, IStyles, ITheme>(HeaderLinkStyles as any)(
  HeaderLink,
);
