import React from 'react';
import { useStyles } from 'react-treat';
import { Link } from 'gatsby';

import * as styleRefs from './HomeLink.treat';

export const HomeLink: React.FunctionComponent = ({ children }) => {
  const { HomeLink } = useStyles(styleRefs);

  return (
    <li className={HomeLink}>
      <Link to="/" aria-label="Back link">
        <small>&lt;&nbsp;Home</small>
      </Link>
    </li>
  );
};

export default HomeLink;
