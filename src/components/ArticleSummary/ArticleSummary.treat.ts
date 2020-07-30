import { style } from 'treat';
import { padding, rgba, margin } from 'polished';

import { atWidth } from '../../common/helpers/styles';

export const ArticleSummaryTitle = style(theme => ({
  margin: 0,
  padding: 0,
}));

export const ArticleSummaryLink = style(theme => ({
  borderRadius: 4,
  display: 'block',
  position: 'relative',
  width: '100%',
  transition: 'background-color 0.2s ease',

  ...padding(theme.spacing.small),

  ...atWidth(theme.container.breakpoint, {
    ...padding(theme.spacing.medium),
  }),

  ':hover': {
    backgroundColor: rgba(theme.color.primary, 0.05),
    transition: 'background-color 0.4s ease',
  },
}));