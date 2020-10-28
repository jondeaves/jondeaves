import Typography from 'typography';
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards';
import { padding, margin, darken } from 'polished';

import { themeSettings as theme } from '../common/themes/theme.settings';

usWebDesignStandardsTheme.baseFontSize = '19px';
usWebDesignStandardsTheme.headerFontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Helvetica Neue',
  'Arial',
  'Noto Sans',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI',
  'Roboto',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji',
];
usWebDesignStandardsTheme.bodyFontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Helvetica Neue',
  'Arial',
  'Noto Sans',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI',
  'Roboto',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji',
];
usWebDesignStandardsTheme.overrideThemeStyles = () => ({
  '*, html, body, p, a, a:visited, a:hover': {
    color: theme.color.primary,
  },
  li: {
    marginBottom: '4px',
  },
  a: {
    textDecoration: `underline ${theme.color.secondary}`,
    textUnderlinePosition: 'under',
  },
  'a:hover': {
    textDecoration: `underline ${darken(0.2, theme.color.secondary)}`,
  },
  'main, header, section, footer': {
    margin: '1.53rem 0',
  },

  'main, header': {
    maxWidth: theme.container.width,
    position: 'relative',

    ...margin(null, 'auto'),
    ...padding(null, theme.spacing.medium),
  },

  main: {
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },

  header: {
    marginTop: 'calc(1.53rem * 2)',
  },

  footer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  small: {
    fontSize: '70%',
  },
});

delete usWebDesignStandardsTheme.googleFonts;

const typography = new Typography(usWebDesignStandardsTheme);

export default typography;
