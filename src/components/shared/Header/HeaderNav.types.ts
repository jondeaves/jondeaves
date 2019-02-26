import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';
import INavLink from '../../../types/INavLink';

export interface IOwnProps {
  links: INavLink;
}

export interface IStyles {
  list: IStyle & {
    atDesktop: IStyle;
  };

  listItem: IStyle & {
    ':hover': IStyle;
    atDesktop: IStyle;
  };

  link: IStyle & {
    ':hover': IStyle;
    '&.active': IStyle;

    atDesktop: IStyle & {
      ':hover': IStyle;
    };
  };
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
