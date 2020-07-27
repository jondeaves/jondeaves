import React from 'react';
import { useStyles } from 'react-treat';

import HomeLink from '../HomeLink';

import * as styleRefs from './PageHeader.treat';
import { PageHeaderProps } from './PageHeader.types';

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title, preTitle, postTitle, blurbs, home = false }) => {
  const { PageHeaderPreTitle, PageHeaderPostTitle, PageHeaderTitle } = useStyles(styleRefs);

  return (
    <React.Fragment>
      {!home && <HomeLink />}
      <header>
        {preTitle && <p className={PageHeaderPreTitle}>{preTitle}</p>}
        <h1 className={PageHeaderTitle}>{title}</h1>
        {postTitle && <p className={PageHeaderPostTitle} dangerouslySetInnerHTML={{ __html: postTitle }} />}
      </header>

      {blurbs && blurbs.length > 0 && (
        <section id="content">
          {blurbs.map((blurb: string, idx: number) => (<p key={idx}>
            {blurb}
          </p>))}
        </section>
      )}
    </React.Fragment>
  );
};

export default PageHeader;
