const scriptURL =
  'https://script.google.com/macros/s/AKfycbxzkuTJipQk4mrgDpPGVm9bA0chflilw8uvYXtJ0o869Yyteii2ZZw9U7TStWDEPEkxRw/exec';
const form = document.forms['aji-contact-form'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
});
