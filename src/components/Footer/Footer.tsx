import React from 'react';
import { useStyles } from 'react-treat';

import * as styleRefs from './Footer.treat';

export const Container: React.FunctionComponent = () => {
  const { FooterIntro, FooterLinks, FooterLink } = useStyles(styleRefs);

  return <footer>
    <p className={FooterIntro}><small>Find me on</small></p>
    <ul className={FooterLinks}>
      <li className={FooterLink}><a href="https://uk.linkedin.com/in/jondeaves" rel="external"><small>LinkedIn</small></a></li>
      <li className={FooterLink}><a href="https://github.com/jondeaves" rel="external"><small>GitHub</small></a></li>
    </ul>
  </footer>;
};

export default Container;
