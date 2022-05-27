const images = () => {
  const workContainer = document.querySelector('.works'), 
        popupImg = document.createElement('div'),
        bigImg = document.createElement('img');

  popupImg.classList.add('popup');
  workContainer.append(popupImg);

  popupImg.style.cssText = `
    display: none;
    justify-content: center;
    align-items: center;
  `;

  popupImg.append(bigImg);
  bigImg.style.cssText = `
    max-wight: 900px;
    height: 60vh;
  `;

  workContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains('preview')) {
      popupImg.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImg.setAttribute('src', path);
      document.body.style.overflow = 'hidden';
    }
    
    if (target && target.matches('div.popup')) {
      popupImg.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  
};

export default images;