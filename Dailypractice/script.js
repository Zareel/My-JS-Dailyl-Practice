let body = document.querySelector("body");
let sun = document.querySelector(".bi-emoji-sunglasses-fill");

sun.addEventListener("click", () => {
  sun.classList.toggle("bi-moon-stars-fill");

  if (sun.classList.toggle("bi-emoji-sunglasses-fill")) {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  } else {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
  }
});
