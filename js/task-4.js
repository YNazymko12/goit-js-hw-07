const loginFormEl = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const emailInput = loginFormEl.elements.email.value;
  const passwordInput = loginFormEl.elements.password.value;

  if (emailInput === '' || passwordInput === '') {
    return alert('All fields must be filled in');
  } else {
    const formData = {
      email: emailInput,
      password: passwordInput,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
};

loginFormEl.addEventListener('submit', onFormSubmit);
