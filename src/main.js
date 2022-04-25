const hamburgerIcon = document.getElementById("hamburger-icon");
const dropMenu = document.querySelector(".dropMenu");

hamburgerIcon.addEventListener("click", function () {
    dropMenu.classList.toggle("hidden");
});
