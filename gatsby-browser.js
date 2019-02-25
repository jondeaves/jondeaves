const React = require('react');
const { rehydrate } = require('fela-dom');
const { RendererProvider } = require('react-fela');
const { createRenderer } = require('fela');

const FelaConfig = require('./fela.config');

export const wrapRootElement = ({ element }) => {
  const renderer = createRenderer(FelaConfig);
  rehydrate(renderer);
  const ConnectedRootElement = (
    <RendererProvider renderer={renderer}>{element}</RendererProvider>
  );

  return ConnectedRootElement;
};
