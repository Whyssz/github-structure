import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@material-ui/core';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';

export const DropInput = ({ control, name }) => {
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
              <Paper variant="outlined" {...getRootProps()}>
                <CloudUpload />
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
