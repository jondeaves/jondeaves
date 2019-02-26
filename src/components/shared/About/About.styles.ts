import { IStyles } from './About.types';

export default (): IStyles => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: '940px',
    padding: '20px',
  },

  header: {
    print: {
      display: 'none',
    },
  },

  grid: {
    atDesktop: {
      display: 'grid',
      gridGap: '10px',
      gridTemplateAreas: `
      "summary summary summary summary summary summary photo"
      "experienceLeft experienceLeft experienceRight experienceRight experienceRight experienceRight experienceRight"
      "skillLeft skillLeft skillsRight skillsRight skillsRight skillsRight skillsRight"
      `,
    },
  },

  summaryGridItem: {
    gridArea: 'summary',
  },

  photoGridItem: {
    gridArea: 'photo',
    marginBottom: '1.7rem',
    textAlign: 'left',

    atDesktop: {
      marginBottom: 0,
    },

    print: {
      display: 'none',
    },
  },

  experienceGridItemLeft: {
    gridArea: 'experienceLeft',
  },

  experienceGridItemRight: {
    gridArea: 'experienceRight',
    marginBottom: '1.7rem',
  },

  skillsGridItemLeft: {
    gridArea: 'skillLeft',
  },

  skillsGridItemRight: {
    gridArea: 'skillsRight',
    marginBottom: '1.7rem',
  },

  address: {
    display: 'block',
    fontSize: '14px',

    '> span': {
      display: 'block',
    },

    '> .adr span': {
      display: 'inline-block',
    },
  },

  summary: {
    atDesktop: {
      width: '500px',
    },
  },

  photoWrapper: {
    textAlign: 'center',

    atDesktop: {
      marginBottom: 0,
      textAlign: 'right',
    },

    print: {
      display: 'none',
    },
  },

  innerImage: {
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.26)',
    transform: 'rotate(-3deg)',
  },

  hide: {
    left: '-9999em',
    position: 'absolute',
  },

  show: {
    display: 'none!important',

    print: { display: 'block!important' },
  },
});
