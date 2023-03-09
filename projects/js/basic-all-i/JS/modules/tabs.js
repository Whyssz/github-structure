function tabs(tabsSelector, tabsContentSelector, tabsPerentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabsSelector),
    tabContent = document.querySelectorAll(tabsContentSelector),
    tabsPerent = document.querySelector(tabsPerentSelector);

  function hideTabContent() {
    tabContent.forEach((el) => {
      el.classList.add("hide");
      el.classList.remove("show", "fade");
    });

    tabs.forEach((el) => {
      el.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].classList.add("show", "fade");
    tabContent[i].classList.remove("hide");
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsPerent.addEventListener("click", (el) => {
    const target = el.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, index) => {
        if (target == item) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
}

export default tabs;
// module.exports = tabs;