import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../../Theme';

import Link from '../../Link';

import HeaderStyles from './HeaderNav.styles';
import { IOwnProps, IProps, IStyles } from './HeaderNav.types';

export const Header: React.FunctionComponent<IProps> = ({ styles }: IProps) => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to="/about" label="About" className={styles.link} />
        </li>
        <li className={styles.listItem}>
          <Link to="/blog" label="Blogs" className={styles.link} />
        </li>
      </ul>
    </nav>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(HeaderStyles as any)(Header);
