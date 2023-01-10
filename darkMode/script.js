let sun = document.querySelector("#sun");
let body = document.querySelector("body");

sun.addEventListener("click", () => {
  sun.classList.toggle("bi-moon-fill");

  if (sun.classList.toggle("sun")) {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  } else {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
  }
});
