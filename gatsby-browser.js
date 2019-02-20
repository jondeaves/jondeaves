import React from 'react';
import { rehydrate } from 'fela-dom';
import { Provider } from 'react-fela';
import { createRenderer } from 'fela';

import FelaConfig from './fela.config';

export const wrapRootElement = ({ element }, pluginOptions) => {
  const renderer = createRenderer(FelaConfig);
  rehydrate(renderer);
  const ConnectedRootElement = (
    <Provider renderer={renderer}>{element}</Provider>
  );

  return ConnectedRootElement;
};
