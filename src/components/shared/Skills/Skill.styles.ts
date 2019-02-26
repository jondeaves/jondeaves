import { IStyles } from './Skill.types';

export default (): IStyles => ({
  container: {
    display: 'inline-block',
    margin: '0 20px 10px 0',

    '@media(min-width: 980px)': {
      margin: '0 0 10px',
      width: '33.3333%',
    },
  },
});
