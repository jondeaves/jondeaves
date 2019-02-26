import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';
import IExperience from '../../../types/IExperience';

export interface IOwnProps {
  experience: IExperience;
}

export interface IStyles {
  container: IStyle;

  title: IStyle;

  subTitle: IStyle;

  subTitleLink: IStyle;

  dates: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
