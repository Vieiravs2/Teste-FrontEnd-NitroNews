import './index.css'
import User from './services/User';
import typeErrors from './utils/typeErrors';
import Toastify from 'toastify-js';
import showLoadingToast from './utils/toastifyLoading';

const registerButton = document.querySelector('.register_user');
const inputPassword = document.querySelector('input[name="senha"]');

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

registerButton.addEventListener('click', async function(event) {
  event.preventDefault();
  const name = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="senha"]').value;
  const passwordConfirmation = document.querySelector('input[name="confirmacaoSenha"]').value;
  const forValidate = {
    nome: name,
    email,
    senha: password,
    confirmacaoSenha: passwordConfirmation
  };
  const validateFields = User.validate(forValidate);
    
    if (validateFields.isValid) {
      showLoadingToast()
      await User.submitFormData(forValidate)
        .then((data) => {
          const { erro } = data
          if (!erro) {
            Toastify({
              text: "Registrado com sucesso!",
              backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
              duration: 5000,
            }).showToast();
          }
        })
        .catch((error) => {
          const { tipoErro } = error;
          const typeErr = typeErrors()
          Toastify({
            text: typeErr[tipoErro],
            backgroundColor: "linear-gradient(to right, #880808, #800020)",
            duration: 5000,
          }).showToast();
        });
      return
    }

    validateFields.errors.forEach(error => {
      Toastify({
        text: error,
        backgroundColor: "linear-gradient(to right, #880808, #800020)",
        duration: 5000,
      }).showToast();
    });
})