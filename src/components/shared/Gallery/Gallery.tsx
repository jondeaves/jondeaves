import Img from 'gatsby-image';
import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';

import Section from '../Section';

import GalleryStyles from './Gallery.styles';
import { IOwnProps, IProps, IStyles } from './Gallery.types';

export const Gallery: React.FunctionComponent<IProps> = ({
  images,
  styles,
}: IProps) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Section padded={false} maxWidth={720} className={styles.wrapper}>
      {images.map((image: any, idx: number) => (
        <Img key={idx} alt={image.title} fluid={image.fluid} />
      ))}
    </Section>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(GalleryStyles)(Gallery);
