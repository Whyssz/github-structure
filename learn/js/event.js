/*
    addEneventListener_____________

    this. || a.currentTarget
    mouseover/mouseout - работают с всплытием
    mouseenter/mouseleave- без всплытия

    check menu___

    const itemAcc = document.querySelectorAll('.dropdown-item');
    let menuOpened = null;

    itemAcc.forEach(item => {
      item.addEventListener('click', function() {
        const dropMenu = this.querySelector('.dropdown-menu');
        const newMenu = dropMenu.classList.toggle('d-none');
        if (menuOpened && menuOpened !== dropMenu) {
          menuOpened.classList.add('d-none');
        }
        if (!newMenu) {
          menuOpened = dropMenu;
        }
      });
    });

  */