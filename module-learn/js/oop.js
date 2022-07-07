/*
  PROMISE____________________________________

  console.log('Данные подготавливаются...');

  const req = new Promise(function(ressolve, reject){
    setTimeout(() => {
      console.log('Подготовка данных...');
    
      const obj = { 
        name: 'Product',
        price: 100
      };
    
      ressolve(obj);
    }, 2000);
  });

  req.then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.status = 'order';  
        resolve(data);
        // reject();
      }, 2000);
    });
  }).then(data => {
    data.modify = true;
  }).then(data => {
    console.log(data);
  }).catch(() => {
    return console.error('Произошла ошибка');
  }).finnally(() => {
    console.log('Finnaly');
  });

  const test = time => {
  test(1000).then(() => console.log('1000'));
  return new Promise(resolve => {
      setTimeout(() => resolve(), time);
    });
  };

  // test(1000).then(() => console.log('1000'));
  // test(2000).then(() => console.log('2000'));

  Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
  });

*/