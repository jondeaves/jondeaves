import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';
import IFluidImage from '../../../types/IFluidImage';

export interface IOwnProps {
  html: string;
  image: IFluidImage;
}

export interface IStyles {
  container: IStyle;

  overlay: IStyle;

  heading: IStyle & {
    atDesktop: IStyle;

    atTablet: IStyle;

    '>p': IStyle;
  };

  image: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
