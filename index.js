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
