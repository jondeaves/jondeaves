import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';

// tslint:disable-next-line:no-empty-interface
export interface IOwnProps {}

export interface IStyles {
  list: IStyle & {
    atDesktop: IStyle;
  };

  listItem: IStyle & {
    ':hover': IStyle;

    atDesktop: IStyle & {
      ':hover': IStyle;
    };
  };

  link: IStyle & {
    ':hover': IStyle;
  };
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
