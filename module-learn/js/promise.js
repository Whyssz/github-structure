/* PROMISE

function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}

const myHttp = http();

function getPost(id = 1) {
  return new Promise((res, rej) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (err, resp) => {
      if (err) {
        rej(err);
      }
      res(resp);
    });
  });
}

function getPostComments(post) {
  const { id } = post;
  return new Promise((res, rej) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, resp) => {
      if (err) {
        rej(err);
      }
      res({ post, comments: res });
    });
  });
}

function getUserCreatedPost(data) {
  const { post: { userId }} = data;
  return new Promise((res, rej) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/users/${userId}`, (err, resp) => {
      if (err) {
        rej(err);
      }
      res({ ...data, user: res });
    });
  });
}

getPost(5)
  .then(post => getPostComments(post))
  .then(data => getUserCreatedPost(data))
  .then(fullData => console.log(fullData))
  .catch(err => console.log(err))
  .finally(() => console.log('finnaly, <ES11'));

PROMISE ALL_______________

const checkId = 10;

Promise.all([
  getPost(checkId),
  getPostComments(checkId),
  getUserCreatedPost(checkId)
])
.then(([post, comments, user]) => console.log(post, comments, user))
.catch(err => console.log(err));


PROMISE RACE_______ first answ (true/false)
Promise.race([
  getPost(checkId),
  getPostComments(checkId),
  getUserCreatedPost(checkId)
])

PROMISE ANY_______ first ANY TRUE answ 
Promise.any([
  getPost(checkId),
  getPostComments(checkId),
  getUserCreatedPost(checkId)
])
*/