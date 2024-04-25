// MAP -> El map permite retornar elemento a diferencia del for each

console.groupCollapsed("MAP")

const array1 = ["lucas", "pablo", "maria", "pedro"]

let array2 = []

// array2 = array1.map(nombre => {
//     return nombre.toUpperCase()
// })

// array2 = array1.map(nombre => nombre.toUpperCase())

// array2 = array1.map(function(nombre) { return nombre.toUpperCase()})


// array2 = array1.map(function(nombre) {
//     return nombre.toUpperCase()
// })


console.log(array1)
console.log(array2)

console.groupEnd()

console.groupCollapsed("forEach")

array1.forEach(nombre => {
    array2.push(nombre.toUpperCase())
})

array1.forEach(nombre => array2.push(nombre.toUpperCase()))

console.log(array2)

console.groupEnd()

// Reverser y toReversed

console.groupCollapsed("Reverser y toReversed")

const alphabet = ["A", "B", "C", "D", "E"]

// alphabet.reverse()
console.log(alphabet)

const alphabetInvertido = alphabet.toReversed()

console.log(alphabet)
console.log(alphabetInvertido)

let alfabetoMilitar = [
    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
    "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima",
    "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo",
    "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray",
    "Yankee", "Zulu"
];

let alfabetoMilitarInvertido = alfabetoMilitar.toReversed()
console.log(alfabetoMilitarInvertido)

alfabetoMilitar.reverse()
console.log(alfabetoMilitar)


console.groupEnd()


// sort
console.groupCollapsed("Sort")
let nombreCoders = [
    "santiago",
    "reykon",
    'narciris',
    "pablo",
    "carolina",
    "marlon",
    "brandon",
    "edson",
    "esteban",
    "carlos",
    "shirly",
    "ana"
]

let codersOrdenados = nombreCoders.toSorted().toReversed()
console.log(nombreCoders)
console.log(codersOrdenados)

let listaDeMercado = [
    "arroz",
    "pollo",
    "papa",
    "huevos",
    "quesito",
    "arepas",
    "lechuga",
    "leche",
    "frijoles",
    "carne"
]

console.log(listaDeMercado)

listaDeMercadoOrganizada = listaDeMercado.toSorted()
console.log(listaDeMercadoOrganizada)

listaDeMercadoOrganizadaDescendente = listaDeMercado.toSorted().toReversed()
console.log(listaDeMercadoOrganizadaDescendente)

console.groupEnd()

console.groupCollapsed("Filter")

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let numerosPares = numeros.filter(function (numero) {
    return numero % 2 === 0
})

let numerosImpares = numeros.filter(numero => numero % 2 !== 0)

console.log(numerosPares)
console.log(numerosImpares)

let listaVocal = nombreCoders.filter(coder => {
    if (coder.startsWith("a") || coder.startsWith("e") || coder.startsWith("i") || coder.startsWith("o") || coder.startsWith("u")) {
        return coder
    } 
})
console.log(listaVocal)

console.groupEnd()

// every y some
console.groupCollapsed("every")

let numerosNaturales = [23, 55, 44, 3, 5, 3, 2]
const respuesta = numerosNaturales.every(numero => numero > 0) //si todos cumplen con la condicion
const respuesta2 = numerosNaturales.some(numero => numero > 0) //si por lo menos 1 cumple con la condicion
console.log(respuesta)
console.log(respuesta)
console.groupEnd()








