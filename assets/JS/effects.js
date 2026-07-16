const bottomNavbar = document.querySelector(".bottomnavbar");
const topNavbar = document.querySelector(".topnavbar");

function handleScroll() {
    if(window.scrollY > 100){
        bottomNavbar.classList.add("bottomnavbaranime");
        bottomNavbar.classList.add("animate-links");
        topNavbar.classList.add("topnavbaranime");
    }else{
        bottomNavbar.classList.remove("bottomnavbaranime");
        bottomNavbar.classList.remove("animate-links");
        topNavbar.classList.remove("topnavbaranime");
    }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
handleScroll();