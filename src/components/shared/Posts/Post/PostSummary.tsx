import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../../Theme';

import Section from '../../Section';

import PostSummaryStyles from './PostSummary.styles';
import { IOwnProps, IProps, IStyles } from './PostSummary.types';

export const PostSummary: React.FunctionComponent<IProps> = ({
  author,
  date,
  styles,
  tagLine,
  title,
}: IProps) => {
  return (
    <Section palette="dark" title={title} isPrimary={true}>
      <p className={styles.p1}>
        Posted by <strong>{author}</strong> on <strong>{date}</strong>
      </p>

      <p className={styles.p2}>{tagLine}</p>
    </Section>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(PostSummaryStyles)(
  PostSummary,
);
