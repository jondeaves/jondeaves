import { style } from 'treat';
import { margin, padding } from 'polished';

import { atWidth } from '../../../common/helpers/styles';

export const PageHeaderPreTitle = style((theme) => ({
  ...margin(null, null, theme.spacing.small, null),

  ...atWidth(theme.container.breakpoint, {
    display: 'inline-block',
    ...margin(null, theme.spacing.small, 0, null),
  }),
}));

export const PageHeaderTitle = style((theme) => ({
  ...margin(null, null, 0, null),

  ...atWidth(theme.container.breakpoint, {
    display: 'inline-block',
  }),
}));

export const PageHeaderPostTitle = style((theme) => ({
  ...margin(theme.spacing.small, null, 0, null),

  ...atWidth(theme.container.breakpoint, {
    display: 'inline-block',
    ...margin(null, null, null, theme.spacing.small),
  }),
}));

export const PageHeaderFloaters = style((theme) => ({
  display: 'flex',
  flexDirection: 'row',
  left: 20,
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'absolute',
  top: -45,
}));
