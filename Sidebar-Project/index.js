const sidebarToggleEl = document.querySelector(".sidebar__toggle")
const closeBtnEl = document.querySelector(".btn--close")
const sidebarEl = document.querySelector(".sidebar")

sidebarToggleEl.addEventListener("click", function() {
    sidebarEl.classList.toggle("show_sidebar")
    if (sidebarEl.classList.contains("show_sidebar")) {
        sidebarToggleEl.style.position = "relative";

    }
})

closeBtnEl.addEventListener("click", function() {
    sidebarEl.classList.toggle("show_sidebar")
    sidebarToggleEl.style.position = "absolute";
})

