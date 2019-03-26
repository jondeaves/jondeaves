import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../../Theme';

export interface IOwnProps {
  author: string;
  date: string;
  tagLine: string;
  title: string;
}

export interface IStyles {
  p1: IStyle;
  p2: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
