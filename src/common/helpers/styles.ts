import { ThemedStyle, Style } from 'treat/lib/types/types';
import { ThemeOrAny } from 'treat/theme';

export function atWidth(query: number, style: ThemedStyle<Style, ThemeOrAny>): ThemedStyle<Style, ThemeOrAny> {
  return {
    '@media': {
      [`(min-width: ${query}px)`]: style,
    }
  } as ThemedStyle<Style, ThemeOrAny>
}
