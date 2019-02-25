import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';

export interface IOwnProps {
  children?: React.ReactNode;
  className?: string;
  isPrimary?: boolean;
  maxWidth?: number;
  padded?: boolean;
  palette?: string;
  uri?: string;
  styles?: object;
  title?: string;
}

export interface IStyles {
  wrapper: IStyle;
  container: IStyle & {
    atDesktop: IStyle;

    '> * > p': IStyle;
  };
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
