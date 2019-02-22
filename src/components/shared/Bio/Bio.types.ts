import { IStyle } from 'fela';
import { FluidObject } from 'gatsby-image';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';

export interface IOwnProps {
  html: string;
  image: FluidObject;
}

export interface IStyles {
  container: {
    atDesktop: IStyle;
  };

  heading: IStyle & {
    atDesktop: IStyle;
  };

  image: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
