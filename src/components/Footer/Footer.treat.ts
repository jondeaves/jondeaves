import { style } from 'treat';
import { margin } from 'polished';

export const FooterIntro = style(theme => ({
  letterSpacing: 1.2,
  margin: 0,
}))

export const FooterLinks = style(theme => ({
  margin: 0,
  padding: 0,
}))

export const FooterLink = style(theme => ({
  display: 'inline',
  letterSpacing: 1.2,
  listStyle: 'none',

  ...margin(0, theme.spacing.medium),
}))