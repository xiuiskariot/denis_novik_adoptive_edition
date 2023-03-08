let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.onclick = function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}
