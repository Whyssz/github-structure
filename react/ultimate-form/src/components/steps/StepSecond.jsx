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
import { useData } from '../../hooks/useData';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Emeil should have correct format')
    .required('This field must be filled in'),
});

const normalizePhoneNumber = (value) => {
  const validate = value.replace(/[^\d]/g, '');
  const phoneNumber = parsePhoneNumber(validate, 'RU');
  if (!phoneNumber) return validate;
  return phoneNumber.formatNational();
};

export const StepSecond = () => {
  const { data, setValues } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const hasPhone = watch('hasPhone');

  const navigation = useNavigate();

  const onSubmit = (data) => {
    navigation('/third');
    setValues(data);
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
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
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
