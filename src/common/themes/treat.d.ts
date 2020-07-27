declare module 'treat/theme' {
  export interface Theme {
    color: {
      primary: string;   // Text color
      secondary: string; // Link underline
      tertiary: string;  // Page background
    };
    container: {
      width: string;
      breakpoint: number;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
