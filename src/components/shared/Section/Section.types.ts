import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';

export interface IOwnProps {
  children?: React.ReactNode;
  className?: string;
  ident?: string;
  isFull?: boolean;
  isLarge?: boolean;
  isPrimary?: boolean;
  palette?: string;
  uri?: string;
  small?: boolean;
  styles?: object;
  textAlign?: string;
  title?: string;
}

export interface IStyles {
  container: IStyle & {
    atDesktop: IStyle;
  };
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
