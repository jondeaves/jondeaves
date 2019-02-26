import { IStyles } from './Posts.types';

export default (): IStyles => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '60px auto 0 auto',
    maxWidth: '1170px',
    minHeight: '100%',
    textAlign: 'center',
  },
});
