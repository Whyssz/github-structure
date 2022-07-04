export default class ShowInfo {
  constructor (trigger) {
    this.btns = document.querySelectorAll(trigger);
  }

  init () {
    this.btns.forEach(btn => {
      btn.style.cursor = 'pointer';
      
      btn.addEventListener('click', () => {
        const sibling = btn.nextElementSibling;

        sibling.classList.toggle('msg');
        sibling.style.marginTop = '20px'; 
      });
    });
  }
}