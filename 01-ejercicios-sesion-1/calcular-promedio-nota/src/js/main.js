let notaMatematicas = prompt("Escribe tu nota de matematicas")
let notaCiencias = prompt("Escribe tu nota de ciencias")
let notaSociales = prompt("Escribe tu nota de sociales")
let notaEspañol = prompt("Escribe tu nota de español")
let notaIngles = prompt("Escribe tu nota de ingles")

let notas = [notaMatematicas, notaCiencias, notaSociales, notaEspañol, notaIngles]


let totalNotas = 0

console.table({ "Matematicas": notaMatematicas, "Ciencias": notaCiencias, "Sociales": notaSociales, "Español": notaEspañol, "Ingles": notaIngles })


notas.forEach(nota => {
    totalNotas += nota++
})

let promedio = totalNotas / 5
console.log(`El promedio de las notas es: ${promedio}`)

if (promedio >= 3) {
    console.log("aprobado el curso")
} else {
    console.log("reprobado el curso")
}

