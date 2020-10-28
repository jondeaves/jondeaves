import { style } from 'treat';
import { padding, rgba, margin } from 'polished';

import { atWidth } from '../../common/helpers/styles';

export const ArticleSummaryTitle = style((theme) => ({
  margin: 0,
  padding: 0,
}));

export const ArticleSummaryLink = style((theme) => ({
  display: 'block',
  width: '100%',

  ...padding(theme.spacing.small),

  ...atWidth(theme.container.breakpoint, {
    ...padding(null, theme.spacing.medium),
  }),
}));
