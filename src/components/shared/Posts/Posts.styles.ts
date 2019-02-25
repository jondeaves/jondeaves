import { IStyles } from './Posts.types';

export default (): IStyles => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '60px auto',
    maxWidth: '1170px',
    minHeight: '100%',
    textAlign: 'center',
  },
});
