import { style } from 'treat';
import { padding, transparentize } from 'polished';

export const DisclaimerMain = style((theme) => ({
  border: `1px solid ${theme.color.warning}`,
  borderRadius: 4,
  background: transparentize(0.9, theme.color.warning),
  fontSize: 16,
  letterSpacing: '0.05rem',
  width: '100%',

  ...padding(theme.spacing.medium),
}));
