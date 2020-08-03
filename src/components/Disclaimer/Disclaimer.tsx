import React from 'react';
import { useStyles } from 'react-treat';

import * as styleRefs from './Disclaimer.treat';

export const Disclaimer: React.FunctionComponent = ({ children }) => {
  const { DisclaimerMain } = useStyles(styleRefs);

  return (
    <p className={DisclaimerMain}>
      {children}
    </p>
  )
};

export default Disclaimer;
