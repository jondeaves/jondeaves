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
    atPrint: {
      display: 'none',
    },
  },

  grid: {
    atDesktop: {
      display: 'grid',
      gridGap: '10px',
      gridTemplateAreas: `
      "summary summary summary"
      "experienceLeft experienceRight experienceRight"
      "skillLeft skillsRight skillsRight"
      `,
    },

    atLargeDesktop: {
      gridTemplateAreas: `
      "summary summary photo"
      "experienceLeft experienceRight experienceRight"
      "skillLeft skillsRight skillsRight"
      `,
    },
  },

  summaryGridItem: {
    gridArea: 'summary',
    textAlign: 'center',

    atLargeDesktop: {
      textAlign: 'left',
    },

    atPrint: {
      textAlign: 'left',
    },
  },

  photoGridItem: {
    display: 'none',
    gridArea: 'photo',
    marginBottom: '1.7rem',
    textAlign: 'left',

    atLargeDesktop: {
      display: 'block',
      marginBottom: 0,
    },

    atPrint: {
      display: 'none',
    },
  },

  experienceGridItemLeft: {
    gridArea: 'experienceLeft',
  },

  experienceGridItemRight: {
    gridArea: 'experienceRight',
    marginBottom: '1.7rem',

    atDesktop: {
      paddingLeft: '40px',
      paddingTop: '6px',
    },
  },

  skillsGridItemLeft: {
    gridArea: 'skillLeft',
  },

  skillsGridItemRight: {
    gridArea: 'skillsRight',
    marginBottom: '1.7rem',

    atDesktop: {
      paddingLeft: '40px',
      paddingTop: '6px',
    },
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
    atLargeDesktop: {
      width: '500px',
    },
  },

  photoWrapper: {
    textAlign: 'center',

    atDesktop: {
      marginBottom: 0,
      textAlign: 'right',
    },

    atPrint: {
      display: 'none',
    },
  },

  innerImage: {
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.26)',
    transform: 'rotate(-3deg)',
  },

  aboutList: {
    listStyle: 'none',
    margin: 0,
  },

  hide: {
    left: '-9999em',
    position: 'absolute',
  },

  show: {
    display: 'none!important',

    atPrint: { display: 'block!important' },
  },
});
