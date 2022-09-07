import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { InsertDriveFile } from '@material-ui/icons';
import { Link } from 'react-router-dom';
// import { Table } from 'material-ui';
import { useData } from '../../hooks/useData';
import { MainContainer } from '../mainContainer/MainContainer';
import { PrimaryButton } from '../UI/primaryBtn/PrimaryButton';

const useStyles = makeStyles({
  root: {
    marginBottom: '30px',
  },
  table: {
    marginBottom: '30px',
  },
});

export const Result = () => {
  const { data } = useData();
  const entries = Object.entries(data).filter(
    (entry) => entry[0] !== 'files' && entry[0] !== 'hasPhone'
  );
  const { files } = data;
  const styles = useStyles();

	const onSubmit = () => {
		
	}

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Form Values
      </Typography>
      <TableContainer className={styles.root}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">
                  {entry[1] === undefined ? 'false' : entry[1].toString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component="h2" variant="h5">
            📦 Files
          </Typography>
          <List>
            {files.map((f, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
			<PrimaryButton onClick={onSubmit}>POST</PrimaryButton>
      <Link to="/first">
        <PrimaryButton>Start over</PrimaryButton>
      </Link>
    </MainContainer>
  );
};
