import monolithic from 'fela-monolithic';
import namedKeys from 'fela-plugin-named-keys';

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

export default {
  plugins,
  enhancers,
  devMode,
};
