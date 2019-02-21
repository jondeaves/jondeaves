import { FelaWithStylesProps } from 'react-fela';

import { ITheme } from '../../../Theme';

export interface IOwnProps {
  /** The url the link points to */
  to: string;

  /** Text to wrap link around */
  label: string;

  /** Classes to apply. external will be manually applied if isExternal is true */
  className?: string;

  /** Is this link to an external resource */
  isExternal?: boolean;

  /** Will this link open in a new window/tab (target="_blank") */
  openInNewWindow?: boolean;

  /** If link is not trusted we will add noopener/noreferrer to the rel attribute */
  isTrusted?: boolean;
}

export interface IFinalProps {
  // For external links, same value as to
  href?: string;

  // Specifies the relationship between the current document and the linked document
  rel?: string;

  target?: '_blank';
}

export interface IStyles {
  externalLabel: any;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
