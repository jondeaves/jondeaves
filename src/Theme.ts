export interface ITheme {
  color: {
    primary: string;
    secondary: string;
    additional: string;
  };
}

export const theme: ITheme = {
  color: {
    additional: 'lightgreen',
    primary: 'lightblue',
    secondary: 'orange',
  },
};
