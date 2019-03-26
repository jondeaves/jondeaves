import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => ({
  'html,body': {
    color: '#333333',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '17px',
    fontSizeAdjust: '0.5',
    letterSpacing: '0.1rem',
    lineHeight: '26px',
  },

  'html img,body img': {
    display: 'inline-block',
    maxWidth: '100%',
  },

  'h1, h2, h3, h4, h5, h6, blockquote': {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 700,
    lineHeight: 1,
  },

  blockquote: { fontSize: '20px' },
  h1: {
    fontSize: '32px',
    letterSpacing: '0.1em',
    textAlign: 'center',
  },
  h2: { fontSize: '26px' },
  h3: { fontSize: '22px' },
  h4: { fontSize: '18px' },

  'a, a:hover, a:active, a:visited': {
    borderBottom: '1px solid #ff0000',
    boxShadow: 'none',
    color: 'inherit',
    letterSpacing: '0.1em',
    textDecoration: 'none',
  },
});

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
