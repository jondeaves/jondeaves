import Img from 'gatsby-image';
import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';

import Section from '../Section';

import BioStyles from './Bio.styles';
import { IOwnProps, IProps, IStyles } from './Bio.types';

export const Bio: React.FunctionComponent<IProps> = ({
  html,
  image,
  styles,
}: IProps) => (
  <Section>
    <div className={styles.image}>
      <Img fluid={image} />
    </div>
    <div
      className={styles.heading}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </Section>
);

export default connect<IOwnProps, IStyles, ITheme>(BioStyles as any)(Bio);

{
  /* <section className={styles.container}>
<div className={styles.image}>
  <Img fluid={image} />
</div>
<div
  className={styles.heading}
  dangerouslySetInnerHTML={{ __html: html }}
/>
</section> */
}
