//account test
const account1 = {
  username: 'john',
  password: 123456,
};

//elements
const loginButton = document.querySelector('.btn-primary');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

loginButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    username.value === account1.username &&
    +password.value === account1.password
  ) {
    console.log('login!!');
    window.location.href = './home.html';
  } else {
    alert(`username: john 
      senha: 123456
    `);
  }
});
