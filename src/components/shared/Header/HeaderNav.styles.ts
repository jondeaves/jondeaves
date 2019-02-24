import { IStyles } from './HeaderNav.types';

export default (): IStyles => ({
  list: {
    listStyle: 'none',
    margin: '20px 0 5px 0',
    padding: 0,
    textAlign: 'center',

    atDesktop: {
      lineHeight: '80px',
      position: 'absolute',
      right: '20px',
      top: '-21px',
    },
  },

  listItem: {
    borderBottom: '1px solid transparent',
    boxSizing: 'border-box',
    color: '#333333',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '90px',

    ':hover': {
      borderBottomColor: '#ff0000',
      color: '#333333',
    },

    atDesktop: {
      borderBottomWidth: '3px',
      fontSize: '14px',
      height: '80px',

      ':hover': {
        borderBottomColor: '#ff0000',
      },
    },
  },

  link: {
    border: 0,
    color: 'inherit',
    display: 'block',
    textDecoration: 'none',

    ':hover': {
      border: 0,
      color: 'inherit',
      display: 'block',
      textDecoration: 'none',
    },
  },
});
