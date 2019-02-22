import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';

import SectionTitle from './SectionTitle';

import SectionStyles from './Section.styles';
import { IOwnProps, IProps, IStyles } from './Section.types';

export const Section: React.FunctionComponent<IProps> = ({
  children,
  isPrimary,
  uri,
  styles,
  title,
}: IProps) => (
  <section className={styles.container}>
    <SectionTitle title={title || ''} uri={uri} level={isPrimary ? 1 : 2} />
    {children}
  </section>
);

Section.defaultProps = {
  isFull: false,
  isLarge: false,
  isPrimary: false,
  small: true,
  textAlign: 'center',
  title: '',
};

export default connect<IOwnProps, IStyles, ITheme>(SectionStyles as any)(
  Section,
);
