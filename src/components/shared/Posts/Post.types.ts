import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';
import IContentfulPost from '../../../types/IContentfulPost';

export interface IOwnProps {
  post: IContentfulPost;
}

export interface IStyles {
  container: IStyle;

  image: IStyle;

  sectionWrapper: IStyle & {
    ':hover': IStyle;
  };

  section: IStyle;

  heading: IStyle;

  footer: IStyle;

  link: IStyle & {
    ':hover': IStyle;
  };
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
