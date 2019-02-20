import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';

// tslint:disable-next-line:no-empty-interface
export interface IOwnProps {}

export interface IStyles {
  container: IStyle & {
    atDesktop: IStyle;
    print: IStyle;
  };

  headings: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
