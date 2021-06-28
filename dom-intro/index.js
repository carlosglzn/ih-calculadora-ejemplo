console.log("Hola Mundo")


// 1. VARIABLES

const nombre = document.getElementById("capturar-nombre")
const btnSaludar = document.getElementById("btn-saludar")
const areaSaludo = document.getElementById("area-saludo")


// 2. FUNCIONES

const saludar = (name) => {

    const saludo = `Hola ${name} !!!`

    return areaSaludo.innerHTML = saludo

}


// 3. EVENTOS

btnSaludar.addEventListener("click", () => {
    
    const nameValue = nombre.value

    console.log(nameValue)

    saludar(nameValue)

})