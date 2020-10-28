import React from 'react';
import { useStyles } from 'react-treat';

import * as styleRefs from './SkipToContent.treat';

export const SkipToContent: React.FunctionComponent = () => {
  const { SkipToContentWrapper } = useStyles(styleRefs);

  return (
    <li className={SkipToContentWrapper}>
      <a href="#main">
        <small>Skip to content</small>
      </a>
    </li>
  );
};

export default SkipToContent;
