import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';

export interface IOwnProps {
  title: string;
}

export interface IStyles {
  container: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
