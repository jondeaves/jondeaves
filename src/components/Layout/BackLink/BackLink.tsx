import React from 'react';
import { useStyles } from 'react-treat';
import { Link } from 'gatsby';

import * as styleRefs from './BackLink.treat';
import { BackLinkProps } from './BackLink.types';

export const BackLink: React.FunctionComponent<BackLinkProps> = ({ children, label = 'Home', route = '/' }) => {
  const { BackLink } = useStyles(styleRefs);

  return (
    <li className={BackLink}>
      <Link to={route} aria-label="Back link">
        <small>&lt;&nbsp;{label}</small>
      </Link>
    </li>
  );
};

export default BackLink;
