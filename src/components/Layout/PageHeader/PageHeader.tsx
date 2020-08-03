import React from 'react';
import { useStyles } from 'react-treat';

import BackLink from '../BackLink';
import SkipToContent from '../SkipToContent';

import * as styleRefs from './PageHeader.treat';
import { PageHeaderProps } from './PageHeader.types';

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title, preTitle, postTitle, home = false, backLinkLabel, backLinkRoute }) => {
  const { PageHeaderPreTitle, PageHeaderPostTitle, PageHeaderTitle, PageHeaderFloaters } = useStyles(styleRefs);

  return (
    <React.Fragment>
      <header>
        <ul className={PageHeaderFloaters}>
          <SkipToContent />
          {!home && <BackLink label={backLinkLabel} route={backLinkRoute} />}
        </ul>

        {preTitle && <p className={PageHeaderPreTitle}>{preTitle}</p>}
        <h1 className={PageHeaderTitle}>{title}</h1>
        {postTitle && <p className={PageHeaderPostTitle} dangerouslySetInnerHTML={{ __html: postTitle }} />}
      </header>
    </React.Fragment>
  );
};

export default PageHeader;
