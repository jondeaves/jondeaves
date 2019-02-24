import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';
import Link from '../Link/Link';

import FooterStyles from './Footer.styles';
import { IOwnProps, IProps, IStyles } from './Footer.types';

export const Footer: React.FunctionComponent<IProps> = ({
  links,
  styles,
}: IProps) => {
  return (
    <footer role="footer" className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>Find me on</li>

          {links.edges.map(({ node: item }, idx) => (
            <li key={idx} className={styles.navListItem}>
              <Link
                label={item.title}
                to={item.uri}
                isExternal={item.external}
                className={styles.navListItem}
              />
            </li>
          ))}
        </ul>
      </nav>

      <p className={styles.contentfulWrapper}>
        <a
          href="https://www.contentful.com/"
          rel="nofollow"
          target="_blank"
          className={styles.contentfulLink}
        >
          <img
            src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
            alt="Powered by Contentful"
            className={styles.contentfulImage}
          />
        </a>
      </p>
    </footer>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(FooterStyles as any)(Footer);
