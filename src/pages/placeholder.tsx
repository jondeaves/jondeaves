import React from 'react';
import { PageProps } from 'gatsby';

import { BaseTheme } from '../common/themes';
import config from '../config';

import Seo from '../components/Seo';
import Placeholder from '../components/Placeholder';

const PlaceholderPage: React.FC<PageProps> = () => (
  <BaseTheme>
    <Seo title={config.meta.title} description={config.meta.description} />
    <Placeholder title={config.meta.title} description={config.meta.description} />
  </BaseTheme>
);

export default PlaceholderPage;
