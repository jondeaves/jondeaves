import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

import ITheme from '../themes/ITheme';

export type FelaWithStylesType<P> = (props: StyleProps<ITheme, P>) => IStyle;
