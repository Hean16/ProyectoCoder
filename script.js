const navToggle = document.querySelector(".toggle-navheader");
const navMenu = document.querySelector(".list_header");
navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-header_visible");

    if(navMenu.classList.contains("nav-header_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menu");
    }else{
        navToggle.setAttribute("aria-label", "Abrir menu");
    }
})
