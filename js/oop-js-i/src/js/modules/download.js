export default class Downlod {
  constructor(trigger) {
    this.btns = document.querySelectorAll(trigger);
    this.path = "assets/img/mainbg.jpg";
  }

  downlaod(path) {
    const element = document.createElement("a");
    element.setAttribute("href", path);
    element.setAttribute("download", 'nice-picture');

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.downlaod(this.path);
      });
    });
  }
}
