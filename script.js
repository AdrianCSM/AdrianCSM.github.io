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
