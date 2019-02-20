import { IStyle } from 'fela';

import { IStyles } from './HeaderLink.types';

export const sharedStyle: IStyle = {
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontWeight: 600,
  marginBottom: 0,
  marginTop: 0,
  position: 'relative',
  textTransform: 'uppercase',
};

export default (): IStyles => ({
  primary: {
    ...sharedStyle,

    fontSize: '17px',
    top: '24px',

    atDesktop: {
      left: '36px',
      position: 'absolute',
      textAlign: 'left',
      top: '24px',
    },
  },

  secondary: {
    ...sharedStyle,

    fontSize: '11px',
    letterSpacing: '0.1em',
    marginBottom: '44px',
    textIndent: '5px',
    top: '28px',

    atDesktop: {
      left: '36px',
      position: 'absolute',
      textAlign: 'left',
      top: '46px',
    },
  },

  link: {
    border: 0,
    color: 'inherit',
    textDecoration: 'none',
  },
});
