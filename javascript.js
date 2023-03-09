const hamb = document.querySelector(".hamb__field");
const popup = document.querySelector(".popup");

const menu = document.querySelector(".menu").cloneNode(1);


hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
  e.preventDefault();
  hamb.classList.toggle("active");
  popup.classList.toggle("open");
  renderPopup();
  body.classList.toggle("noscroll");
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

