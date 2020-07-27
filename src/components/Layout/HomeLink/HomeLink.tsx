import React from 'react';
import { useStyles } from 'react-treat';
import { Link } from 'gatsby';

import * as styleRefs from './HomeLink.treat';

export const HomeLink: React.FunctionComponent = ({ children }) => {
  const { HomeLinkMain, HomeLinkLink, HomeLinkLabel } = useStyles(styleRefs);

  return <div className={HomeLinkMain}><Link to="/" className={HomeLinkLink}>
    &lt;&nbsp;
    <span className={HomeLinkLabel}><small>Home</small></span>
  </Link></div>;
};

export default HomeLink;
