let menuItem = document.querySelectorAll(".menu-item");
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".menu-item.active").classList.remove("active");
    item.classList.add("active");
  });
});

let btn = document.querySelectorAll(".btn-container");
btn.forEach((item) => {
  item.addEventListener("click", () => {
    item.querySelector(".btn").classList.toggle("active");
  });
});
