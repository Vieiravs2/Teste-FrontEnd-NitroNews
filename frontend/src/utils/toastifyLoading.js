import Toastify from 'toastify-js';

export default function showLoadingToast() {
  const loadingToast = Toastify({
    text: 'Carregando...',
    duration: 3500,
    close: true,
    backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d);',
  });

  loadingToast.showToast();
};