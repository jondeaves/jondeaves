import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';

import SectionTitle from './SectionTitle';

import classnames from 'classnames';

import SectionStyles from './Section.styles';
import { IOwnProps, IProps, IStyles } from './Section.types';

export const Section: React.FunctionComponent<IProps> = ({
  children,
  className,
  isPrimary,
  uri,
  styles,
  title,
}: IProps) => (
  <section className={styles.wrapper}>
    <div className={classnames(styles.container, className)}>
      <SectionTitle title={title || ''} uri={uri} level={isPrimary ? 1 : 2} />
      {children}
    </div>
  </section>
);

Section.defaultProps = {
  align: 'center',
  compact: false,
  isPrimary: false,
  padded: true,
  title: '',
};

export default connect<IOwnProps, IStyles, ITheme>(SectionStyles as any)(
  Section,
);
