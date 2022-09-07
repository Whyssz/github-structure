import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Permanent Marker',
    margin: theme.spacing(3, 'auto', 2),
    width: '430px',
    textAlign: 'center',
    fontSize: '40px',
    color: 'deeppink',
    textShadow: '1px 1px darkmagenta',
    userSelect: 'none',
  },
}));

const Header = () => {
  const styles = useStyles();

  return (
    <Typography className={styles.root} component="h1" variant="h5">
      The Ultimate Form!
    </Typography>
  );
};

export default Header;
