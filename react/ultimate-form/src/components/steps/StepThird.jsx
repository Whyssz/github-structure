import { Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { MainContainer } from '../mainContainer/MainContainer';
import { DropInput } from '../UI/dropInput/DropInput';
import Form from '../UI/form/Form';

export const StepThird = () => {
  const { control, handleSubmit } = useForm();

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 3
      </Typography>
      <Form>
        <DropInput name="files" control={control} />
      </Form>
    </MainContainer>
  );
};
