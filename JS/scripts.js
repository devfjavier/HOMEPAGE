"use strict";
const botonMenu = document.getElementById("boton-interruptor-menu");
const menuPrincipal = document.getElementById("menu-principal");
botonMenu.addEventListener("click", () => {
    menuPrincipal.classList.toggle("esta-activo")
    botonMenu.classList.toggle("esta-activo")
})