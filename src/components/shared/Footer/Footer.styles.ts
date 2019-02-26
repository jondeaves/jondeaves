import { IStyles } from './Footer.types';

export default (): IStyles => ({
  container: {
    marginTop: '60px',

    atPrint: {
      display: 'none',
    },
  },

  nav: {
    padding: '0 0 20px 0',
  },

  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },

  navListItem: {
    fontSize: '14px',
    margin: 0,
    padding: '5px 10px',

    '&:not(:first-child)': {
      display: 'inline-block',
    },

    '> a': {
      borderBottom: 0,
      paddingBottom: '5px',

      ':hover': {
        borderBottom: '2px solid #ff0000',
      },
    },
  },

  contentfulWrapper: {
    textAlign: 'center',
  },

  contentfulLink: {
    '&:hover': {
      borderBottom: 0,
    },

    borderBottom: 0,
  },

  contentfulImage: {
    maxWidth: '100px',
    width: '100%',
  },
});
