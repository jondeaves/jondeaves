import { IProps, IStyles } from './Post.types';

export default ({
  post: {
    node: { cover: coverImage },
  },
}: IProps): IStyles => ({
  container: {
    display: 'inline-block',
    height: '300px',
    maxHeight: '300px',
    maxWidth: '390px',
    padding: '40px 12px',
    position: 'relative',
    width: '390px',
  },

  image: {
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '100%',
  },

  sectionWrapper: {
    backgroundColor: coverImage ? '#ffffff' : '#252934',
    boxShadow: coverImage ? 'none' : '0 4px 6px 0 hsla(0, 0%, 0%, 0.2);',
    color: coverImage ? 'inherit' : '#ffffff',
    height: '100%',
    left: '0',
    opacity: coverImage ? 0 : 1,
    position: 'absolute',
    textAlign: 'center',
    top: '0',
    transition: 'opacity .4s ease-in-out',
    width: '100%',

    ':hover': {
      opacity: 1,
    },
  },

  section: {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },

  heading: {
    fontSize: '21px',
    margin: '0 0 5px 0',
    padding: 0,
  },

  footer: {
    marginTop: '60px',
  },

  link: {
    border: '2px solid #ff0000',
    boxSizing: 'border-box',
    display: 'inline-block',
    padding: '10px 20px',
    transition: 'background-color 200ms ease-out, color 200ms ease-out',

    ':hover': {
      backgroundColor: '#ff0000',
      border: '2px solid #ff0000',
      color: '#ffffff',
    },
  },
});
