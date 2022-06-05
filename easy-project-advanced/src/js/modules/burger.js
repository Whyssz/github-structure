const burger = (selectorBtn, selectorMenu) => {

  const btnBurger = document.querySelector(selectorBtn),
    menyBurger = document.querySelector(selectorMenu);
  
  menyBurger.style.display = 'none';

  btnBurger.addEventListener('click', () => {
    //&& window.screen.availWidth < 993 quastionable clause in the TOR...
    if (menyBurger.style.display == 'none') {
      menyBurger.style.display = 'block';
    } else {
      menyBurger.style.display = 'none';
    }
  });

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menyBurger.style.display = 'none';
    }
  });

};

export default burger;