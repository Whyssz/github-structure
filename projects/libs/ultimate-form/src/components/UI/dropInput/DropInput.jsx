import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  makeStyles,
} from '@material-ui/core';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#eee',
    textAlign: 'center',
    cursor: 'poninter',
    color: '#333',
    padding: '10px',
    marginTop: '20px',
  },
  icon: {
    marginTop: '16px',
    color: '#888',
    fontSize: '42px',
  },
});

export const DropInput = ({ control, name }) => {
  const styles = useStyles();
  return (
    <Controller
      shouldUnregister={true}
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                className={styles.root}
                variant="outlined"
                {...getRootProps()}
              >
                <CloudUpload className={styles.icon} />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((f, index) => (
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
    />
  );
};
