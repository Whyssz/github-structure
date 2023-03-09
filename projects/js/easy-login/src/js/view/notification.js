function getContainer() {
  return document.querySelector('.notify-container');
}


function alertTemplete(msg, className, index) {
  return `
    <div class='alert ${className}' data-index='${index}'>
      ${msg}
    </div>    
  `;
}

function getAlertIndex() {
  return document.querySelectorAll('.notify-container .alert').length;
}

function notifyContainerTemplate() {
  return `
    <div class='notify-container' style='position: fixed; top: 10px; right: 10px; z-index: 99;'></div>
  `;
}

function createNotifyContent() {
  const template = notifyContainerTemplate();
  document.body.insertAdjacentHTML('afterbegin', template);
}

export function notify({ 
msg='info-message', 
className = 'alert-info', 
timeout = 2000
} = {}) {
  if (!getContainer()) {
    createNotifyContent();
  }

  const index = getAlertIndex();  
  const template = alertTemplete(msg, className, index);
  const container = getContainer();

  container.insertAdjacentHTML('beforeend', template);

  setTimeout(() => closeNotify(index), timeout);
}
export function closeNotify(index) {
  let alert;

  if (index === undefined) {
    alert = document.querySelector('.notify-container .alert');
  } else {
    alert = document.querySelector(`.notify-container .alert[data-index="${index}"]`);
  }

  if (!alert) {
    console.log('Alert not found');
    return;
  }

  const container = getContainer();
  container.removeChild(alert);
}