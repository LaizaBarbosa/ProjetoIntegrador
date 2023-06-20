const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const box_titulo = document.querySelector(".box_titulo");



// adicionando função ao hamburguer
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
    box_titulo.classList.toggle("active");
    
})



if ($(".hamburguer").hasClass("hamburguer active")) {
    $(".box_titulo").css('padding-top', '250px');
    
}
