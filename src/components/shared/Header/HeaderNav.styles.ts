import { IStyles } from './HeaderNav.types';

export default (): IStyles => ({
  list: {
    listStyle: 'none',
    margin: '20px 0 5px 0',
    padding: 0,
    textAlign: 'center',

    atDesktop: {
      lineHeight: '68px',
      position: 'absolute',
      right: '20px',
      top: '-12px',
    },
  },

  listItem: {
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
      color: '#333333',
    },

    atDesktop: {
      fontSize: '14px',
      height: '80px',
      width: '90px',
    },
  },

  link: {
    borderBottom: '1px solid transparent',
    color: 'inherit',
    display: 'block',
    textDecoration: 'none',

    ':hover': {
      borderBottomColor: '#ff0000',
    },

    '&.active': {
      borderBottomColor: '#ff0000',
    },

    atDesktop: {
      borderBottomWidth: '3px',

      ':hover': {
        borderBottomColor: '#ff0000',
        borderBottomWidth: '3px',
      },
    },
  },
});
