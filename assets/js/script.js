alert ("nyambung");

window.toggleDarkMode = function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "on");
  } else {
    localStorage.setItem("darkMode", "off");
  }
};

window.onload = function () {
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
  }
};
