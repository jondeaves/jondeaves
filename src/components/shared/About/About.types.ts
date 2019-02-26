import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';
import IAboutMicrodata from '../../../types/IAboutMicrodata';
import IExperience from '../../../types/IExperience';
import IFixedImage from '../../../types/IFixedImage';

export interface IOwnProps {
  experienceList: {
    edges: Array<{
      node: IExperience;
    }>;
  };
  featuredImage: IFixedImage;
  microdata: IAboutMicrodata;
  skills: string[];
  summary: string;
}

export interface IStyles {
  container: IStyle;

  header: IStyle & {
    atPrint: IStyle;
  };

  grid: IStyle & {
    atDesktop: IStyle;
    atLargeDesktop: IStyle;
  };

  summaryGridItem: IStyle & {
    atLargeDesktop: IStyle;
    atPrint: IStyle;
  };

  photoGridItem: IStyle & {
    atLargeDesktop: IStyle;
    atPrint: IStyle;
  };

  experienceGridItemLeft: IStyle;

  experienceGridItemRight: IStyle & {
    atDesktop: IStyle;
  };

  skillsGridItemLeft: IStyle;

  skillsGridItemRight: IStyle & {
    atDesktop: IStyle;
  };

  photoWrapper: IStyle & {
    atDesktop: IStyle;
    atPrint: IStyle;
  };

  summary: IStyle & {
    atLargeDesktop: IStyle;
  };

  innerImage: IStyle;

  experienceList: IStyle;

  address: IStyle & {
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
