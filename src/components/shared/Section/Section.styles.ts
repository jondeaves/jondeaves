import { IProps, IStyles } from './Section.types';

export default ({ maxWidth, padded, palette }: IProps): IStyles => ({
  wrapper: {
    backgroundColor: palette === 'dark' ? '#252934' : 'inherit',
  },

  container: {
    boxSizing: 'border-box',
    color: palette === 'dark' ? '#ffffff' : 'inherit',
    padding: padded ? '40px 20px' : 0,
    position: 'relative',
    textAlign: 'center',

    ...(maxWidth
      ? {
          margin: '0 auto',
          maxWidth: `${maxWidth}px`,
        }
      : {}),

    atDesktop: {
      marginTop: '80px',
    },

    '> * > p': {
      fontWeight: 'normal',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
      marginBottom: 0,
    },
  },
});
