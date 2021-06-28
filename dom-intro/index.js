// 1. VARIABLES
const nombre        = document.getElementById("capturar-nombre")
const btnSaludar    = document.getElementById("btn-saludar")
const areaSaludo    = document.getElementById("area-saludo")
const valorA        = document.getElementById("valor-a")
const valorB        = document.getElementById("valor-b")
const valorAResta   = document.getElementById("valor-a-resta")
const valorBResta   = document.getElementById("valor-b-resta")
const btnSumar      = document.getElementById("btn-sumar")
const btnRestar     = document.getElementById("btn-restar")
const areaSuma      = document.getElementById("area-suma")
const areaResta     = document.getElementById("area-resta")


// 2. FUNCIONES
const saludar = (name) => {

    const saludo = `Hola ${name}!!!`
    
    return areaSaludo.innerHTML = saludo
}

/**
 * 
 * DENTRO DE LA PROGRAMACIÓN FUNCIONAL, EXISTE UN CONCEPTO LLAMADO 
 * PUREZA.
 * LA PUREZA DE LAS FUNCIONES TE DICE QUE DEBEN SER LO MÁS INDEPENDIENTES
 * POSIBLES, SUS ÚNICOS ACCESOS ESTÁN DENTRO DE LA MISMA FUNCIÓN
 * Y A TRAVÉS DE SUS PARÁMETROS. NO MÁS.
 */


const sumar = (a, b) => {

    return a + b

}

const restar = (a, b) => {

    return a - b

}



// 3. EVENTOS
btnSaludar.addEventListener("click", () => {

    const nameValue = nombre.value
    
    saludar(nameValue)

})

btnSumar.addEventListener("click", () => {

    const inputValorA   = parseInt(valorA.value)
    const inputValorB   = parseInt(valorB.value)

    const resultado = sumar(inputValorA, inputValorB)

    areaSuma.innerHTML = resultado
})

btnRestar.addEventListener("click", () => {

    const inputValorAResta = parseInt(valorAResta.value)
    const inputValorBResta = parseInt(valorBResta.value)

    const resultadoResta = restar(inputValorAResta, inputValorBResta)

    areaResta.innerHTML = resultadoResta
})