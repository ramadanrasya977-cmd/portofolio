function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const tombol = document.querySelector(".dark-btn");

  if (document.body.classList.contains("dark-mode")) {
    tombol.innerHTML = "☀️ Light Mode";
  } else {
    tombol.innerHTML = "🌙 Dark Mode";
  }
}
