import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';
import INavLink from '../../../types/INavLink';

export interface IOwnProps {
  links: INavLink;
}

export interface IStyles {
  container: IStyle & {
    atDesktop: IStyle;
    print: IStyle;
  };

  headings: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
