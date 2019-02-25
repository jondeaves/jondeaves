import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';

import HeaderLink from './HeaderLink';
import HeaderNav from './HeaderNav';

import HeaderStyles from './Header.styles';
import { IOwnProps, IProps, IStyles } from './Header.types';

export const Header: React.FunctionComponent<IProps> = ({
  links,
  styles,
}: IProps) => {
  return (
    <header role="header" className={styles.container}>
      <div className={styles.headings}>
        <HeaderLink isPrimary={true} level={1} uri="/" title="Jon Deaves" />
        <HeaderLink isPrimary={false} level={2} uri="/" title="Web Developer" />
      </div>

      <HeaderNav links={links} />
    </header>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(HeaderStyles as any)(Header);
