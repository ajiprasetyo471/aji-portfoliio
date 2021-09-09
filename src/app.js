const scriptURL =
  'https://script.google.com/macros/s/AKfycbxzkuTJipQk4mrgDpPGVm9bA0chflilw8uvYXtJ0o869Yyteii2ZZw9U7TStWDEPEkxRw/exec';
const form = document.forms['aji-contact-form'];
const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
const galleryImg = document.querySelectorAll('.gallery-img');

galleryImg.forEach((img, i) => {
  img.dataset.aos = 'fade-down';
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 1000;
});

AOS.init({
  duration: 1500,
});
gsap.registerPlugin(TextPlugin);
gsap.to('.lead', { duration: 1.5, delay: 1, text: 'Student | Web Developer' });
gsap.from('.jumbotron img', {
  duration: 1,
  rotateY: 360,
  opacity: 0,
});
// gsap.from('.navbar', { duration: 1.5, y: '-100%', opacity: 0, ease: 'bounce' });
gsap.from('.display-4', {
  duration: 1,
  x: -50,
  opacity: 0,
  delay: 0.5,
  ease: 'back',
});

$('.page-scroll').on('click', function (e) {
  const target = $(this).attr('href');
  const elTarget = $(target);
  $('html, body').animate(
    {
      scrollTop: elTarget.offset().top - 20,
    },
    1000
  );

  e.preventDefault();
});

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
