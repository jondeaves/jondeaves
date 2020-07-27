import Typography from "typography"
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'
import { padding, margin } from "polished";

import { themeSettings as theme } from '../common/themes/theme.settings';
import { callbackify } from "util";

usWebDesignStandardsTheme.baseFontSize = '19px';
usWebDesignStandardsTheme.headerFontFamily = ["-apple-system",
  "BlinkMacSystemFont",
  "Helvetica Neue",
  "Arial",
  "Noto Sans",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI",
  "Roboto",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Color Emoji"];
usWebDesignStandardsTheme.bodyFontFamily = ["-apple-system",
  "BlinkMacSystemFont",
  "Helvetica Neue",
  "Arial",
  "Noto Sans",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI",
  "Roboto",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Color Emoji"];
usWebDesignStandardsTheme.overrideThemeStyles = () => ({
  '*, html, body, p, a, a:visited, a:hover': {
    color: theme.color.primary
  },
  'li': {
    marginBottom: '4px',
  },
  'a': {
    borderBottom: `1px solid ${theme.color.secondary}`,
    paddingBottom: 1,
    textDecoration: 'none',
  },
  'main, header, section, footer': {
    margin: '1.53rem 0'
  },

  'header': {
    marginTop: 'calc(1.53rem * 2)',
  },

  'main': {
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    maxWidth: theme.container.width,
    position: 'relative',

    ...margin(0, 'auto'),
    ...padding(null, theme.spacing.medium),
  },

  'footer': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  'small': {
    fontSize: '70%'
  }
})

const typography = new Typography(usWebDesignStandardsTheme)

export default typography