import { a } from './modules/testing.js';

console.log(a);

const loginButton = document.querySelector('.btn-primary');

loginButton.addEventListener('click', function (e) {
  e.preventDefault();

  window.location.href = 'home.html';
});
