const { default: monolithic } = require('fela-monolithic');
const { default: namedKeys } = require('fela-plugin-named-keys');

const plugins = [];
const enhancers = [];
let devMode = false;

// Pre-set style keys
plugins.push(
  namedKeys({
    atDesktop: '@media (min-width: 660px)',
    print: '@media print',
  }),
);

if (process.env.NODE_ENV !== 'production') {
  enhancers.push(monolithic({ prettySelectors: true }));
  devMode = true;
}

module.exports = {
  plugins,
  enhancers,
  devMode,
};
