const contactForm1 = document.querySelector('.contactForm');
contactForm1.addEventListener('input', () => {
  const formInfo = {
    name: document.querySelector('.contactName').value,
    email: document.querySelector('.emailAddress').value,
    message: document.querySelector('.contactMessage').value,
  };

  localStorage.setItem('contactFormContent', JSON.stringify(formInfo));
});

const formObj = JSON.parse(localStorage.getItem('contactFormContent'));
document.querySelector('.contactName').value = formObj.name;
document.querySelector('.emailAddress').value = formObj.email;
document.querySelector('.contactMessage').value = formObj.message;