console.log('start server..');
var btnMenu = document.querySelector('.btn-menu');
var openIcon = btnMenu.querySelector('.icon-menu');
var closeIcon = btnMenu.querySelector('.icon-close');

var navbar = document.getElementById('main-navbar');
console.log(closeIcon);
btnMenu.addEventListener('click', function () {
  navbar.classList.toggle('collapsed-lg');
  openIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});
