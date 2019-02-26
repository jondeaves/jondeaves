import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';
import IAboutMicrodata from '../../../types/IAboutMicrodata';

export interface IOwnProps {
  microdata: IAboutMicrodata;
}

export interface IStyles {
  container: IStyle & {
    '> span': IStyle;

    '> .adr span': IStyle;
  };

  hide: IStyle;

  show: IStyle & {
    atPrint: IStyle;
  };
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
