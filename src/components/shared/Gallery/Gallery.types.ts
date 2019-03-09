import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';

export interface IOwnProps {
  images: any;
}

export interface IStyles {
  wrapper: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
