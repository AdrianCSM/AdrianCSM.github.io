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