import React from 'react';
import { rehydrate } from 'fela-dom';
import { RendererProvider } from 'react-fela';
import { createRenderer } from 'fela';

import FelaConfig from './fela.config';

export const wrapRootElement = ({ element }, pluginOptions) => {
  const renderer = createRenderer(FelaConfig);
  rehydrate(renderer);
  const ConnectedRootElement = (
    <RendererProvider renderer={renderer}>{element}</RendererProvider>
  );

  return ConnectedRootElement;
};
