// Mobile menu

const menuIcon = document.querySelector('.nav_menu');
const sideNav = document.querySelector('.mobileNav');
const menuLinks = document.querySelectorAll('.menuMobile');
const mobileMenu = document.querySelector('.parent');
const logo = document.querySelector('.logo');

const openMenu = () => {
  sideNav.classList.add('mobileNavActive');
  menuIcon.classList.add('vanish');
  mobileMenu.classList.add('blur');
  logo.classList.add('blur');
};

const closeMenu = () => {
  sideNav.classList.remove('mobileNavActive');
  mobileMenu.classList.remove('blur');
  menuIcon.classList.remove('vanish');
  logo.classList.remove('blur');
};

menuIcon.addEventListener('click', openMenu);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});

// Modal Pop-Up
const projectSectionDom = document.querySelector('.projects');
const popupModal = document.querySelector('.modal');
const closeModal = document.querySelector('.cross');
const nameDom = document.querySelector('.modalTitle');
const descriptionDom = document.querySelector('.modalDescContainer');
const technologiesDom = document.querySelector('.modalTags');
const sourceLinkDom = document.querySelector('.btn_view_src');
const demoLinkDom = document.querySelector('.btnDemo');
const companyNameModal = document.querySelector('.modalCompany');
const roleNameModal = document.querySelector('.modalRole');
const yearDateModal = document.querySelector('.modalYear');
const projectImageLinkDom = document.querySelector('.viewProject');

const projectsArray = [
  {
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/Snaphhot.svg',
    tags: ['html', 'css', 'javascript'],
    role: 'Full Stack Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: 'https://github.com/harlexkhal/Microverse-Porfolio-Website',
    demoLink: 'https://harlexkhal.github.io/Microverse-Porfolio-Website/',
  },
  {
    title: 'Mulit-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/Snapshot2.svg',
    tags: ['html', 'css', 'javascript', 'Ruby on rails'],
    role: 'Uber',
    company: 'Lead Developer',
    year: '2018',
    sourceLink: 'https://github.com/harlexkhal/Microverse-Porfolio-Website',
    demoLink: 'https://harlexkhal.github.io/Microverse-Porfolio-Website/',
  },
  {
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/Snapshot3.svg',
    tags: ['html', 'css', 'javascript'],
    role: 'Full Stack Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: 'https://github.com/harlexkhal/Microverse-Porfolio-Website',
    demoLink: 'https://harlexkhal.github.io/Microverse-Porfolio-Website/',
  },
  {
    title: 'Mulit-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/Snapshot4.svg',
    tags: ['html', 'css', 'javascript', 'Ruby on rails'],
    role: 'Back End Dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: 'https://github.com/harlexkhal/Microverse-Porfolio-Website',
    demoLink: 'https://harlexkhal.github.io/Microverse-Porfolio-Website/',
  },
];