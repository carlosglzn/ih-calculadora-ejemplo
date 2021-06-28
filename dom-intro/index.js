// 1. VARIABLES
const nombre        = document.getElementById("capturar-nombre")
const btnSaludar    = document.getElementById("btn-saludar")
const areaSaludo    = document.getElementById("area-saludo")
const valorA        = document.getElementById("valor-a")
const valorB        = document.getElementById("valor-b")
const btnSumar      = document.getElementById("btn-sumar")
const areaSuma      = document.getElementById("area-suma")


// 2. FUNCIONES
const saludar = (name) => {

    const saludo = `Hola ${name}!!!`
    
    return areaSaludo.innerHTML = saludo
}
const sumar = (a, b) => {

    const resultado = a + b

    return areaSuma.innerHTML = resultado
}



// 3. EVENTOS
btnSaludar.addEventListener("click", () => {
    const nameValue = nombre.value
    return saludar(nameValue)
})
btnSumar.addEventListener("click", () => {

    const inputValorA   = parseInt(valorA.value)
    const inputValorB   = parseInt(valorB.value)

    return sumar(inputValorA, inputValorB)
})