import Img from 'gatsby-image';
import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../../Theme';

import Section from '../../Section';

import PostBodyStyles from './PostBody.styles';
import { IOwnProps, IProps, IStyles } from './PostBody.types';

export const PostBody: React.FunctionComponent<IProps> = ({
  banner,
  html,
  styles,
}: IProps) => {
  return (
    <Section align="left" maxWidth={720} compact={true}>
      {banner.fluid && (
        <Img
          alt={banner.title}
          fluid={banner.fluid}
          className={styles.banner}
        />
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Section>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(PostBodyStyles)(PostBody);
