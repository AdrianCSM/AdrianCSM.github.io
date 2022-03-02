// Mobile menu //

// const menuIcon = document.querySelector('.nav_menu');
// const sideNav = document.querySelector('.mobileNav');
// const menuLinks = document.querySelectorAll('.menuMobile');
// const mobileMenu = document.querySelector('.parent');
// const logo = document.querySelector('.logo');

// const openMenu = () => {
//   sideNav.classList.add('mobileNavActive');
//   menuIcon.classList.add('vanish');
//   mobileMenu.classList.add('blur');
//   logo.classList.add('blur');
// };

// const closeMenu = () => {
//   sideNav.classList.remove('mobileNavActive');
//   mobileMenu.classList.remove('blur');
//   menuIcon.classList.remove('vanish');
//   logo.classList.remove('blur');
// };

// menuIcon.addEventListener('click', openMenu);
// menuLinks.forEach((menuLink) => {
//   menuLink.addEventListener('click', closeMenu);
// });

// // Modal Pop-Up and Dynamic Load //
// const projectSectionDom = document.querySelector('.projects');
// const popupModal = document.querySelector('.modal');
// const closeModal = document.querySelector('.cross');
// const nameDom = document.querySelector('.modalTitle');
// const descriptionDom = document.querySelector('.modalDesc');
// const technologiesDom = document.querySelector('.modalTags');
// const sourceLinkDom = document.querySelector('.viewProject');
// const demoLinkDom = document.querySelector('.viewProject');
// const companyNameModal = document.querySelector('.modalCompany');
// const roleNameModal = document.querySelector('.modalRole');
// const yearDateModal = document.querySelector('.modalYear');
// const projectImageLinkDom = document.querySelector('.modalImg');

// const projectsArray = [
//   {
//     title: 'Tonic',
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     imageLink: 'images/Snapshot.svg',
//     tags: ['HTML', 'CSS', 'Javascript'],
//     role: 'Back End Dev',
//     company: 'Canopy',
//     year: '2015',
//     sourceLink: '',
//     demoLink: '',
//   },
//   {
//     title: 'Mulit-Post Stories',
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     imageLink: 'images/Snapshot2.svg',
//     tags: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails', 'React'],
//     role: 'Back End Dev',
//     company: 'Canopy',
//     year: '2015',
//     sourceLink: '',
//     demoLink: '',
//   },
//   {
//     title: 'Tonic',
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     imageLink: 'images/Snapshot3.svg',
//     tags: ['HTML', 'CSS', 'Javascript'],
//     role: 'Back End Dev',
//     company: 'Canopy',
//     year: '2015',
//     sourceLink: '',
//     demoLink: '',
//   },
//   {
//     title: 'Mulit-Post Stories',
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     imageLink: 'images/Snapshot4.svg',
//     tags: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails', 'React'],
//     role: 'Back End Dev',
//     company: 'Canopy',
//     year: '2015',
//     sourceLink: '',
//     demoLink: '',
//   },
// ];

// (() => {
//   projectSectionDom.innerHTML = '';
//   for (let i = 0; i < projectsArray.length; i += 1) {
//     let techlist = '';
//     for (let j = 0; j < projectsArray[i].technologies.length; j += 1) {
//       techlist = `${techlist}<li class="tag">${projectsArray[i].technologies[j]}</li>`;
//     }
//     projectSectionDom.innerHTML = `${projectSectionDom.innerHTML}
//     <li class="project">
//     <img src="${projectsArray[i].imageLink}" alt="Project Image" />
//     <div class="description">
//       <h2 class="title">${projectsArray[i].title}</h2>
//       <div class="info">
//         <p class="subTitle">${projectsArray[i].company}</p>
//         <ul class="infoContainer">
//           <li class="role">${projectsArray[i].role}</li>
//           <li class="year">${projectsArray[i].year}</li>
//         </ul>
//       </div>
//       <p class="projectDescription">
//        ${projectsArray[i].description}
//       </p>
//       <div class="tags">
//         <ul class="tagsFlex">
//          ${techlist}
//         </ul>
//       </div>
//       <button type="button" class="viewProject proj${i + 1}">
//         See Project
//       </button>
//     </div>
//     </li>`;
//   }
//   for (let i = 0; i < projectsArray.length; i += 1) {
//     document.querySelector(`.proj${i + 1}`).addEventListener('click', () => {
//       nameDom.innerHTML = projectsArray[i].name;
//       companyNameModal.innerHTML = projectsArray[i].company;
//       roleNameModal.innerHTML = projectsArray[i].role;
//       yearDateModal.innerHTML = projectsArray[i].year;
//       descriptionDom.innerHTML = projectsArray[i].description;
//       projectImageLinkDom.src = projectsArray[i].imageLink;
//       sourceLinkDom.action = projectsArray[i].sourceLink;
//       demoLinkDom.action = projectsArray[i].demoLink;
//       technologiesDom.innerHTML = '';
//       for (let j = 0; j < projectsArray[i].technologies.length; j += 1) {
//         technologiesDom.innerHTML = `${technologiesDom.innerHTML}<li class="tag">${projectsArray[i].technologies[j]}</li>`;
//       }
//       popupModal.classList.remove('vanish');
//       popupModal.classList.add('show');
//       mobileMenu.classList.add('blur');
//       logo.classList.add('blur');
//       document.body.style.overflowY = 'hidden';
//     });
//   }
// })();

// closeModal.addEventListener('click', () => {
//   popupModal.classList.remove('show');
//   popupModal.classList.add('vanish');
//   mobileMenu.classList.remove('blur');
//   logo.classList.remove('blur');
//   document.body.style.overflowY = 'scroll';
// });

// Form validation //

const contactForm = document.querySelector('.contactForm');
const emailImput = document.querySelector('.emailAddress');
const validationMessage = document.querySelector('.validationMessage');

contactForm.addEventListener('submit', (event) => {
  const stringMessage = emailImput.value;
  if (/[A-Z]/.test(stringMessage)) {
    validationMessage.innerHTML = 'Your email is supposed to be lower cased.';
    event.preventDefault();
  }
});
