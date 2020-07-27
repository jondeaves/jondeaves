import React from 'react';
import { useStyles } from 'react-treat';

import * as styleRefs from './Placeholder.treat';
import { PlaceholderProps } from './Placeholder.types';

export const Placeholder: React.FunctionComponent<PlaceholderProps> = ({ title, description }) => {
  const { PlaceholderMain, PlaceholderTitle, PlaceholderSubTitle } = useStyles(styleRefs);

  return (
    <div className={PlaceholderMain}>
      <h1 className={PlaceholderTitle}>{title}</h1>
      <h2 className={PlaceholderSubTitle}>{description}</h2>
    </div>
  )
};

export default Placeholder;
