const burgerIcon = document.getElementById("burger-icon");
const navbar = document.querySelector(".navbar");

burgerIcon.addEventListener("click", () => {
  navbar.classList.toggle("nav-active");
});
console.log("hh")