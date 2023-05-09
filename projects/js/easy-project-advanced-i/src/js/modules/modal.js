const modals = () => {
  let btnPressed = false;

  function bindModal (triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    close = document.querySelector(closeSelector),
    window = document.querySelectorAll('[data-modal]'),
    gift = document.querySelector('.fixed-gift'),
    scroll = calcScroll();

    gift.classList.add('animated', 'animate__pulse');

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        if (destroy) {
          item.remove();
        }

        window.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });

        btnPressed = true;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        if (gift) {
          gift.style.marginRight = `${scroll}px`;
        }
        // document.body.classList.add('modal-open');
      });

      item.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.style.display === 'block') {
          window.forEach(item => {
            item.style.display = 'none';
          });

          modal.style.display = 'none';
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;
          if (gift) {
            gift.style.marginRight = `0px`;
          }
        }
      });
    });

    close.addEventListener('click', () => {
      window.forEach(item => {
        item.style.display = 'none';
      });

      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      if (gift) {
        gift.style.marginRight = `0px`;
      }
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        if (gift) {
          gift.style.marginRight = `0px`;
        }
      }
    });
  }

  function opeModalByTime(selector, time) {
    let scroll = calcScroll();
    setTimeout(() => {
      let display;

      document.querySelectorAll('[data-modal]').forEach(item => {
        const gift = document.querySelector('.fixed-gift');

        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }

        if (!display) {
          document.querySelector(selector).style.display = 'block';
          document.body.style.overflow = 'hidden';    
          document.querySelector('.fixed-gift').style.marginRight = `${scroll}px`;
          if (gift) {
            gift.style.marginRight = `${scroll}px`;
          }
        }
      });
      
    }, time);
  }

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

      if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight - 1)) {
        document.querySelector(selector).click();
      }
    }); 
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

  openByScroll('.fixed-gift');

  // opeModalByTime('.popup-design', 60000); 
};

export default modals;

