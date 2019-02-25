import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';

import Link from '../Link';

import HeaderStyles from './HeaderNav.styles';
import { IOwnProps, IProps, IStyles } from './HeaderNav.types';

export const Header: React.FunctionComponent<IProps> = ({
  links,
  styles,
}: IProps) => {
  if (links.edges.length === 0) {
    return null;
  }

  return (
    <nav>
      <ul className={styles.list}>
        {links.edges.map(({ node: link }, idx) => {
          return (
            <li key={idx} className={styles.listItem}>
              <Link
                to={link.uri}
                label={link.title}
                isExternal={link.external}
                className={styles.link}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(HeaderStyles as any)(Header);
