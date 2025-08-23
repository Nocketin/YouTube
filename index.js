const toggleTheme = () => {
  const html = document.documentElement;
  let newTheme = "light";

  if (html.getAttribute("data-theme") === "dark") {
    newTheme = "light";
  } else {
    newTheme = "dark";
  }

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
});

document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".videos_list");
  const leftBtn = document.querySelector(".left_arrow");
  const rightBtn = document.querySelector(".right_arrow");

  const scrollAmount = 500; 

  leftBtn.addEventListener("click", () => {
    list.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    list.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
