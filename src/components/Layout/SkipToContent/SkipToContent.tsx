import React from 'react';
import { useStyles } from 'react-treat';
import { Link } from 'gatsby';

import * as styleRefs from './SkipToContent.treat';

export const SkipToContent: React.FunctionComponent = () => {
  const { SkipToContent } = useStyles(styleRefs);

  return (
    <li className={SkipToContent}>
      <a href="#main">
        <small>Skip to content</small>
      </a>
    </li>
  );
};

export default SkipToContent;
