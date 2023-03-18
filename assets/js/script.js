const openMenuButton = document.querySelector("#open-menu");
const closeMenuButton = document.querySelector("#close-menu");
const menu = document.querySelector(".mobile__menu");
const fade = document.querySelector(".fade");

const toggleMenu = () => {
    menu.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[openMenuButton, closeMenuButton, fade].forEach((elementos) => {
    elementos.addEventListener("click", () => toggleMenu())
})

const featureButton = document.querySelector("#feature");
const listaFeature = document.querySelector("#lista-feature");
const companyButton = document.querySelector("#company");
const listaCompany = document.querySelector("#lista-company");


function buttonSubmenuFeature() {
    if (listaFeature.classList.contains("off")) {
        listaFeature.classList.remove("off");
    }
    else {
        listaFeature.classList.add("off");
    }
}

featureButton.addEventListener("click", (evento) => {
    buttonSubmenuFeature();
})

function buttonSubmenuCompany() {
    if (listaCompany.classList.contains("off")) {
        listaCompany.classList.remove("off");
    }
    else {
        listaCompany.classList.add("off");
    }
}

companyButton.addEventListener("click", (evento) => {
    buttonSubmenuCompany();
})