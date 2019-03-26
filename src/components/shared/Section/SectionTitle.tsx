import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';
import Link from '../Link';

import SectionTitleStyles from './SectionTitle.styles';
import { IOwnProps, IProps, IStyles } from './SectionTitle.types';

export const SectionTitle: React.FunctionComponent<IProps> | null = ({
  level,
  styles,
  title,
  uri,
}: IProps) => {
  if (!title) {
    return null;
  }

  return React.createElement(
    `h${level}`,
    { className: styles.heading },
    uri ? <Link to={uri} label={title} /> : title,
  );
};

SectionTitle.defaultProps = {
  level: 2,
};

export default connect<IOwnProps, IStyles, ITheme>(SectionTitleStyles as any)(
  SectionTitle,
);
