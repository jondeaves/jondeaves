import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';
import IContentfulPost from '../../../types/IContentfulPost';

export interface IOwnProps {
  posts: { edges: IContentfulPost[] };
}

export interface IStyles {
  container: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
