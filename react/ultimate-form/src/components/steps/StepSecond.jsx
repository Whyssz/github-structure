import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../mainContainer/MainContainer';
import Form from '../UI/form/Form';
import { Input } from '../UI/input/Input';
import { PrimaryButton } from '../UI/primaryBtn/PrimaryButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import parsePhoneNumber from 'libphonenumber-js';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Emeil should have correct format')
    .required('This field must be filled in'),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumber(value, 'RU');
  if (!phoneNumber) return value;
  return phoneNumber.formatNational();
};

export const StepSecond = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const hasPhone = watch('hasPhone');

  const navigation = useNavigate();

  const onSubmit = (data) => {
    navigation('/third');
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          id="email"
          name="email"
          type="email"
          label="Email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="hasPhone"
              {...register('hasPhone')}
              color="primary"
            />
          }
          label="Do you have a phone"
        />
        {hasPhone && (
          <Input
            id="phoneNumber"
            name="phoneNumber"
            {...register('phoneNumber')}
            type="tel"
            label="PhoneNumber"
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
