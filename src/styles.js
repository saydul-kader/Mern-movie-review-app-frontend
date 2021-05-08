import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  heading: {
    color: 'white',
    fontFamily: 'Century Gothic',
  },
  image: {
    marginLeft: '15px',
  },
}));
