import './index.css'
import User from './services/User';

const inputName = document.querySelector('input[name="nome"]');
const inputEmail = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="senha"]');
const inputPasswordConfirmation = document.querySelector('input[name="confirmacaoSenha"]');
const registerButton = document.querySelector('.register_user')

inputPassword.addEventListener('input', function() {
  const elements = {
    length: document.querySelector('#min_length'),
    lowercase: document.querySelector('#lowercase'),
    uppercase: document.querySelector('#uppercase'),
    number: document.querySelector('#number')
  };

  const isValidPassword = User.validatePassword(inputPassword.value);

  function updateClass(element, isValid) {
    if (isValid) {
      element.classList.remove('text-red-500');
      element.classList.add('text-green-500');
    } else {
      element.classList.remove('text-green-500');
      element.classList.add('text-red-500');
    }
  }

  updateClass(elements.length, isValidPassword.length);
  updateClass(elements.lowercase, isValidPassword.lowercase);
  updateClass(elements.uppercase, isValidPassword.uppercase);
  updateClass(elements.number, isValidPassword.number);
});

registerButton.addEventListener('click', function(event) {
  event.preventDefault();
  const nome = inputName.value;
  const email = inputEmail.value;
  const password = inputPassword.value;
  const passwordConfirmation = inputPasswordConfirmation.value;
  const forValidate = { nome, email, password, passwordConfirmation }
  console.log(User.validate(forValidate))
})