import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';

import LinkStyles from './Link.styles';
import { IFinalProps, IOwnProps, IProps, IStyles } from './Link.types';

export const Link: React.FunctionComponent<IProps> = (props: IProps) => {
  const {
    to,
    label,
    className,
    isExternal,
    openInNewWindow,
    isTrusted,
    styles,
  } = props;

  // Calculate what is needed in rel
  let rel = '';
  if (isExternal) {
    rel = [rel, 'external'].join(' ');
  }

  if (!isTrusted) {
    rel = [rel, 'noopener', 'noreferrer'].join(' ');
  }

  // Add to class if required
  let tmpClassName: typeof className = className;
  if (isExternal) {
    tmpClassName = [className, 'external'].join(' ');
  }

  const linkProps: IOwnProps & IFinalProps = {
    ...props,
    className: tmpClassName,
    href: undefined,
    rel,
    target: openInNewWindow ? '_blank' : undefined,
    to,
  };

  if (!isExternal) {
    return (
      <GatsbyLink {...linkProps}>
        {label}
        {isExternal && (
          <span className={styles.externalLabel}> (external link)</span>
        )}
      </GatsbyLink>
    );
  }

  // External links use default <a> element
  linkProps.href = to;
  delete linkProps.to;

  return (
    <a {...linkProps}>
      {label}
      {isExternal && (
        <span className={styles.externalLabel}> (external link)</span>
      )}
    </a>
  );
};

Link.defaultProps = {
  className: '',
  isExternal: false,
  isTrusted: true,
  openInNewWindow: false,
};

export default connect<IOwnProps, IStyles, ITheme>(LinkStyles as any)(Link);
