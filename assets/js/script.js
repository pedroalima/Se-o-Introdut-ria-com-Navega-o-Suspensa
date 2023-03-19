//      Mobile   

//      Menu mobile

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

//      Submenu mobile

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


//    Submenu  Desktop

const featureButtonDesktop = document.querySelector("#feature-desktop");
const listaFeatureDesktop = document.querySelector("#lista-feature-desktop");
const companyButtonDesktop = document.querySelector("#company-desktop");
const listaCompanyDesktop = document.querySelector("#lista-company-desktop");


function buttonSubmenuFeatureDesktop() {
    if (listaFeatureDesktop.classList.contains("off")) {
        listaFeatureDesktop.classList.remove("off");
    }
    else {
        listaFeatureDesktop.classList.add("off");
    }
}

featureButtonDesktop.addEventListener("click", (evento) => {
    buttonSubmenuFeatureDesktop();
})

function buttonSubmenuCompanyDesktop() {
    if (listaCompanyDesktop.classList.contains("off")) {
        listaCompanyDesktop.classList.remove("off");
    }
    else {
        listaCompanyDesktop.classList.add("off");
    }
}

companyButtonDesktop.addEventListener("click", (evento) => {
    buttonSubmenuCompanyDesktop();
})