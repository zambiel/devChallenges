const menuHamburguesa = document.querySelector("#menuHamburguesa");
const menuDesplegado = document.querySelector("#menuDesplegado");
const close = document.querySelector("#close");
const moon = document.querySelector(".moon");
const moon2 = document.querySelector(".moon2");
const darkMode = document.querySelector("#darkMode");
const darkMode2 = document.querySelector("#darkMode2");

menuHamburguesa.addEventListener("click", () => {
    menuDesplegado.classList.add("mostrarNav");
    menuDesplegado.classList.remove("ocultarNav");
    moon = document.body.style.display = "block";
    darkMode.classList.toggle("dark-mode");
    document.body.classList.toggle("todo");

})

close.addEventListener("click", () => {
    menuDesplegado.classList.remove("mostrarNav");
    menuDesplegado.classList.add("ocultarNav");
})
moon.addEventListener("click", () => {
    moon.classList.toggle("white");
    darkMode.classList.toggle("dark-mode");

    document.body.classList.toggle("todo");
})

moon2.addEventListener("click", () => {
    moon2.classList.toggle("white");
    darkMode2.classList.toggle("dark-mode");

    document.body.classList.toggle("todo");
})