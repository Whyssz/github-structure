export default class Difference {
  constructor (oldOfficer, newOfficer, items) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.oldItems = this.oldOfficer.querySelectorAll(items);
    this.newItems = this.newOfficer.querySelectorAll(items);
    this.oldCounter = 0;
    this.newCounter = 0;
  }

  bingdTriggers(item, list, count) {
    item.querySelector('.plus').addEventListener('click', () => {
      if (count !== list.length - 2) {
        list[count].style.display = 'flex';
        count++;
      } else {
        list[count].style.display = 'flex';
        list[list.length - 1].remove();
      }
    });
  }

  hideItems (area) {
    area.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
        item.classList.add('animated', 'fadeIn');
      }
    });
  }

  init() {
    this.hideItems(this.oldItems);
    this.hideItems(this.newItems);

    this.bingdTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
    this.bingdTriggers(this.newOfficer, this.newItems, this.newCounter);
  }

}
