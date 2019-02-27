import { IStyles } from './Posts.types';

export default (): IStyles => ({
  container: {
    display: 'grid',
    gridGap: '5px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    margin: '0 auto',
    maxWidth: '1170px',
    padding: '60px 17px 0 17px',
  },
});
