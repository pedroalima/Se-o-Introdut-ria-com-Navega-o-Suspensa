const openMenuButton = document.querySelector("#open-menu");
const closeMenuButton = document.querySelector("#close-menu");
const menu = document.querySelector(".mobile__menu");
const fade = document.querySelector(".fade");

const toggleMenu = () => {
    menu.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[openMenuButton, closeMenuButton, fade].forEach((menus) => {
    menus.addEventListener("click", () => toggleMenu())
})

/*
const featureButton = document.querySelector("#feature");
const listaFeature = document.querySelector("#lista-feature");
const companyButton = document.querySelector("#company");
const listaCompany = document.querySelector("#lista-company");

const toggleButtons = () => {
    listaFeature.classList.toggle("off");
    listaCompany.classList.toggle("off");
}

[featureButton, companyButton].forEach((botoes) () => {
    botoes.addEventListener("click", () => console.log(teste))
})
*/