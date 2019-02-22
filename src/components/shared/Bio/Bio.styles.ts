import { IStyles } from './Bio.types';

export default (): IStyles => ({
  container: {
    atDesktop: {
      marginTop: '80px',
    },
  },

  image: {},

  heading: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'normal',
    letterSpacing: '0.1em',
    lineHeight: 1.4,
    margin: '0',
    padding: '0',
    textShadow: '1px 1px #333333',

    atDesktop: {
      fontSize: 26,
    },
  },
});
