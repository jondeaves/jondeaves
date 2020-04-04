import { IContainerStyles } from './Container.types';

const style: IContainerStyles = {
  main: ({ theme }) => ({
    backgroundColor: theme.color.fanduelGreyL4,
    display: 'flex',
    flexDirection: 'column',
  }),
};

export default style;
