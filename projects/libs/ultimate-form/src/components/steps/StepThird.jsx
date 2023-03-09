import { Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../mainContainer/MainContainer';
import { DropInput } from '../UI/dropInput/DropInput';
import { PrimaryButton } from '../UI/primaryBtn/PrimaryButton';
import Form from '../UI/form/Form';
import { useData } from '../../hooks/useData';

export const StepThird = () => {
  const { data, setValues } = useData();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      files: data.files,
    },
  });
  const navigation = useNavigate();

  const onSubmit = (data) => {
    navigation('/result');
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DropInput name="files" control={control} />
        <PrimaryButton
          type="button"
          onClick={() => {
            reset({
              ...data,
              files: [],
            });
          }}
        >
          Clear
        </PrimaryButton>
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
