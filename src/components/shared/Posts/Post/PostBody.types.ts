import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../../Theme';

export interface IOwnProps {
  banner: any;
  html: string;
}

export interface IStyles {
  banner: IStyle & {
    atDesktop: IStyle;
  };
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
