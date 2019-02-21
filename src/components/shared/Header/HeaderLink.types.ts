import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';

export interface IOwnProps {
  isPrimary?: boolean;
  level: number;
  uri: string;
  title: string;
}

export interface IStyles {
  primary: IStyle & {
    atDesktop: IStyle;
  };

  secondary: IStyle & {
    atDesktop: IStyle;
  };

  link: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
