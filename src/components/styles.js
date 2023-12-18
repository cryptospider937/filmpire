import { makeStyles } from '@mui/styles';

// CSS in JS
export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    padding: '2rem',
  },
  toolbar: {
    height: '70px',
  },
}));
