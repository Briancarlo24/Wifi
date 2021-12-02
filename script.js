// This is not part of the challenge. It is just for fun and for style points because I will upload this project to Github

const icon = document.querySelector(".icon-container");
const advanceSettings = document.querySelector(".bottom-container");
const section = document.querySelector(".section");

icon.addEventListener("click", function () {
  icon.classList.toggle("rotate-180");
  advanceSettings.classList.toggle("hidden");
  section.classList.toggle("advance-settings");
});
