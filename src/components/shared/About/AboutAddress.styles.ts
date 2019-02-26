import { IStyles } from './AboutAddress.types';

export default (): IStyles => ({
  container: {
    display: 'block',
    fontSize: '14px',

    '> span': {
      display: 'block',
    },

    '> .adr span': {
      display: 'inline-block',
    },
  },

  hide: {
    left: '-9999em',
    position: 'absolute',
  },

  show: {
    display: 'none!important',

    atPrint: { display: 'block!important' },
  },
});
