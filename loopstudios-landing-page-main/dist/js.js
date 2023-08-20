const openBtn = document.querySelector(".openMenu");
const closeBtn = document.querySelector(".closeMenu");
const showMenu = document.querySelector(".header-full-menu");

openBtn.addEventListener("click", () => {
    showMenu.classList.remove("hide")
})

closeBtn.addEventListener("click", () => {
    showMenu.classList.add("hide")
})