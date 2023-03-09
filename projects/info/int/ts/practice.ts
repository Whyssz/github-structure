const formData = {
  email: '@mail',
  title: '',
  text: 'desc',
  checkbox: true,
};

interface DataForms {
  email: string;
  title: string;
  test: string;
  checkbox: boolean;
}

function validateFormData(data: DataForms) {
  const condition = Object.values(data).every(
    (value) => Boolean(value) === true
  );

  console.log(data);

  // Проверить, заполнены ли все поля + checkbox
  if (condition) {
    checkFormData(data);
    return true;
  } else {
    console.log('Please, complete all fields');
    return false;
  }
}

function checkFormData(data: DataForms) {
  const { email } = data;
  const emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];

  // Проверить, существует такой email уже
  if (emails.includes(email)) {
    console.log('This email is already exist');
  } else {
    console.log('Posting data...');
  }
}
