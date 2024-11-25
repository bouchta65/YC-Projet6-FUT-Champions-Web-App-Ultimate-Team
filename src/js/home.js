const burgerIcon = document.getElementById("burger-icon");
const navbar = document.querySelector(".navbar");
const closeNavbar = document.getElementById("close-navbar");

burgerIcon.addEventListener("click", () => {
  navbar.classList.add("nav-active");
});

closeNavbar.addEventListener("click", () => {
  navbar.classList.remove("nav-active");
});
