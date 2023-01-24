export default class uplayVideo {
  constructor (triggers, popup) {
    this.triggers = document.querySelectorAll(triggers);
    this.popup = document.querySelector(popup);
    this.close = this.popup.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  } 

  bindTriggers() {
    this.triggers.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest('.module__video-item').nextElementSibling;

        if (i % 2 == 0) {
          blockedElem.setAttribute('data-disabled', 'true');  
        }
      } catch (e) {}

      btn.addEventListener('click', () => {
        if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
          this.activeBtn = btn;

          if (document.querySelector('iframe#frame')){
            this.popup.style.display = 'flex';
            if (this.path !== btn.getAttribute('data-url')) {
              this.path = btn.getAttribute('data-url');
              this.player.loadVideoById({videoId: this.path});
            }
          } else {
            this.path = btn.getAttribute('data-url');
            this.createPlayer(this.path);
          }
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
      videoId: `${url}`,
      events: {
        'onStateChange': this.onPlayerStateChange
      }
    });
    
    this.popup.style.display = 'flex';
  }

  onPlayerStateChange (state) {
    try {
      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling,
      playBtn = this.activeBtn.querySelector('svg').cloneNode(true); 

      if (state.data === 0) {
        if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
          blockedElem.querySelector('.play__circle').classList.remove('closed');
          blockedElem.querySelector('svg').remove();
          blockedElem.querySelector('.play__circle').appendChild(playBtn);  
          blockedElem.querySelector('.play__text').textContent = 'play video'; 
          blockedElem.querySelector('.play__text').classList.remove('attention');
          blockedElem.style.opacity = 1;
          blockedElem.style.filter = 'none';
          blockedElem.setAttribute('data-disabled', 'false');
        }
      }
    } catch (e) {}
  }

  init () {
    if (this.triggers.length > 0) {
      let tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      this.bindCloseBtn();
      this.bindTriggers();
    }
  }
}