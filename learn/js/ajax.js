/*
AJAX 

  xhr.open('GET', 'http/')

  xhr.send(); <-- отправка запроса
  
  xhr.setRequestHeader('Content-Type', 'image/jpeg'); (getRequest Header)

  Answer = status / statusText / responseTetx

  expamle: 

  function getUsers(cb) {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.response);
    cb(response);
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
}

function getUsersInfo(users) {
  const allUser = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, []); 

  return allUser;
}

function renderUsers(users) {
  const container = document.querySelector('.container');
  
  users.forEach((user, i) => {
    
    const frame = document.createDocumentFragment();
    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const ul = document.createElement('ul');
    //I apologize for the nightmare with the attachment, I know that you can do everything through recursion, but I do not have time to finish learning it, it is not given to hard in any way, I tried)
    for (let key in user) {
      if (!!user[key] && (user[key].constructor === Object)) {
        for (let i in user[key]) {
          if (!!user[key][i] && (user[key][i].constructor === Object)) {
            for (let j in user[key][i]) {
              const li = document.createElement('li');
            
              li.textContent = `${j} : ${user[key][i][j]}`;
              li.classList.add('list-group-item');
              li.style.cssText = `
                background-color: #474747;
                color: white;
              `;
              ul.appendChild(li);
            }
          }
          const li = document.createElement('li');
          
          li.textContent = `${i} : ${user[key][i]}`;
          li.classList.add('list-group-item');
          li.style.backgroundColor = '#d7d7d7';
          ul.appendChild(li);
        }
      } else {
        const li = document.createElement('li');

        li.textContent = `${key}: ${user[key]}`;
        li.classList.add('list-group-item');
        ul.appendChild(li);
      }
    }
    
    card.classList.add('card');
    cardHeader.classList.add('card-header'); 
    ul.classList.add('list-group', 'list-group-flush'); 

    cardHeader.textContent = `User: #${i}`;
    card.style.margin = 5 + 'px';

    card.append(cardHeader, ul);
    frame.appendChild(card);

    container.appendChild(frame);
  });

  const [...li] = document.querySelectorAll('li');
  li.forEach(item => {
    if (item.textContent.slice(-15) === '[object Object]') { 
      item.remove();
    }
  });
}

getUsers((resonse) => {
  const usersInfo = getUsersInfo(resonse);
  const usersRender =  renderUsers(usersInfo);
});
*/ 