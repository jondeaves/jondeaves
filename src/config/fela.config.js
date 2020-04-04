const { default: namedKeys } = require('fela-plugin-named-keys');
const { default: fallbackValue } = require('fela-plugin-fallback-value');
const {
  default: friendlyPseudoClass,
} = require('fela-plugin-friendly-pseudo-class');
const { default: prefixer } = require('fela-plugin-prefixer');
const { default: unit } = require('fela-plugin-unit');

const plugins = [
  namedKeys({
    atMobile: '@media (max-width: 419px)',
    atTablet: '@media (min-width: 420px)',
    atDesktop: '@media (min-width: 620px)',
    atContainer: '@media (min-width: 960px)',
    atPrint: '@media print',
  }),

  unit(),

  prefixer(),

  fallbackValue(),
  friendlyPseudoClass(),
];
const enhancers = [];
let devMode = false;

if (process.env.NODE_ENV !== 'production') {
  devMode = true;
}

module.exports = {
  plugins,
  enhancers,
  devMode,
};
