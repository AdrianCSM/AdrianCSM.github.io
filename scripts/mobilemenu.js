// Mobile menu //

const menuIcon = document.querySelector('.nav_menu');
const sideNav = document.querySelector('.mobileNav');
const menuLinks = document.querySelectorAll('.menuMobile');
const parent = document.querySelector('.parent');
const logo1 = document.querySelector('.logo');

const openMenu = () => {
  sideNav.classList.add('mobileNavActive');
  menuIcon.classList.add('vanish');
  parent.classList.add('blur');
  logo1.classList.add('blur');
};

const closeMenu = () => {
  sideNav.classList.remove('mobileNavActive');
  parent.classList.remove('blur');
  menuIcon.classList.remove('vanish');
  logo1.classList.remove('blur');
};

menuIcon.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});