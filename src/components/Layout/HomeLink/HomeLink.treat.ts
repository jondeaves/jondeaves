import { style } from 'treat';

export const HomeLinkMain = style(theme => ({
  left: 24,
  position: 'absolute',
  top: 12,
}));

export const HomeLinkLink = style(theme => ({
  border: 0,
  fontWeight: 'bold',
  paddingRight: 5,
  textTransform: 'uppercase',

  ':hover': {
    borderBottom: `1px solid ${theme.color.secondary}`,
  }
}));

export const HomeLinkLabel = style(theme => ({
  position: 'relative',
  top: -2,
}));