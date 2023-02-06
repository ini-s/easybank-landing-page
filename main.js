const menu = document.querySelector(".menu")
const sideNav = document.querySelector(".side-nav")
const closeNav = document.querySelector(".close")
const overlay = document.querySelector(".overlay")

menu.addEventListener("click", () => {
    sideNav.classList.add("active")
    closeNav.classList.add("active")
    menu.classList.add("inactive")
    overlay.classList.add("active")
})

closeNav.addEventListener("click", ()=>{
    sideNav.classList.remove("active")
    closeNav.classList.remove("active")
    menu.classList.remove("inactive")
    overlay.classList.remove("active")
})