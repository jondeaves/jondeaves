import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';
import IAboutMicrodata from '../../../types/IAboutMicrodata';
import IFixedImage from '../../../types/IFixedImage';

export interface IOwnProps {
  featuredImage: IFixedImage;
  microdata: IAboutMicrodata;
  skills: string[];
  summary: string;
}

export interface IStyles {
  container: IStyle;

  header: IStyle & {
    print: IStyle;
  };

  grid: IStyle & {
    atDesktop: IStyle;
  };

  summaryGridItem: IStyle;

  photoGridItem: IStyle & {
    atDesktop: IStyle;
    print: IStyle;
  };

  experienceGridItemLeft: IStyle;

  experienceGridItemRight: IStyle;

  skillsGridItemLeft: IStyle;

  skillsGridItemRight: IStyle;

  photoWrapper: IStyle & {
    atDesktop: IStyle;
    print: IStyle;
  };

  summary: IStyle & {
    atDesktop: IStyle;
  };

  innerImage: IStyle;

  address: IStyle & {
    '> span': IStyle;
    '> .adr span': IStyle;
  };

  hide: IStyle;

  show: IStyle & {
    print: IStyle;
  };
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
