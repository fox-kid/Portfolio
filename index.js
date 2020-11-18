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

// toggleActiveClass(portfolioTabs);

// const educItems = Array.from(document.querySelectorAll('.education-item'));
// const workHistItems = Array.from(
//   document.querySelectorAll('.work-history-item')
// );
// const progSkillsItems = Array.from(
//   document.querySelectorAll('.prog-skills-item')
// );
// const designSkillsItems = Array.from(
//   document.querySelectorAll('.designer-skills-item')
// );
// const seoSkillsItems = Array.from(
//   document.querySelectorAll('.seo-skills-item')
// );

// showResume(resumeTabs,);
// function showResume(listitem, detailsitem) {
//   array.forEach((element) => {
//     element.addEventListener(
//       'click',
//       function () {
//         document.querySelector('.resume-item').hidden = true;
//         document.querySelectorAll('.prog-skills-item').hidden = false;
//       },
//       false
//     );
//   });
// // }
// showResume();
// function showResume() {
//   document.querySelectorAll('.prog-skills-item').hidden = false;
// }

// showResume()
// function showResume(array) {
//     document.querySelectorAll(".resume-li").hidden = true;
//     array.forEach((element) => {
//       element.addEventListener("click", function () { array.forEacg]hidden = false;
//       });
//   }
// }

//   addEventListener(
//     'click',
//     function () {
//       document.querySelectorAll('.education-item').hidden = true;
//       document.querySelectorAll('.work-history-item').hidden = false;
//     },
//     false
//   );
// }
// showResume();
// if (document.querySelector.is - ActiveXObject.resume - li.designer - skills) {
//   document.querySelectorAll.designer - skills - item.hidden === false;
// }
