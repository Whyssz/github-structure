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
import { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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
  const [success, setSuccess] = useState(false);
  const { data } = useData();
  const entries = Object.entries(data).filter(
    (entry) => entry[0] !== 'files' && entry[0] !== 'hasPhone'
  );
  const { files } = data;
  const styles = useStyles();

  // const onSubmit = async () => {
  //   const formData = new FormData();
  //   if (data.files) {
  //     data.files.forEach((file) => {
  //       formData.append('files', file, file.name);
  //     });
  //   }

  //   entries.forEach((entry) => {
  //     formData.append(entry[0], entry[1]);
  //   });

  //   const res = await fetch('http://localhost:4000/', {
  //     method: 'POST',
  //     body: formData,
  //   });

  //   if (res.status === 200) {
  //     Swal.fire('Great job!', "You've passed the challenge!", 'success');
  //     setSuccess(true);
  //   }
  // };

  // if (success) {
  //   return <ReactConfetti />;
  // }

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
      {/* <PrimaryButton onClick={onSubmit}>POST</PrimaryButton> */}
      <Link to="/first">
        <PrimaryButton>Start over</PrimaryButton>
      </Link>
    </MainContainer>
  );
};
