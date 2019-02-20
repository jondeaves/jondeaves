import { IStyles } from './Header.types';

export default (): IStyles => ({
  container: {
    background: '#ffffff',
    borderBottom: '1px solid #f5f5f5',
    left: 0,
    top: 0,
    width: '100%',
    zIndex: 20,

    atDesktop: {
      height: '80px',
      position: 'fixed',
    },

    print: {
      display: 'none',
    },
  },

  headings: {
    display: 'block',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
});
