const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    btnAll = menu.querySelector('.all'),
    btnLovers = menu.querySelector('.lovers'),
    btnChef = menu.querySelector('.chef'),
    btnGirl = menu.querySelector('.girl'),
    btnGuy = menu.querySelector('.guy'),
    btnGrandmother = menu.querySelector('.grandmother'),
    btnGranddad = menu.querySelector('.granddad'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    markGirl = wrapper.querySelectorAll('.girl'),
    markLovers = wrapper.querySelectorAll('.lovers'),
    markCheef = wrapper.querySelectorAll('.chef'),
    markGuy = wrapper.querySelectorAll('.guy'),
    no = document.querySelector('.portfolio-no');

  const typeFilter = (markType) => {
    markAll.forEach(mark => {
      mark.classList.remove('animated', 'fadeIn');
      mark.style.display = 'none';
    });

    no.classList.remove('animated', 'fadeIn');
    no.style.display = 'none';

    if (markType) {
      markType.forEach(mark => {
        mark.classList.add('animated', 'fadeIn');
        mark.style.display = 'block';
      });
    } else {
      no.classList.add('animated', 'fadeIn');
      no.style.display = 'block';
    }
  };

  const markDetection = (trigger, activeMark) => {
    trigger.addEventListener('click', () => {
      typeFilter(activeMark);
    });
  };

  markDetection(btnAll, markAll);
  markDetection(btnLovers, markLovers);
  markDetection(btnChef, markCheef);
  markDetection(btnGirl, markGirl);
  markDetection(btnGuy, markGuy);
  markDetection(btnGuy, markGuy);
  markDetection(btnGrandmother);
  markDetection(btnGranddad);
  
  menu.addEventListener('click', (e) => {
    let target = e.target;

    if (target && target.tagName == 'LI') {
      items.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
    }
  });
};

export default filter;