/*
Оператор опциональной последовательности { ?. } _________
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

Оператор нулевого слияния { ?? } __________ (don't use with || &&) - logic breaks
  Только если значение null or undefined !!!
    const res = {
      balance: 0, // 0
      balance2: null // none
    };

    const balance = res.balance ?? 'none';

    console.log(balance);

Оператор нулевого слияния { !! }_______ (Boolean(str))
  приводит к булевому значению и провеяет
  res false (null, undifined, 0,000 '', false)
  res true ('0', space)

  if all (!!str || !+res || str.trim() )
*/
