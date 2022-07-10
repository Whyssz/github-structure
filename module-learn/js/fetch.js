/*
  CLASSIC EASY-MODE_____ (+ use try/catch)

  async function getPosts(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return await response.json();
  }

  getPosts(1)
    .then(data => console.log(data))
    .catch(err => console.log(err));

  CLASSIC FETCH____

  function getPost(id) {
    return new Promise((res, rej) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => resp.json())
        .then(post => res(post))
        .catch(err => rej(err));
    });
  }
  
  getPost(1).then(post => console.log(post));

  ADVANCE try/catch_____

  function getPost(id) { // 'user-1'
    return new Promise.resolve().then(() => {
      const [userType, userId] = id.split('-'); // ['user', '1']
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => resp.json());
    });
  }

  FETCH ASYNC____

  async function getPosts(id) { //async + func = Promis
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
      return await response.json();
    } catch(e) {
      console.log(e);
      //throw err;
      return Promise.reject(e);
    }
  }

  getPosts(1)
    .then(data => console.log(data))
    .catch(err => console.log(err));
*/