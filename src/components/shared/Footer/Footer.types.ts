import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';
import INavLink from '../../../types/INavLink';

export interface IOwnProps {
  links: INavLink;
}

export interface IStyles {
  container: IStyle & {
    atPrint: IStyle;
  };

  nav: IStyle;

  navList: IStyle;

  navListItem: IStyle & {
    '&:not(:first-child)': IStyle;
    '> a': IStyle;
  };

  contentfulWrapper: IStyle;

  contentfulLink: IStyle & {
    '&:hover': IStyle;
  };

  contentfulImage: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
