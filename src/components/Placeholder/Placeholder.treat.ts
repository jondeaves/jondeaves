import { style } from 'treat';

export const PlaceholderMain = style((theme) => ({
  left: '50%',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
}));

export const PlaceholderTitle = style((theme) => ({
  color: theme.color.primary,
  fontSize: '38px',
  fontWeight: 500,
  margin: 0,
  padding: 0,
  textAlign: 'center',
  textTransform: 'uppercase',
}));

export const PlaceholderSubTitle = style((theme) => ({
  color: theme.color.primary,
  fontSize: '21px',
  fontWeight: 400,
  margin: 0,
  padding: 0,
  textAlign: 'center',
}));