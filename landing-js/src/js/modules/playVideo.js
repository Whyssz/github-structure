export default class uplayVideo {
  constructor (triggers, popup) {
    this.triggers = document.querySelectorAll(triggers);
    this.popup = document.querySelector(popup);
    this.close = this.popup.querySelector('.close');
  } 

  bindTriggers() {
    this.triggers.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')){
          this.popup.style.display = 'flex';
        } else {
          const path = btn.getAttribute('data-url');
          this.createPlayer(path);
        }
      });
    });
  }

  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.popup.style.display = 'none';
      this.player.stopVideo();
    });
  }  

  createPlayer (url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`
    });

    console.log(this.player);
    this.popup.style.display = 'flex';
  }

  init () {
    let tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindCloseBtn();
    this.bindTriggers();
  }
}