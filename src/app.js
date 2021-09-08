const scriptURL =
  'https://script.google.com/macros/s/AKfycbxzkuTJipQk4mrgDpPGVm9bA0chflilw8uvYXtJ0o869Yyteii2ZZw9U7TStWDEPEkxRw/exec';
const form = document.forms['aji-contact-form'];
const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnLoading.classList.toggle('d-none');
  btnSend.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('d-none');
      btnSend.classList.toggle('d-none');
      myAlert.classList.toggle('d-none');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
