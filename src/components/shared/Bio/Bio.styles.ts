import { IStyles } from './Bio.types';

export default (): IStyles => ({
  container: {
    position: 'relative',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },

  image: {
    width: '100%',
  },

  heading: {
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: 'normal',
    left: '50%',
    letterSpacing: '0.1em',
    lineHeight: 1.4,
    margin: '0',
    padding: '0',
    position: 'absolute',
    textAlign: 'center',
    textShadow: '1px 1px #333333',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',

    atDesktop: {
      fontSize: '26px',
    },

    atTablet: {
      fontSize: '17px',
    },

    '>p': {
      marginBottom: 0,
    },
  },
});
