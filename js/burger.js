const navMobileToggle = document.getElementById("nav-mobile-toggle");
const navMobileMenu = document.getElementById("nav-mobile-menu");
const navMobileClose = document.getElementById("nav-mobile-close");
const wrapper = document.getElementById("wrapper");


navMobileToggle.addEventListener("click", function () {
    navMobileMenu.classList.toggle("show");
    wrapper.classList.toggle("show");
});

navMobileClose.addEventListener("click", function () {
    navMobileMenu.classList.remove("show");
    wrapper.classList.remove("show");
});

const navListItems = document.querySelectorAll(".main-block__list.mobile a");
navListItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navMobileMenu.classList.remove("show");
        wrapper.classList.remove("show");
    });
});

 wrapper.addEventListener("click", function (event) {
    wrapper.classList.remove("show");
    navMobileMenu.classList.remove("show");
});

