const accordion = (selector) => {

  const btns = document.querySelectorAll(selector);

  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active-style');
      this.nextElementSibling.classList.toggle('active-content');

      if (this.classList.contains('active-style')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
  
  /*
  One way to use
  
  blocks.forEach(block => {
    block.classList.add('animated', 'fadeIn');
    block.style.display = 'none';
  });

  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (!this.classList.contains('active')) {
        btns.forEach(btn => {
          btn.classList.remove('btn-active');
          btn.nextElementSibling.style.display = 'none';
        });
        this.classList.toggle('btn-active');
        this.nextElementSibling.style.display = 'block';
      }
    });
  });

  */
};

export default accordion;