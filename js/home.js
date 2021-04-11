const links = document.querySelector('.navigation-links');
const link = document.querySelectorAll('.link');

links.addEventListener('click', (e) => {
  e.preventDefault();
  const clicked = e.target.closest('.link');
  if (!clicked) return;

  link.forEach((el) => el.classList.remove('active-link'));
  clicked.classList.add('active-link');
});
