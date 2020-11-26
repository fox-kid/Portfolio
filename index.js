const links = document.querySelectorAll('.navigation ul a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}

const resumeTabs = Array.from(document.querySelectorAll('.resume-li'));
const resumeItems = Array.from(document.querySelectorAll('.resume-item'));

function toggleActiveClass() {
  resumeTabs.forEach((element) => {
    element.addEventListener('click', function () {
      resumeTabs
        .find((x) => x.classList.contains('is-active'))
        .classList.remove('is-active');
      this.classList.add('is-active');
      let activeTab = this.getAttribute('tabname');
      filterListItems(activeTab);
    });
  });
}

function filterListItems(attrname) {
  resumeItems.forEach((element) => {
    if (element.classList.contains(attrname)) {
      element.hidden = false;
    } else {
      element.hidden = true;
    }
  });
}

toggleActiveClass();

const portfolioTabs = Array.from(document.querySelectorAll('.portfolio-a'));

function portfolioActive() {
  portfolioTabs.forEach((element) => {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      portfolioTabs
        .find((x) => x.classList.contains('is-active'))
        .classList.remove('is-active');
      this.classList.add('is-active');
    });
  });
}

portfolioActive();

function toggleBurgerMenu() {
  document.querySelector('.burger-menu-btn').classList.toggle('is-active');
  document.querySelector('.navigation').classList.toggle('is-active');
}

const navTabs = Array.from(document.querySelectorAll('.navigation-a'));

function navigationActive() {
  navTabs.forEach((element) => {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      navTabs
        .find((x) => x.classList.contains('is-active'))
        .classList.remove('is-active');
      this.classList.add('is-active');
      document.querySelector('.burger-menu-btn').classList.remove('is-active');
      document.querySelector('.navigation').classList.remove('is-active');
    });
  });
}

navigationActive();
