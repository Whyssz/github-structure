import { Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { MainContainer } from '../mainContainer/MainContainer';
import Form from '../UI/form/Form';
import { Input } from '../UI/input/Input';

export const StepSecond = () => {
  const {register, handleSubmit, formState: {errors}, watch} = useForm({
    // email: 
  })


  return (
    <MainContainer>
      <Typography>Step2</Typography>
      <Form>
        <Input id="email" name="email" type="email" label="email" required />
      </Form>
    </MainContainer>
  );
};
