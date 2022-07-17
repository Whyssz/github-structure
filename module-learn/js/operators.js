/*
Оператор опциональной последовательности { ?. } 
  const res = {
    success: true,
    data: {
      user: {
        first_name: 'Dima'
        getName() { return `My name is ${this.first_name}` }
      }
    }
  };

  const firstName = res?.data?.user?.first_name || 'default'

  console.log(firstName);
  console.log(res?.data?.user.getName?.());

  cosnt arr = [];
  arr?.[0]?.[1]...

Оператор нулевого слияния { ?? } (don't use with || &&) - logic breaks
Только если значение null or undefined !!!
  const res = {
    balance: 0, // 0
    balance2: null // none
  };

  const balance = res.balance ?? 'none';

  console.log(balance);

*/
